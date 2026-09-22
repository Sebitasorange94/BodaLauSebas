// components/GoldDivider.tsx
export default function GoldDivider() {
  return (
    <div className="flex items-center justify-center py-8 md:py-10 bg-cream">
      <div className="h-px w-12 md:w-16 bg-gold/70" />
      <span className="mx-3 md:mx-4 text-gold text-lg md:text-xl">✦</span>
      <div className="h-px w-12 md:w-16 bg-gold/70" />
    </div>
  );
}
