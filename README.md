# Somani Wellness Experience

Use the attached Somani Homeopathy logo and brand identity (Dr Somani's Homoeopathy, Since 1998, deep navy #202060, medical red #C82020, herbal green #77AC2E).

IMPORTANT: This is not a static hero. Build the homepage as a highly interactive, cinematic, next-generation experience.
ANIMATION + INTERACTION SYSTEM
1. HERO ENTRANCE ANIMATION
On initial page load:
- Background fades in slowly.
- Somani logo scales from 0.85 to 1 with blur-to-sharp effect.
- “Think” fades and rises upward.
- “Homeopathy.” reveals with a smooth left-to-right mask animation.
- “Think Somani.” reveals slightly after it with a soft upward motion.
- Each word should have a subtle stagger.
- Floating particles begin moving only after the hero has loaded.
- Animation must feel premium and slow, not flashy.
2. FLOATING TYPOGRAPHY
The large hero text should have extremely subtle continuous movement:
- 2–5px vertical floating
- very subtle horizontal movement
- different timing for each text layer
- slight parallax depth between “Think”, “Homeopathy.” and “Somani.”
- NEVER make it look shaky or distracting.
3. BACKGROUND MOTION
Create several independent background layers:
- deep navy gradient
- blurred crimson red glow
- blurred green botanical glow
- soft light particles
- subtle botanical silhouettes
Each layer should move at a different speed.
Use mouse movement to create a very subtle desktop parallax effect:
- background: slowest
- botanical blur: medium
- decorative particles: slightly faster
- typography: extremely subtle
4. SCROLL PARALLAX
When the user scrolls:
- Hero typography slowly moves upward at a different speed from the background.
- Background blur layers move at different speeds.
- Logo slightly scales down.
- Decorative botanical elements drift horizontally.
- Hero gradually fades as the next section enters.
- Use smooth interpolation rather than abrupt movement.
5. HERO EXIT TRANSITION
As the user scrolls past the hero:
- “Think Homeopathy.” slowly moves upward.
- “Think Somani.” moves slightly downward.
- opacity decreases progressively.
- background becomes darker.
- blurred red/green elements stretch slightly with the scroll.
- next section should appear through a cinematic crossfade.
6. SCROLL REVEAL FOR ALL FUTURE SECTIONS
Every major section should animate into view:
- text: fade + translateY
- images: fade + scale
- cards: staggered reveal
- headings: word/line reveal
- decorative elements: delayed movement
Use IntersectionObserver or GSAP ScrollTrigger.
7. HOVER INTERACTIONS
Buttons:
- magnetic hover effect
- smooth scale
- subtle glow
- arrow moves 4–6px on hover
Images/cards:
- slight image scale on hover
- smooth 500–700ms transition
- subtle shadow/depth increase
Typography:
- subtle color transition between brand colors
- no excessive text effects.
8. PAGE TRANSITIONS
Navigation between major pages/sections should feel cinematic:
- smooth fade
- slight blur
- subtle scale transition
- no hard/instant visual jumps.
9. MICRO-INTERACTIONS
Include:
- floating particles
- subtle cursor-following glow
- hover magnetic buttons
- smooth scroll
- soft text reveals
- image reveal masks
- staggered elements
- subtle depth movement
10. PERFORMANCE
Animations must remain smooth at 60fps.
Prefer:
- transform
- opacity
- filter where appropriate
Avoid expensive continuous layout calculations.
Use GSAP + ScrollTrigger for complex animation and Lenis (or equivalent) for smooth scrolling.
Respect prefers-reduced-motion and provide a reduced-motion experience.
IMPORTANT DESIGN RULE:
The animation should feel like a premium luxury wellness brand — slow, elegant, cinematic and intentional.
DO NOT make it:
- flashy
- gaming-like
- overly neon
- excessive
- childish
- full of bouncing elements
The hero should feel like a premium fashion/editorial website combined with a modern wellness brand.

other than Think” “Homeopathy.” “Think Somani no text shouldb  be thier

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/b72e7607-983f-400b-9148-78f88d9be7d1).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
