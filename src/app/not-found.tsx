import Image from "next/image";
import Link from "next/link";

export default async function NotFound() {
  return (
    <main className="min-h-screen place-items-center px-6 py-24 dark:bg-slate-800 sm:py-32 lg:px-8">
      <div className="relative mx-auto flex h-80 w-60 justify-center overflow-hidden">
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
      <div className="text-center">
        <p className="text-base font-semibold text-rose-600">404</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-stone-600 dark:text-slate-300 sm:text-5xl">
          Page not found
        </h1>
        <p className="mt-6 text-base leading-7 text-slate-600 dark:text-slate-200">
          Sorry, we couldn&apos;t find the page you&apos;re looking for.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            href="/"
            className="text-sm font-semibold text-sky-600 hover:text-sky-700"
          >
            <span aria-hidden="true">&larr;</span> Go back home
          </Link>
          {/* <a href="#" className="text-sm font-semibold text-stone-500">
            Contact support <span aria-hidden="true">&rarr;</span>
          </a> */}
        </div>
      </div>
    </main>
  );
}
