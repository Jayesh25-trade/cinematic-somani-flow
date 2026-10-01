import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import symbol from "@/assets/somani-symbol-clean.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dr Somani's Homoeopathy | Think Homeopathy. Think Somani." },
      { name: "description", content: "Think Homeopathy. Think Somani. Dr Somani's Homoeopathy, since 1998." },
      { property: "og:title", content: "Dr Somani's Homoeopathy" },
      { property: "og:description", content: "Think Homeopathy. Think Somani. Since 1998." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const [progress, setProgress] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const duration = reducedMotion ? 500 : 3000;
    let imageReady = false;
    let frame = 0;
    let finishTimer: ReturnType<typeof setTimeout> | undefined;
    let fallbackTimer: ReturnType<typeof setTimeout> | undefined;
    let startedAt: number | undefined;
    let previous = -1;
    let active = true;

    const image = new Image();
    image.onload = () => { imageReady = true; };
    image.onerror = () => { imageReady = true; };
    image.src = symbol.url;
    if (image.complete) imageReady = true;
    fallbackTimer = setTimeout(() => { imageReady = true; }, 8000);

    const tick = (now: number) => {
      if (!active) return;
      if (startedAt === undefined) startedAt = now;
      const elapsed = now - startedAt;
      const next = Math.min(imageReady ? 100 : 96, Math.floor((elapsed / duration) * 100));
      if (next !== previous) {
        previous = next;
        setProgress(next);
      }
      if (next === 100) {
        finishTimer = setTimeout(() => { if (active) setLoaded(true); }, reducedMotion ? 50 : 350);
      } else {
        frame = requestAnimationFrame(tick);
      }
    };
    frame = requestAnimationFrame(tick);

    return () => {
      active = false;
      cancelAnimationFrame(frame);
      clearTimeout(finishTimer);
      clearTimeout(fallbackTimer);
      image.onload = null;
      image.onerror = null;
    };
  }, []);

  return (
    <main className={`somani-screen${loaded ? " is-loaded" : ""}`} aria-label="Dr Somani's Homoeopathy">
      <div className="loading-veil" aria-hidden="true" />
      <img className="somani-logo" src={symbol.url} alt="Dr Somani's Homoeopathy" width={870} height={770} fetchPriority="high" />
      <div className="loading-progress" role="status" aria-label={loaded ? "Loaded" : `Loading ${progress}%`}>
        <span className="loading-number" aria-hidden="true">{progress}<span className="loading-percent">%</span></span>
        <div className="loading-track" aria-hidden="true"><div className="loading-fill" style={{ transform: `scaleX(${progress / 100})` }} /></div>
      </div>
    </main>
  );
}