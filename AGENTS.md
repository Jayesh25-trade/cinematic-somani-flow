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

- The homepage renders the uploaded Somani floral symbol from its CDN asset pointer as one persistent image across loading and the final view; this prevents a visible logo jump during the transition.
- The loading sequence waits for the logo image and reaches 100% before fading only the loading layer; this keeps the sole final-screen element stationary and respects reduced-motion preferences.
