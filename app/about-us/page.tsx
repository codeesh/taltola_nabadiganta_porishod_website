import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function AboutUsPage() {
  return <><SiteHeader /><main>
    <PageHero eyebrow="Who we are" title="আমাদের সম্পর্কে | About Us" />
    <div className="container-width py-20"><section className="max-w-3xl">
      <SectionHeading eyebrow="Our story" title="একটি ছোট উদ্যোগ, একটি বড় স্বপ্ন।" />
      <p className="bengali text-base leading-9 text-[#66625d]">তালতলা নবদিগন্ত পরিষদ একটি অরাজনৈতিক, স্বেচ্ছাসেবী ও জনকল্যাণমূলক সংগঠন, যা নোয়াখালীর চাটখিল উপজেলার তালতলা এলাকার মানুষের কল্যাণে কাজ করে যাচ্ছে। মানবিকতা, সামাজিক দায়বদ্ধতা ও সম্মিলিত প্রচেষ্টাকে ধারণ করে আমরা রক্তদান, স্বাস্থ্যসেবা, অসহায় মানুষের পাশে দাঁড়ানো, শীতবস্ত্র ও ইফতার বিতরণ, পরিবেশ সংরক্ষণ, শিক্ষা এবং যুবসমাজের ক্রীড়া ও সৃজনশীল কার্যক্রমে ভূমিকা রাখছি। আমরা বিশ্বাস করি, একটি সুন্দর সমাজ গড়তে প্রয়োজন সচেতন নাগরিক, শিক্ষিত তরুণ প্রজন্ম এবং পারস্পরিক সহযোগিতার মানসিকতা। সেই বিশ্বাস থেকেই খেলাধুলার বিকাশ, জনসেবামূলক উদ্যোগ এবং সামাজিক সচেতনতা বৃদ্ধির মাধ্যমে একটি ইতিবাচক পরিবর্তন আনতে আমরা প্রতিশ্রুতিবদ্ধ।</p>
      <p className="bengali mt-6 text-base leading-9 text-[#66625d]">আমাদের লক্ষ্য একটি শিক্ষিত, মাদকমুক্ত, কর্মমুখী ও মানবিক সমাজ গড়ে তোলা—যেখানে সামর্থ্যবান মানুষ এগিয়ে আসবে, অসহায় মানুষ সহযোগিতা পাবে এবং সবাই মিলে নিজ এলাকার উন্নয়নে অবদান রাখবে।</p>
    </section></div>
  </main><SiteFooter /></>;
}
