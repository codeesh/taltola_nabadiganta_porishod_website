import Link from "next/link";

export function SupportCta() {
  return (
    <section className="container-width py-24">
      <div className="grid items-center gap-10 rounded-[32px] bg-[#f68712] p-8 text-white md:grid-cols-[1.2fr_.8fr] md:p-14">
        <div>
          <p className="eyebrow text-white/70">Make a difference</p>
          <h2 className="display mt-4 max-w-xl text-5xl font-bold md:text-6xl">
            আপনার ছোট্ট সহায়তাই হতে পারে কারও বড় ভরসা।
          </h2>
        </div>
        <div>
          <p className="bengali text-sm leading-7 text-white/80">
            স্বাস্থ্য, শিক্ষা, পরিবেশ, খেলাধুলা এবং জনকল্যাণের উদ্যোগগুলোতে যুক্ত
            হতে পারেন আপনার সময়, দক্ষতা বা অনুদান দিয়ে।
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href="/donate"
              className="rounded-full bg-white px-5 py-3 text-sm font-bold text-[#141414]"
            >
              অনুদান দিন ↗
            </Link>
            <Link
              href="/join"
              className="rounded-full border border-white/40 px-5 py-3 text-sm font-bold text-white"
            >
              ভলান্টিয়ার হোন
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
