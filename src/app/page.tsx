import Footer from "./common/Footer";
import Header from "./common/Header";
import HeroBanner from "./common/hero-banner";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center dark:bg-slate-800">
      <Header title="langlang" canonical="https://ussh-hk5-neon.vercel.app/" />

      <div className="container mb-2 flex flex-1 items-center justify-center sm:mb-10">
        <div className="flex flex-col sm:mt-10 sm:flex-row-reverse">
          <div className="relative mx-auto flex h-80 w-80 justify-center overflow-hidden rounded-full shadow sm:h-[360px] sm:w-[360px]">
            <HeroBanner />
          </div>

          <div className="ml-auto max-w-[500px] flex-1 pr-0 text-center font-light sm:pr-5">
            <p className="mt-10 text-5xl font-extralight leading-loose sm:mt-0">
              hi, chúc các bạn học tốt thi tốt!!!
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
