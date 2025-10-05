export default function SectionHeading({
  eyebrow,
  title,
  className = "",
}: {
  eyebrow?: string;
  title: string;
  className?: string;
}) {
  return (
    <div className={`text-center ${className}`}>
      {eyebrow && <p className="text-ink-500 mb-2">{eyebrow}</p>}
      <h2 className="font-serif font-bold text-[28px] md:text-[40px] leading-tight">
        {title}
      </h2>
    </div>
  );
}
