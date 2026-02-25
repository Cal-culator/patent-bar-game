import { eq, desc, sql } from "drizzle-orm";
import { db } from "./index";
import {
  userStats,
  userZoneProgress,
  userAbsorbProgress,
  answerLog,
  reviewCards,
} from "./schema";
import type {
  UserStats,
  ZoneProgress,
  AnswerRecord,
  ReviewCard,
} from "@study-game/engine";

// ---- Fetch all user data ----

export async function fetchUserData(userId: string) {
  const [stats, zones, absorb, answers, reviews] = await Promise.all([
    db.select().from(userStats).where(eq(userStats.userId, userId)).then((r) => r[0] ?? null),
    db.select().from(userZoneProgress).where(eq(userZoneProgress.userId, userId)),
    db.select().from(userAbsorbProgress).where(eq(userAbsorbProgress.userId, userId)),
    db
      .select()
      .from(answerLog)
      .where(eq(answerLog.userId, userId))
      .orderBy(desc(answerLog.createdAt))
      .limit(500),
    db.select().from(reviewCards).where(eq(reviewCards.userId, userId)),
  ]);

  return { stats, zones, absorb, answers, reviews };
}

// ---- Convert DB rows → Zustand state shape ----

export function dbToStoreState(data: Awaited<ReturnType<typeof fetchUserData>>) {
  const stats: Partial<UserStats> | undefined = data.stats
    ? {
        totalXp: data.stats.totalXp,
        coins: data.stats.coins,
        currentStreak: data.stats.currentStreak,
        longestStreak: data.stats.longestStreak,
        levelTitle: data.stats.levelTitle,
        lastActiveDate: data.stats.lastActiveDate,
      }
    : undefined;

  // Group zone progress by zone slug
  const zoneMap = new Map<string, ZoneProgress>();
  for (const row of data.zones) {
    if (!zoneMap.has(row.zoneSlug)) {
      zoneMap.set(row.zoneSlug, { zoneSlug: row.zoneSlug, phases: [] });
    }
    zoneMap.get(row.zoneSlug)!.phases.push({
      phase: row.phase as ZoneProgress["phases"][number]["phase"],
      status: row.status as ZoneProgress["phases"][number]["status"],
      stars: row.stars,
      bestScore: row.bestScore,
    });
  }
  const zoneProgress = zoneMap.size > 0 ? Array.from(zoneMap.values()) : undefined;

  // Absorb progress
  const absorbProgress: Record<string, number> = {};
  for (const row of data.absorb) {
    absorbProgress[row.zoneSlug] = row.layerIndex;
  }

  // Answer history
  const answerHistory: AnswerRecord[] = data.answers.map((row) => ({
    questionId: row.questionId,
    phase: row.phase as AnswerRecord["phase"],
    selectedIndex: row.selectedIndex,
    correct: row.correct,
    timeMs: row.timeMs,
    lifelineUsed: row.lifelineUsed,
    trapTagsCorrect: row.trapTagsCorrect ?? undefined,
    timestamp: row.createdAt.getTime(),
  }));

  // Review cards
  const reviewCardsList: ReviewCard[] = data.reviews.map((row) => ({
    conceptId: row.conceptId,
    easeFactor: Number(row.easeFactor),
    intervalDays: row.intervalDays,
    nextReview: row.nextReview,
    lastReviewed: row.lastReviewed ?? "",
    weakPhase: (row.weakPhase as ReviewCard["weakPhase"]) ?? null,
  }));

  return {
    stats,
    zoneProgress,
    absorbProgress: Object.keys(absorbProgress).length > 0 ? absorbProgress : undefined,
    answerHistory: answerHistory.length > 0 ? answerHistory : undefined,
    reviewCards: reviewCardsList.length > 0 ? reviewCardsList : undefined,
  };
}

// ---- Save Zustand state → DB ----

