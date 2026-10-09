import { PageHero } from "@/components/page-hero";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function ContactPage() {
  return <><SiteHeader /><main><PageHero eyebrow="Say hello" title="চলুন কথা বলি।" /><div className="container-width py-20"><p className="bengali max-w-2xl text-base leading-8 text-[#66625d]">যেকোনো প্রশ্ন, সহযোগিতা বা কমিউনিটি উদ্যোগের প্রস্তাব নিয়ে আমাদের সাথে যোগাযোগ করুন।</p><div className="mt-12 grid max-w-2xl gap-4 sm:grid-cols-2"><div className="rounded-2xl bg-white p-6"><p className="eyebrow text-[#f68712]">Location</p><p className="mt-3 text-lg font-bold">Taltola, Chatkhil</p><p className="text-sm text-[#77736e]">Noakhali, Bangladesh</p></div><div className="rounded-2xl bg-white p-6"><p className="eyebrow text-[#f68712]">Reach out</p><p className="mt-3 text-lg font-bold">Contact details coming soon</p><p className="text-sm text-[#77736e]">Editable placeholder</p></div></div></div></main><SiteFooter /></>;
}
