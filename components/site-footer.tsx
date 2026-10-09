import Link from "next/link";
import Image from "next/image";

export function SiteFooter() {
  return <footer className="bg-[#141414] py-14 text-white"><div className="container-width grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
    <div><div className="mb-4"><Image src="/images/TNP_logo.png" alt="Taltola Nabadiganta Porishod" width={188} height={112} className="h-14 w-auto object-contain brightness-0 invert" /></div><p className="max-w-sm text-sm leading-6 text-white/55">তালতলা, চাটখিল, নোয়াখালী থেকে একটি অরাজনৈতিক, জনকল্যাণমূলক কমিউনিটি উদ্যোগ।</p></div>
    <div><p className="eyebrow mb-5 text-[#f68712]">Explore</p>{[["About us", "/about-us"], ["What we do?", "/what-do-we-do"], ["Events", "/events"], ["Updates", "/updates"], ["Blood Donation", "/blood"]].map(([x, href]) => <Link className={`mb-3 block text-sm ${x === "Blood Donation" ? "font-bold text-red-400 hover:text-red-300" : "text-white/65 hover:text-white"}`} key={href} href={href}>{x}</Link>)}</div>
    <div><p className="eyebrow mb-5 text-[#f68712]">Connect</p><p className="mb-3 text-sm text-white/65">Taltola, Chatkhil<br />Noakhali, Bangladesh</p><Link href="/contact" className="mr-4 text-sm text-white/65 hover:text-white">Contact us ↗</Link><a href="https://www.facebook.com/tnpTaltola" target="_blank" rel="noreferrer" className="text-sm text-white/65 hover:text-white">Facebook ↗</a></div>
  </div><div className="container-width mt-12 border-t border-white/10 pt-5 text-xs text-white/35">© 2025 Taltola Nabadiganta Porishod. Built for community.</div></footer>;
}
