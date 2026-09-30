<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- The homepage uses the uploaded Somani floral symbol as a CDN asset pointer and renders the requested headline as live type; this preserves the original artwork while allowing cinematic text motion.
- The homepage uses GSAP/ScrollTrigger and Lenis only after client mount, with a reduced-motion fallback; this keeps server rendering safe and motion accessible.