export async function saveUserData(
  userId: string,
  state: {
    stats: UserStats;
    zoneProgress: ZoneProgress[];
    absorbProgress: Record<string, number>;
    reviewCards: ReviewCard[];
  }
) {
  const promises: Promise<unknown>[] = [];

  // 1. Upsert user_stats
  promises.push(
    db
      .insert(userStats)
      .values({
        userId,
        totalXp: state.stats.totalXp,
        coins: state.stats.coins,
        currentStreak: state.stats.currentStreak,
        longestStreak: state.stats.longestStreak,
        levelTitle: state.stats.levelTitle,
        lastActiveDate: state.stats.lastActiveDate,
        updatedAt: new Date(),
      })
      .onConflictDoUpdate({
        target: userStats.userId,
        set: {
          totalXp: sql`excluded.total_xp`,
          coins: sql`excluded.coins`,
          currentStreak: sql`excluded.current_streak`,
          longestStreak: sql`excluded.longest_streak`,
          levelTitle: sql`excluded.level_title`,
          lastActiveDate: sql`excluded.last_active_date`,
          updatedAt: new Date(),
        },
      })
  );

  // 2. Upsert zone progress
  for (const zp of state.zoneProgress) {
    for (const pp of zp.phases) {
      promises.push(
        db
          .insert(userZoneProgress)
          .values({
            userId,
            zoneSlug: zp.zoneSlug,
            phase: pp.phase,
            status: pp.status,
            stars: pp.stars,
            bestScore: pp.bestScore,
            completedAt: pp.status === "completed" ? new Date() : null,
          })
          .onConflictDoUpdate({
            target: [userZoneProgress.userId, userZoneProgress.zoneSlug, userZoneProgress.phase],
            set: {
              status: sql`excluded.status`,
              stars: sql`excluded.stars`,
              bestScore: sql`excluded.best_score`,
              completedAt: sql`excluded.completed_at`,
            },
          })
      );
    }
  }

  // 3. Upsert absorb progress
  for (const [slug, idx] of Object.entries(state.absorbProgress)) {
    promises.push(
      db
        .insert(userAbsorbProgress)
        .values({ userId, zoneSlug: slug, layerIndex: idx })
        .onConflictDoUpdate({
          target: [userAbsorbProgress.userId, userAbsorbProgress.zoneSlug],
          set: { layerIndex: sql`excluded.layer_index` },
        })
    );
  }

  // 4. Upsert review cards
  for (const rc of state.reviewCards) {
    promises.push(
      db
        .insert(reviewCards)
        .values({
          userId,
          conceptId: rc.conceptId,
          easeFactor: String(rc.easeFactor),
          intervalDays: rc.intervalDays,
          nextReview: rc.nextReview,
          lastReviewed: rc.lastReviewed || null,
          weakPhase: rc.weakPhase,
        })
        .onConflictDoUpdate({
          target: [reviewCards.userId, reviewCards.conceptId],
          set: {
            easeFactor: sql`excluded.ease_factor`,
            intervalDays: sql`excluded.interval_days`,
            nextReview: sql`excluded.next_review`,
            lastReviewed: sql`excluded.last_reviewed`,
            weakPhase: sql`excluded.weak_phase`,
          },
        })
    );
  }

  await Promise.all(promises);
}

// ---- Append new answers ----

export async function appendAnswers(userId: string, answers: AnswerRecord[]) {
  if (answers.length === 0) return;
  await db.insert(answerLog).values(
    answers.map((a) => ({
      userId,
      questionId: a.questionId,
      phase: a.phase,
      selectedIndex: a.selectedIndex,
      correct: a.correct,
      timeMs: a.timeMs,
      lifelineUsed: a.lifelineUsed,
      trapTagsCorrect: a.trapTagsCorrect ?? null,
    }))
  );
}

// ---- Delete all user data (GDPR) ----

export async function deleteUserData(userId: string) {
  await Promise.all([
    db.delete(userStats).where(eq(userStats.userId, userId)),
    db.delete(userZoneProgress).where(eq(userZoneProgress.userId, userId)),
    db.delete(userAbsorbProgress).where(eq(userAbsorbProgress.userId, userId)),
    db.delete(answerLog).where(eq(answerLog.userId, userId)),
    db.delete(reviewCards).where(eq(reviewCards.userId, userId)),
  ]);
}
