type SectionHeadingProps = {
  eyebrow: string;
  title: string;
};

export function SectionHeading({ eyebrow, title }: SectionHeadingProps) {
  return (
    <div className="mb-10">
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-300 dark:text-cyan-700">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-[clamp(1.75rem,4vw,2.25rem)] font-semibold leading-tight text-white dark:text-slate-900">
        {title}
      </h2>
    </div>
  );
}
