type ImpactStat = {
  value: string;
  label: string;
  accent?: boolean;
};

const IMPACT_STATS: ImpactStat[] = [
  { value: "০১", label: "বছর পথচলা" },
  { value: "০৬", label: "কাজের ক্ষেত্র" },
  { value: "TNP", label: "তালতলা থেকে" },
  { value: "সবার", label: "জন্য উন্মুক্ত", accent: true },
];

export function ImpactStats() {
  return (
    <section className="border-y border-[#e9e5de] bg-white py-12">
      <div className="container-width grid grid-cols-2 gap-8 md:grid-cols-4">
        {IMPACT_STATS.map(({ value, label, accent }) => (
          <div key={label}>
            <p className={`text-4xl font-bold ${accent ? "text-[#f68712]" : ""}`}>
              {value}
            </p>
            <p className="mt-1 text-sm text-[#77736e]">{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}