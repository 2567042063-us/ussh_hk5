import { redirect } from "next/navigation";

export const metadata = {
  title: "GTHN q5 - Bài 02",
};

export default function Page() {
  redirect("/gthnq5/lesson02/vocab");
}
