"use client";
import { useState } from "react";

export default function Avatar({ src, name }: { src: string; name: string }) {
  const [failed, setFailed] = useState(false);
  const initial = name.trim().charAt(0).toUpperCase();

  return (
    <div className="relative h-32 w-32">
      {/* soft halo */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-violet-glow via-cyan-glow to-rose-glow opacity-60 blur-2xl" />
      {/* spinning gradient ring */}
      <div
        className="absolute inset-0 rounded-full animate-spinSlow"
        style={{
          background:
            "conic-gradient(from 0deg, #7C5CFF, #22D3EE, #FF5CA8, #7C5CFF)",
        }}
      />
      <div className="absolute inset-[3px] overflow-hidden rounded-full bg-ink">
        {failed ? (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-violet-glow/30 to-cyan-glow/20 font-display text-4xl font-semibold">
            {initial}
          </div>
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={src}
            alt={`${name} profile photo`}
            className="h-full w-full object-cover"
            onError={() => setFailed(true)}
          />
        )}
      </div>
    </div>
  );
}
