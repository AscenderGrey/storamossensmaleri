"use client";
import Image from "next/image";
import { useState } from "react";
import type { BeforeAfter as BA } from "@/lib/data";

export default function BeforeAfter({ item, sizes = "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" }: { item: BA; sizes?: string }) {
  const [pos, setPos] = useState(50);
  return (
    <figure>
      <div className="relative aspect-[3/4] select-none overflow-hidden rounded-2xl bg-stone-100">
        <Image src={item.after.src} alt={item.after.alt} fill sizes={sizes} className="object-cover" />
        <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
          <Image src={item.before.src} alt={item.before.alt} fill sizes={sizes} className="object-cover" />
        </div>
        <div className="pointer-events-none absolute inset-y-0 w-0.5 bg-white shadow" style={{ left: `${pos}%` }}>
          <span className="absolute top-1/2 left-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-stone-900 shadow-lg">
            ‹ ›
          </span>
        </div>
        <span className="pointer-events-none absolute top-3 left-3 rounded-full bg-black/60 px-3 py-1 text-xs font-semibold text-white">Före</span>
        <span className="pointer-events-none absolute top-3 right-3 rounded-full bg-brand px-3 py-1 text-xs font-semibold text-white">Efter</span>
        <input
          type="range"
          min={0}
          max={100}
          value={pos}
          onChange={(e) => setPos(Number(e.target.value))}
          aria-label={`Jämför före och efter: ${item.title}`}
          className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
        />
      </div>
      <figcaption className="mt-4">
        <p className="text-xs font-semibold tracking-wide text-brand uppercase">{item.area}</p>
        <h3 className="mt-1 text-lg font-semibold text-stone-900">{item.title}</h3>
        <p className="mt-1 text-sm text-stone-600">{item.done}</p>
        {item.color && <p className="mt-1 text-sm text-stone-500">Kulör: {item.color}</p>}
      </figcaption>
    </figure>
  );
}
