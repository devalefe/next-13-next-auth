"use client";

import Image from "next/image";
import { useSession, signOut } from "next-auth/react";
import { redirect } from "next/navigation";

export default function Layout({ children }: { children: React.ReactNode }) {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return (
      <div className="flex flex-1 items-center justify-center">
        <span>Loading...</span>
      </div>
    );
  }

  if (status === "unauthenticated" || !session || !session.user) {
    return redirect("/signin");
  }

  return (
    <div className="flex flex-1 flex-col">
      <div className="z-50 flex h-16 items-center justify-between gap-3 bg-gray-50 px-3 py-2 shadow-md">
        <div className="flex items-center gap-3">
          <Image
            src={session.user.image}
            alt="User Avatar"
            height={48}
            width={48}
            className="rounded-full"
          />

          <div className="flex flex-col gap-1">
            <span className="text-sm font-bold">{session.user.name}</span>
            <span className="text-xs text-gray-600">{session.user.email}</span>
          </div>
        </div>

        <button
          onClick={() => signOut()}
          className="rounded bg-black/90 px-3 py-2 text-sm text-gray-300 hover:bg-black hover:text-gray-50"
        >
          Sair
        </button>
      </div>
      {children}
    </div>
  );
}
