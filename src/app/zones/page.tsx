"use client";

// The zones page just redirects to home since the home page IS the zone map
import { redirect } from "next/navigation";

export default function ZonesPage() {
  redirect("/");
}
