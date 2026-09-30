import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef } from "react";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
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

const particles = [
  { x: 8, y: 18, size: 2, delay: 0 }, { x: 17, y: 67, size: 2, delay: 2 },
  { x: 29, y: 35, size: 1, delay: 4 }, { x: 42, y: 77, size: 2, delay: 1 },
  { x: 54, y: 15, size: 2, delay: 3 }, { x: 63, y: 53, size: 1, delay: 5 },
  { x: 73, y: 25, size: 2, delay: 2 }, { x: 85, y: 70, size: 2, delay: 4 },
  { x: 94, y: 41, size: 1, delay: 0 }, { x: 76, y: 88, size: 1, delay: 3 },
];

function Index() {
  const pageRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLElement>(null);
  const nextRef = useRef<HTMLElement>(null);
  const scrollRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const page = pageRef.current;
    const hero = heroRef.current;
    const next = nextRef.current;
    if (!page || !hero || !next) return;

    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) {
      page.classList.add("is-ready", "reduced-motion");
      return;
    }

    let disposed = false;
    let disposeAnimation: (() => void) | undefined;

    async function setup() {
      const [{ default: gsap }, { ScrollTrigger }, { default: Lenis }] = await Promise.all([
        import("gsap"), import("gsap/ScrollTrigger"), import("lenis"),
      ]);
      if (disposed || !page || !hero || !next) return;
      gsap.registerPlugin(ScrollTrigger);
      const lenis = new Lenis({ duration: 1.55, smoothWheel: true, wheelMultiplier: 0.85 });
      lenis.on("scroll", ScrollTrigger.update);
      const tick = (time: number) => lenis.raf(time * 1000);
      gsap.ticker.add(tick);
      gsap.ticker.lagSmoothing(0);

      const context = gsap.context(() => {
        const entrance = gsap.timeline({ delay: 0.15, defaults: { ease: "power3.out" }, onStart: () => page.classList.add("is-ready") });
        entrance
          .fromTo(".hero-background", { opacity: 0 }, { opacity: 1, duration: 2.3 }, 0)
          .fromTo(".emblem-wrap", { opacity: 0, scale: 0.85, filter: "blur(18px)" }, { opacity: 1, scale: 1, filter: "blur(0px)", duration: 2.1, ease: "power2.out" }, 0.4)
          .fromTo(".hero-think", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1.35 }, 0.75)
          .fromTo(".hero-home-mask span", { xPercent: -105 }, { xPercent: 0, duration: 1.8, ease: "power4.out" }, 1.05)
          .fromTo(".hero-home-mask", { opacity: 0 }, { opacity: 1, duration: 0.3 }, 1.05)
          .fromTo(".hero-somani span", { opacity: 0, y: 34 }, { opacity: 1, y: 0, duration: 1.25, stagger: 0.18 }, 1.65)
          .fromTo(".scroll-cue", { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 1 }, 2.4)
          .call(() => page.classList.add("particles-active"), undefined, 2.4);

        gsap.to(".float-think", { y: -4, x: 2, duration: 5.7, repeat: -1, yoyo: true, ease: "sine.inOut" });
        gsap.to(".float-home", { y: 5, x: -2, duration: 7.2, repeat: -1, yoyo: true, ease: "sine.inOut" });
        gsap.to(".float-somani", { y: -3, x: 2, duration: 6.3, repeat: -1, yoyo: true, ease: "sine.inOut" });

        const scroll = gsap.timeline({ scrollTrigger: { trigger: hero, start: "top top", end: "bottom top", scrub: 1.4 } });
        scroll
          .to(".hero-think-scroll", { y: -110, opacity: 0, ease: "none" }, 0)
          .to(".hero-home-scroll", { y: -180, opacity: 0, ease: "none" }, 0)
          .to(".hero-somani-scroll", { y: 80, opacity: 0, ease: "none" }, 0)
          .to(".emblem-scroll", { scale: 0.82, y: -55, opacity: 0, ease: "none" }, 0)
          .to(".glow-red", { y: 95, scaleY: 1.4, opacity: 0.25, ease: "none" }, 0)
          .to(".glow-green", { y: -125, scaleY: 1.3, opacity: 0.16, ease: "none" }, 0)
          .to(".botanical-left", { x: -90, ease: "none" }, 0)
          .to(".botanical-right", { x: 105, ease: "none" }, 0)
          .to(".hero-shade", { opacity: 0.8, ease: "none" }, 0);

        gsap.fromTo(".next-emblem", { opacity: 0, scale: 0.85, clipPath: "inset(20% 0 20% 0)" }, {
          opacity: 0.3, scale: 1, clipPath: "inset(0% 0 0% 0)", duration: 2, ease: "power2.out",
          scrollTrigger: { trigger: next, start: "top 85%", end: "center center", scrub: 1 },
        });
        gsap.fromTo(".next-word", { opacity: 0, y: 55, filter: "blur(8px)" }, {
          opacity: 1, y: 0, filter: "blur(0px)", duration: 1.4, stagger: 0.18, ease: "power3.out",
          scrollTrigger: { trigger: next, start: "top 60%", toggleActions: "play none none reverse" },
        });
      }, page);

      const pointerTargets = [
        [".pointer-background", 5], [".pointer-botanical", 12],
        [".pointer-particles", 19], [".pointer-type", 3],
      ] as const;
      const movers = pointerTargets.map(([selector, distance]) => {
        const element = page.querySelector<HTMLElement>(selector);
        if (!element) return null;
        return { distance, x: gsap.quickTo(element, "x", { duration: 1.8, ease: "power2.out" }), y: gsap.quickTo(element, "y", { duration: 1.8, ease: "power2.out" }) };
      });
      const onMove = (event: PointerEvent) => {
        if (event.pointerType === "touch") return;
        const nx = (event.clientX / window.innerWidth - 0.5) * 2;
        const ny = (event.clientY / window.innerHeight - 0.5) * 2;
        for (const mover of movers) { mover?.x(nx * mover.distance); mover?.y(ny * mover.distance); }
        page.style.setProperty("--cursor-x", `${event.clientX}px`);
        page.style.setProperty("--cursor-y", `${event.clientY}px`);
      };
      window.addEventListener("pointermove", onMove, { passive: true });
      const onCue = () => lenis.scrollTo(next, { duration: 1.8 });
      scrollRef.current?.addEventListener("click", onCue);
      disposeAnimation = () => {
        scrollRef.current?.removeEventListener("click", onCue);
        window.removeEventListener("pointermove", onMove);
        context.revert();
        gsap.ticker.remove(tick);
        lenis.destroy();
      };
    }
    void setup();
    return () => { disposed = true; disposeAnimation?.(); };
  }, []);

  return (
    <main ref={pageRef} className="somani-page">
      <div className="cursor-glow" aria-hidden="true" />
      <section ref={heroRef} className="hero" aria-label="Dr Somani's Homoeopathy">
        <div className="hero-background pointer-background" aria-hidden="true">
          <div className="glow glow-red" />
          <div className="glow glow-green" />
          <div className="hero-shade" />
          <div className="ambient-grid" />
        </div>
        <div className="botanical-layer pointer-botanical" aria-hidden="true">
          <div className="botanical botanical-left"><img src={symbol.url} alt="" /></div>
          <div className="botanical botanical-right"><img src={symbol.url} alt="" /></div>
        </div>
        <div className="particle-layer pointer-particles" aria-hidden="true">
          {particles.map((particle, index) => <i key={index} className="particle" style={{ left: `${particle.x}%`, top: `${particle.y}%`, width: particle.size, height: particle.size, animationDelay: `${particle.delay}s` }} />)}
        </div>
        <div className="hero-content pointer-type">
          <div className="emblem-scroll">
            <div className="emblem-wrap"><img src={symbol.url} alt="Somani's red flower held by green hands" /></div>
          </div>
          <div className="hero-copy">
            <div className="hero-think-scroll"><div className="float-think"><p className="hero-think">Think</p></div></div>
            <div className="hero-home-scroll"><div className="float-home"><h1 className="hero-home-mask"><span>Homeopathy.</span></h1></div></div>
            <div className="hero-somani-scroll"><div className="float-somani"><p className="hero-somani"><span>Think</span> <span>Somani.</span></p></div></div>
          </div>
        </div>
        <Button ref={scrollRef} type="button" variant="ghost" size="icon" className="scroll-cue" aria-label="Scroll down to the next section" title="Scroll down">
          <ArrowDown strokeWidth={1.2} />
        </Button>
        <span className="hero-bottom-rule" aria-hidden="true" />
      </section>
      <section ref={nextRef} className="next-section" aria-label="Think Somani">
        <div className="next-halo" aria-hidden="true" />
        <img className="next-emblem" src={symbol.url} alt="" aria-hidden="true" />
        <div className="next-copy"><span className="next-word">Think</span><span className="next-word next-word-accent">Somani.</span></div>
      </section>
    </main>
  );
}
