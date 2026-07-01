## Plan

Move the team photo from its current standalone `TeamPhotoBanner` section (below Hero) into the Hero section itself, positioning it as a large atmospheric background behind the "We Love Helping Create Beautiful & Healthy Smiles" headline.

### What will change
- Remove the separate `TeamPhotoBanner` section from the page flow.
- Use the team photo as a full-bleed or large background image within the Hero section.
- Overlay a dark gradient or scrim on the image so the white headline text remains highly readable.
- Adjust the Hero layout so the text block sits over the left portion of the image, while the image extends behind it.
- Keep the trust badges, CTA buttons, and phone number visible and accessible below the headline.

### Why this approach
- This directly satisfies "bigger" (full-bleed hero background) and "closer to the top" (inside the Hero section, the topmost content area).
- "Behind the words" is achieved by making the image a background layer with the text overlaying it.
- The dark navy gradient (`#1A2B49`) aligns with the existing brand palette and ensures sufficient contrast for the white/primary-colored headline.

### Files to edit
- `src/routes/index.tsx`: Restructure the Hero component, remove `TeamPhotoBanner`, and adjust the `Home` component layout order.