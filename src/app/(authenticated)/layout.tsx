"use client";

import { useSession, signOut } from "next-auth/react";
import { redirect } from "next/navigation";
import { Loading } from "@/components/Loading";
import { Header } from "@/components/Header";

export default function Layout({ children }: { children: React.ReactNode }) {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <Loading />;
  }

  if (status === "unauthenticated" || !session || !session.user) {
    return redirect("/signin");
  }

  const { image, name, email } = session.user;

  return (
    <div className="flex flex-1 flex-col">
      <Header
        avatarUrl={image}
        userFullName={name}
        userEmail={email}
        handleLogout={signOut}
      />
      {children}
    </div>
  );
}
