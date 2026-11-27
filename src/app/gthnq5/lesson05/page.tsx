import { redirect } from "next/navigation";

export const metadata = {
  title: "GTHN q5 - Bài 05",
};

export default function Page() {
  redirect("/gthnq5/lesson05/vocab");
}
