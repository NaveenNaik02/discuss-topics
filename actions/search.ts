"use server";

import { redirect } from "next/navigation";

export async function search(formaData: FormData) {
  const term = formaData.get("term");

  if (typeof term !== "string" || !term) {
    redirect("/");
  }
  redirect(`/search?term=${term}`);
}
