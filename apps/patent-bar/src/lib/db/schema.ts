import {
  pgTable,
  uuid,
  text,
  integer,
  boolean,
  timestamp,
  date,
  numeric,
  primaryKey,
  uniqueIndex,
} from "drizzle-orm/pg-core";

// ============================================================
// Auth.js tables (required by @auth/drizzle-adapter)
// ============================================================

export const users = pgTable("users", {
  id: uuid("id").defaultRandom().primaryKey(),
  name: text("name"),
  email: text("email").unique().notNull(),
  emailVerified: timestamp("email_verified", { mode: "date" }),
  image: text("image"),
  hashedPassword: text("hashed_password"),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
});

export const accounts = pgTable(
  "accounts",
  {
    userId: uuid("user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    type: text("type").notNull(),
    provider: text("provider").notNull(),
    providerAccountId: text("provider_account_id").notNull(),
    refresh_token: text("refresh_token"),
    access_token: text("access_token"),
    expires_at: integer("expires_at"),
    token_type: text("token_type"),
    scope: text("scope"),
    id_token: text("id_token"),
    session_state: text("session_state"),
  },
  (table) => [
    primaryKey({ columns: [table.provider, table.providerAccountId] }),
  ]
);

export const sessions = pgTable("sessions", {
  sessionToken: text("session_token").primaryKey(),
  userId: uuid("user_id")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  expires: timestamp("expires", { mode: "date" }).notNull(),
});

export const verificationTokens = pgTable(
  "verification_tokens",
  {
    identifier: text("identifier").notNull(),
    token: text("token").notNull(),
    expires: timestamp("expires", { mode: "date" }).notNull(),
  },
  (table) => [
    primaryKey({ columns: [table.identifier, table.token] }),
  ]
);

// ============================================================
// Game tables
// ============================================================

export const userStats = pgTable("user_stats", {
  userId: uuid("user_id")
    .primaryKey()
    .references(() => users.id, { onDelete: "cascade" }),
  totalXp: integer("total_xp").notNull().default(0),
  coins: integer("coins").notNull().default(50),
  currentStreak: integer("current_streak").notNull().default(0),
  longestStreak: integer("longest_streak").notNull().default(0),
  levelTitle: text("level_title").notNull().default("Examiner Intern"),
  lastActiveDate: date("last_active_date").notNull().defaultNow(),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow().notNull(),
});

export const userZoneProgress = pgTable(
  "user_zone_progress",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    userId: uuid("user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    zoneSlug: text("zone_slug").notNull(),
    phase: text("phase").notNull(),
    status: text("status").notNull().default("locked"),
    stars: integer("stars").notNull().default(0),
    bestScore: integer("best_score").notNull().default(0),
    completedAt: timestamp("completed_at", { withTimezone: true }),
  },
  (table) => [
    uniqueIndex("uq_user_zone_phase").on(table.userId, table.zoneSlug, table.phase),
  ]
);

export const userAbsorbProgress = pgTable(
  "user_absorb_progress",
  {
    userId: uuid("user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    zoneSlug: text("zone_slug").notNull(),
    layerIndex: integer("layer_index").notNull().default(0),
  },
  (table) => [
    primaryKey({ columns: [table.userId, table.zoneSlug] }),
  ]
);

export const answerLog = pgTable("answer_log", {
  id: uuid("id").defaultRandom().primaryKey(),
  userId: uuid("user_id")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  questionId: text("question_id").notNull(),
  phase: text("phase").notNull(),
  selectedIndex: integer("selected_index").notNull(),
  correct: boolean("correct").notNull(),
  timeMs: integer("time_ms").notNull(),
  lifelineUsed: boolean("lifeline_used").notNull().default(false),
  trapTagsCorrect: integer("trap_tags_correct"),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
});

export const reviewCards = pgTable(
  "review_cards",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    userId: uuid("user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    conceptId: text("concept_id").notNull(),
    easeFactor: numeric("ease_factor", { precision: 4, scale: 2 }).notNull().default("2.50"),
    intervalDays: integer("interval_days").notNull().default(1),
    nextReview: date("next_review").notNull().defaultNow(),
    lastReviewed: date("last_reviewed"),
    weakPhase: text("weak_phase"),
  },
  (table) => [
    uniqueIndex("uq_user_concept").on(table.userId, table.conceptId),
  ]
);
