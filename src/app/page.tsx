"use client";

import { redirect } from "next/navigation";
import { useSession } from "next-auth/react";
import { Loading } from "@/components/Loading";

export default function App() {
  const { status } = useSession();

  if (status === "authenticated") {
    redirect("/dashboard");
  }

  if (status === "unauthenticated") {
    redirect("/signin");
  }

  return <Loading />;
}
