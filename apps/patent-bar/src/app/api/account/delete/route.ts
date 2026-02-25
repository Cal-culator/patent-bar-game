import { NextResponse } from "next/server";
import { eq } from "drizzle-orm";
import { auth } from "@/auth";
import { db } from "@/lib/db";
import { users } from "@/lib/db/schema";
import { deleteUserData } from "@/lib/db/queries";

export async function DELETE() {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    // Delete game data
    await deleteUserData(session.user.id);
    // Delete user account
    await db.delete(users).where(eq(users.id, session.user.id));

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Deletion failed" }, { status: 500 });
  }
}
