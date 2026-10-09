export function SectionHeading({ eyebrow, title, detail, dark = false }: { eyebrow: string; title: string; detail?: string; dark?: boolean }) {
  return <div className={`mb-10 flex flex-col items-center justify-between gap-4 text-center ${dark ? "text-white" : ""}`}>
    <div><p className="eyebrow mb-4 text-[#f68712]">{eyebrow}</p><h2 className="display max-w-xl text-4xl font-bold md:text-5xl">{title}</h2></div>
    {detail && <p className={`max-w-xs text-sm leading-6 ${dark ? "text-white/60" : "text-[#6b6965]"}`}>{detail}</p>}
  </div>;
}
