"use client";

import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function App() {
  const { status } = useSession();

  if (status === "authenticated") {
    redirect("/dashboard");
  }

  if (status === "unauthenticated") {
    redirect("/signin");
  }

  return (
    <div className="flex flex-1 items-center justify-center">
      <span>Loading...</span>
    </div>
  );
}
