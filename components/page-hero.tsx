export function PageHero({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <section className="relative overflow-hidden bg-[#f8ead1] py-24 text-black md:py-3">
      <div className="soft-grid absolute inset-0 opacity-10" />
      <div className="container-width relative">
        <p className="eyebrow text-[#f68712]">{eyebrow}</p>
        <h1 className="display max-w-4xl text-6xl font-bold md:text-5xl">{title}</h1>
      </div>
    </section>
  );
}
