import Link from "next/link";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=1000&q=85";

export function HomeHero() {
  return (
    <section className="relative overflow-hidden pb-20 pt-16 md:pb-28 md:pt-24">
      <div className="soft-grid absolute inset-0 -z-10" />
      <div className="container-width grid items-center gap-12 lg:grid-cols-[1.04fr_.96fr]">
        <div className="reveal">
          <p className="eyebrow mb-5 flex items-center gap-2 text-[#f68712]">
            <span className="inline-block size-2 rounded-full bg-[#f68712]" />
            A youth-led community movement
          </p>
          <h1 className="display max-w-3xl text-6xl font-bold sm:text-7xl lg:text-[86px]">
            এক বছর পথচলা,
            <br />
            <span className="text-[#f68712]">সেবায় অবিচল</span>
          </h1>
          <p className="bengali mt-7 max-w-lg text-base leading-8 text-[#67645f]">
            তালতলা থেকে মানুষের পাশে, মানুষের জন্য। আমরা বিশ্বাস করি ছোট ছোট
            উদ্যোগেই তৈরি হয় বড় পরিবর্তন।
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/what-do-we-do"
              className="rounded-full bg-[#f68712] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#da7005]"
            >
              আমাদের কাজ দেখুন ↗
            </Link>
            <Link
              href="/join"
              className="rounded-full border border-[#dcd8d0] px-6 py-3.5 text-sm font-bold transition hover:border-[#f68712]"
            >
              সাথে থাকুন
            </Link>
          </div>
        </div>

        <div className="page-image reveal reveal-delay relative mx-auto w-full max-w-[530px]">
          <div className="relative aspect-[.9] overflow-hidden rounded-[38px] bg-[#e6dfd4] shadow-2xl">
            <img
              src={HERO_IMAGE}
              alt="Young people together"
              className="size-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 text-white">
              <p className="eyebrow text-white/70">Rooted in</p>
              <p className="mt-1 text-2xl font-bold">Taltola, Chatkhil</p>
            </div>
          </div>
          <div className="hero-orb absolute -bottom-7 -left-7 grid size-28 place-items-center rounded-full bg-[#f68712] text-center text-sm font-bold leading-5 text-white">
            সেবাই
            <br />
            আমাদের
            <br />
            পরিচয়
          </div>
          <div className="absolute -right-5 top-8 rounded-2xl bg-white p-4 shadow-xl">
            <p className="eyebrow text-[#f68712]">Our spirit</p>
            <p className="bengali mt-1 text-sm font-bold">একসাথে এগিয়ে যাই</p>
          </div>
        </div>
      </div>
    </section>
  );
}
