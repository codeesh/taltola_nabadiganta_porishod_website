import { PageHero } from "@/components/page-hero";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { bloodDonationStats, bloodDonors } from "@/lib/data";

const monthNumbers: Record<string, number> = {
  January: 0,
  February: 1,
  March: 2,
  April: 3,
  May: 4,
  June: 5,
  July: 6,
  August: 7,
  September: 8,
  October: 9,
  November: 10,
  December: 11,
};

function donationDateValue(date: string): number | null {
  const match = date.match(/^(\d{1,2})\s+([A-Za-z]+),?\s+(\d{4})$/);
  if (!match || monthNumbers[match[2]] === undefined) return null;

  const [, day, month, year] = match;
  return new Date(Number(year), monthNumbers[month], Number(day)).getTime();
}

export default function BloodPage() {
  const sortedDonors = [...bloodDonors].sort(
    (a, b) => {
      const dateA = donationDateValue(a.lastDonation);
      const dateB = donationDateValue(b.lastDonation);

      if (dateA === null && dateB === null) return 0;
      if (dateA === null) return 1;
      if (dateB === null) return -1;
      return dateB - dateA;
    },
  );

  return <><SiteHeader /><main><PageHero eyebrow="Health & humanitarian support" title="Blood Donation" /><div className="container-width py-20">
    <div className="mb-8 grid gap-4 sm:grid-cols-2"><div className="rounded-2xl border border-red-100 bg-white p-6 shadow-sm"><p className="eyebrow text-red-600">Total donated</p><p className="mt-3 text-4xl font-bold text-red-600">{bloodDonationStats.totalDonated}</p><p className="mt-2 text-sm text-[#77736e]">Verified donations recorded</p></div><div className="rounded-2xl border border-red-100 bg-white p-6 shadow-sm"><p className="eyebrow text-red-600">Active donors</p><p className="mt-3 text-4xl font-bold text-red-600">{bloodDonors.length}</p><p className="mt-2 text-sm text-[#77736e]">Currently listed verified donors</p></div></div>
    <p className="mb-3 text-xs text-[#77736e] sm:hidden">On mobile, swipe from right to left to see the full information.</p><div className="overflow-hidden rounded-2xl border border-[#eadfdf] bg-white shadow-sm"><div className="overflow-x-auto"><table className="w-full min-w-[1000px] border-collapse text-left text-sm"><thead className="bg-red-600 text-white"><tr><th className="px-5 py-4 font-bold">Candidate name</th><th className="px-5 py-4 font-bold">Blood group</th><th className="px-5 py-4 font-bold">Address</th><th className="px-5 py-4 font-bold">Phone number</th><th className="px-5 py-4 font-bold">Last donated</th><th className="px-5 py-4 font-bold">Total donated</th></tr></thead><tbody>{sortedDonors.length > 0 ? sortedDonors.map((donor) => <tr key={`${donor.name}-${donor.phone}`} className="border-b border-[#f0e8e8] last:border-0"><td className="px-5 py-4 font-bold">{donor.name}</td><td className="px-5 py-4"><span className="rounded-full bg-red-50 px-3 py-1 font-bold text-red-600">{donor.bloodGroup}</span></td><td className="px-5 py-4 text-[#66625d]">{donor.address}</td><td className="px-5 py-4 font-medium">{donor.phone}</td><td className="px-5 py-4 text-[#66625d]">{donor.lastDonation}</td><td className="px-5 py-4 text-[#66625d]">{donor.totalDonated} times</td></tr>) : <tr><td colSpan={6} className="px-5 py-16 text-center"><p className="text-lg font-bold text-[#333]">Donor information will appear here</p><p className="mt-2 text-sm text-[#888]">Verified blood donor records have not been added yet.</p></td></tr>}</tbody></table></div></div>
  </div></main><SiteFooter /></>;
}
