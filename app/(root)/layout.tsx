import { db } from "@/lib/db";
import { auth, redirectToSignIn } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import React from "react";

const SetupLayout = async ({ children }: { children: React.ReactNode }) => {
  const { userId } = auth();

  if (!userId) return redirectToSignIn();

  const store = await db.store.findFirst({
    where: {
      userId,
    },
  });

  if (store) redirect(`${store.id}`);

  return <div>{children}</div>;
};

export default SetupLayout;
