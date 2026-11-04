import Footer from "./common/Footer";
import Header from "./common/Header";
import HeroBanner from "./common/hero-banner";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center dark:bg-slate-800">
      <Header
        title="nhỏ yêu quái bận tu luyện"
        canonical="https://ussh-hk5-neon.vercel.app/"
      />

      <div className="container mb-2 flex flex-1 items-center justify-center sm:mb-10">
        <div className="flex flex-col sm:mt-10 sm:flex-row-reverse">
          <div className="sm:h-90 sm:w-90 relative mx-auto flex h-80 w-80 justify-center overflow-hidden rounded-full shadow">
            <HeroBanner />
          </div>

          <div className="max-w-125 ml-auto flex-1 pr-0 text-center font-light sm:pr-5">
            <div className="mt-5 flex h-full flex-col items-end justify-center">
              <p className="bg-linear-to-r bg-size-[200%_auto] from-indigo-400 via-sky-500 to-indigo-400 bg-clip-text text-xl font-light text-transparent md:text-2xl">
                hi, chúc các bạn
              </p>
              <p className="bg-linear-to-r bg-size-[200%_auto] mt-5 animate-linear from-indigo-400 via-sky-500 to-indigo-400 bg-clip-text text-3xl font-light text-transparent md:text-4xl">
                học tốt thi tốt
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
