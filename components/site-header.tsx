"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { navItems } from "@/lib/data";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="relative z-20 border-b border-[#eeeae4] bg-[#fcfbf8]/90 backdrop-blur-md">
      <div className="container-width flex h-[76px] items-center justify-between">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <Image src="/images/TNP_logo.png" alt="Taltola Nabadiganta Porishod" width={200} height={150} className="h-15 w-auto object-contain" priority />
        </Link>
        <nav className={`${open ? "absolute left-0 top-[76px] flex w-full flex-col border-b border-[#eeeae4] bg-[#fcfbf8] p-6" : "hidden"} gap-5 md:static md:flex md:w-auto md:flex-row md:items-center md:border-0 md:bg-transparent md:p-0`}>
          {navItems.map((item) => <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className={`text-sm font-bold transition ${item.emphasis ? "text-red-600 hover:text-red-700" : "text-[#5c5b59] hover:text-[#f68712]"}`}>{item.label}</Link>)}
        </nav>
        <div className="flex items-center gap-3">
          <Link href="/donate" className="hidden rounded-full bg-[#141414] px-5 py-3 text-xs font-bold text-white transition hover:bg-[#f68712] sm:inline-flex">Donate <span className="ml-2">↗</span></Link>
          <button aria-label="Toggle menu" onClick={() => setOpen(!open)} className="grid size-10 place-items-center rounded-full border border-[#dedbd5] md:hidden">{open ? "×" : "☰"}</button>
        </div>
      </div>
    </header>
  );
}
