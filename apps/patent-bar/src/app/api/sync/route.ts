import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { fetchUserData, dbToStoreState, saveUserData, appendAnswers } from "@/lib/db/queries";

// GET — fetch user data from DB
export async function GET() {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const data = await fetchUserData(session.user.id);
  const hasData = data.stats !== null;

  return NextResponse.json({
    hasData,
    state: hasData ? dbToStoreState(data) : null,
    answerCount: data.answers.length,
  });
}

// POST — save user data to DB (also handles sendBeacon)
export async function POST(request: Request) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await request.json();
    const { stats, zoneProgress, absorbProgress, reviewCards, newAnswers } = body;

    if (stats) {
      await saveUserData(session.user.id, {
        stats,
        zoneProgress: zoneProgress ?? [],
        absorbProgress: absorbProgress ?? {},
        reviewCards: reviewCards ?? [],
      });
    }

    if (newAnswers?.length) {
      await appendAnswers(session.user.id, newAnswers);
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Sync failed" }, { status: 500 });
  }
}
