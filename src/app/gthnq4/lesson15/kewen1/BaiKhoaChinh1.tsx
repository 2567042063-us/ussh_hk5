"use client";

import { dialogue1 } from "../Kewen";
import DialogueReader from "../KewenDialogueReader";

const AUDIO_SRC =
  "https://bh9cualrgy9xkq87.public.blob.vercel-storage.com/gthnq4/15-kewen1.mp3";

export default function Page() {
  return <DialogueReader dialogue={dialogue1} audioSrc={AUDIO_SRC} />;
}
