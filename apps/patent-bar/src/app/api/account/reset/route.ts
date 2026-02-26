import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { deleteUserData } from "@/lib/db/queries";

export async function POST() {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    await deleteUserData(session.user.id);
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Reset failed" }, { status: 500 });
  }
}
