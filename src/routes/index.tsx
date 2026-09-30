import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef } from "react";
import symbol from "@/assets/somani-symbol-clean.png.asset.json";
import flowersVideo from "@/assets/somani-flowers-sky.mp4.asset.json";
import gardenStill from "@/assets/somani-garden-still.jpg";

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
  const screenRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const screen = screenRef.current;
    const video = videoRef.current;
    if (!screen || !video) return;
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) {
      video.pause();
      screen.classList.add("is-ready");
      return;
    }

    let disposed = false;
    let cleanup: (() => void) | undefined;
    void import("gsap").then(({ default: gsap }) => {
      if (disposed) return;
      const context = gsap.context(() => {
        gsap.timeline({ defaults: { ease: "power3.out" }, onStart: () => screen.classList.add("is-ready") })
          .fromTo(".screen-film", { opacity: 0, scale: 1.055 }, { opacity: 1, scale: 1, duration: 2.1, ease: "power2.out" }, 0)
          .fromTo(".screen-logo", { opacity: 0, scale: 0.85, filter: "blur(12px)" }, { opacity: 1, scale: 1, filter: "blur(0px)", duration: 1.5 }, 0.25)
          .fromTo(".screen-think", { opacity: 0, y: 34 }, { opacity: 1, y: 0, duration: 1.15 }, 0.65)
          .fromTo(".screen-home span", { xPercent: -105 }, { xPercent: 0, duration: 1.45, ease: "power4.out" }, 0.9)
          .fromTo(".screen-somani span", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1.25, stagger: 0.17 }, 1.42);
      }, screen);
      cleanup = () => context.revert();
    });
    return () => { disposed = true; cleanup?.(); };
  }, []);

  return (
    <main ref={screenRef} className="somani-screen" aria-label="Dr Somani's Homoeopathy">
      <div className="screen-film" aria-hidden="true">
        <img src={gardenStill} alt="" width={1920} height={1080} className="screen-poster" />
        <video ref={videoRef} className="screen-video" src={flowersVideo.url} autoPlay muted loop playsInline preload="metadata" aria-hidden="true" />
      </div>
      <div className="screen-wash" aria-hidden="true" />
      <div className="screen-inner">
        <div className="screen-logo"><img src={symbol.url} alt="Dr Somani's Homoeopathy" width={200} height={200} /></div>
        <div className="screen-copy">
          <p className="screen-think">Think</p>
          <h1 className="screen-home"><span>Homeopathy.</span></h1>
          <p className="screen-somani"><span>Think</span><span>Somani.</span></p>
        </div>
      </div>
    </main>
  );
}