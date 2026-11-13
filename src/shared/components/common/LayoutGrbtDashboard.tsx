// import { CldImage } from "next-cloudinary";
import Image from "next/image";

export default function LayoutGrbtDashboard() {
  return (
    <div className="flex flex-col">
      <div className="h-100 relative mx-auto flex w-60 justify-center overflow-hidden">
        <Image
          fill
          alt="langlang"
          src="/images/letsgo.jpg"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
      </div>
      <p className="text-center text-xl text-slate-500">let&apos;s gooo</p>
    </div>
  );
}
