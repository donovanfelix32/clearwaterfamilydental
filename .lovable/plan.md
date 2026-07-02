## Plan

Restructure the mobile Hero so the team photo is clearly visible behind the headline, add a Clearwater Family Dental brand strip above the photo, and make the photo occupy roughly half the first mobile screen.

### Mobile layout (top to bottom, first screen)
1. **Brand strip** (above the photo, below the sticky header):
   - Centered "Clearwater Family Dental" wordmark in Poppins bold, with "Clearwater, FL" small caps subtitle.
   - Compact vertical padding so it doesn't eat the photo's space.
2. **Photo hero band** — height `50vh` on mobile:
   - Team photo as background, `object-cover object-top` so faces stay in frame.
   - Light overlay only (dark gradient from bottom ~60% → transparent at top) so the photo reads clearly.
   - Headline "We love helping create beautiful, healthy smiles." overlaid on the bottom of the band in white with a text-shadow for legibility.
3. **Content block** below the photo band (still part of Hero):
   - Trust pill ("Accepting New Patients"), supporting subheads, CTAs (Schedule Appointment / Call Now), and the 4 trust stats — all on white background for maximum readability.

### Desktop
- Keep the existing full-bleed image hero with side gradient and left-aligned text block (unchanged behavior). The new brand strip and split-band structure are mobile-only via responsive classes.

### Copy changes
- Update the headline text to exactly: "We love helping create beautiful, healthy smiles." (replaces the current "We Love Helping Create Beautiful & Healthy Smiles" split styling on mobile; desktop keeps the accent-colored version).

### Files to edit
- `src/routes/index.tsx`: rewrite the `Hero` component to implement the mobile brand strip + 50vh photo band + content block, keeping the desktop layout intact.

No other sections, styles, or assets change.
