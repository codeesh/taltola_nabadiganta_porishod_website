import type { Category } from "@/lib/data";

export function CategoryCard({ category, index }: { category: Category; index: number }) {
  const { title, bn, description, icon, accent } = category;

  return (
    <article
      className="lift rounded-[22px] border border-[#e8e4dc] bg-white p-6"
      style={{ borderTopColor: accent, borderTopWidth: 3 }}
    >
      <div className="mb-9 flex items-start justify-between">
        <span
          className="grid size-11 place-items-center rounded-full text-2xl font-bold"
          style={{ backgroundColor: `${accent}18`, color: accent }}
        >
          {icon}
        </span>
        <span className="text-xs text-[#aaa69e]">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>
      <h3 className="text-lg font-bold">{title}</h3>
      <p className="bengali mt-2 text-sm leading-6 text-[#77736e]">{bn}</p>
      <p className="mt-3 text-sm leading-6 text-[#77736e]">{description}</p>
    </article>
  );
}
