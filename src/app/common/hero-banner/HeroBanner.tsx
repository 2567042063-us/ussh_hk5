"use client";

import { CldImage } from "next-cloudinary";

export default function HeroBanner() {
  return (
    <CldImage
      fill
      alt="langlang"
      src="avatar_2025_aywrf7"
      priority
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      style={{
        objectFit: "cover",
        objectPosition: "center",
      }}
    />
  );
}
