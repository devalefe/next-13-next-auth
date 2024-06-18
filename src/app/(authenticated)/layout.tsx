"use client";

import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function Layout({ children }: { children: React.ReactNode }) {
  const { status } = useSession();

  if (status === "unauthenticated") {
    return redirect("/signin");
  }

  if (status === "loading") {
    return (
      <div className="flex flex-1 items-center justify-center">
        <span>Loading...</span>
      </div>
    );
  }

  return (
    <div className="flex flex-1 flex-col">
      <div className="flex h-16 bg-blue-400 p-3">Header</div>
      {children}
    </div>
  );
}
