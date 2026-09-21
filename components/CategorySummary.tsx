interface CategorySummaryProps {
  summary: string;
}

export default function CategorySummary({
  summary,
}: CategorySummaryProps) {
  return (
    <section className="mt-10 rounded-2xl border p-6">
      <div className="flex items-center gap-2">
        <span className="text-xl">✨</span>

        <h2 className="text-xl font-semibold">
          AI SUMMARY
        </h2>
      </div>

      <p className="mt-4 leading-7 text-muted-foreground">
        {summary}
      </p>
    </section>
  );
}