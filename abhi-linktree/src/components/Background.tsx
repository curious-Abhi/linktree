export default function Background() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-ink">
      <div className="absolute -left-24 -top-24 h-[28rem] w-[28rem] rounded-full bg-violet-glow/40 blur-[110px] animate-floatA" />
      <div className="absolute -right-28 top-1/3 h-[26rem] w-[26rem] rounded-full bg-cyan-glow/25 blur-[120px] animate-floatB" />
      <div className="absolute -bottom-32 left-1/4 h-[24rem] w-[24rem] rounded-full bg-rose-glow/25 blur-[120px] animate-floatA" />
      <div className="grid-fade absolute inset-0" />
    </div>
  );
}
