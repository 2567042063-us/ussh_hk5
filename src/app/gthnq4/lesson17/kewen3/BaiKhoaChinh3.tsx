"use client";

import { dialogue2 } from "../Kewen17";
import DialogueReader from "../KewenDialogueReader";

// TODO: đổi sang link audio thật của 15-2
const AUDIO_SRC =
  "https://bh9cualrgy9xkq87.public.blob.vercel-storage.com/gthnq4/17-kewen3.mp3";

export default function Page() {
  return <DialogueReader dialogue={dialogue2} audioSrc={AUDIO_SRC} />;
}
