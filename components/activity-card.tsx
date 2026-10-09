import type { Activity } from "@/lib/data";

export function ActivityCard({ activity, featured = false }: { activity: Activity; featured?: boolean }) {
  return <article className={`lift group overflow-hidden rounded-[22px] border border-[#e9e5de] bg-white ${featured ? "md:col-span-2" : ""}`}>
    <div className={`page-image relative overflow-hidden bg-[#e7e2d9] ${featured ? "aspect-[16/7]" : "aspect-[4/3]"}`}><img src={activity.image} alt="" className="size-full object-cover transition duration-700 group-hover:scale-105" /><span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider">{activity.tag}</span></div>
    <div className="p-5"><div className="mb-3 flex items-center justify-between gap-4 text-[11px] font-bold uppercase tracking-wider text-[#f68712]"><span>{activity.category}</span><span className="text-[#98948d]">{activity.date}</span></div><h3 className="text-xl font-bold tracking-tight">{activity.title}</h3><p className="mt-2 text-sm leading-6 text-[#77736e]">{activity.description}</p></div>
  </article>;
}
