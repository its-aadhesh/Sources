# Implementation Plan

## DESIGN PLAN

### 1. Planning boundary and reference status

This is a design and architecture specification only. No implementation code, project files, commands, or configuration changes are included.

**No reference websites, screenshots, or design files are attached to this conversation.** Consequently:

- I cannot truthfully analyze individual references or attribute design decisions to them.
- The direction below is an **original, implementation-ready baseline derived from your brief**, not a reference-validated design.
- Palette, typography, composition, and motion are explicit creative recommendations.
- References supplied later should be evaluated against this baseline before implementation—not layered onto it indiscriminately.

### 2. Recommended creative direction: “A New Perspective”

Use **one signature pair of eyewear as the central visual object**, but do not make the entire website dependent on a continuous 3D spectacle.

The strongest interpretation of your idea is:

> A cinematic showroom entrance that transitions into a calm, exceptionally usable optical store.
> 

The brand experience has three connected modes:

1. **Discover:** Sculptural eyewear, editorial typography, carefully controlled light.
2. **Shop:** Clear categories, consistent product imagery, fast interactions.
3. **Manage:** The same catalog and visual language with restrained business tools.

The connection between these modes should come from material, typography, spacing, and interaction quality—not from putting floating 3D objects on every page.

### 3. Important refinements to the original brief

| Potential weakness | Recommended resolution |
| --- | --- |
| A long scroll-controlled hero could delay shopping. | Limit the cinematic sequence to three chapters. Keep “Shop collection” visible immediately and provide a “Skip experience” link. |
| Persistent 3D across dashboards would compete with products and consume GPU resources. | Restrict active 3D to the landing hero and an optional product-detail viewer. |
| “Business dashboard” could mean a wholesale buyer portal or a merchant administration interface. | For this prototype, interpret Business as a **demo store-operator account**, since inventory, listings, pricing, and orders were requested. Include the same shopping catalog as its default view. |
| Public business signup could imply anyone can administer a real store. | Clearly label it a simulated business workspace. Future production access must require server-side authorization and appropriate approval. |
| Gmail, Google, Email, and Business Email overlap. | Offer Google, Email, and Mobile as authentication methods. On business registration, offer Personal email and Work email as email-path choices, with a distinct “Business email” label where requested. |
| Requiring signup before browsing would add unnecessary friction. | Allow guest shopping, wishlist, cart, and mock checkout. Authentication unlocks the dedicated account experience rather than the catalog itself. |
| Hover-only commerce actions would fail on touch and keyboard. | Keep wishlist and purchase controls discoverable without hover. Hover refines the presentation; it never unlocks essential functionality. |
| “Blue-light” products can invite unsupported health claims. | Present coating and lens characteristics without claiming disease prevention, treatment, or guaranteed reduction of eye strain. |
| A prototype that looks like real authentication or payment could mislead visitors. | Explicitly identify simulated authentication and checkout at the relevant moments. Collect no actual payment credentials. |
| A photorealistic glasses model may not be available. | Define a quality-controlled 3D asset strategy and a deliberate static fallback. Do not let missing assets block the store. |

### 4. Visual direction

**Personality:** Precise, composed, contemporary, material-focused.

**Palette:** Warm porcelain, deep ink, muted teal, brushed titanium, and limited pale-aqua optical highlights.

**Typography:** A geometric editorial display face paired with a highly readable interface sans serif.

**Composition:** Oversized but controlled typography; asymmetrical hero; generous product spacing; thin structural lines; product photography with consistent camera, scale, and lighting.

**Avoid:** Black-and-gold luxury clichés, neon cyberpunk styling, ubiquitous glass panels, decorative dashboard charts, and endless scroll effects.

### 5. Experience architecture

- **Landing:** Cinematic introduction with immediate shopping access.
- **About:** Brand philosophy and transparent prototype content.
- **Public shop:** Full catalog, filters, search, product details.
- **Customer workspace:** Shopping-first account experience.
- **Business workspace:** Catalog-first experience with inventory, listings, orders, and a small overview.
- **Shared commerce:** Wishlist, cart, checkout, confirmation.
- **Authentication:** Dedicated, accessible pages with progressive forms.

### 6. Technical direction

For a new project, recommend:

- **Next.js + React + TypeScript:** Routing, typed UI, future integration boundaries.
- **Tailwind CSS with design tokens:** Consistent styling without a generic component-library appearance.
- **React Three Fiber + selected Drei utilities:** Isolated, maintainable 3D experiences.
- **Motion:** Interface animation and scroll-progress coordination.
- **Zustand:** Small, structured client-state stores.
- **Selected Radix primitives:** Accessible dialogs, menus, tabs, and tooltips.
- **Vitest, Testing Library, Playwright, and axe:** Logic, interaction, end-to-end, and accessibility testing.

Do not add GSAP, a smooth-scroll library, or a large dashboard/chart package by default. This experience does not require them.

### 7. Planning assumptions

The specification below makes these explicit assumptions:

- English-language prototype.
- Indian retail context with **INR pricing**, subject to your confirmation.
- No real store address, founding date, certifications, or business claims are invented.
- Business means a simulated store operator, not wholesale procurement.
- No real payments, prescriptions, identity verification, emails, SMS, or Google OAuth.
- Mock state persists locally where appropriate; sensitive form input does not.
- Real references remain a future design-validation input.

---

## FINAL ANTIGRAVITY IMPLEMENTATION PROMPT

# SRI OPTICALS — Premium 3D Optical Commerce Prototype

## 1. Mission

Build a polished, fully interactive frontend prototype for **SRI OPTICALS**, a premium optical business.

The website must combine:

- A cinematic optical showroom entrance.
- A refined eyewear shopping experience.
- Strategic, high-quality 3D.
- Functional customer account flows.
- A compact business workspace.
- Realistic local-state commerce.
- An architecture ready for future backend integration.

This is a **frontend prototype**, not a production authentication, payment, medical, or inventory system.

Every visible primary interaction must work. Do not use decorative buttons that do nothing.

Use this specification as the implementation contract. Make reasonable implementation-level decisions where needed, but do not replace the specified design with a generic e-commerce or dashboard template.

### Priority order

When requirements compete, prioritize:

1. Functional correctness.
2. Accessibility and comprehensibility.
3. Brand and product presentation.
4. Performance.
5. Cinematic enhancement.

The store must remain usable when 3D, animation, persistence, or nonessential imagery fails.

---

If references are supplied before implementation, analyze each for:

1. Visual language.
2. Layout and spacing.
3. Typography.
4. Palette and material treatment.
5. Navigation.
6. Interaction patterns.
7. Animation.
8. 3D and scroll behavior.
9. Product presentation.
10. Strengths, weaknesses, and unsuitable elements.

Separate directly observed behavior from inferred behavior. A screenshot cannot establish how scrolling or animation actually works.

Adopt only ideas that strengthen the unified Sri Opticals direction. Do not copy another brand’s identity, proprietary assets, distinctive page composition, or exact animation sequence.

---

## 3. Creative Concept: “A New Perspective”

### Brand character

Sri Opticals should feel:

- Precise rather than technical.
- Luxurious rather than ostentatious.
- Futuristic rather than sci-fi.
- Editorial rather than promotional.
- Interactive rather than distracting.
- Welcoming rather than exclusive.

### Core metaphor

Eyewear changes perspective.

Use one signature pair of sculptural glasses to introduce the brand through controlled changes of angle, light, and composition.

As the visitor scrolls, the glasses reveal:

1. The brand.
2. The material and design story.
3. An invitation into the collection.

After this introduction, let products and commerce take priority.

### Design rules

- One main visual idea per section.
- One dominant call to action per decision point.
- No meaningless particles, floating rings, orbital diagrams, or decorative 3D objects.
- No custom cursor.
- No scroll hijacking.
- No mandatory animation before navigation.
- No full-site glassmorphism.
- No continuous animated gradients behind text.
- No fabricated awards, testimonials, store history, certifications, or customer statistics.

---

## 4. Brand Identity and Copy Direction

### Brand name

Always render the name as:

**SRI OPTICALS**

Use a typographic wordmark. Do not make a generic eyeglasses icon the entire identity.

### Primary headline

**A new perspective.**

### Supporting hero copy

**Distinctive frames. Considered details. Find your everyday signature.**

### Primary CTA

**Shop collection**

### Secondary CTA

**Our perspective**

Avoid exaggerated copy such as “revolutionary vision technology” or “the world’s finest eyewear.”

Product descriptions may describe mock materials, finish, shape, and intended style. Do not make unsupported clinical claims.

---

## 5. Scope and Non-Goals

### Required

- Landing and About pages.
- Public shopping.
- Customer and business signup.
- Mock sign-in.
- Customer shopping workspace.
- Business catalog and management workspace.
- Search, sorting, filtering.
- Product details and selected variant handling.
- Wishlist.
- Cart.
- Mock checkout and confirmation.
- Local persistence.
- Loading, empty, error, and unavailable states.
- Responsive layouts.
- Accessible navigation and forms.
- Performance-conscious 3D.

### To build after completing the frontend we will go to

- Real OAuth.
- SMS or email delivery.
- Real payments.
- Actual business verification.
- Prescription upload or prescription entry.
- Virtual try-on or facial camera access.
- Real delivery tracking.
- Multi-vendor marketplace operations.
- Wholesale tiers, purchase orders, or credit accounts.
- Live customer tracking.
- Complex analytics.
- A production CMS.
- A backend service.

Do not introduce these features as nonfunctional visual clutter.

---

## 6. Sitemap and Route Structure

Use explicit, refresh-safe routes.

| Route | Purpose |
| --- | --- |
| `/` | Cinematic landing |
| `/about` | Brand perspective and prototype disclosure |
| `/shop` | Public catalog |
| `/product/[slug]` | Product details |
| `/signin` | Mock sign-in |
| `/signup` | Customer / Business choice |
| `/signup/customer` | Customer registration |
| `/signup/business` | Business registration |
| `/customer` | Customer shopping home |
| `/customer/orders` | Customer demo order history |
| `/customer/account` | Basic local profile and preferences |
| `/business` | Business workspace, defaulting to Catalog |
| `/business/overview` | Compact operational overview |
| `/business/products` | Listings and inventory management |
| `/business/orders` | Demo order management |
| `/business/settings` | Business profile and prototype controls |
| `/wishlist` | Saved products |
| `/cart` | Full cart |
| `/checkout` | Mock checkout |
| `/order-confirmation/[id]` | Demo confirmation |

### Routing rationale

- Public shopping must not require account creation.
- Shared product URLs avoid duplicated customer and business product pages.
- Customer and business workspaces use distinct shells, but reuse commerce components.
- Dedicated authentication pages support mobile keyboards, browser navigation, and direct links better than a chain of modals.
- Business management routes remain separate from the catalog.
- Filters and sorting belong in query parameters.
- Product color selection may use a query parameter; validate it against available variants.
- Unknown products and missing orders need useful not-found states.

### Navigation behavior

- Home navigates to `/`.
- About Us navigates to `/about`.
- Shop navigates to `/shop`, `/customer`, or `/business` according to the active context.
- Preserve browser back behavior.
- Preserve catalog filters when returning from a product.
- Never auto-navigate to the shop simply because scrolling reaches the end of the hero.
- Do not use animation-only routes or interactions dependent on a previous page visit.

---

## 7. Global Navigation

### Desktop landing navigation

For viewports at least 1024px wide:

- Place a fixed vertical navigation rail on the left.
- Reserve approximately 104px so content does not sit beneath it.
- Use horizontal labels, not rotated text.
- Include **Home** and **About Us** with restrained line icons.
- Use a subtle vertical active marker and text-weight change.
- Keep labels visible throughout the landing experience.
- Show a compact wordmark near the upper-left of the main composition.

The navigation rail is primarily page-aware. A separate hero progress marker may indicate the current cinematic chapter.

### Top-right actions

For signed-out visitors:

- Profile icon (clicking it should have a sign in/ signup portal
- Wishlist with count.
- Cart with count.

For signed-in visitors:

- Account menu replacing signup/sign-in links.
- Wishlist.
- Cart.

Use a consistent 1.5–1.75px line-icon style.

### Count rules

- Wishlist count = distinct saved products.
- Cart badge = total units across lines.
- Hide zero-count badges visually, but preserve accessible labels.
- Example accessible name: “Cart, 3 items.”

### Interaction states

- Hover: subtle surface tint, no dramatic scale.
- Focus: visible 2px focus ring with offset.
- Active: stronger text and restrained accent.
- Tooltips: appear after approximately 400ms on pointer hover and immediately on keyboard focus where helpful.
- Tooltips must not contain essential information.
- Wishlist icon navigates to the wishlist page.
- Cart icon opens a drawer on desktop with a clear “View cart” route link.
- On mobile, Cart navigates directly to `/cart`.

### Tablet and mobile

Below 1024px:

- Replace the large left rail with a compact header.
- The leftmost control opens a drawer from the left.
- Home and About Us appear first in that drawer.

Below 768px:

- Keep wordmark, menu, wishlist, and cart in the header.
- Put labeled Sign Up and Sign In actions in the drawer.
- Keep navigation targets at least 44×44px.
- Respect safe-area insets.
- Do not force all desktop actions into one cramped row.

---

## 8. Landing Page Specification

### Desktop composition

Use light but bold design and website should look bold, the fonts should match the theme, do not look ai generated with cliche quotes

Within the main region:

- Left: headline and supporting copy.
- Right: large, carefully lit 3D eyewear.
- Top: wordmark and user actions.
- Bottom-left: scroll cue.
- Bottom-right or beneath CTAs: “Skip experience.”

The glasses may overlap decorative typography but must not obscure readable copy, navigation, or controls.

### First viewport

Display immediately:

- SRI OPTICALS.
- Primary CTA
- Static hero poster, replaced by 3D only when ready.
- Top-right account and commerce actions.

Do not show a blank canvas while the model loads.

### Desktop scroll structure

Use an approximately **220svh section containing a sticky 100svh stage**. The exact final height may be adjusted slightly after testing, but avoid a prolonged introduction.

Use native document scrolling and a normalized progress value across the sticky travel distance.

#### Chapter 1: Introduction — progress 0.00–0.30

- Glasses in a front three-quarter view.
- Main headline remains dominant.
- Establish frame material, lens edge, and temple silhouette.
- Minimal parallax.
- No large rotation before the visitor starts scrolling.

#### Chapter 2: Detail — progress 0.30–0.68

- Rotate approximately 25–40 degrees toward a side three-quarter view.
- Shift the object slightly right and upward.
- Reveal a concise message: **“Considered from every angle.”**
- Add two small material callouts, such as “Refined silhouette” and “Lightweight design.”
- Callouts are DOM content, not canvas text.
- Do not use claims that require actual product certification.
- Adjust lighting gently to reveal the temple and hinge.

#### Chapter 3: Collection — progress 0.68–1.00

- Move toward a balanced three-quarter pose.
- Reduce object scale slightly.
- Introduce **“Find your frame.”**
- Reveal Men, Women, and Children category entry cards in normal page flow.
- End with the 3D composition visually aligning with the first collection section.
- Do not morph an arbitrary model into unrelated product images.

### Content after the cinematic section

1. **Category entry:** Men, Women, Children.
2. **Selected frames:** Four featured products.
3. **Our perspective:** Short editorial panel linking to About.
4. **Footer:** Navigation, prototype status, accessibility-related preferences where appropriate.

Avoid fake testimonials and unsupported trust badges.

### Scroll and accessibility rules

- “Skip experience” scrolls to the collection section and moves focus to its heading.
- Primary Shop CTA navigates directly to the relevant catalog.
- Scrolling must work normally in both directions.
- No snapping that traps the visitor.
- No wheel-event interception.
- Chapter content must have logical DOM order.
- Hidden chapter links must not remain tabbable.
- Reduced-motion mode converts the introduction into a static hero plus normal stacked content.

---

## 9. 3D Art Direction

### Signature object

One premium-looking pair of eyewear:

- Soft rectangular or rounded-square front.
- Smoked transparent or dark acetate frame.
- Brushed titanium-colored temple detail.
- Restrained lens reflections.
- Clearly recognizable hinges, bridge, and temple geometry.

The model should read as eyewear at a glance. Avoid an abstract wireframe or exaggerated sci-fi visor.

### Lighting

- Broad soft key light.
- Subtle fill.
- One restrained cool edge highlight.
- Warm neutral environment.
- Soft grounding shadow.
- Moderate reflections that reveal form without obscuring it.

Avoid saturated RGB lighting, heavy bloom, chromatic aberration, and moving spotlights.

### Rendering strategy

- React Three Fiber owns the 3D scene.
- Use selected Drei utilities where they reduce complexity.
- Prefer GLB/glTF with supported mesh compression.
- Keep frame and lens material complexity controlled.
- Cap transmission/refraction cost.
- A lightly transparent physically plausible lens is preferable to expensive, noisy refraction.
- Prefer baked or inexpensive contact grounding rather than high-cost real-time shadow setups.
- Do not introduce post-processing unless a measured visual improvement justifies the cost.

### Asset hierarchy

Preferred:

1. Properly licensed, optimized optical model.
2. A carefully constructed original procedural model if no suitable asset is available.
3. A high-quality static render if the 3D result fails quality or performance requirements.

Record asset sources and licenses.

Never substitute an obviously low-quality model just to claim the site contains 3D.

### Product correspondence

If the hero model represents a mock product, associate it with the signature product **Prism 01**.

Only display an “Interactive 3D” product-viewer action for products whose model genuinely matches their appearance.

Do not reuse the hero model as if it represents every frame.

---

## 10. 3D Interaction and Runtime Behavior

### Hero

The hero is scroll-driven, not a drag-to-orbit playground.

- Normal pointer movement may produce extremely small optional parallax on capable desktop devices.
- Parallax must not move copy or navigation.
- Disable pointer parallax for reduced motion and touch devices.
- Stop rendering when the scene is offscreen.
- Pause on document visibility loss.
- Avoid an endless idle render loop once the object settles.

### Product viewer

Product 3D is opt-in:

- Show the image gallery first.
- Provide “Explore in 3D” for eligible products.
- Lazy-load the viewer after activation.
- Allow constrained rotation.
- Disable unrestricted panning.
- Bound zoom.
- Provide Reset view and Exit 3D.
- Provide keyboard-operable rotate-left and rotate-right buttons.
- Keep the image gallery available as an equivalent fallback.

### Animation ownership

Use a single scroll-progress source.

- Motion may measure and expose progress.
- Transfer progress through refs or motion values.
- React Three Fiber applies transforms.
- Do not trigger React component state updates on every scroll frame.
- Do not let CSS, Motion, and the render loop compete for the same transform.
- Reset scene lifecycle cleanly on route changes.
- Dispose geometry, textures, controls, and event listeners when no longer needed.

### Failure states

If model loading or WebGL fails:

- Keep the static poster.
- Remove any blocking loader.
- Allow the entire site to work.
- For the opt-in product viewer, display a small message: “Interactive view is unavailable. You can still explore the images.”
- Offer one retry, not an automatic retry loop.

---

## 11. Responsive 3D Strategy

### Desktop: 1024px and above

- Full three-chapter scene on capable hardware.
- Adaptive device pixel ratio, normally capped around 1.5.
- Optional higher cap only when measured performance remains healthy.

### Tablet: 768–1023px

- Static poster by default.
- Optional “Explore in 3D” activation if capability checks pass.
- No long pinned scroll sequence.
- Preserve the editorial composition in a two-column or stacked arrangement.

### Mobile: below 768px

- Static optimized hero image.
- Headline and CTAs first, product visual immediately following.
- Normal document flow.
- No autoplay video.
- No automatic WebGL download.
- Optional product-detail 3D remains user-initiated on supported devices.

### Reduced motion / constrained devices

Respect:

- `prefers-reduced-motion`.
- Data-saving signals where supported.
- WebGL availability.
- Runtime rendering performance.

Do not rely exclusively on user-agent detection.

If sustained rendering performance falls below an acceptable level, reduce DPR and material complexity first. If performance remains poor, switch to the poster without losing navigation or content.

---

## 12. About Page

I will give u refrence for this later, just create somethig very basic on your own as a place holder for now

### Content boundaries

Do not invent:

- Founding year.
- Store count.
- Physical address.
- Doctor affiliations.
- Manufacturing origin.
- Warranty promises.
- Clinical services.
- Certifications.

---

## 13. Authentication Architecture

### General behavior

Authentication is simulated and clearly disclosed.

Display concise copy:

**“Demo account experience. No real account is created.”**

Use dedicated pages with:

- Form panel.
- Brand panel or static eyewear artwork on desktop.
- Single-column form on mobile.
- Back navigation.
- Visible progress for multistep forms.
- Accessible field labels.
- Inline errors.
- Submission state.
- Success state.

Do not store passwords, OTP values, OAuth tokens, or authentication credentials.

### Signup role selection

At `/signup` show two large options:

#### Customer

“Explore frames, save favorites, and manage your demo orders.”

#### Business

“Explore the catalog and manage a simulated optical storefront.”

Each card includes a clear CTA.

Explain that business access is a prototype workspace, not real merchant authorization.

### Customer signup methods

- Continue with Google.
- Continue with Email.
- Continue with Mobile.

### Customer email flow

Step 1:

- Full name.
- Email.
- Demo password.
- Password visibility toggle.
- Inform users not to enter a real password.

Validation:

- Trim surrounding whitespace.
- Basic practical email validation.
- Minimum 8 characters for the demo password.
- No arbitrary composition rules.
- Validate on blur and submission.
- Do not show errors before the user interacts.

Step 2:

- Review name and email.
- Explain local demo profile behavior.
- Create demo profile.

Keep password input only in transient form state. Discard it after completion or abandonment.

### Mobile flow

Step 1:

- Full name.
- Country code.
- Mobile number.

Default country code to +91 for this prototype.

Step 2:

- Six-digit demo OTP.
- Explicit helper: **“Demo code: 123456. No SMS is sent.”**
- Paste supported.
- Prefer a single accessible input visually segmented into six positions.
- Incorrect-code state.
- Resend simulation with a 30-second cooldown.
- Timer cleanup on unmount.

Normalize phone values without pretending to verify ownership.

### Google flow

Do not redirect to Google or imitate an actual Google credential page.

Instead:

- Open a branded demo explanation.
- State: “Google sign-in is simulated in this prototype.”
- Offer “Continue as demo customer” or the corresponding business choice.
- Allow cancellation.
- Create the relevant demo session after confirmation.

### Business signup

Methods:

- Google.
- Personal email.
- Mobile.
- Business email.

Personal email and Business email use the same underlying email adapter. Their labeling and onboarding context differ.

After identity method completion, collect:

- Business name — required.
- Contact person — required, prefilled where available.
- Business category — required:
    - Optical retailer.
    - Eyewear brand.
    - Distributor.
    - Other.
- City — required.
- Work email — optional unless used as the selected signup identity.

Do not require GST documents, business files, or financial details.

Show:

**“Business verification: Not connected in this prototype.”**

Do not display a verified badge after mock registration.

### Sign-in

Provide tabs or a clear method switch:

- Email.
- Mobile.
- Google demo.

Also provide:

- Continue as demo customer.
- Continue as demo business.

For saved local profiles:

- Email lookup restores the matching demo profile.
- The demo password is validated only for form completeness, not credential security.
- Disclose that password verification is simulated.
- Mobile uses the visible demo OTP.
- No matching profile produces “No local demo profile found” with signup and demo-account actions.

Do not imply secure authentication.

### Redirects and sessions

- Signup sends the user to the appropriate workspace.
- Sign-in honors a validated internal return destination when applicable.
- Reject external or inappropriate role-specific return destinations.
- Signing out removes the active session reference, not all local catalog or profile data.
- Protected route behavior is for prototype UX only.
- Explicitly document that real protection requires server authorization.

---

## 14. Customer Workspace

### `/customer`

A shopping-first dashboard, not an analytics dashboard.

Include:

- Small greeting: “Welcome back, [first name].”
- Search.
- Men / Women / Children audience navigation.
- Product-type controls.
- Featured or recently introduced collection strip.
- Product grid.
- Wishlist and cart access.
- Compact links to Orders and Account.

Do not fill the top of the page with cards such as “Total spent” or “Shopping score.”

### Audience architecture

Use separate concepts:

- **Audience:** Men, Women, Children.
- **Product type:** Eyeglasses, Sunglasses, Reading glasses, Sports eyewear.
- **Attributes/collections:** Premium, Blue-light option, Lightweight, New.

Do not treat every overlapping attribute as an independent category.

Unisex adult products appear in both Men and Women results.

### Customer orders

- Show only orders associated with the active demo customer.
- Display date, order number, status, item count, and total.
- Expand or open a read-only detail panel.
- Include a meaningful empty state.
- No reorder action unless it is implemented with stock and price revalidation.

### Account

Allow editing:

- Display name.
- Preferred audience, optional.
- Reduced-motion preference, optional override in addition to system preference.

Show identity method read-only.

Do not add unimplemented password security controls.

---

## 15. Catalog UX

### Desktop layout

- Catalog heading and concise context.
- Audience tabs.
- Search field.
- Filter sidebar approximately 220–248px wide.
- Product grid occupying the remaining space.
- Result count and sort control above the grid.

Typical grid:

- Four columns when the available content region permits.
- Three columns on smaller desktops.
- Two columns on tablets and mobile.
- One column only at very narrow widths where two cards become unusable.

### Search

Search against:

- Product name.
- Shape.
- Material.
- Color.
- Type.
- Relevant tags.

Use approximately 250ms debounce.

Provide:

- Search icon.
- Clear action.
- Result count.
- No-result state.
- URL query persistence.

Do not add a search overlay if an inline search field is sufficient.

### Filters

Required:

- Audience.
- Product type.
- Price range.
- Shape.
- In-stock only.

Optional secondary filter:

- Material.

Use checkboxes and numeric price fields. A range slider may be supplementary, not the only accessible input.

### Sorting

- Featured.
- Price: low to high.
- Price: high to low.
- Top rated.
- New arrivals.

Use deterministic tie-breakers.

### Filter state

- URL is the source of truth for shareable catalog selections.
- Browser back restores prior filtering.
- Show active filter chips.
- Clear individual filters.
- Clear all.
- Invalid query values are ignored or normalized safely.
- Preserve originating catalog URL when navigating into product details.

### Empty results

Show:

- “No frames match this selection.”
- Suggest relaxing filters.
- Clear filters action.
- Keep search and navigation available.

---

## 16. Mock Product Catalog

Create **24 original mock products** using the following seed direction.

Prices are in INR and represent the displayed tax-inclusive unit price for the default configuration.

I also want to add pictures for this how to do so, help me by giving step by step instructions on how to add photos to listings 

| ID | Product | Audience | Type | Material / shape | Price |
| --- | --- | --- | --- | --- | --- |
| SO-001 | Prism 01 | Men, Women | Eyeglasses | Acetate, soft rectangle | ₹4,990 |
| SO-002 | Axis Titanium | Men, Women | Eyeglasses | Titanium, rectangle | ₹7,490 |
| SO-003 | Meridian Square | Men | Eyeglasses | Acetate, square | ₹3,290 |
| SO-004 | Halo Round | Men, Women | Eyeglasses | Metal, round | ₹3,790 |
| SO-005 | Muse Cat-Eye | Women | Eyeglasses | Acetate, cat-eye | ₹4,290 |
| SO-006 | Form Petite | Women | Eyeglasses | Acetate, petite rectangle | ₹2,790 |
| SO-007 | Orbit Junior | Children | Eyeglasses | Flexible polymer, round | ₹1,790 |
| SO-008 | Sprout Flex | Children | Eyeglasses | Flexible polymer, oval | ₹1,990 |
| SO-009 | Nova Teens | Children | Eyeglasses | Acetate, rectangle | ₹2,390 |
| SO-010 | Solstice Aviator | Men, Women | Sunglasses | Metal, aviator | ₹4,990 |
| SO-011 | Dune Square | Men, Women | Sunglasses | Acetate, square | ₹3,990 |
| SO-012 | Riviera Cat-Eye | Women | Sunglasses | Acetate, cat-eye | ₹4,490 |
| SO-013 | Eclipse Wrap | Men, Women | Sports eyewear | Polymer, wrap | ₹5,490 |
| SO-014 | Pace Shield | Men, Women | Sports eyewear | Polymer, shield | ₹4,790 |
| SO-015 | Sunbeam Kids | Children | Sunglasses | Flexible polymer, round | ₹1,890 |
| SO-016 | Studio Clear | Men, Women | Eyeglasses | Clear acetate, square | ₹2,990 |
| SO-017 | Pixel Slate | Men | Eyeglasses | Acetate, rectangle | ₹3,490 |
| SO-018 | Aura Rose | Women | Eyeglasses | Metal, geometric | ₹3,690 |
| SO-019 | Chapter One | Men, Women | Reading glasses | Acetate, rectangle | ₹1,490 |
| SO-020 | Chapter Air | Men, Women | Reading glasses | Metal, oval | ₹1,990 |
| SO-021 | Atelier Rimless | Men, Women | Eyeglasses | Titanium, rimless | ₹8,990 |
| SO-022 | Contour Titanium | Men, Women | Eyeglasses | Titanium, geometric | ₹9,490 |
| SO-023 | Tide Transparent | Men, Women | Eyeglasses | Clear acetate, round | ₹3,190 |
| SO-024 | Vector Sport | Men, Women | Sports eyewear | Polymer, wrap | ₹3,990 |

### Catalog rules

- Each product has two or three plausible color variants.
- At least two products are out of stock.
- At least four have a low-stock variant.
- Most products have healthy inventory.
- Maximum purchase limit defaults to five units per sellable SKU; selected premium items may use three.
- Up to four products may carry modest mock discounts.
- Discounted prices must be lower than compare-at prices.
- Avoid permanent-sale styling.
- Mark SO-002, SO-021, and SO-022 as Premium.
- Use blue-light coating as an optional configuration on appropriate frames, not a clinical promise.
- Give SO-001 the matching hero 3D model when available.

### Product assets

Use original or properly licensed images.

Every product must have a distinct visual identity through geometry, finish, color, or construction.

Do not show the same pair of glasses for all 24 products under different names.

Provide:

- Consistent 4:3 product-card image.
- Front or three-quarter view.
- Side/detail alternative where available.
- Color-correct variant imagery.
- Descriptive alt text.
- Defined dimensions to prevent layout shift.

If external assets cannot be obtained, create a coherent original set of rendered eyewear visuals. These may be stylized but must remain recognizably optical and internally consistent.

Avoid hotlinked assets that may disappear.

---

## 17. Product and Commerce Data Model

Centralize data. Do not hardcode products independently inside pages.

### Product

Conceptually include:

- Stable ID.
- Slug.
- Name.
- Product type.
- Audience array.
- Collection tags.
- Short description.
- Full description.
- Material.
- Shape.
- Frame dimensions in millimeters.
- Fit label.
- Featured rank.
- Created date.
- Listing status.
- Gallery assets.
- Optional model asset.
- Variant references.
- Lens-option references.
- Review references.

### Sellable SKU

Each allowed color/lens combination has:

- SKU ID.
- Product ID.
- Color variant ID.
- Lens option ID.
- Unit price in integer paise.
- Optional compare-at price.
- Stock.
- Purchase limit.
- Availability status.
- Matching visual reference where relevant.

Inventory, cart identity, pricing, and purchase limits operate on SKUs—not ambiguous product names.

### Lens options

Keep selection practical:

- Standard clear demo lens where applicable.
- Optional blue-light coating on supported frames.
- Fixed sun lens for sunglasses.
- Limited reading strengths for reading products, such as +1.00, +1.50, and +2.00.
- Explicitly state reading options are mock catalog configurations, not a prescription recommendation.

No prescription workflow.

### Reviews

For each product:

- Seed 6–16 written demo reviews.
- Include mock display name, date, rating, title, and short body.
- Label reviews collectively as demo content.
- Do not use “Verified purchase” unless the demo data actually models that relationship.
- Calculate rating and review count from the seeded records.
- Do not show a rating count that contradicts the dataset.
- No “Write review” button unless its full local submission flow is implemented; it is not required.

### Money

- Store money in integer paise.
- Format consistently using INR.
- Do not calculate totals using floating-point rupee values.
- Pricing values must be numeric data, not parsed display strings.

---

## 18. Product Cards

### Anatomy

1. Product visual.
2. Optional single status badge.
3. Wishlist button in a predictable corner.
4. Product name.
5. Short material/type descriptor.
6. Rating and review count.
7. Price and optional compare-at price.
8. Small color swatches.
9. Purchase action.

### Interactions

Desktop hover:

- Elevate by approximately 3px.
- Slight image scale up to 1.025.
- Shift shadow subtly.
- Crossfade alternate imagery if it exists.
- Increase visibility of the purchase action.

Do not tilt cards based on pointer position.

### Essential behavior

- Wishlist is available on touch, focus, and pointer devices.
- Product name/image opens product details.
- Wishlist and cart buttons do not accidentally trigger the product link.
- Use valid nonnested interactive markup.
- Existing wishlist state appears immediately.
- Out-of-stock products show a disabled purchase action with explanatory text.

### Quick add

If the item has one unambiguous sellable configuration:

- Add directly.

If configuration is required:

- Label the action “Choose options.”
- Open an accessible quick-selection dialog or sheet.
- Show color, lens option, unit price, and availability.
- Add only after a valid SKU is selected.

Never silently add an arbitrary reading strength or lens option.

### Success

- Update cart badge immediately after successful state mutation.
- Show a small toast with product name and “View cart.”
- Do not open the cart drawer automatically after every addition.

---

## 19. Product Detail Page

### Desktop

Two-column layout:

- Left approximately 58%: gallery or active 3D viewer.
- Right approximately 42%: purchase information.

The purchase panel may be sticky within its section, but must stop before the footer and not exceed available viewport height.

### Content order

1. Breadcrumbs.
2. Product name.
3. Material/type descriptor.
4. Rating and review count link.
5. Price.
6. Short description.
7. Color selector.
8. Lens/configuration selector where applicable.
9. Availability.
10. Quantity selector.
11. Add to cart.
12. Wishlist.
13. Concise demo-commerce notice.
14. Specifications.
15. Reviews.
16. Related products.

### Variant behavior

- Selecting a color updates imagery and selected SKU resolution.
- Lens choice updates price when applicable.
- Out-of-stock combinations remain explainable and unpurchasable.
- Quantity limit is the lesser of SKU stock and purchase limit.
- Account for quantity already in cart when adding more.
- Do not silently change quantity because a different option was selected; announce any necessary clamp.
- Invalid URL-selected variants fall back to a valid option with normalized URL state.

### Gallery

- Large initial image.
- Accessible thumbnail buttons.
- Swipe on mobile.
- No autoplay.
- Optional image zoom without trapping navigation.
- “Explore in 3D” appears only where supported.

### Specifications

Include:

- Frame material.
- Shape.
- Fit.
- Lens width.
- Bridge width.
- Temple length.
- Included demo configuration.

Do not state UV ratings, impact standards, or medical benefits without an explicit substantiated product-data basis.

### Related products

Show four products based on type or shape, excluding the current product.

Avoid separate “Related,” “Recommended,” and “You may also like” sections that repeat the same products.

### Mobile

- Gallery first.
- Purchase content immediately below.
- Optional bottom sticky purchase bar showing selected price and CTA.
- Add enough bottom padding so it does not cover content.
- Hide or reposition the bar when the on-screen keyboard is active or it would obscure a modal.

---

## 20. Wishlist

### Behavior

- Guests and signed-in demo profiles can save products.
- Save at product level, with preferred color recorded if selected.
- One wishlist entry per product.
- Toggle actions synchronize across cards, detail pages, header counts, and wishlist.
- Persist appropriate local state.

### Wishlist page

Use a product grid with:

- Product visual.
- Name.
- Current price.
- Availability.
- Remove.
- Add to cart or Choose options.

### Moving to cart

- Validate selected SKU and stock.
- Add successfully before removing the wishlist entry if the user chose “Move to cart.”
- If adding fails, retain the wishlist item.
- A normal “Add to cart” action may leave the saved product in the wishlist; labels must distinguish these behaviors.

### Empty state

Heading:

**Saved for a second look.**

Body:

“Your favorite frames will appear here.”

CTA:

**Explore frames**

### Unavailable products

Retain a recognizable entry with “Currently unavailable” and Remove. Do not silently erase saved products after business listing changes.

---

## 21. Cart

### Cart line identity

Use SKU ID as the line identity. Different configurations remain separate lines.

### Line content

- Product image.
- Product name.
- Selected color.
- Selected lens option.
- Current unit price.
- Quantity control.
- Line total.
- Remove action.
- Stock or price warning where relevant.

### Quantity

- Minimum one.
- Maximum min(stock, purchase limit).
- Existing line quantity must be considered during add operations.
- Numeric entry and plus/minus controls both work.
- Reject invalid values accessibly.
- Do not use quantity zero as an undocumented remove action.

### Cart drawer

Desktop:

- Approximately 420–480px wide.
- Modal focus management.
- Scrollable item region.
- Stable summary/footer.
- Escape and close button.
- Return focus to trigger on close.

Show:

- Items.
- Subtotal.
- Shipping estimate.
- View cart.
- Checkout.

### Cart page

Include:

- Full item list.
- Summary.
- Continue shopping.
- Proceed to mock checkout.
- Demo pricing disclosure.

### Pricing policy

For this prototype:

- Product prices include mock taxes.
- Shipping is ₹99 for merchandise subtotal below ₹3,000.
- Shipping is free from ₹3,000.
- Empty carts have no shipping charge.
- No coupon system.
- No extra tax is added at checkout.
- State clearly that totals are simulated.

Use one shared pricing function across drawer, cart, checkout, confirmation, and order records.

### Price and inventory changes

Business edits may affect cart contents.

When revalidating:

- Announce price changes.
- Identify unavailable lines.
- Mark excessive quantities.
- Do not silently remove products.
- Block checkout until invalid lines are resolved.
- Provide direct correction actions.

### Empty state

Heading:

**Your selection starts here.**

CTA:

**Browse the collection**

---

## 22. Mock Checkout

### Route

`/checkout`

### Principle

Simulate a complete purchase without real payment details.

Prominent but restrained notice:

**“Demo checkout. No payment will be taken and no order will be fulfilled.”**

### Steps

1. Delivery details.
2. Review.
3. Demo confirmation.

### Delivery details

Use a fictional prefilled demo address with a clear label.

Fields:

- Full name.
- Email.
- Mobile.
- Address line.
- City.
- State.
- Postal code.

Allow editing, but advise use of fictional information.

Do not persist delivery address, email, or phone in long-lived order storage. Keep them in checkout memory and discard on completion or reset.

### Payment

Show a single method:

**Demo payment**

Do not render card-number, CVV, UPI, banking, or wallet credential fields.

### Review

Display:

- Exact product configurations.
- Quantities.
- Merchandise subtotal.
- Shipping.
- Total.
- Nonfunctional-fulfillment disclosure.

Final button:

**Place demo order**

### Submission

- Disable repeat submission while pending.
- Use a local idempotency key so retries do not create duplicate orders.
- Revalidate listing status, stock, purchase limits, and current prices.
- If price changed, require the user to review the new total before resubmitting.
- If stock changed, return an actionable error.
- Successful submission creates one order.
- Decrement mock stock once.
- Clear the submitted cart once.
- Navigate to confirmation.

No stock reservation occurs merely from adding an item to cart.

### Confirmation

Include:

- Success icon.
- “Demo order placed.”
- Demo order number.
- Date.
- Items and configuration snapshot.
- Total.
- “No payment was taken.”
- Continue shopping.
- View orders for authenticated customers.

Do not claim that an email, SMS, shipment, or receipt was actually sent.

### Empty and failure handling

- Direct access with an empty cart shows a recovery state linking to Shop.
- Submission failure preserves the cart and current checkout step.
- Missing confirmation ID shows a helpful not-found state.
- Refreshing confirmation must not place another order.

---

## 23. Business Login

---

## 24. State Management and Persistence

Use Zustand for structured client state, not for every local field.

### State domains

- Demo session and profile references.
- Cart by guest/profile namespace.
- Wishlist by guest/profile namespace.
- UI state such as cart drawer.
- Catalog overrides and local orders through the mock service repository.
- Optional demo diagnostics.

Keep form input local to its form.

Keep shareable filters in the URL.

### Persistence

Use versioned local storage for:

- Nonsensitive demo profiles.
- Session profile reference.
- Cart lines.
- Wishlist entries.
- Business catalog overrides.
- Order item and totals snapshots.
- Preferences.

Do not persist:

- Passwords.
- OTPs.
- OAuth-like tokens.
- Payment credentials.
- Delivery addresses.
- Unnecessary personal information.

Explain that local demo data can be changed or inspected by the device user and is not secure account storage.

### Hydration

- Avoid server/client markup mismatch.
- Do not flash another profile’s state.
- Gate persisted badges or show neutral placeholders until hydration completes.
- Catalog content itself must not wait for storage hydration.

### Guest merge

On successful sign-in:

- Merge guest wishlist by product ID.
- Merge guest cart by SKU ID.
- Sum duplicate quantities only up to valid stock/purchase limits.
- Notify if merged quantities were capped.
- Clear the guest namespace only after successful merge.
- Do not repeat merging on refresh.

On sign-out:

- Preserve the profile’s saved state.
- Return to the guest namespace.
- Do not expose the previous profile’s wishlist or cart.

### Storage failure

If storage is blocked, corrupt, or full:

- Fall back to memory.
- Show a nonblocking notice that changes may not persist.
- Preserve shopping functionality.
- Validate persisted data before use.
- Use schema versioning and controlled reset/migration.

### Multi-tab behavior

Synchronize relevant storage changes where practical.

At minimum, listen for storage changes and re-read catalog/cart validity on tab focus.

State explicitly that local mock inventory is not production-grade concurrent inventory control.

---

## 25. Service Layer and Backend Readiness

UI components must not import and mutate seed arrays directly.

Define conceptual service boundaries for:

- Auth.
- Profiles.
- Catalog.
- Wishlist.
- Cart.
- Orders.
- Business catalog management.
- Preferences.

### Services should handle

- Typed inputs and outputs.
- Stable error categories.
- Async responses.
- Mock latency.
- Validation.
- Persistence adapters.
- Data normalization.
- Reset behavior.

### Error categories

Include meaningful distinctions such as:

- Validation failure.
- Not found.
- Unavailable SKU.
- Insufficient stock.
- Purchase limit exceeded.
- Price changed.
- Storage unavailable.
- Simulated network failure.
- Wrong demo role.

### Mock latency

Use short deterministic delays, approximately 250–650ms for action requests.

- Do not delay initial static product rendering unnecessarily.
- Do not introduce random failures.
- Failure simulation must be opt-in and reproducible.
- Allow tests to disable artificial latency.

### Future replacement

A future HTTP-backed adapter should replace the mock repository without rewriting:

- Product cards.
- Product detail layouts.
- Cart UI.
- Wishlist UI.
- Checkout steps.
- Business tables.

Use backend-neutral domain types. Translate provider-specific responses in adapters.

Real future systems must own:

- Credential verification.
- Authorization.
- Inventory validation.
- Pricing authority.
- Order creation.
- Payments.
- Sensitive personal data.

Do not suggest client-side role checks provide real security.

---

## 26. Design System

### Colors

Use these as initial tokens; verify contrast for actual combinations.

| Token | Value | Role |
| --- | --- | --- |
| Canvas | `#F4F2ED` | Warm main background |
| Surface | `#FFFFFF` | Forms, drawers, cards |
| Surface muted | `#E9E8E2` | Product image stages |
| Ink | `#162126` | Primary text |
| Muted text | `#566269` | Secondary copy |
| Primary teal | `#0B6460` | Main interactive accent |
| Teal hover | `#084E4B` | Hover/pressed emphasis |
| Pale aqua | `#DCEFEB` | Selected/filter backgrounds |
| Decorative border | `#CDD3CF` | Nonessential dividers |
| Control border | `#7C8985` | Input and control boundaries |
| Titanium | `#8A969C` | Material and ornamental details |
| Error | `#B3261E` | Errors |
| Warning | `#8A5400` | Low stock and warnings |
| Success | `#1E684A` | Success states |

### Usage

- light theme by default.
- One or more dark editorial panel is acceptable if it serves hierarchy.
- No theme switch required.
- Pale aqua is a surface, not small body text.
- Decorative borders must not be the sole indicator of required control boundaries.
- Never use color alone for status.

### Typography

Recommended:

- **Display:** Manrope, weights 500–700.
- **Body/UI:** Inter, weights 400–600.
- Use locally served optimized font assets where possible.

Scale:

- Hero: fluid approximately 52–112px.
- Page title: 36–56px.
- Section title: 28–40px.
- Subheading: 20–24px.
- Product title: 16–18px.
- Body: 16px.
- Compact interface copy: 14px.
- Metadata: 12–13px, never for essential lengthy content.

Guidance:

- Tight but readable display tracking.
- Body line-height around 1.5.
- Display line-height around 1.0–1.1.
- Product prices use tabular numerals where beneficial.
- Avoid tiny uppercase paragraphs.
- Navigation labels remain readable and conventional.

### Spacing

Use a 4px-based scale:

4, 8, 12, 16, 24, 32, 48, 64, 96, 128.

- Page gutters: 16px mobile, 24–32px tablet, 40–64px desktop.
- Main content width: approximately 1440px maximum.
- Editorial text width: approximately 60–70 characters.
- Sections: 64–112px vertical spacing depending on context.

### Corners

- Inputs and buttons: 10–12px.
- Product visual stages: 16–20px.
- Dialogs and drawers: 20–24px where appropriate.
- Pills only for chips and compact badges.
- Do not make every surface excessively rounded.

### Shadows

Use soft, low-opacity shadows.

- Product cards mostly rely on spacing and image stages.
- Elevation appears on interaction.
- Dialogs receive stronger but still neutral shadows.
- Avoid bright colored glows.

### Glass

Limited to:

- Navigation overlays where necessary.
- Tiny material callouts if readable.

Always provide an opaque-enough fallback. Do not place paragraphs on transparent reflective surfaces.

### Buttons

Required variants:

- Primary filled teal.
- Secondary outlined.
- Tertiary text.
- Icon.
- Destructive.
- Loading.
- Disabled.

Minimum touch height: 44px; primary commerce buttons preferably 48px.

Button text should describe the action, not say “Submit” everywhere.

---

## 27. Component Architecture

Build a focused reusable system.

### Shell and navigation

- Site shell.
- Landing navigation rail.
- Global action header.
- Mobile navigation drawer.
- Customer shell.
- Business shell.
- Footer.
- Breadcrumbs.

### Brand and 3D

- Hero stage.
- Hero poster.
- Hero scene.
- Scroll chapter content.
- Chapter progress.
- Optional product viewer.
- Scene fallback.

### Commerce

- Catalog toolbar.
- Audience navigation.
- Filter panel.
- Active filter chips.
- Product grid.
- Product card.
- Product gallery.
- Variant selector.
- Lens selector.
- Rating summary.
- Review list.
- Quantity control.
- Wishlist toggle.
- Quick-selection dialog.
- Cart drawer.
- Cart line.
- Order summary.
- Checkout stepper.
- Order status badge.

### Forms and feedback

- Role-choice card.
- Auth method selector.
- Labeled input.
- Password field.
- OTP input.
- Inline error.
- Status notice.
- Skeleton.
- Empty state.
- Toast.
- Confirmation dialog.

### Business

- Workspace sidebar.
- Metric card.
- Inventory table/mobile list.
- Product edit panel.
- Order list.
- Order detail panel.

Do not create duplicate customer/business product cards unless their actual behavior diverges.

Use headless accessible primitives for focus and keyboard behavior, then apply the custom visual system.

---

## 28. Motion System

### Philosophy

Motion should explain:

- What changed.
- Where something came from.
- What is currently active.
- How the eyewear is constructed.

It should not make the interface wait.

### Timing

| Interaction | Duration |
| --- | --- |
| Color/focus feedback | 100–160ms |
| Button press | 100–140ms |
| Card elevation | 180–240ms |
| Tooltip | 120–160ms |
| Dialog/drawer entrance | 220–300ms |
| Form-step transition | 180–240ms |
| Route content entrance | 180–260ms |
| Editorial reveal | 350–550ms |

Use restrained ease-out curves, such as a cubic-bezier close to `(0.22, 1, 0.36, 1)`.

Use springs only where they improve direct feedback, with minimal overshoot.

### Page transitions

- Keep global navigation stable.
- Fade and translate incoming content by at most 8px.
- Do not wait for a long outgoing animation before navigating.
- Manage focus and scroll restoration independently of animation.
- Do not animate every child in a long product grid.

### Product grids

- First visible group may use a small stagger capped around 160ms total.
- Filtering should prioritize quick result updates.
- No waterfall animation across all 24 products.

### Modals

- Desktop dialog: subtle fade and scale from approximately 0.98.
- Mobile sheet: short upward entrance.
- No bouncing.

### Loading

- Skeletons match final geometry.
- Reduced-motion mode uses static skeletons.
- Buttons retain width while loading.
- Do not show a full-page loader for a single cart mutation.

### Reduced motion

- Disable parallax.
- Disable scroll-driven camera movement.
- Remove route translation.
- Replace choreography with static content.
- Use instant changes or short opacity transitions.
- Respect preferences before initializing the 3D scene.

---

## 29. Accessibility Requirements

Target **WCAG 2.2 AA**.

### Structure

- Semantic header, navigation, main, section, aside, and footer.
- One clear page-level heading.
- Logical heading hierarchy.
- Skip-to-content link.
- Canvas is not the sole source of product or brand information.

### Keyboard

Every required flow must work with keyboard only.

- Visible focus.
- Logical tab sequence.
- Accessible tabs and menus.
- Escape closes overlays.
- Focus trapped only inside active modal dialogs.
- Focus restored to the trigger.
- No hover-only actions.
- No keyboard trap in 3D.

### Forms

- Programmatic labels.
- Correct autocomplete attributes.
- Appropriate input types and input modes.
- Inline errors associated with fields.
- Submission error summary when multiple fields fail.
- Focus first invalid field or error summary appropriately.
- OTP supports paste and screen readers.
- Password visibility button has a meaningful changing accessible label.

### Commerce announcements

Use polite live regions for:

- Added to cart.
- Wishlist updated.
- Quantity changed.
- Filter result count.
- Price change.
- Stock problem.
- Order success.

Do not announce continuous animation or every keystroke.

### Contrast and zoom

- Verify text contrast and control boundaries.
- Support 200% zoom without losing functionality.
- Verify reflow at 320 CSS pixels.
- Sticky elements must not obscure focused controls.
- Color swatches need text labels and selected-state indicators.

### Images and 3D

- Meaningful product alt text.
- Decorative duplicate imagery uses empty alt.
- Hero canvas is decorative when equivalent content exists.
- Product viewer has adjacent instructions and image alternatives.
- No flashing effects.

---

## 30. Performance and Asset Budgets

Treat these as engineering targets to verify, not claims to display to users.

### Experience targets

Under a documented mobile test profile:

- LCP target: 2.5 seconds or less.
- CLS target: 0.1 or less.
- INP target: 200ms or less once measurable.

For the enhanced desktop hero:

- Target smooth 50–60fps on a representative midrange desktop/laptop.
- Degrade gracefully rather than preserving expensive rendering at low frame rates.

### Loading strategy

- Server-render or pre-render meaningful page content.
- Initial hero poster is independent of WebGL.
- Eager-load only the true initial LCP image.
- Defer noncritical models and textures.
- Do not download hero 3D automatically on mobile.
- Product 3D loads only after opt-in.
- Catalog routes must not eagerly download the landing scene.

### Initial budgets

Aim for:

- Core compressed route JavaScript around or below 250KB excluding separately deferred 3D.
- Hero poster around 200KB mobile and 350KB desktop where visual quality permits.
- Hero model geometry payload around or below 1.5MB.
- Entire deferred hero 3D payload around or below 3MB.
- Approximately 60k–100k triangles maximum for the primary eyewear model, preferably fewer.
- Fewer than roughly 20 draw calls where practical.
- 1K textures by default; 2K only for a justified close-up asset.
- Small local environment map.

Document deviations with measurements and reasons.

### Runtime

- Use transforms and opacity for UI animation.
- Avoid layout-triggering frame-by-frame effects.
- Use one active main WebGL scene at a time.
- Cap DPR.
- Avoid unnecessary real-time shadows.
- Cache reusable assets.
- Release GPU resources on teardown.
- Pause offscreen work.
- No continuous pointer listeners doing expensive computation.
- Avoid virtualization for a 24-product grid; it adds complexity without need.

### Images

- Responsive image sizes.
- AVIF/WebP where practical.
- Explicit dimensions.
- Lazy loading below the fold.
- Asset fallbacks.
- Consistent cropping.
- No huge source files shipped unoptimized.

---

## 31. Recommended Technical Stack

For a new project:

### Next.js App Router, React, TypeScript

Use for:

- Route organization.
- Server-rendered static content.
- Clear client/server boundaries.
- Typed domain contracts.
- Future backend integration.

Do not mark the entire application as one client component.

### Tailwind CSS with CSS custom-property tokens

Use for:

- Consistent responsive styling.
- Shared spacing, colors, and surfaces.
- Efficient custom component styling.

Do not inherit a generic starter-kit aesthetic.

### React Three Fiber and selected Drei utilities

Use for:

- Hero scene.
- Optional product viewer.
- React lifecycle integration.
- Asset loading and controls where necessary.

### Motion

Use for:

- UI transitions.
- Scroll-progress observation.
- Small layout transitions.

Do not also install GSAP by default. The planned choreography is achievable with native scrolling, Motion, and the R3F render loop.

### Zustand

Use for:

- Session references.
- Cart.
- Wishlist.
- UI overlays.
- Client coordination.

Avoid duplicating service-repository data into several conflicting stores.

### Radix primitives

Use selectively for:

- Dialog.
- Tooltip.
- Tabs.
- Dropdown menu.
- Accessible selection controls where appropriate.

A full shadcn/ui installation is optional, not required. If used, heavily customize the selected primitives to this system.

### Tests

- Vitest.
- React Testing Library.
- Playwright.
- axe integration.

Use stable, mutually compatible package versions. If an existing repository is supplied, inspect and reuse viable infrastructure rather than replacing it unnecessarily.

---

## 32. Project Architecture Recommendation

Organize by domain and responsibility.

Recommended areas:

- `app`: routes, layouts, loading and error boundaries.
- `components/ui`: base controls and feedback primitives.
- `components/layout`: navigation and shells.
- `features/auth`: signup, sign-in, session UI.
- `features/catalog`: search, filters, product grids.
- `features/product`: details, gallery, configuration.
- `features/cart`: cart UI and orchestration.
- `features/wishlist`: saved-product flows.
- `features/checkout`: steps and order placement UI.
- `features/customer`: customer account pages.
- `features/business`: management UI.
- `three`: scenes, model loading, quality settings.
- `domain`: backend-neutral types and business rules.
- `services`: contracts and adapters.
- `data/mock`: seed products, reviews, orders, profiles.
- `stores`: client state.
- `lib`: money, validation, storage, URL utilities.
- `styles`: tokens and global styling.
- `public/assets`: optimized local assets.
- `tests`: unit, integration, and end-to-end coverage.
- `docs`: architecture, asset credits, prototype limitations.

This is a responsibility map, not a requirement to create empty folders.

Do not create abstractions with no current purpose.

---

## 33. Required User Journeys

### Journey 1: New customer

Landing → Sign Up → Customer → Choose method → Complete registration → Customer workspace → Filter catalog → Product → Select configuration → Wishlist or Cart.

Verify all state updates and route transitions.

### Journey 2: Returning customer

Landing → Sign In → Restore local profile or demo account → Customer workspace → Browse → Product → Cart.

Saved cart and wishlist restore correctly.

### Journey 3: Business

Landing → Sign Up → Business → Business workspace → Browse → Product (discounted rate + increased MOQ)→ Cart.

The account must remain visibly a demo workspace.

### Journey 4: Product discovery

Catalog → Audience → Type/filter → Product card → Product detail → Variant → Add to cart.

Browser back returns to the previous catalog selection.

### Journey 5: Checkout

Product → Add to cart → Cart → Change quantity → Checkout → Delivery demo details → Review → Place demo order → Confirmation.

One submission creates one order and decrements inventory once.

### Journey 6: Guest continuity

Guest browses → Saves products → Adds to cart → Signs in → Guest state merges → Continues without duplicate lines or lost wishlist items.

### 

---

## 34. Failure, Empty, and Loading State Contract

For every async-looking operation, define:

- Idle.
- Pending.
- Success.
- Failure.
- Retry or recovery.

Required states include:

| Area | Required recovery |
| --- | --- |
| Catalog load failure | Inline retry, navigation remains usable |
| No search results | Clear filters and edit search |
| Image failure | Designed neutral optical fallback |
| Model failure | Poster and optional retry |
| Signup validation | Specific inline correction |
| Incorrect OTP | Error without losing entered identity |
| Missing local profile | Signup or demo-account option |
| Wishlist mutation failure | Revert optimistic state and announce |
| Cart mutation failure | Preserve prior valid cart |
| Out-of-stock SKU | Disable purchase and explain |
| Changed price | Highlight and require review at checkout |
| Checkout failure | Preserve cart and step |
| Business save failure | Preserve edited form with retry |
| Storage failure | In-memory mode notice |
| Missing route entity | Helpful not-found page |
| Reset demo data | Confirmation and clear outcome |

No random simulated failures in normal operation.

Expose controlled failure simulation in demo settings or a documented developer diagnostics panel.

---

## 35. Testing Requirements

### Unit tests

Cover:

- Currency arithmetic.
- Shipping threshold.
- Compare-at validation.
- SKU resolution.
- Purchase limits.
- Cart merging.
- Wishlist deduplication.
- Filter combinations.
- Sort stability.
- Review averages and counts.
- Inventory validation.
- Order idempotency.
- Persistence parsing and migrations.
- Return-destination validation.

### Component tests

Cover:

- Quantity control.
- Product option selection.
- Out-of-stock card.
- Signup validation.
- OTP paste/error.
- Dialog focus behavior.
- Cart line warning.
- Business edit validation.
- Empty states.
- Loading states.

### End-to-end tests

Automate the required journeys, especially:

- Customer signup.
- Business signup.
- Demo sign-in.
- Guest-state merge.
- Wishlist persistence.
- Cart persistence.
- Variant-specific cart lines.
- Checkout.
- Duplicate-submit prevention.
- Business stock/price updates.
- Inventory conflict.
- Direct route refresh.
- Browser back and filters.
- Missing product route.
- Storage-disabled recovery where test tooling permits.
- WebGL-disabled fallback.
- Reduced-motion experience.

### Accessibility checks

- Automated axe scans on representative pages.
- Manual keyboard pass.
- Screen-reader smoke test.
- Zoom/reflow verification.
- Focus visibility beneath sticky navigation.
- Form-error announcements.

### Visual and responsive checks

Verify at approximately:

- 1440px desktop.
- 1280px laptop.
- 1024px compact desktop/tablet.
- 768px tablet.
- 390px mobile.
- 320px narrow reflow.

Check portrait and landscape behavior where practical.

### Performance reporting

Record:

- Device/profile used.
- Core page measurements.
- Deferred 3D payload.
- Scene complexity.
- Observed render performance.
- Fallback behavior.

Do not report unrun tests or fabricated scores as completed.

---

## 36. Implementation Sequence

### Milestone 1: Foundations

- Confirm assumptions.
- Establish design tokens.
- Set up routes and shells.
- Define domain types.
- Seed centralized catalog.
- Establish mock services and persistence.
- Build the static, accessible hero composition.

### Milestone 2: Working commerce

- Catalog.
- Search and filters.
- Product details.
- Variants.
- Wishlist.
- Cart.
- Pricing.
- Checkout.
- Confirmation.

### Milestone 3: Accounts and workspaces

- Role selection.
- Mock signup/sign-in.
- Customer account routes.
- Guest merge.
- Business catalog shell.
- Inventory editing.
- Orders.
- Settings.

### Milestone 4: Cinematic enhancement

- Validate hero model quality.
- Integrate progressive 3D loading.
- Add three-chapter choreography.
- Add optional product viewer.
- Implement quality scaling and fallbacks.

### Milestone 5: Polish and verification

- Motion refinement.
- Responsive review.
- Accessibility.
- Error-state verification.
- Performance optimization.
- Automated tests.
- Documentation.

Do not postpone basic commerce functionality until after a complex hero experiment.

---

## 37. Acceptance Criteria

The prototype is acceptable only when:

### Brand and visual quality

- The first viewport clearly identifies SRI OPTICALS.
- The hero is optical-focused and editorial, not a generic SaaS landing page.
- The design uses one coherent palette and typography system.
- Product imagery is consistent and meaningfully distinct.
- Business pages visibly belong to the same brand.

### Navigation

- Home and About Us remain discoverable.
- Signup, sign-in, wishlist, and cart work.
- All documented routes support direct entry and refresh.
- No primary CTA is a dead end.
- Browser back behaves predictably.

### Authentication

- Customer and Business choices are unmistakable.
- Google, email, and mobile demo methods work.
- Business email is represented without pretending it is a separate identity provider.
- OTP simulation works and is clearly labeled.
- Passwords and OTPs are not persisted.
- Real authentication is never implied.

### Commerce

- All 24 mock products are centrally defined.
- Ratings correspond to seeded reviews.
- Search, filters, sorting, and URL state work.
- Variant selections affect the correct SKU.
- Wishlist synchronizes across views.
- Cart quantities respect stock and limits.
- Totals match everywhere.
- Empty and unavailable states are complete.
- Checkout creates one demo order.
- No real payment input is requested.
- Cart clears only after successful order creation.

### Business

- Default business view contains the functional catalog.
- Product edits update shared local data.
- Inventory changes affect availability.
- Orders can move through the defined statuses.
- Overview values derive from data.
- Demo reset works after confirmation.
- No fake production verification appears.

### 3D and motion

- Shopping is usable before 3D loads.
- No scroll trapping.
- No hidden essential controls behind animation.
- Mobile does not automatically download the desktop scene.
- Reduced motion has a complete alternative.
- Model failure leaves a polished usable hero.
- Offscreen scenes stop consuming unnecessary rendering work.

### Architecture

- UI is separate from mock data.
- Service contracts are replaceable.
- State persistence is versioned.
- Money uses integer arithmetic.
- No sensitive authentication or payment data is stored.
- No secrets are included in the frontend.
- Asset provenance is documented.

### Accessibility and robustness

- Keyboard-only core journeys work.
- Dialog focus behavior works.
- Contrast and target sizes are verified.
- Forms communicate errors.
- Narrow layouts do not horizontally overflow.
- Loading and failure states do not destroy user progress.

---

## 38. Definition of Done

Deliver:

1. A runnable frontend prototype containing all required routes and flows.
2. A coherent custom Sri Opticals visual system.
3. A progressive-enhancement 3D landing experience with a deliberate static fallback.
4. A centralized 24-product mock catalog with variants, reviews, inventory, and optimized assets.
5. Functional local customer and business sessions.
6. Functional wishlist, cart, mock checkout, and order history.
7. Functional compact business management.
8. Responsive desktop, tablet, and mobile layouts.
9. Accessible interaction patterns and reduced-motion support.
10. Replaceable service adapters and documented backend integration boundaries.
11. Tests for the critical business rules and journeys.
12. A README explaining:
- How to run the project.
- Demo account options.
- Visible OTP behavior.
- Local persistence.
- Reset procedure.
- Failure simulation.
- Mock pricing/shipping rules.
- Business-role interpretation.
- Asset sources and licenses.
- Known limitations.
- Future backend integration points.
1. An honest verification summary distinguishing:
- Implemented and tested.
- Implemented but not verified.
- Deliberately out of scope.
- Any remaining issues.

Do not call the result production-ready. Do not claim tests, performance scores, accessibility compliance, or backend functionality that have not been verified.

**The finished experience should open like a carefully art-directed optical showroom, then behave like a dependable store. The 3D earns attention; the interface earns trust.**

## THIS WAS THE END OF THE FIRST PROMPT AFTER WHICH MORE CHANGES WERE INTRODUCED

## DESIGN PLAN

**Yes—these references meaningfully change the landing-page direction, but they do not require redesigning the shopping, authentication, or dashboard architecture.**

The earlier prompt described a relatively restrained 3D introduction. What you’re asking for now is more specific:

> **A scroll-directed product film: the eyewear changes angle, scale, and position while the surrounding composition tells the Sri Opticals story.**
> 

That should become the homepage’s defining experience—not simply a rotating object beside some text.

And yes: **we should remove the saturated blue direction entirely.** A light, softly lit environment can still feel cinematic. The drama comes from framing, material detail, shadows, and camera movement—not necessarily dark or intense backgrounds.

### 1. What the references actually tell us

I can analyze the screenshots you supplied. **I cannot inspect or play the live XREAL website in this chat**, so I will distinguish visible design characteristics from the dynamic behavior you described. I also cannot verify whether XREAL uses real-time 3D, video, or rendered image sequences.

#### Reference A: Meta / Ray-Ban design screenshot

**Visible characteristics**

- Oversized, tightly spaced sans-serif headline.
- Eyewear dominates the composition and overlaps the typography.
- A simple header contrasts with a highly expressive product presentation.
- Strong depth comes from product scale, cropping, reflections, and foreground/background layering.
- Minimal supporting text keeps attention on the product.
- Saturated blue provides a strong visual field.

**What we should borrow**

- The confidence of the product scale.
- The relationship between oversized typography and eyewear.
- A product-first hierarchy.
- The feeling that the product occupies an environment rather than an image box.

**What we should not borrow**

- The blue background.
- Meta or Ray-Ban branding and copy.
- AR interface graphics inside the lenses: Sri Opticals is not currently specified as a smart-glasses business.
- Severe cropping that prevents visitors from understanding the product.
- Playback controls visible in the reference presentation.
- Any assumption that the screenshot proves a particular scroll behavior.

#### Reference B: XREAL product overview screenshot

**Visible characteristics**

- Large three-quarter product view.
- Neutral environment with strong material definition.
- Dramatic cropping.
- Short, oversized headline.
- Distinct product and navigation layers.
- Broad negative space despite the large object.

**What we should borrow**

- Camera framing that makes the object feel sculptural.
- Close attention to temple, hinge, bridge, and lens geometry.
- Short messages tied to visual moments.
- The balance between clear navigation and immersive product presentation.

**What we should not borrow**

- The exact camera composition or headline.
- Hardware-specific styling that would make ordinary eyewear look like an AR device.
- The large overlay obstructing the product.
- A permanent dark/gray atmosphere when your preference is light and soft.

#### Reference C: XREAL prescription-lens detail screenshot

**Visible characteristics**

- A clear text-left / product-right composition.
- A large isolated optical detail.
- Restrained information hierarchy.
- High contrast between product edges and background.
- Technical storytelling through a close-up rather than a generic feature card.

**What we should borrow**

- Giving individual optical details their own visual moment.
- Changing camera distance to introduce information.
- Pairing a focused visual with one focused message.

**What we should not borrow**

- Prescription-service claims, partnerships, or benefits that Sri Opticals has not confirmed.
- Technical exploded views unless we have a suitable model and a genuine explanation for them.
- Low-contrast secondary text.

### 2. The main design change: from “animated hero” to “continuous showroom story”

The previous prompt used three short chapters within approximately 220svh.

**I recommend replacing that with five connected compositions over approximately 420svh on capable desktop devices.**

That provides roughly 3.2 viewport heights of scroll travel through a sticky viewport—enough room for meaningful angle changes and readable messaging without building an endless introduction.

The important distinction:

**The eyewear and camera change perspective. The navigation, text, and buttons do not rotate with the world.**

Tilting the entire interface would look theatrical briefly but would make reading, clicking, and orientation worse.

### 3. Proposed scroll story

| Chapter | Visual moment | What it communicates |
| --- | --- | --- |
| **01 — First impression** | Large front three-quarter view, softly grounded on ivory | Who Sri Opticals is |
| **02 — A different angle** | Rotate toward the temple and move into a closer detail | Attention to frame design |
| **03 — Your perspective** | Camera arcs to show the bridge, lenses, and inner frame | Range of eyewear choices |
| **04 — Make it yours** | Pull back to a balanced product composition | Explore, save, compare, and select |
| **05 — Find your frame** | Product settles toward one side as categories enter | Transition into shopping |

The website should explain itself as it moves:

- What Sri Opticals offers.
- What users can explore.
- How they can inspect frames.
- How they can save favorites.
- Where to begin shopping.

That is better than five chapters of vague luxury slogans.

### 4. Light and soft palette options

These are alternative directions—not palettes to mix together.

| Direction | Backgrounds | Main text | Interactive accent | Feeling |
| --- | --- | --- | --- | --- |
| **A. Porcelain & Sage — recommended** | Ivory `#F7F5F0`, pale sage `#E8EDE5`, warm stone `#EEE8DF` | Charcoal `#292D29` | Deep olive `#465542` | Calm, optical, premium, contemporary |
| **B. Pearl & Rose** | Pearl `#FAF7F4`, blush `#F0E4E0`, pale taupe `#EAE3DD` | Espresso `#342D2B` | Muted plum `#70515E` | Chic, editorial, softer fashion emphasis |
| **C. Chalk & Lavender** | Chalk `#F8F7F4`, mist lilac `#ECE8F1`, light stone `#E9E7E2` | Graphite `#302E35` | Dusty violet `#625472` | Quietly futuristic, refined, slightly more experimental |

**My recommendation: Porcelain & Sage.**

It supports a broad Men / Women / Children catalog without becoming overly clinical or narrowly fashion-oriented. Dark acetate and brushed-metal glasses will stand out beautifully against it.

**Soft backgrounds should not mean faint text.** Headings, body copy, borders, and controls still need sufficient contrast.

### 5. What changes—and what stays

**Change:**

- Homepage composition.
- Hero scale.
- Scroll length and choreography.
- Camera and lighting direction.
- Homepage narrative.
- Background palette.
- Scene acceptance criteria.
- Reference-analysis section.

**Keep:**

- Routes and sitemap.
- Customer and business flows.
- Product catalog and SKU structure.
- Wishlist and cart behavior.
- Mock checkout.
- State management.
- Backend-ready service boundaries.
- Accessible navigation.
- Performance budgets and fallbacks.

**Technical recommendation:** Keep React Three Fiber and Motion for now. More dynamic art direction does not automatically require adding GSAP or a smooth-scroll library.

The bigger dependency is **a good eyewear asset with convincing close-up detail**. Animation cannot compensate for a weak model.

---

## FINAL ANTIGRAVITY IMPLEMENTATION PROMPT

### Homepage and Art-Direction Revision — Append to the Existing Master Specification

This revision supersedes conflicting requirements in the earlier Sri Opticals master specification concerning reference status, palette, hero composition, landing-page choreography, and landing-page acceptance criteria.

All existing commerce, authentication, dashboard, data, accessibility, and backend-readiness requirements remain in force.

### 1. Revised creative objective

Create a **light, cinematic, scroll-directed optical showroom** for SRI OPTICALS.

The homepage must not look like a conventional two-column hero with a continuously spinning model.

Instead, create one coordinated visual narrative in which:

- The eyewear changes orientation.
- The camera changes framing and distance.
- The product moves between intentionally composed positions.
- Lighting reveals different physical details.
- Short DOM-based messages explain the brand and shopping experience.
- The sequence resolves into the collection.

The user should feel that scrolling reveals another considered view of the same object.

Do not rotate the navigation or tilt the entire website.

### 2. Reference interpretation

References supplied:

- A Meta / Ray-Ban concept screenshot showing oversized typography and dominant eyewear.
- XREAL One Pro screenshots showing large product framing and optical-detail storytelling.
- `https://www.xreal.com/one-pro`, identified by the user as a desired reference for dynamic behavior.

The screenshots establish visual characteristics, not implementation technology or exact motion behavior.

If browser inspection is available, inspect the live reference before finalizing choreography. Record observed behavior separately from implementation inference. Do not claim the reference uses a particular technology without verification.

Borrow:

- Product scale.
- Cinematic framing.
- Detail-focused storytelling.
- Controlled typography.
- Changes in perspective.
- Clear navigation above an immersive product stage.

Do not copy:

- Branding.
- Headlines.
- Exact compositions.
- AR overlays.
- Hardware claims.
- Proprietary assets.
- Blue backgrounds.
- Dark product-page styling.

### 3. Revised palette

Use **Porcelain & Sage** consistently.

| Token | Value | Usage |
| --- | --- | --- |
| Main canvas | `#F7F5F0` | Default page background |
| Porcelain surface | `#FFFEFB` | Forms, drawers, elevated surfaces |
| Pale sage | `#E8EDE5` | Selected storytelling backgrounds |
| Warm stone | `#EEE8DF` | Product stages and subtle transitions |
| Primary text | `#292D29` | Headings and body |
| Secondary text | `#62665E` | Supporting copy |
| Primary action | `#465542` | Main buttons and selected controls |
| Action hover | `#354230` | Hover and pressed emphasis |
| Decorative border | `#D5D8CF` | Nonessential dividers |
| Control border | `#7B8375` | Inputs and meaningful boundaries |

Retain semantic error, warning, and success colors from the main specification only where needed, verifying contrast in the revised theme.

Requirements:

- No saturated blue backgrounds.
- No teal/aqua environmental lighting.
- No black-and-gold treatment.
- No rainbow transitions.
- No washed-out essential text.
- Do not add all proposed alternative palettes.
- Keep commerce pages primarily ivory and porcelain.

The cinematic backdrop may transition gradually between ivory, warm stone, and pale sage. These should read as changes in a softly lit studio, not unrelated colored slides.

### 4. Hero composition

Desktop:

- Fixed left-side Home / About Us navigation.
- Stable top-right account, wishlist, and cart actions.
- Large SRI OPTICALS wordmark or clearly visible brand label.
- Oversized headline: **“A new perspective.”**
- Large eyewear occupying approximately 60–72% of the available stage width in the opening composition.
- Keep essential copy within a readable safe area.
- A restrained grounding shadow gives the object weight.
- Shop collection is visible immediately.
- Keep a compact Shop action available throughout the narrative.
- Include Skip experience.

Typography may sit partially behind the product only when the words remain readable. Do not obscure the brand name or actionable controls.

Use Manrope for display and Inter for UI, as previously specified.

### 5. Desktop scroll structure

Replace the previous 220svh, three-chapter introduction.

Use:

- Approximately **420svh total narrative section height**.
- A sticky viewport stage.
- Five visual chapters.
- Native document scrolling.
- One normalized progress source.
- No forced snapping or wheel interception.

Treat the following progress ranges as authored composition targets. Tune precise transforms against the final model and viewport, rather than blindly applying fixed camera coordinates.

#### Chapter 1 — Welcome: 0.00–0.16

**Visual**

- Front three-quarter view.
- Entire front frame readable.
- Slightly visible temples.
- Ivory environment.
- Strong opening silhouette.

**Copy**

SRI OPTICALS

**A new perspective.**

“Explore eyeglasses, sunglasses, and everyday frames in one considered collection.”

**Actions**

- Shop collection.
- Our perspective.

Hold the opening composition long enough to read before introducing a substantial angle change.

#### Chapter 2 — Design: 0.16–0.37

**Visual**

- Transition toward a side three-quarter view.
- Increase total yaw from the opening pose by roughly 35–55 degrees, adjusted to model orientation.
- Move the product right.
- Bring the temple and hinge closer.
- Preserve part of the front frame so the object remains recognizable.
- Shift the backdrop gently toward warm stone.

**Copy**

**Details worth a closer look.**

“Explore frame shapes, finishes, and dimensions before choosing your pair.”

Use no more than two restrained feature labels. Labels must correspond to visible, modeled details.

Do not invent construction or medical claims.

#### Chapter 3 — Choice: 0.37–0.58

**Visual**

- Arc the camera slightly above the frame.
- Reveal the bridge and inner temples.
- Adjust pitch modestly, approximately 10–18 degrees.
- Keep camera roll near zero.
- Move the eyewear left to open a right-hand text region.
- Transition toward pale sage.

**Copy**

**Different days. Different frames.**

“Discover everyday eyeglasses, sun-ready styles, and options for adults and children.”

Show three restrained text labels:

- Eyeglasses.
- Sunglasses.
- Children.

These explain the wider catalog. Do not morph the hero frame into a different product or imply it represents every category.

#### Chapter 4 — Exploration: 0.58–0.79

**Visual**

- Pull back from the detail view.
- Return toward a composed three-quarter angle using a continuous path.
- Reduce product size to approximately 48–56% of available stage width.
- Keep the frame material consistent.
- Introduce a compact DOM-based product-information panel.

**Copy**

**Make it yours.**

“Explore available colors, inspect the details, and save the frames you love.”

**Panel**

- Prism 01.
- Price from the centralized catalog.
- One matching color descriptor.
- View frame CTA linking to its real product route.

Do not include decorative swatches or wishlist controls unless they perform the actual specified interactions.

Do not claim all catalog products have 3D viewers.

#### Chapter 5 — Collection: 0.79–1.00

**Visual**

- Settle the product toward the upper-right.
- Return the environment to ivory.
- Let motion become progressively quieter.
- Reveal the beginning of the collection in normal document flow.
- Align the ending stage visually with the following section.

**Copy**

**Find your frame.**

“Start with a collection. Discover your own perspective.”

**Category entry points**

- Men.
- Women.
- Children.

Each links to the appropriate filtered catalog.

Do not automatically navigate when the sequence ends.

### 6. Choreography rules

Each chapter must have:

1. A transition interval.
2. A readable composition interval.

As an initial allocation, use roughly the first third of each new chapter for repositioning and the remainder for a slower-moving or settled presentation.

- Maintain continuous progress-based transforms.
- Reverse correctly when scrolling upward.
- Do not trigger independent timed animations that become inconsistent after fast scrolling.
- Avoid multiple simultaneous large rotations, zooms, and text movements.
- Favor a stable lens perspective with camera dolly and object orientation changes over dramatic field-of-view zooms.
- Keep smoothing short enough that the scene does not continue drifting long after scrolling stops.
- Recompute layout safely after viewport changes.
- Browser scroll restoration must restore the corresponding scene state.
- Text remains DOM content.
- No full-screen lens tunnel or fly-through.
- No exploded assembly in this version.

### 7. Lighting and model revision

Use:

- Broad warm-neutral key light.
- Soft fill.
- Restrained neutral rim light.
- Brushed titanium details.
- Smoked acetate or another finish that remains visible against pale backgrounds.
- Clear lens edges and controlled reflections.

Do not make the entire hero frame nearly white or transparent against ivory; it must retain a readable silhouette.

Close-up requirements:

- Convincing bridge geometry.
- Visible hinges.
- Smooth frame contours.
- Appropriate thickness.
- Plausible lens seating.
- No obvious low-resolution geometry at the approved camera distance.

Approve five static keyframe compositions before refining continuous motion. A scene that fails as five still images will not become premium merely by animating it.

### 8. Technical ownership

Keep:

- React Three Fiber for rendering.
- Motion for scroll measurement and DOM transitions.
- Native scrolling.
- A single shared normalized progress value.

Use data-driven chapter definitions containing:

- Progress range.
- Camera target.
- Camera position.
- Model orientation.
- Model position.
- Model scale.
- Lighting values.
- Background treatment.
- Associated copy.

Do not update React state on every animation frame.

Do not add GSAP solely because the reference feels dynamic. If implementation testing establishes a concrete need to replace the timeline layer, document the reason and avoid competing animation ownership.

Do not adopt a large image-sequence download as an unexamined shortcut. Any alternative rendering technique must meet the original loading and performance requirements.

### 9. Mobile, reduced motion, and failures

Below 1024px, retain the original simplified approach.

- No long pinned sequence.
- Use three responsive still compositions: introduction, detail, collection.
- Present the complete story in normal document flow.
- Preserve all essential information and shopping links.
- Do not automatically download desktop 3D assets.

Reduced motion:

- Static hero.
- Stacked narrative.
- No camera choreography.
- No parallax.
- Normal navigation.

WebGL/model failure on desktop:

- Preserve all five chapters’ information in a readable fallback layout.
- Use the hero poster and available detail images.
- Never leave a long empty sticky region.
- Keep navigation and shopping usable.

An opening poster alone is not a complete failure strategy if it leaves later narrative copy hidden.

### 10. Navigation and readability safeguards

- Home and About Us stay discoverable.
- Account and commerce controls stay fixed in a stable layer.
- Product rendering never intercepts clicks intended for DOM content.
- Use a subtle readable header surface where necessary.
- Skip experience moves both viewport and keyboard focus to the collection heading.
- No chapter automatically steals focus as the user scrolls.
- Hidden interactive chapter content must not remain keyboard-focusable.
- Preserve readable content order in assistive technologies.
- No essential heading disappears behind the product.

### 11. Revised acceptance criteria

The revised landing page passes only when:

- It feels like one continuous showroom narrative, not five unrelated slides.
- At least three visibly distinct product perspectives appear.
- Angle changes reveal meaningful details.
- Brand and shopping information progress alongside the visuals.
- The opening is large-scale and cinematic.
- Backgrounds remain light, soft, and coherent.
- Text remains high contrast.
- Forward and reverse scrolling are stable.
- Fast scrolling produces no broken intermediate state.
- Shop is available without completing the story.
- The collection transition feels deliberate.
- Mobile and reduced-motion versions tell the same essential story.
- Existing commerce functionality and performance budgets remain intact.

**Final creative target: the product-led energy you admire in XREAL, translated into a softer Sri Opticals identity—not a copy of XREAL’s colors, hardware aesthetic, or page design.**

## The Response You gave :

We’ll start with **Iteration 1: a runnable visual foundation with working navigation and a small commerce slice**.

This iteration includes:

- Porcelain & Sage design system.
- Responsive Sri Opticals homepage.
- Five visual storytelling compositions.
- About and shop pages.
- Eight centralized starter products.
- Product details.
- Working wishlist and cart with local persistence.
- A clearly labeled demo-session dialog.

**Not yet included:** real-time 3D, camera choreography, full authentication, checkout, or business management. The eyewear below is original SVG artwork—not a 3D model. Iteration 2 will replace the homepage artwork with the interactive scene without rewriting the store.

**Execution status:** I can provide the project files here, but cannot create or run them in your environment. The code below has not been browser-tested in this chat.

---

# 1. Project structure

Create an empty folder called `sri-opticals` with this structure:

```
sri-opticals/
├── app/
│   ├── about/
│   │   └── page.tsx
│   ├── cart/
│   │   └── page.tsx
│   ├── product/
│   │   └── [slug]/
│   │       └── page.tsx
│   ├── shop/
│   │   └── page.tsx
│   ├── wishlist/
│   │   └── page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   ├── not-found.tsx
│   └── page.tsx
├── components/
│   ├── commerce.tsx
│   ├── eyewear.tsx
│   ├── shell.tsx
│   └── store-provider.tsx
├── lib/
│   └── catalog.ts
├── package.json
├── tsconfig.json
└── .gitignore
```

For this foundation, styling uses CSS custom properties and regular CSS. We do not need Tailwind, an animation library, or Three.js just to establish the first working slice.

---

# 2. Project configuration

## `package.json`

```json
{
  "name": "sri-opticals",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "typecheck": "tsc --noEmit"
  },
  "dependencies": {
    "lucide-react": "^0.468.0",
    "next": "^16.0.0",
    "react": "^19.2.0",
    "react-dom": "^19.2.0"
  },
  "devDependencies": {
    "@types/node": "^22.0.0",
    "@types/react": "^19.0.0",
    "@types/react-dom": "^19.0.0",
    "typescript": "^5.7.0"
  }
}
```

## `tsconfig.json`

```json
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "react-jsx",
    "incremental": true,
    "plugins": [{ "name": "next" }],
    "paths": {
      "@/*": ["./*"]
    }
  },
  "include": [
    "next-env.d.ts",
    "**/*.ts",
    "**/*.tsx",
    ".next/types/**/*.ts",
    ".next/dev/types/**/*.ts"
  ],
  "exclude": ["node_modules"]
}
```

## `.gitignore`

```
node_modules
.next
out
.env*
!.env.example
*.tsbuildinfo
next-env.d.ts
.DS_Store
```

Next.js generates `next-env.d.ts` on first run.

---

# 3. Centralized starter catalog

Prices are stored in **integer paise**. There is one sellable configuration per starter product; SKU-level variant selection will be introduced with the full catalog iteration.

## `lib/catalog.ts`

```tsx
export type Audience = "Men" | "Women" | "Children";
export type ProductType = "Eyeglasses" | "Sunglasses";
export type FrameShape = "square" | "round" | "cat";

export type Product = {
  id: string;
  slug: string;
  name: string;
  type: ProductType;
  audience: Audience[];
  material: string;
  colorName: string;
  color: string;
  stage: string;
  shape: FrameShape;
  pricePaise: number;
  stock: number;
  limit: number;
  dimensions: string;
  description: string;
  tag?: string;
};

export const products: Product[] = [
  {
    id: "SO-001",
    slug: "prism-01",
    name: "Prism 01",
    type: "Eyeglasses",
    audience: ["Men", "Women"],
    material: "Acetate",
    colorName: "Smoked olive",
    color: "#41463A",
    stage: "#E9EADF",
    shape: "square",
    pricePaise: 499000,
    stock: 12,
    limit: 5,
    dimensions: "51 · 20 · 145 mm",
    description:
      "A softly squared silhouette with a considered bridge and substantial acetate edges. A distinctive starting point for an everyday collection.",
    tag: "Signature"
  },
  {
    id: "SO-002",
    slug: "axis-titanium",
    name: "Axis Titanium",
    type: "Eyeglasses",
    audience: ["Men", "Women"],
    material: "Titanium",
    colorName: "Brushed graphite",
    color: "#626765",
    stage: "#EAE8E2",
    shape: "square",
    pricePaise: 749000,
    stock: 6,
    limit: 3,
    dimensions: "52 · 19 · 145 mm",
    description:
      "A clean rectangular profile in a muted graphite finish. Slim lines keep the form precise and understated.",
    tag: "Premium"
  },
  {
    id: "SO-004",
    slug: "halo-round",
    name: "Halo Round",
    type: "Eyeglasses",
    audience: ["Men", "Women"],
    material: "Metal",
    colorName: "Warm bronze",
    color: "#88705A",
    stage: "#EEE5DC",
    shape: "round",
    pricePaise: 379000,
    stock: 3,
    limit: 5,
    dimensions: "49 · 21 · 140 mm",
    description:
      "Rounded lenses and a warm bronze finish give this frame an easy, expressive character."
  },
  {
    id: "SO-005",
    slug: "muse-cat-eye",
    name: "Muse Cat-Eye",
    type: "Eyeglasses",
    audience: ["Women"],
    material: "Acetate",
    colorName: "Soft burgundy",
    color: "#75545B",
    stage: "#EFE4E2",
    shape: "cat",
    pricePaise: 429000,
    stock: 8,
    limit: 5,
    dimensions: "52 · 18 · 140 mm",
    description:
      "A gentle lift at the corners brings a little expression to a balanced, wearable cat-eye silhouette."
  },
  {
    id: "SO-007",
    slug: "orbit-junior",
    name: "Orbit Junior",
    type: "Eyeglasses",
    audience: ["Children"],
    material: "Flexible polymer",
    colorName: "Forest",
    color: "#526E56",
    stage: "#E4EBDF",
    shape: "round",
    pricePaise: 179000,
    stock: 9,
    limit: 5,
    dimensions: "44 · 17 · 125 mm",
    description:
      "A smaller rounded frame with a playful forest finish. Part of the Sri Opticals mock children's collection."
  },
  {
    id: "SO-011",
    slug: "dune-square",
    name: "Dune Square",
    type: "Sunglasses",
    audience: ["Men", "Women"],
    material: "Acetate",
    colorName: "Sand tortoise",
    color: "#81684D",
    stage: "#EEE5D6",
    shape: "square",
    pricePaise: 399000,
    stock: 7,
    limit: 5,
    dimensions: "54 · 20 · 145 mm",
    description:
      "Warm acetate tones meet a generous square silhouette. A sunwear style with an unhurried point of view.",
    tag: "Sun collection"
  },
  {
    id: "SO-016",
    slug: "studio-clear",
    name: "Studio Clear",
    type: "Eyeglasses",
    audience: ["Men", "Women"],
    material: "Clear acetate",
    colorName: "Champagne",
    color: "#B6A88E",
    stage: "#F0EBE1",
    shape: "square",
    pricePaise: 299000,
    stock: 0,
    limit: 5,
    dimensions: "50 · 19 · 140 mm",
    description:
      "A quiet champagne finish and softened corners make this an understated addition to the collection."
  },
  {
    id: "SO-023",
    slug: "tide-transparent",
    name: "Tide Transparent",
    type: "Eyeglasses",
    audience: ["Men", "Women"],
    material: "Acetate",
    colorName: "Moss",
    color: "#7C8870",
    stage: "#E6EBDD",
    shape: "round",
    pricePaise: 319000,
    stock: 2,
    limit: 5,
    dimensions: "48 · 21 · 140 mm",
    description:
      "A round profile in a soft moss tone. Subtle color, clearly defined edges, and an everyday scale."
  }
];

export function getProduct(id: string) {
  return products.find((product) => product.id === id);
}

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function formatMoney(paise: number) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0
  }).format(paise / 100);
}

export function getShipping(subtotalPaise: number) {
  if (subtotalPaise === 0 || subtotalPaise >= 300000) return 0;
  return 9900;
}
```

---

# 4. Original eyewear artwork

This is intentionally an **SVG visual placeholder with real frame geometry**, not a claim of photorealistic rendering. Different products use different frame shapes and finishes.

## `components/eyewear.tsx`

```tsx
import { useId } from "react";
import type { FrameShape } from "@/lib/catalog";

type Props = {
  color?: string;
  shape?: FrameShape;
  sunglasses?: boolean;
  className?: string;
  label?: string;
};

export function Eyewear({
  color = "#41463A",
  shape = "square",
  sunglasses = false,
  className = "",
  label
}: Props) {
  const uid = useId().replace(/:/g, "");
  const lensId = `lens-${uid}`;
  const shineId = `shine-${uid}`;
  const shadowId = `shadow-${uid}`;
  const titleId = `title-${uid}`;

  const lens =
    shape === "round"
      ? "M178 214 C161 237 162 300 191 326 C225 357 287 350 318 318 C344 290 347 244 327 217 C299 186 207 183 178 214Z"
      : shape === "cat"
        ? "M164 202 C208 193 291 192 338 224 L324 297 C315 329 283 344 238 338 C194 333 176 313 172 278Z"
        : "M179 211 Q245 190 318 216 Q339 225 334 247 L325 299 Q319 331 286 338 L222 333 Q185 329 177 299 L167 243 Q163 221 179 211Z";

  return (
    <svg
      viewBox="0 0 800 460"
      className={`eyewear ${className}`}
      role={label ? "img" : undefined}
      aria-labelledby={label ? titleId : undefined}
      aria-hidden={label ? undefined : true}
      focusable="false"
    >
      {label && <title id={titleId}>{label}</title>}

      <defs>
        <linearGradient id={lensId} x1="0" y1="0" x2="1" y2="1">
          <stop
            offset="0%"
            stopColor={sunglasses ? "#252C27" : "#FDFEF9"}
            stopOpacity={sunglasses ? ".94" : ".65"}
          />
          <stop
            offset="100%"
            stopColor={sunglasses ? "#697567" : "#AAB6A0"}
            stopOpacity={sunglasses ? ".9" : ".16"}
          />
        </linearGradient>

        <linearGradient id={shineId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity=".7" />
          <stop offset="45%" stopColor="#FFFFFF" stopOpacity=".08" />
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity=".3" />
        </linearGradient>

        <radialGradient id={shadowId}>
          <stop offset="0%" stopColor="#343B2E" stopOpacity=".18" />
          <stop offset="100%" stopColor="#343B2E" stopOpacity="0" />
        </radialGradient>
      </defs>

      <ellipse
        cx="400"
        cy="386"
        rx="300"
        ry="43"
        fill={`url(#${shadowId})`}
      />

      <g
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M174 228 L278 107 Q287 98 301 102 L460 153" strokeWidth="18" />
        <path d="M627 228 L562 99 Q555 87 542 91 L395 147" strokeWidth="18" />

        <path
          d="M183 221 L286 109 L456 158"
          stroke={`url(#${shineId})`}
          strokeWidth="3"
        />
        <path
          d="M620 216 L554 101 L400 151"
          stroke={`url(#${shineId})`}
          strokeWidth="3"
        />
      </g>

      <g
        stroke={color}
        strokeWidth={shape === "round" ? "12" : "18"}
        strokeLinejoin="round"
      >
        <path d={lens} fill={`url(#${lensId})`} />
        <path
          d={lens}
          transform="translate(800 0) scale(-1 1)"
          fill={`url(#${lensId})`}
        />
      </g>

      <path
        d="M341 242 Q400 208 459 242"
        fill="none"
        stroke={color}
        strokeWidth="16"
        strokeLinecap="round"
      />

      <path
        d="M345 236 Q400 211 455 236"
        fill="none"
        stroke={`url(#${shineId})`}
        strokeWidth="3"
        strokeLinecap="round"
      />

      <path
        d="M188 223 Q244 205 309 227 M491 227 Q555 205 612 223"
        fill="none"
        stroke="#FFFFFF"
        strokeOpacity=".44"
        strokeWidth="3"
        strokeLinecap="round"
      />

      <path
        d="M192 250 L231 308 M210 237 L253 310 M547 239 L585 298"
        stroke="#FFFFFF"
        strokeOpacity={sunglasses ? ".08" : ".3"}
        strokeWidth="11"
        strokeLinecap="round"
      />

      <rect x="164" y="226" width="17" height="8" rx="3" fill="#C8C5B9" />
      <rect x="619" y="226" width="17" height="8" rx="3" fill="#C8C5B9" />
    </svg>
  );
}
```

---

# 5. Local commerce state

This provider keeps UI state separate from the product definitions. It validates stored cart values before using them and falls back to memory if browser storage fails.

## `components/store-provider.tsx`

```tsx
"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode
} from "react";
import { getProduct, getShipping } from "@/lib/catalog";

type CartLine = {
  productId: string;
  quantity: number;
};

type StoredData = {
  version: 1;
  wishlist: string[];
  cart: CartLine[];
};

type StoreContextValue = {
  ready: boolean;
  wishlist: string[];
  cart: CartLine[];
  cartCount: number;
  subtotal: number;
  shipping: number;
  notice: string;
  storageWarning: string;
  toggleWishlist: (id: string) => void;
  addToCart: (id: string, quantity?: number) => void;
  setQuantity: (id: string, quantity: number) => void;
  removeFromCart: (id: string) => void;
};

const STORAGE_KEY = "sri-opticals:commerce:v1";
const StoreContext = createContext<StoreContextValue | null>(null);

function readStoredData(raw: string): StoredData {
  const parsed: unknown = JSON.parse(raw);

  if (
    typeof parsed !== "object" ||
    parsed === null ||
    !("version" in parsed) ||
    parsed.version !== 1
  ) {
    throw new Error("Unsupported saved data");
  }

  const value = parsed as Record<string, unknown>;

  const wishlist = Array.isArray(value.wishlist)
    ? [
        ...new Set(
          value.wishlist.filter(
            (id): id is string =>
              typeof id === "string" && Boolean(getProduct(id))
          )
        )
      ]
    : [];

  const quantities = new Map<string, number>();

  if (Array.isArray(value.cart)) {
    for (const rawLine of value.cart) {
      if (typeof rawLine !== "object" || rawLine === null) continue;

      const line = rawLine as Record<string, unknown>;
      if (typeof line.productId !== "string") continue;
      if (typeof line.quantity !== "number") continue;
      if (!Number.isFinite(line.quantity)) continue;

      const product = getProduct(line.productId);
      if (!product || product.stock === 0) continue;

      const next = Math.floor(line.quantity);
      if (next < 1) continue;

      const existing = quantities.get(product.id) ?? 0;

      quantities.set(
        product.id,
        Math.min(existing + next, product.stock, product.limit)
      );
    }
  }

  return {
    version: 1,
    wishlist,
    cart: [...quantities].map(([productId, quantity]) => ({
      productId,
      quantity
    }))
  };
}

export function StoreProvider({ children }: { children: ReactNode }) {
  const [ready, setReady] = useState(false);
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [cart, setCart] = useState<CartLine[]>([]);
  const [notice, setNotice] = useState("");
  const [storageWarning, setStorageWarning] = useState("");
  const canPersist = useRef(true);
  const announcementTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  function announce(message: string) {
    if (announcementTimer.current) {
      clearTimeout(announcementTimer.current);
    }

    setNotice("");
    announcementTimer.current = setTimeout(() => setNotice(message), 30);
  }

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);

      if (raw) {
        const saved = readStoredData(raw);
        setWishlist(saved.wishlist);
        setCart(saved.cart);
      }
    } catch {
      canPersist.current = false;
      setStorageWarning(
        "Saved data could not be loaded. Shopping still works, but this session may not persist."
      );
    }

    setReady(true);

    return () => {
      if (announcementTimer.current) {
        clearTimeout(announcementTimer.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!ready || !canPersist.current) return;

    try {
      const data: StoredData = { version: 1, wishlist, cart };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch {
      canPersist.current = false;
      setStorageWarning(
        "Browser storage is unavailable. Your changes will remain in this session only."
      );
    }
  }, [ready, wishlist, cart]);

  useEffect(() => {
    if (!notice) return;
    const timer = setTimeout(() => setNotice(""), 4200);
    return () => clearTimeout(timer);
  }, [notice]);

  const subtotal = useMemo(
    () =>
      cart.reduce((sum, line) => {
        const product = getProduct(line.productId);
        return sum + (product?.pricePaise ?? 0) * line.quantity;
      }, 0),
    [cart]
  );

  function toggleWishlist(id: string) {
    if (!ready) return;
    const product = getProduct(id);
    if (!product) return;

    const wasSaved = wishlist.includes(id);

    setWishlist((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id]
    );

    announce(
      wasSaved
        ? `${product.name} removed from your wishlist.`
        : `${product.name} saved to your wishlist.`
    );
  }

  function addToCart(id: string, quantity = 1) {
    if (!ready) return;

    const product = getProduct(id);
    if (!product || product.stock === 0) {
      announce("This frame is currently unavailable.");
      return;
    }

    if (!Number.isInteger(quantity) || quantity < 1) {
      announce("Choose a valid quantity.");
      return;
    }

    const maximum = Math.min(product.stock, product.limit);
    const existing = cart.find((line) => line.productId === id)?.quantity ?? 0;

    if (existing + quantity > maximum) {
      announce(`You can have up to ${maximum} of this frame in your cart.`);
      return;
    }

    setCart((current) => {
      const line = current.find((item) => item.productId === id);
      const currentQuantity = line?.quantity ?? 0;

      // Also enforce the limit inside the state update.
      if (currentQuantity + quantity > maximum) return current;

      return line
        ? current.map((item) =>
            item.productId === id
              ? { ...item, quantity: item.quantity + quantity }
              : item
          )
        : [...current, { productId: id, quantity }];
    });

    announce(`${product.name} added to your cart.`);
  }

  function setQuantity(id: string, quantity: number) {
    const product = getProduct(id);
    if (!ready || !product) return;

    const maximum = Math.min(product.stock, product.limit);

    if (!Number.isInteger(quantity) || quantity < 1 || quantity > maximum) {
      announce(`Choose a quantity between 1 and ${maximum}.`);
      return;
    }

    setCart((current) =>
      current.map((line) =>
        line.productId === id ? { ...line, quantity } : line
      )
    );

    announce(`${product.name} quantity updated to ${quantity}.`);
  }

  function removeFromCart(id: string) {
    if (!ready) return;

    setCart((current) => current.filter((line) => line.productId !== id));
    announce("Frame removed from your cart.");
  }

  return (
    <StoreContext.Provider
      value={{
        ready,
        wishlist,
        cart,
        cartCount: cart.reduce((sum, line) => sum + line.quantity, 0),
        subtotal,
        shipping: getShipping(subtotal),
        notice,
        storageWarning,
        toggleWishlist,
        addToCart,
        setQuantity,
        removeFromCart
      }}
    >
      {children}
    </StoreContext.Provider>
  );
}

export function useStore() {
  const context = useContext(StoreContext);

  if (!context) {
    throw new Error("useStore must be used inside StoreProvider.");
  }

  return context;
}
```

---

# 6. Global navigation and demo-session dialog

The account dialog deliberately asks for **no password, email, or phone number** at this stage. It provides a working temporary demo session while the full account flows remain scheduled for Iteration 4.

## `components/shell.tsx`

```tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState, type FormEvent } from "react";
import { ArrowUpRight, Heart, Menu, ShoppingBag, X } from "lucide-react";
import { useStore } from "@/components/store-provider";

export function Header() {
  const pathname = usePathname();
  const { ready, cartCount, wishlist } = useStore();

  const dialog = useRef<HTMLDialogElement>(null);
  const mobileMenu = useRef<HTMLDetailsElement>(null);
  const previousFocus = useRef<HTMLElement | null>(null);

  const [authMode, setAuthMode] = useState<"signup" | "signin" | null>(null);
  const [name, setName] = useState("");
  const [sessionName, setSessionName] = useState("");

  useEffect(() => {
    if (mobileMenu.current) mobileMenu.current.open = false;
  }, [pathname]);

  useEffect(() => {
    const element = dialog.current;
    if (!element) return;

    if (authMode) {
      previousFocus.current = document.activeElement as HTMLElement | null;
      element.showModal();

      const previousOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";

      return () => {
        if (element.open) element.close();
        document.body.style.overflow = previousOverflow;
        previousFocus.current?.focus();
      };
    }
  }, [authMode]);

  function startSession(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const cleaned = name.trim();
    if (!cleaned) return;

    setSessionName(cleaned.slice(0, 32));
    setAuthMode(null);
  }

  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>

      <aside className="desktop-rail" aria-label="Primary navigation">
        <Link className="rail-monogram" href="/" aria-label="Sri Opticals home">
          S<span>O</span>
        </Link>

        <nav>
          <Link href="/" aria-current={pathname === "/" ? "page" : undefined}>
            Home
          </Link>
          <Link
            href="/about"
            aria-current={pathname === "/about" ? "page" : undefined}
          >
            About Us
          </Link>
        </nav>

        <span className="rail-caption" aria-hidden="true">
          A NEW PERSPECTIVE
        </span>
      </aside>

      <header className="site-header">
        <div className="header-brand">
          <details className="mobile-menu" ref={mobileMenu}>
            <summary aria-label="Open navigation">
              <Menu size={20} aria-hidden="true" />
            </summary>
            <nav aria-label="Mobile navigation">
              <Link href="/">Home</Link>
              <Link href="/about">About Us</Link>
              <Link href="/shop">Shop collection</Link>
            </nav>
          </details>

          <Link href="/" className="wordmark" aria-label="Sri Opticals home">
            SRI OPTICALS<span>A CONSIDERED COLLECTION</span>
          </Link>
        </div>

        <Link className="header-shop" href="/shop">
          Shop collection <ArrowUpRight size={15} aria-hidden="true" />
        </Link>

        <nav className="header-actions" aria-label="Account and shopping">
          {sessionName ? (
            <button
              className="text-button account-label"
              onClick={() => {
                setSessionName("");
                setName("");
              }}
              title="End temporary demo session"
            >
              Hi, {sessionName.split(" ")[0]} · Sign out
            </button>
          ) : (
            <div className="auth-actions">
              <button className="text-button" onClick={() => setAuthMode("signup")}>
                Sign Up
              </button>
              <button className="text-button" onClick={() => setAuthMode("signin")}>
                Sign In
              </button>
            </div>
          )}

          <Link
            href="/wishlist"
            className="icon-button"
            aria-label={`Wishlist, ${ready ? wishlist.length : 0} saved frames`}
          >
            <Heart size={20} aria-hidden="true" />
            {ready && wishlist.length > 0 && (
              <span className="count-badge">{wishlist.length}</span>
            )}
          </Link>

          <Link
            href="/cart"
            className="icon-button"
            aria-label={`Cart, ${ready ? cartCount : 0} items`}
          >
            <ShoppingBag size={20} aria-hidden="true" />
            {ready && cartCount > 0 && (
              <span className="count-badge">{cartCount}</span>
            )}
          </Link>
        </nav>
      </header>

      <dialog
        ref={dialog}
        className="auth-dialog"
        aria-labelledby="auth-title"
        onCancel={() => setAuthMode(null)}
        onClose={() => setAuthMode(null)}
      >
        <button
          className="icon-button dialog-close"
          onClick={() => setAuthMode(null)}
          aria-label="Close account dialog"
        >
          <X size={20} aria-hidden="true" />
        </button>

        <p className="eyebrow">ITERATION 01 · DEMO SESSION</p>
        <h2 id="auth-title">
          {authMode === "signup" ? "A fresh perspective." : "Welcome back."}
        </h2>
        <p className="muted">
          Start a temporary local demo session. Full customer and business
          registration will arrive in a later iteration.
        </p>

        <form onSubmit={startSession}>
          <label htmlFor="demo-name">Demo display name</label>
          <input
            id="demo-name"
            name="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Alex"
            required
            maxLength={32}
            pattern=".*\S.*"
            autoComplete="off"
          />
          <button className="button button-primary" type="submit">
            {authMode === "signup" ? "Start demo session" : "Enter demo session"}
            <ArrowUpRight size={17} aria-hidden="true" />
          </button>
        </form>

        <p className="fine-print">
          No real account is created. This session ends when the page is
          refreshed. Your guest cart and wishlist remain separate from this
          display-name preview.
        </p>
      </dialog>
    </>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div>
        <Link href="/" className="footer-wordmark">
          SRI OPTICALS
        </Link>
        <p>A new perspective. An everyday signature.</p>
      </div>

      <nav aria-label="Footer navigation">
        <Link href="/shop">Collection</Link>
        <Link href="/about">Our perspective</Link>
        <Link href="/wishlist">Saved frames</Link>
      </nav>

      <p className="fine-print">
        Frontend prototype · Mock products and prices · No orders fulfilled
      </p>
    </footer>
  );
}

export function Feedback() {
  const { notice, storageWarning } = useStore();

  return (
    <>
      {storageWarning && (
        <div className="storage-warning" role="status">
          {storageWarning}
        </div>
      )}

      <div className="toast-region" role="status" aria-live="polite" aria-atomic="true">
        {notice && <div className="toast">{notice}</div>}
      </div>
    </>
  );
}
```

---

# 7. Reusable shopping UI

## `components/commerce.tsx`

```tsx
"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight, ArrowUpRight, Heart, Minus, Plus, Trash2 } from "lucide-react";
import { Eyewear } from "@/components/eyewear";
import { useStore } from "@/components/store-provider";
import {
  formatMoney,
  getProduct,
  products,
  type Product
} from "@/lib/catalog";

export function ProductCard({ product }: { product: Product }) {
  const { ready, wishlist, toggleWishlist, addToCart } = useStore();
  const saved = wishlist.includes(product.id);

  return (
    <article className="product-card">
      <div className="product-art" style={{ background: product.stage }}>
        <Link
          href={`/product/${product.slug}`}
          className="product-art-link"
          aria-label={`Explore ${product.name}`}
        >
          <Eyewear
            color={product.color}
            shape={product.shape}
            sunglasses={product.type === "Sunglasses"}
            label={`${product.name} in ${product.colorName}`}
          />
        </Link>

        {product.tag && <span className="product-tag">{product.tag}</span>}

        <button
          className={`icon-button save-button ${saved ? "is-saved" : ""}`}
          onClick={() => toggleWishlist(product.id)}
          disabled={!ready}
          aria-label={`${saved ? "Remove" : "Save"} ${product.name} ${
            saved ? "from" : "to"
          } wishlist`}
          aria-pressed={saved}
        >
          <Heart size={18} fill={saved ? "currentColor" : "none"} aria-hidden="true" />
        </button>
      </div>

      <div className="product-heading">
        <h3>
          <Link href={`/product/${product.slug}`}>{product.name}</Link>
        </h3>
        <span>{formatMoney(product.pricePaise)}</span>
      </div>

      <p className="product-meta">
        {product.material} <span aria-hidden="true">·</span> {product.colorName}
      </p>

      <div className="product-bottom">
        <span className={product.stock === 0 ? "stock unavailable" : "stock"}>
          {product.stock === 0
            ? "Currently unavailable"
            : product.stock <= 3
              ? `${product.stock} available`
              : product.type}
        </span>

        <button
          className="text-button add-link"
          disabled={!ready || product.stock === 0}
          onClick={() => addToCart(product.id)}
          aria-label={`Add ${product.name} to cart`}
        >
          Add <Plus size={15} aria-hidden="true" />
        </button>
      </div>
    </article>
  );
}

export function ProductGrid({ items }: { items: Product[] }) {
  return (
    <div className="product-grid">
      {items.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export function Catalog({
  audience,
  query,
  sort
}: {
  audience: string;
  query: string;
  sort: string;
}) {
  const normalized = query.toLowerCase().trim();

  const filtered = products
    .filter((product) => {
      const audienceMatch =
        audience === "All" ||
        product.audience.some((item) => item === audience);

      const searchMatch = [
        product.name,
        product.material,
        product.type,
        product.colorName,
        product.shape
      ]
        .join(" ")
        .toLowerCase()
        .includes(normalized);

      return audienceMatch && searchMatch;
    })
    .sort((a, b) => {
      if (sort === "price-asc") {
        return a.pricePaise - b.pricePaise || a.id.localeCompare(b.id);
      }
      if (sort === "price-desc") {
        return b.pricePaise - a.pricePaise || a.id.localeCompare(b.id);
      }
      return a.id.localeCompare(b.id);
    });

  function categoryHref(value: string) {
    const params = new URLSearchParams();
    if (value !== "All") params.set("audience", value);
    if (query) params.set("q", query);
    if (sort !== "featured") params.set("sort", sort);
    return `/shop${params.size ? `?${params.toString()}` : ""}`;
  }

  return (
    <>
      <nav className="category-tabs" aria-label="Shop by audience">
        {["All", "Men", "Women", "Children"].map((item) => (
          <Link
            href={categoryHref(item)}
            key={item}
            className={audience === item ? "active" : ""}
            aria-current={audience === item ? "page" : undefined}
          >
            {item === "All" ? "All frames" : item}
          </Link>
        ))}
      </nav>

      <form action="/shop" method="get" className="catalog-controls">
        {audience !== "All" && (
          <input type="hidden" name="audience" value={audience} />
        )}

        <div className="search-field">
          <label htmlFor="catalog-search">Search the collection</label>
          <input
            key={`search-${query}`}
            id="catalog-search"
            name="q"
            type="search"
            placeholder="Try round, acetate, or olive"
            defaultValue={query}
          />
        </div>

        <div>
          <label htmlFor="catalog-sort">Sort by</label>
          <select
            key={`sort-${sort}`}
            id="catalog-sort"
            name="sort"
            defaultValue={sort}
          >
            <option value="featured">Featured</option>
            <option value="price-asc">Price: low to high</option>
            <option value="price-desc">Price: high to low</option>
          </select>
        </div>

        <button className="button button-primary" type="submit">
          Apply <ArrowRight size={16} aria-hidden="true" />
        </button>
      </form>

      <div className="results-bar">
        <p>{filtered.length} frames in view</p>
        {(query || audience !== "All" || sort !== "featured") && (
          <Link href="/shop" className="underlined">
            Clear filters
          </Link>
        )}
      </div>

      {filtered.length ? (
        <ProductGrid items={filtered} />
      ) : (
        <EmptyState
          title="A different perspective?"
          description="No frames match this selection. Try another search or clear your filters."
          href="/shop"
          action="Show all frames"
        />
      )}
    </>
  );
}

export function ProductDetail({ product }: { product: Product }) {
  const { ready, cart, wishlist, toggleWishlist, addToCart } = useStore();
  const [quantity, setQuantity] = useState(1);

  const inCart = cart.find((line) => line.productId === product.id)?.quantity ?? 0;
  const remaining = Math.max(0, Math.min(product.stock, product.limit) - inCart);
  const saved = wishlist.includes(product.id);

  return (
    <>
      <nav className="breadcrumbs" aria-label="Breadcrumb">
        <Link href="/shop">Collection</Link>
        <span aria-hidden="true">/</span>
        <span>{product.name}</span>
      </nav>

      <div className="detail-layout">
        <div className="detail-art" style={{ background: product.stage }}>
          <span className="eyebrow">THE SRI OPTICALS COLLECTION</span>
          <Eyewear
            color={product.color}
            shape={product.shape}
            sunglasses={product.type === "Sunglasses"}
            label={`${product.name}, ${product.colorName}, illustrated front view`}
          />
          <span className="art-caption">
            Original concept illustration · Interactive 3D comes next
          </span>
        </div>

        <div className="detail-copy">
          <p className="eyebrow">{product.type}</p>
          <h1>{product.name}</h1>
          <p className="detail-price">{formatMoney(product.pricePaise)}</p>
          <p className="muted">{product.description}</p>

          <dl className="spec-list">
            <div><dt>Finish</dt><dd>{product.colorName}</dd></div>
            <div><dt>Material</dt><dd>{product.material}</dd></div>
            <div><dt>Lens · bridge · temple</dt><dd>{product.dimensions}</dd></div>
            <div><dt>Availability</dt><dd>{product.stock} in demo stock</dd></div>
          </dl>

          {remaining > 0 ? (
            <div className="detail-quantity">
              <label htmlFor="product-quantity">Quantity</label>
              <select
                id="product-quantity"
                value={Math.min(quantity, remaining)}
                onChange={(event) => setQuantity(Number(event.target.value))}
              >
                {Array.from({ length: remaining }, (_, index) => index + 1).map(
                  (value) => <option key={value}>{value}</option>
                )}
              </select>
            </div>
          ) : (
            <p className="inline-notice">
              {product.stock === 0
                ? "This frame is currently unavailable."
                : "You have reached this frame’s cart limit."}
            </p>
          )}

          <div className="purchase-actions">
            <button
              className="button button-primary"
              disabled={!ready || remaining === 0}
              onClick={() => addToCart(product.id, Math.min(quantity, remaining))}
            >
              Add to cart <ArrowUpRight size={18} aria-hidden="true" />
            </button>

            <button
              className="button button-secondary"
              disabled={!ready}
              onClick={() => toggleWishlist(product.id)}
              aria-pressed={saved}
            >
              <Heart size={18} fill={saved ? "currentColor" : "none"} aria-hidden="true" />
              {saved ? "Saved" : "Save"}
            </button>
          </div>

          <p className="fine-print">
            Mock product and tax-inclusive demo price. This iteration uses one
            fixed configuration per frame. No prescription or clinical advice is
            provided.
          </p>
        </div>
      </div>
    </>
  );
}

export function WishlistView() {
  const { ready, wishlist } = useStore();

  if (!ready) return <LoadingState />;

  const saved = products.filter((product) => wishlist.includes(product.id));

  return saved.length ? (
    <ProductGrid items={saved} />
  ) : (
    <EmptyState
      title="Saved for a second look."
      description="Your favorite frames will appear here."
      href="/shop"
      action="Explore frames"
    />
  );
}

export function CartView() {
  const {
    ready,
    cart,
    subtotal,
    shipping,
    setQuantity,
    removeFromCart
  } = useStore();

  if (!ready) return <LoadingState />;

  if (!cart.length) {
    return (
      <EmptyState
        title="Your selection starts here."
        description="Find a frame you love and make it part of your everyday."
        href="/shop"
        action="Browse the collection"
      />
    );
  }

  return (
    <div className="cart-layout">
      <div className="cart-lines">
        {cart.map((line) => {
          const product = getProduct(line.productId);
          if (!product) return null;

          const maximum = Math.min(product.stock, product.limit);

          return (
            <article className="cart-line" key={line.productId}>
              <Link
                href={`/product/${product.slug}`}
                className="cart-art"
                style={{ background: product.stage }}
                aria-label={`View ${product.name}`}
              >
                <Eyewear
                  color={product.color}
                  shape={product.shape}
                  sunglasses={product.type === "Sunglasses"}
                />
              </Link>

              <div className="cart-line-copy">
                <Link href={`/product/${product.slug}`}>
                  <h2>{product.name}</h2>
                </Link>
                <p className="muted">{product.colorName}</p>
                <p>{formatMoney(product.pricePaise)} each</p>

                <div className="quantity-control" aria-label={`${product.name} quantity`}>
                  <button
                    className="icon-button"
                    disabled={line.quantity === 1}
                    onClick={() => setQuantity(product.id, line.quantity - 1)}
                    aria-label={`Decrease ${product.name} quantity`}
                  >
                    <Minus size={15} aria-hidden="true" />
                  </button>
                  <span>{line.quantity}</span>
                  <button
                    className="icon-button"
                    disabled={line.quantity >= maximum}
                    onClick={() => setQuantity(product.id, line.quantity + 1)}
                    aria-label={`Increase ${product.name} quantity`}
                  >
                    <Plus size={15} aria-hidden="true" />
                  </button>
                </div>
              </div>

              <div className="cart-line-end">
                <strong>{formatMoney(product.pricePaise * line.quantity)}</strong>
                <button
                  className="icon-button"
                  onClick={() => removeFromCart(product.id)}
                  aria-label={`Remove ${product.name} from cart`}
                >
                  <Trash2 size={18} aria-hidden="true" />
                </button>
              </div>
            </article>
          );
        })}

        <Link href="/shop" className="underlined">Continue shopping</Link>
      </div>

      <aside className="order-summary" aria-labelledby="summary-title">
        <p className="eyebrow">THE DETAILS</p>
        <h2 id="summary-title">Your selection.</h2>

        <div className="summary-row">
          <span>Subtotal</span><span>{formatMoney(subtotal)}</span>
        </div>
        <div className="summary-row">
          <span>Estimated shipping</span>
          <span>{shipping === 0 ? "Complimentary" : formatMoney(shipping)}</span>
        </div>
        <div className="summary-row summary-total">
          <span>Estimated total</span>
          <span>{formatMoney(subtotal + shipping)}</span>
        </div>

        <p className="fine-print">
          Demo prices include mock taxes. Shipping is ₹99 below ₹3,000 and free
          from ₹3,000.
        </p>

        <div className="inline-notice">
          Your cart works and is saved locally. Mock checkout will be added in
          Iteration 4. No payment is collected in this build.
        </div>
      </aside>
    </div>
  );
}

export function EmptyState({
  title,
  description,
  href,
  action
}: {
  title: string;
  description: string;
  href: string;
  action: string;
}) {
  return (
    <div className="empty-state">
      <span className="empty-mark" aria-hidden="true">○—○</span>
      <h2>{title}</h2>
      <p className="muted">{description}</p>
      <Link href={href} className="button button-primary">
        {action} <ArrowUpRight size={17} aria-hidden="true" />
      </Link>
    </div>
  );
}

function LoadingState() {
  return (
    <div className="loading-state" role="status">
      Restoring your selection…
    </div>
  );
}
```

---

# 8. Root layout

## `app/layout.tsx`

```tsx
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inter, Manrope } from "next/font/google";
import { StoreProvider } from "@/components/store-provider";
import { Feedback, Footer, Header } from "@/components/shell";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap"
});

export const metadata: Metadata = {
  title: {
    default: "Sri Opticals — A new perspective",
    template: "%s | Sri Opticals"
  },
  description:
    "Discover a considered collection of eyewear. An interactive Sri Opticals frontend prototype."
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable}`}>
      <body>
        <StoreProvider>
          <Header />
          <div className="site-frame">
            <main id="main" tabIndex={-1}>
              {children}
            </main>
            <Footer />
          </div>
          <Feedback />
        </StoreProvider>
      </body>
    </html>
  );
}
```

The Google font files are downloaded by Next.js at build time and self-hosted in the resulting application. The first build therefore needs network access for that step.

---

# 9. Homepage

The five compositions are presented in normal document flow for now. This gives us a usable visual checkpoint before introducing the pinned 3D sequence.

## `app/page.tsx`

```tsx
import Link from "next/link";
import { ArrowDown, ArrowRight, ArrowUpRight } from "lucide-react";
import { Eyewear } from "@/components/eyewear";
import { ProductGrid } from "@/components/commerce";
import { formatMoney, products } from "@/lib/catalog";

export default function HomePage() {
  const signature = products[0];

  return (
    <>
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-topline">
          <span className="eyebrow">A CONSIDERED COLLECTION OF EYEWEAR</span>
          <span className="chapter-label">01 / FIRST IMPRESSION</span>
        </div>

        <div className="hero-copy">
          <h1 id="hero-title">A new<br /><span>perspective.</span></h1>
          <p>
            Distinctive frames. Considered details.<br />
            Find your everyday signature.
          </p>

          <div className="hero-actions">
            <Link href="/shop" className="button button-primary">
              Shop collection <ArrowUpRight size={18} aria-hidden="true" />
            </Link>
            <Link href="/about" className="text-link">
              Our perspective <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>

        <div className="hero-art">
          <span className="hero-orbit hero-orbit-one" aria-hidden="true" />
          <span className="hero-orbit hero-orbit-two" aria-hidden="true" />
          <Eyewear
            color={signature.color}
            shape={signature.shape}
            label="Prism 01 eyewear concept in smoked olive"
          />

          <Link href={`/product/${signature.slug}`} className="hero-product-note">
            <span className="material-dot" aria-hidden="true" />
            <span>
              <strong>PRISM 01</strong>
              <small>Smoked olive / Acetate</small>
            </span>
            <ArrowUpRight size={17} aria-hidden="true" />
          </Link>
        </div>

        <div className="hero-bottomline">
          <a href="#story-design" className="scroll-link">
            <ArrowDown size={17} aria-hidden="true" />
            A closer look awaits
          </a>
          <a href="#collection" className="skip-experience">
            Skip to collection
          </a>
          <span className="hero-coordinate" aria-hidden="true">
            FORM / FINISH / PERSPECTIVE
          </span>
        </div>
      </section>

      <section id="story-design" className="story-section story-stone">
        <div className="story-copy">
          <p className="eyebrow">02 / A DIFFERENT ANGLE</p>
          <h2>Details worth<br />a closer look.</h2>
          <p className="muted">
            Explore frame shapes, finishes, and dimensions before choosing
            your pair. A little detail can change the whole impression.
          </p>
          <Link href="/product/prism-01" className="text-link">
            Meet Prism 01 <ArrowUpRight size={17} aria-hidden="true" />
          </Link>
        </div>

        <div className="story-art story-art-detail">
          <Eyewear color="#41463A" label="Close-up illustration of the Prism frame" />
          <span className="detail-caption">01 — SOFT SQUARE SILHOUETTE</span>
        </div>
      </section>

      <section className="story-section story-sage story-reverse">
        <div className="story-copy">
          <p className="eyebrow">03 / YOUR PERSPECTIVE</p>
          <h2>Different days.<br />Different frames.</h2>
          <p className="muted">
            Everyday eyeglasses, sun-ready styles, and smaller frames for
            younger perspectives. Start with what feels like you.
          </p>
          <div className="story-chips">
            <Link href="/shop">Eyeglasses</Link>
            <Link href="/shop?q=sunglasses">Sunglasses</Link>
            <Link href="/shop?audience=Children">Children</Link>
          </div>
        </div>

        <div className="story-art story-art-round">
          <Eyewear
            color="#88705A"
            shape="round"
            label="Halo Round concept in warm bronze"
          />
          <span className="detail-caption">A COLLECTION, NOT A SINGLE POINT OF VIEW</span>
        </div>
      </section>

      <section className="story-section story-personal">
        <div className="story-copy">
          <p className="eyebrow">04 / MAKE IT YOURS</p>
          <h2>A second look.<br />A first choice.</h2>
          <p className="muted">
            Inspect the details. Save a favorite. Come back when you are ready.
            Your next frame starts with a little exploration.
          </p>
          <Link href="/wishlist" className="text-link">
            Your saved frames <ArrowUpRight size={17} aria-hidden="true" />
          </Link>
        </div>

        <div className="signature-panel">
          <div className="signature-panel-top">
            <span className="eyebrow">THE SIGNATURE FRAME</span>
            <span className="small-dot" aria-hidden="true" />
          </div>
          <Eyewear color={signature.color} />
          <div className="signature-panel-bottom">
            <div><h3>{signature.name}</h3><p>{formatMoney(signature.pricePaise)}</p></div>
            <Link
              href={`/product/${signature.slug}`}
              className="icon-button bordered-icon"
              aria-label="Explore Prism 01"
            >
              <ArrowUpRight size={20} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section className="collection-section" aria-labelledby="collection">
        <div className="section-heading">
          <div>
            <p className="eyebrow">05 / FIND YOUR FRAME</p>
            <h2 id="collection" tabIndex={-1}>Your everyday,<br />reframed.</h2>
          </div>
          <p className="muted">
            Start with a collection.<br />Discover your own perspective.
          </p>
        </div>

        <div className="category-entry-grid">
          {[
            { title: "Men", caption: "Quiet confidence.", color: "#525647", shape: "square" as const },
            { title: "Women", caption: "A little expression.", color: "#80626C", shape: "cat" as const },
            { title: "Children", caption: "Small frames. Big days.", color: "#6D8160", shape: "round" as const }
          ].map((category) => (
            <Link
              className="category-entry"
              key={category.title}
              href={`/shop?audience=${category.title}`}
            >
              <div className="category-entry-top">
                <span>{category.title}</span>
                <ArrowUpRight size={22} aria-hidden="true" />
              </div>
              <Eyewear color={category.color} shape={category.shape} />
              <p>{category.caption}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="featured-section">
        <div className="section-heading section-heading-compact">
          <div>
            <p className="eyebrow">SELECTED FOR A CLOSER LOOK</p>
            <h2>Considered favorites.</h2>
          </div>
          <Link href="/shop" className="text-link">
            All frames <ArrowUpRight size={17} aria-hidden="true" />
          </Link>
        </div>

        <ProductGrid items={products.slice(0, 4)} />
      </section>

      <section className="closing-note">
        <p className="eyebrow">SRI OPTICALS</p>
        <h2>A clearer point of view.</h2>
        <Link href="/about" className="button button-secondary">
          Our perspective <ArrowUpRight size={17} aria-hidden="true" />
        </Link>
      </section>
    </>
  );
}
```

---

# 10. Remaining pages

## `app/about/page.tsx`

```tsx
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Eyewear } from "@/components/eyewear";

export const metadata: Metadata = { title: "Our perspective" };

export default function AboutPage() {
  return (
    <div className="page-container about-page">
      <header className="page-heading">
        <p className="eyebrow">OUR PERSPECTIVE</p>
        <h1>A clearer<br />point of view.</h1>
        <p className="muted">
          Sri Opticals brings a considered approach to discovering eyewear:
          room to explore, details you can understand, and a collection that
          lets your own perspective lead.
        </p>
      </header>

      <div className="about-visual">
        <Eyewear
          color="#626B58"
          shape="round"
          label="Round eyewear illustration in a soft sage environment"
        />
      </div>

      <div className="principle-grid">
        <article>
          <p className="eyebrow">01</p>
          <h2>Considered design.</h2>
          <p className="muted">
            Shape, finish, and proportion deserve a closer look.
          </p>
        </article>
        <article>
          <p className="eyebrow">02</p>
          <h2>Everyday choice.</h2>
          <p className="muted">
            Different people and different days call for different frames.
          </p>
        </article>
        <article>
          <p className="eyebrow">03</p>
          <h2>Clear information.</h2>
          <p className="muted">
            Product details should help you explore, not make decisions harder.
          </p>
        </article>
      </div>

      <div className="about-bottom">
        <Link href="/shop" className="button button-primary">
          Explore the collection <ArrowUpRight size={17} aria-hidden="true" />
        </Link>
        <p className="fine-print">
          This is a frontend design prototype. Product details, availability,
          prices, and account interactions are simulated. No physical-store
          history, certifications, or clinical services are claimed.
        </p>
      </div>
    </div>
  );
}
```

## `app/shop/page.tsx`

```tsx
import type { Metadata } from "next";
import { Catalog } from "@/components/commerce";

export const metadata: Metadata = { title: "The collection" };

type SearchValues = Record<string, string | string[] | undefined>;

export default async function ShopPage({
  searchParams
}: {
  searchParams: Promise<SearchValues>;
}) {
  const params = await searchParams;
  const first = (value: string | string[] | undefined) =>
    typeof value === "string" ? value : "";

  const rawAudience = first(params.audience);
  const audience = ["Men", "Women", "Children"].includes(rawAudience)
    ? rawAudience
    : "All";

  const rawSort = first(params.sort);
  const sort = ["price-asc", "price-desc"].includes(rawSort)
    ? rawSort
    : "featured";

  return (
    <div className="page-container">
      <header className="page-heading">
        <p className="eyebrow">THE COLLECTION</p>
        <h1>Find your frame.</h1>
        <p className="muted">
          Distinctive shapes. Considered finishes. A perspective of your own.
        </p>
      </header>

      <Catalog audience={audience} query={first(params.q)} sort={sort} />
    </div>
  );
}
```

## `app/product/[slug]/page.tsx`

```tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductDetail, ProductGrid } from "@/components/commerce";
import { getProductBySlug, products } from "@/lib/catalog";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  return {
    title: product?.name ?? "Frame not found",
    description: product?.description
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) notFound();

  const related = products
    .filter((item) => item.id !== product.id && item.type === product.type)
    .slice(0, 4);

  return (
    <div className="page-container">
      <ProductDetail product={product} />

      {related.length > 0 && (
        <section className="related-section">
          <div className="section-heading section-heading-compact">
            <div>
              <p className="eyebrow">ANOTHER PERSPECTIVE</p>
              <h2>A few more to consider.</h2>
            </div>
          </div>
          <ProductGrid items={related} />
        </section>
      )}
    </div>
  );
}
```

## `app/wishlist/page.tsx`

```tsx
import type { Metadata } from "next";
import { WishlistView } from "@/components/commerce";

export const metadata: Metadata = { title: "Saved frames" };

export default function WishlistPage() {
  return (
    <div className="page-container">
      <header className="page-heading">
        <p className="eyebrow">YOUR WISHLIST</p>
        <h1>A second look.</h1>
        <p className="muted">A little collection of possibilities.</p>
      </header>
      <WishlistView />
    </div>
  );
}
```

## `app/cart/page.tsx`

```tsx
import type { Metadata } from "next";
import { CartView } from "@/components/commerce";

export const metadata: Metadata = { title: "Your cart" };

export default function CartPage() {
  return (
    <div className="page-container">
      <header className="page-heading">
        <p className="eyebrow">YOUR CART</p>
        <h1>A considered selection.</h1>
        <p className="muted">Your next perspective, one frame at a time.</p>
      </header>
      <CartView />
    </div>
  );
}
```

## `app/not-found.tsx`

```tsx
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function NotFound() {
  return (
    <div className="page-container empty-state">
      <p className="eyebrow">A SMALL DETOUR</p>
      <h1>Out of view.</h1>
      <p className="muted">We could not find that page or frame.</p>
      <Link href="/shop" className="button button-primary">
        Back to the collection <ArrowUpRight size={17} aria-hidden="true" />
      </Link>
    </div>
  );
}
```

---

# 11. Complete visual styling

## `app/globals.css`

```css
:root {
  --canvas: #f7f5f0;
  --surface: #fffefb;
  --sage: #e8ede5;
  --stone: #eee8df;
  --ink: #292d29;
  --muted: #62665e;
  --accent: #465542;
  --accent-hover: #354230;
  --line: #d5d8cf;
  --control-line: #7b8375;
  --rail-width: 92px;
  --header-height: 92px;
  --page-gutter: clamp(24px, 4.5vw, 80px);
}

* { box-sizing: border-box; }

html {
  scroll-behavior: smooth;
  scroll-padding-top: calc(var(--header-height) + 24px);
}

body {
  margin: 0;
  background: var(--canvas);
  color: var(--ink);
  font-family: var(--font-inter), Arial, sans-serif;
  font-size: 15px;
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
}

button, input, select { font: inherit; }
button, a { -webkit-tap-highlight-color: transparent; }
button { cursor: pointer; }
button:disabled { cursor: not-allowed; opacity: .45; }
a { color: inherit; text-decoration: none; }
svg { display: block; flex-shrink: 0; }
p, h1, h2, h3 { margin: 0; }
button { color: inherit; }
img, svg { max-width: 100%; }
::selection { background: #d7dfcc; color: var(--ink); }

h1, h2, h3 {
  font-family: var(--font-manrope), Arial, sans-serif;
  font-weight: 500;
}

h1, h2 { letter-spacing: -.065em; line-height: 1.06; }
h3 { letter-spacing: -.025em; }

:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 5px;
}

main:focus, #collection:focus { outline: none; }

.skip-link {
  position: fixed;
  top: 10px;
  left: 12px;
  z-index: 100;
  background: var(--ink);
  color: white;
  padding: 12px 18px;
  transform: translateY(-160%);
}

.skip-link:focus { transform: translateY(0); }

.site-frame {
  margin-left: var(--rail-width);
  padding-top: var(--header-height);
}

.desktop-rail {
  position: fixed;
  inset: 0 auto 0 0;
  z-index: 45;
  width: var(--rail-width);
  background: var(--canvas);
  border-right: 1px solid var(--line);
  display: flex;
  align-items: center;
  flex-direction: column;
}

.rail-monogram {
  height: var(--header-height);
  display: flex;
  align-items: center;
  font-family: var(--font-manrope), sans-serif;
  font-size: 24px;
  letter-spacing: -.14em;
  font-weight: 700;
}

.rail-monogram span { font-weight: 400; }

.desktop-rail nav {
  margin-top: 22vh;
  display: grid;
  gap: 22px;
  width: 100%;
}

.desktop-rail nav a {
  position: relative;
  display: flex;
  min-height: 44px;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  color: var(--muted);
}

.desktop-rail nav a[aria-current="page"] {
  color: var(--ink);
  font-weight: 600;
}

.desktop-rail nav a[aria-current="page"]::before {
  content: "";
  position: absolute;
  left: 0;
  top: 12px;
  bottom: 12px;
  width: 3px;
  background: var(--accent);
}

.rail-caption {
  margin-top: auto;
  margin-bottom: 32px;
  writing-mode: vertical-rl;
  font-size: 9px;
  letter-spacing: .22em;
  color: var(--muted);
}

.site-header {
  position: fixed;
  top: 0;
  right: 0;
  left: var(--rail-width);
  height: var(--header-height);
  z-index: 40;
  padding: 0 var(--page-gutter);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  background: rgba(247, 245, 240, .95);
  border-bottom: 1px solid rgba(213, 216, 207, .7);
  backdrop-filter: blur(14px);
}

.header-brand, .header-actions, .auth-actions {
  display: flex;
  align-items: center;
}

.header-brand { gap: 12px; }
.header-actions { gap: 12px; }
.auth-actions { gap: 20px; margin-right: 10px; }

.wordmark {
  font-family: var(--font-manrope), sans-serif;
  font-weight: 700;
  font-size: 20px;
  letter-spacing: -.06em;
  line-height: 1.1;
  white-space: nowrap;
}

.wordmark span {
  display: block;
  font-family: var(--font-inter), sans-serif;
  font-size: 7px;
  font-weight: 500;
  letter-spacing: .19em;
  margin-top: 8px;
}

.header-shop, .text-link {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  font-size: 13px;
  min-height: 44px;
}

.header-shop { margin-left: auto; margin-right: 24px; }

.text-button {
  border: 0;
  background: none;
  padding: 8px 0;
  min-height: 44px;
  font-size: 12px;
}

.text-button:hover, .text-link:hover, .underlined:hover {
  color: var(--accent);
}

.icon-button {
  border: 0;
  background: transparent;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  flex-shrink: 0;
  transition: background .16s ease;
}

.icon-button:hover:not(:disabled) { background: rgba(70, 85, 66, .08); }

.count-badge {
  position: absolute;
  top: 0;
  right: -1px;
  background: var(--accent);
  color: white;
  min-width: 18px;
  height: 18px;
  padding: 0 4px;
  border-radius: 12px;
  font-size: 10px;
  display: grid;
  place-items: center;
}

.mobile-menu { display: none; }

.eyebrow, .chapter-label {
  font-size: 10px;
  letter-spacing: .16em;
  line-height: 1.6;
  font-weight: 500;
}

.chapter-label { color: var(--muted); }
.muted { color: var(--muted); line-height: 1.8; }
.fine-print { font-size: 12px; line-height: 1.7; color: var(--muted); }

.button {
  min-height: 48px;
  padding: 13px 22px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 18px;
  border: 1px solid transparent;
  border-radius: 10px;
  font-size: 13px;
  font-weight: 500;
  transition: background .18s ease, transform .18s ease;
}

.button:hover:not(:disabled) { transform: translateY(-1px); }
.button:active:not(:disabled) { transform: translateY(0); }
.button-primary { background: var(--accent); color: #fffefb; }
.button-primary:hover:not(:disabled) { background: var(--accent-hover); }
.button-secondary { background: transparent; border-color: var(--control-line); }
.button-secondary:hover:not(:disabled) { background: var(--sage); }
.underlined { text-decoration: underline; text-underline-offset: 5px; font-size: 13px; }

.hero {
  position: relative;
  isolation: isolate;
  min-height: max(720px, calc(100svh - var(--header-height)));
  overflow: hidden;
  padding: 34px var(--page-gutter) 28px;
  display: flex;
  flex-direction: column;
  background:
    radial-gradient(ellipse at 74% 46%, #e4e8db 0%, transparent 48%),
    var(--canvas);
}

.hero-topline, .hero-bottomline {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  position: relative;
  z-index: 3;
}

.hero-copy {
  position: relative;
  z-index: 2;
  padding-top: clamp(70px, 11vh, 140px);
  padding-bottom: 180px;
  pointer-events: none;
}

.hero-copy h1 {
  font-size: clamp(70px, 7.8vw, 132px);
  max-width: 780px;
  font-weight: 500;
  line-height: .98;
  letter-spacing: -.08em;
}

.hero-copy h1 span { color: var(--accent); }
.hero-copy p { margin-top: 30px; color: var(--muted); font-size: 14px; }
.hero-actions { display: flex; align-items: center; gap: 26px; margin-top: 30px; }
.hero-actions a { pointer-events: auto; }

.hero-art {
  position: absolute;
  width: 68%;
  right: -5%;
  top: 20%;
  bottom: 8%;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-art > .eyewear {
  width: 115%;
  max-width: none;
  transform: rotate(-12deg) translate(6%, 13%);
  filter: drop-shadow(0 24px 26px rgba(57, 63, 46, .07));
}

.hero-orbit {
  position: absolute;
  border: 1px solid rgba(93, 104, 79, .12);
  border-radius: 50%;
  width: 70%;
  aspect-ratio: 1;
  transform: rotate(-25deg) scaleY(.76);
  pointer-events: none;
}

.hero-orbit-two { width: 88%; opacity: .45; }

.hero-product-note {
  position: absolute;
  right: 23%;
  bottom: 6%;
  display: flex;
  gap: 15px;
  align-items: center;
  padding: 14px 18px;
  background: rgba(255, 254, 251, .78);
  border: 1px solid rgba(255, 254, 251, .9);
  border-radius: 12px;
  backdrop-filter: blur(8px);
}

.hero-product-note strong {
  display: block;
  font-size: 10px;
  letter-spacing: .13em;
  font-weight: 600;
}

.hero-product-note small {
  display: block;
  color: var(--muted);
  margin-top: 4px;
  font-size: 10px;
}

.material-dot, .small-dot {
  display: block;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: #555c46;
  border: 4px solid #e5e8df;
}

.small-dot { width: 13px; height: 13px; border: 0; }

.hero-bottomline { margin-top: auto; }
.scroll-link { display: inline-flex; gap: 13px; align-items: center; font-size: 11px; min-height: 44px; }
.skip-experience { font-size: 11px; text-decoration: underline; text-underline-offset: 4px; }
.hero-coordinate { font-size: 9px; color: var(--muted); letter-spacing: .12em; }

.story-section {
  display: grid;
  grid-template-columns: .9fr 1.1fr;
  min-height: 650px;
  align-items: center;
  gap: 48px;
  padding: 90px var(--page-gutter);
  overflow: hidden;
}

.story-stone { background: var(--stone); }
.story-sage { background: var(--sage); }
.story-copy { position: relative; z-index: 2; max-width: 440px; }
.story-copy h2 { font-size: clamp(38px, 4.3vw, 70px); margin: 24px 0; }
.story-copy > .muted { max-width: 350px; font-size: 14px; }
.story-copy .text-link { margin-top: 28px; }

.story-art {
  position: relative;
  min-width: 0;
  min-height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.story-art-detail .eyewear { width: 135%; max-width: none; transform: rotate(18deg) translateX(8%); }
.detail-caption { position: absolute; bottom: 0; left: 5%; font-size: 9px; letter-spacing: .16em; color: var(--muted); }
.story-reverse .story-copy { order: 2; }
.story-reverse .story-art { order: 1; }
.story-art-round .eyewear { transform: rotate(-16deg); width: 120%; max-width: none; }

.story-chips { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 28px; }
.story-chips a { padding: 9px 15px; min-height: 44px; border: 1px solid var(--control-line); border-radius: 30px; font-size: 12px; }
.story-chips a:hover { background: var(--surface); }

.signature-panel {
  max-width: 500px;
  width: 100%;
  margin-left: auto;
  background: #eceee5;
  padding: 26px;
  border-radius: 24px;
}

.signature-panel-top, .signature-panel-bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.signature-panel .eyewear { margin: -5px 0; }
.signature-panel h3 { font-size: 26px; }
.signature-panel-bottom p { color: var(--muted); font-size: 13px; margin-top: 5px; }
.bordered-icon { border: 1px solid var(--control-line); }

.collection-section, .featured-section { padding: 96px var(--page-gutter); }
.collection-section { background: #eeeee6; }
.featured-section { padding-top: 100px; padding-bottom: 110px; }

.section-heading {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 28px;
  margin-bottom: 46px;
}

.section-heading h2 { font-size: clamp(42px, 4.8vw, 72px); margin-top: 18px; }
.section-heading > p { font-size: 13px; }
.section-heading-compact h2 { font-size: clamp(32px, 3.6vw, 50px); }

.category-entry-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }

.category-entry {
  min-width: 0;
  background: var(--canvas);
  padding: 24px;
  border-radius: 18px;
  overflow: hidden;
}

.category-entry:nth-child(2) { background: #f3ece7; }
.category-entry:nth-child(3) { background: #e2e8db; }
.category-entry-top { display: flex; align-items: center; justify-content: space-between; }
.category-entry-top span { font-family: var(--font-manrope), sans-serif; font-size: 28px; letter-spacing: -.04em; }
.category-entry .eyewear { width: 120%; max-width: none; margin: -5px -10%; transition: transform .3s ease; }
.category-entry:hover .eyewear { transform: translateY(-5px) rotate(-4deg); }
.category-entry p { font-size: 12px; color: var(--muted); }

.product-grid { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 34px 24px; }
.product-card { min-width: 0; }
.product-art { position: relative; aspect-ratio: 4 / 3; border-radius: 17px; transition: transform .22s ease, box-shadow .22s ease; }
.product-art-link { display: flex; align-items: center; justify-content: center; width: 100%; height: 100%; overflow: hidden; border-radius: inherit; }
.product-art .eyewear { width: 116%; max-width: none; transition: transform .22s ease; }
.product-tag { position: absolute; top: 16px; left: 16px; font-size: 9px; letter-spacing: .05em; pointer-events: none; }
.save-button { position: absolute; top: 7px; right: 7px; background: rgba(255, 254, 251, .6); }
.save-button.is-saved { background: var(--surface); color: var(--accent); }

.product-heading { display: flex; justify-content: space-between; gap: 10px; margin-top: 18px; align-items: baseline; }
.product-heading h3 { font-size: 16px; }
.product-heading > span { font-size: 13px; white-space: nowrap; font-variant-numeric: tabular-nums; }
.product-meta { font-size: 11px; margin-top: 5px; color: var(--muted); }
.product-meta span { margin: 0 4px; }
.product-bottom { display: flex; align-items: center; justify-content: space-between; gap: 8px; margin-top: 5px; }
.stock { font-size: 10px; color: var(--muted); }
.stock.unavailable { color: #845f38; }
.add-link { display: inline-flex; align-items: center; gap: 8px; font-size: 11px; }

.closing-note {
  padding: 85px 24px;
  text-align: center;
  background: var(--sage);
}

.closing-note h2 { font-size: clamp(36px, 4vw, 60px); margin: 22px 0 30px; }

.site-footer {
  padding: 55px var(--page-gutter) 30px;
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 35px;
  border-top: 1px solid var(--line);
}

.footer-wordmark { font-family: var(--font-manrope), sans-serif; font-size: 24px; font-weight: 700; letter-spacing: -.06em; }
.site-footer > div p { font-size: 12px; color: var(--muted); margin-top: 8px; }
.site-footer nav { display: flex; flex-wrap: wrap; gap: 24px; align-items: center; font-size: 12px; }
.site-footer > .fine-print { grid-column: 1 / -1; border-top: 1px solid var(--line); padding-top: 22px; }

.page-container { max-width: 1600px; margin: 0 auto; padding: 72px var(--page-gutter) 100px; min-height: 65vh; }
.page-heading { margin-bottom: 48px; }
.page-heading h1 { font-size: clamp(40px, 5.4vw, 80px); margin: 20px 0; }
.page-heading > p.muted { max-width: 570px; font-size: 14px; }

.category-tabs { display: flex; gap: 10px; border-bottom: 1px solid var(--line); padding-bottom: 18px; flex-wrap: wrap; }
.category-tabs a { min-height: 44px; padding: 10px 20px; border-radius: 30px; font-size: 13px; }
.category-tabs a.active { background: var(--accent); color: var(--surface); }
.category-tabs a:hover:not(.active) { background: var(--sage); }

label { display: block; font-size: 12px; font-weight: 500; margin-bottom: 8px; }

input, select {
  min-height: 48px;
  width: 100%;
  border: 1px solid var(--control-line);
  background: var(--surface);
  color: var(--ink);
  border-radius: 10px;
  padding: 11px 14px;
  font-size: 14px;
}

.catalog-controls { display: grid; grid-template-columns: 1fr 210px auto; align-items: end; gap: 18px; margin: 28px 0 20px; }
.results-bar { display: flex; align-items: center; justify-content: space-between; gap: 16px; margin-bottom: 26px; font-size: 12px; color: var(--muted); }

.breadcrumbs { display: flex; gap: 12px; flex-wrap: wrap; font-size: 12px; color: var(--muted); margin-bottom: 30px; }
.breadcrumbs a { text-decoration: underline; text-underline-offset: 4px; }
.detail-layout { display: grid; grid-template-columns: 1.2fr 1fr; gap: 64px; align-items: start; }

.detail-art {
  position: sticky;
  top: calc(var(--header-height) + 30px);
  border-radius: 24px;
  min-height: 520px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
}

.detail-art .eyewear { width: 120%; max-width: none; margin-left: -10%; }
.art-caption { font-size: 10px; color: var(--muted); }
.detail-copy { padding: 20px 0; }
.detail-copy h1 { font-size: clamp(40px, 4.5vw, 64px); margin: 18px 0; }
.detail-price { font-size: 24px; margin-bottom: 22px; }
.detail-copy > .muted { font-size: 14px; }
.spec-list { margin: 30px 0; font-size: 12px; }
.spec-list div { display: flex; justify-content: space-between; gap: 20px; padding: 12px 0; border-bottom: 1px solid var(--line); }
.spec-list dt { color: var(--muted); }
.spec-list dd { margin: 0; text-align: right; }
.detail-quantity { max-width: 110px; margin-bottom: 22px; }
.purchase-actions { display: flex; gap: 12px; margin: 20px 0; }
.purchase-actions .button-primary { flex: 1; }
.related-section { margin-top: 110px; }

.empty-state { text-align: center; padding: 75px 20px; }
.empty-mark { display: block; font-size: 54px; color: var(--accent); margin-bottom: 25px; letter-spacing: -.1em; }
.empty-state h1, .empty-state h2 { font-size: clamp(30px, 4vw, 50px); }
.empty-state p { max-width: 480px; margin: 18px auto 26px; }
.loading-state { padding: 80px 0; color: var(--muted); }

.cart-layout { display: grid; grid-template-columns: 1.5fr 1fr; align-items: start; gap: 56px; }
.cart-line { display: flex; gap: 20px; padding: 24px 0; border-bottom: 1px solid var(--line); }
.cart-line:first-child { padding-top: 0; }
.cart-art { display: flex; align-items: center; width: 150px; flex-shrink: 0; border-radius: 14px; align-self: flex-start; min-height: 125px; }
.cart-line-copy { flex: 1; min-width: 0; }
.cart-line h2 { font-size: 20px; letter-spacing: -.04em; line-height: 1.3; }
.cart-line-copy > p { font-size: 12px; margin-top: 5px; }
.cart-line-end { display: flex; flex-direction: column; align-items: flex-end; justify-content: space-between; }
.cart-line-end strong { font-size: 14px; font-weight: 500; white-space: nowrap; }
.quantity-control { display: inline-flex; align-items: center; border: 1px solid var(--control-line); border-radius: 25px; margin-top: 14px; }
.quantity-control > span { min-width: 22px; text-align: center; font-size: 13px; }
.cart-lines > .underlined { display: inline-block; margin-top: 26px; }

.order-summary { background: var(--sage); border-radius: 20px; padding: 30px; }
.order-summary h2 { font-size: 32px; margin: 15px 0 28px; }
.summary-row { display: flex; justify-content: space-between; gap: 18px; margin: 16px 0; font-size: 13px; }
.summary-row span:last-child { text-align: right; }
.summary-total { border-top: 1px solid #bbc6b5; margin-top: 24px; padding-top: 22px; font-weight: 600; font-size: 15px; }
.order-summary > .fine-print { margin-top: 22px; }
.inline-notice { padding: 16px; border-radius: 12px; background: rgba(255, 254, 251, .65); border: 1px solid var(--line); font-size: 12px; color: var(--muted); line-height: 1.7; margin-top: 20px; }

.about-page .page-heading { max-width: 780px; }
.about-visual { background: var(--sage); border-radius: 24px; overflow: hidden; display: flex; justify-content: center; max-height: 520px; }
.about-visual .eyewear { width: 850px; transform: rotate(-10deg); }
.principle-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 40px; margin: 65px 0; }
.principle-grid h2 { font-size: 28px; margin: 16px 0; letter-spacing: -.045em; }
.principle-grid .muted { font-size: 14px; }
.about-bottom { display: flex; align-items: flex-start; gap: 50px; justify-content: space-between; }
.about-bottom .button { flex-shrink: 0; }
.about-bottom p { max-width: 560px; }

.auth-dialog {
  position: fixed;
  width: min(500px, calc(100vw - 32px));
  max-height: calc(100svh - 40px);
  overflow-y: auto;
  border: 1px solid var(--line);
  border-radius: 24px;
  padding: 44px 34px 32px;
  background: var(--surface);
  color: var(--ink);
  box-shadow: 0 30px 100px rgba(28, 36, 27, .2);
}

.auth-dialog::backdrop { background: rgba(36, 43, 34, .3); backdrop-filter: blur(5px); }
.dialog-close { position: absolute; top: 10px; right: 10px; }
.auth-dialog h2 { font-size: 38px; margin: 18px 0; }
.auth-dialog > .muted { font-size: 13px; }
.auth-dialog form { margin: 28px 0 18px; }
.auth-dialog form .button { width: 100%; margin-top: 16px; }

.toast-region { position: fixed; bottom: 24px; right: 24px; z-index: 70; max-width: min(420px, calc(100vw - 32px)); pointer-events: none; }
.toast { background: var(--ink); color: var(--surface); border-radius: 12px; padding: 16px 22px; font-size: 13px; box-shadow: 0 12px 40px rgba(20, 30, 20, .14); }
.storage-warning { position: fixed; bottom: 0; left: var(--rail-width); right: 0; background: #f5e8d7; padding: 10px 20px; font-size: 12px; z-index: 60; border-top: 1px solid #b9a483; }

@media (hover: hover) and (pointer: fine) {
  .product-card:hover .product-art { transform: translateY(-3px); box-shadow: 0 12px 28px rgba(44, 51, 37, .06); }
  .product-card:hover .product-art .eyewear { transform: scale(1.025); }
}

@media (min-width: 1700px) {
  .hero-art { width: 64%; right: 0; }
}

@media (max-width: 1279px) {
  :root { --page-gutter: 32px; }
  .header-shop { display: none; }
  .hero-art { width: 72%; right: -12%; top: 28%; }
  .hero-copy h1 { font-size: clamp(76px, 8vw, 112px); }
  .product-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); }
  .featured-section .product-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .detail-layout { gap: 32px; }
  .cart-layout { gap: 30px; }
  .cart-art { width: 115px; min-height: 100px; }
  .hero-coordinate { display: none; }
}

@media (max-width: 1023px) {
  :root { --rail-width: 0px; --header-height: 80px; }
  .desktop-rail { display: none; }

  .mobile-menu { display: block; position: relative; }
  .mobile-menu summary { list-style: none; cursor: pointer; width: 44px; height: 44px; display: grid; place-items: center; }
  .mobile-menu summary::-webkit-details-marker { display: none; }
  .mobile-menu nav { position: absolute; left: -12px; top: 54px; min-width: 230px; border: 1px solid var(--line); border-radius: 14px; background: var(--surface); box-shadow: 0 12px 32px rgba(30, 40, 25, .1); padding: 12px; display: grid; }
  .mobile-menu nav a { padding: 12px; font-size: 14px; }
  .mobile-menu nav a:hover { background: var(--sage); border-radius: 8px; }

  .hero { min-height: 820px; }
  .hero-copy { padding-top: 70px; padding-bottom: 260px; }
  .hero-copy h1 { font-size: clamp(76px, 10vw, 106px); }
  .hero-art { width: 74%; top: 38%; right: -6%; bottom: 8%; }
  .hero-product-note { right: 14%; bottom: 2%; }

  .story-section { min-height: 530px; gap: 28px; padding-top: 70px; padding-bottom: 70px; }
  .story-copy h2 { font-size: 44px; }
  .story-art { min-height: 300px; }
  .category-entry { padding: 20px; }
  .category-entry-top span { font-size: 24px; }
  .detail-art { min-height: 440px; }
  .purchase-actions { flex-wrap: wrap; }
  .cart-layout { grid-template-columns: 1fr; }
  .order-summary { max-width: 600px; width: 100%; }
  .principle-grid { gap: 24px; }
}

@media (max-width: 767px) {
  :root { --page-gutter: 20px; --header-height: 112px; }
  body { font-size: 14px; }
  .site-header { flex-wrap: wrap; align-content: center; gap: 0; padding-top: 8px; padding-bottom: 8px; }
  .header-brand { gap: 4px; }
  .wordmark { font-size: 18px; }
  .wordmark span { font-size: 6px; margin-top: 6px; }
  .header-actions { gap: 4px; }
  .auth-actions { position: absolute; bottom: 5px; left: var(--page-gutter); right: var(--page-gutter); justify-content: flex-end; gap: 22px; margin: 0; }
  .auth-actions .text-button { min-height: 36px; font-size: 11px; }
  .header-brand, .header-actions > .icon-button { margin-bottom: 30px; }
  .account-label { position: absolute; right: var(--page-gutter); bottom: 3px; font-size: 11px; max-width: 75%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; min-height: 36px; }
  .site-header .icon-button { width: 40px; }
  .chapter-label { display: none; }

  .hero { min-height: 790px; padding-top: 24px; }
  .hero-topline .eyebrow { font-size: 8px; letter-spacing: .12em; }
  .hero-copy { padding-top: 45px; padding-bottom: 330px; }
  .hero-copy h1 { font-size: clamp(58px, 12.4vw, 90px); }
  .hero-copy p { margin-top: 24px; font-size: 13px; }
  .hero-actions { gap: 18px; margin-top: 24px; flex-wrap: wrap; }
  .hero-actions .button { padding: 12px 16px; }
  .hero-actions .text-link { font-size: 12px; }
  .hero-art { width: 112%; height: 340px; top: auto; bottom: 66px; right: -8%; }
  .hero-art > .eyewear { width: 105%; transform: rotate(-12deg) translate(0, 0); }
  .hero-product-note { bottom: 6px; right: 16%; padding: 10px 14px; }
  .hero-orbit-one { width: 62%; }
  .hero-orbit-two { width: 82%; }
  .hero-bottomline { gap: 10px; }
  .scroll-link, .skip-experience { font-size: 10px; }
  .scroll-link { gap: 8px; }

  .story-section { grid-template-columns: 1fr; min-height: auto; padding: 64px var(--page-gutter); gap: 24px; }
  .story-copy { max-width: 100%; }
  .story-copy h2 { font-size: clamp(38px, 8vw, 54px); margin: 20px 0; }
  .story-copy > .muted { max-width: 430px; }
  .story-reverse .story-copy { order: 0; }
  .story-reverse .story-art { order: 1; }
  .story-art { min-height: 275px; }
  .story-art-detail .eyewear { width: 115%; transform: rotate(13deg); }
  .story-art-round .eyewear { width: 105%; }
  .detail-caption { left: 0; font-size: 8px; }
  .signature-panel { margin: 12px 0 0; max-width: none; padding: 22px; }

  .collection-section, .featured-section { padding: 64px var(--page-gutter); }
  .section-heading { align-items: flex-start; gap: 22px; margin-bottom: 30px; flex-direction: column; }
  .section-heading h2 { font-size: 44px; }
  .section-heading-compact { flex-direction: row; align-items: flex-end; flex-wrap: wrap; }
  .section-heading-compact h2 { font-size: 34px; }
  .section-heading-compact .text-link { font-size: 12px; }

  .category-entry-grid { grid-template-columns: 1fr; gap: 14px; }
  .category-entry { position: relative; min-height: 180px; padding: 22px; }
  .category-entry .eyewear { position: absolute; right: -8%; top: 10px; width: 75%; margin: 0; pointer-events: none; }
  .category-entry-top { position: relative; z-index: 1; }
  .category-entry > p { position: relative; margin-top: 85px; font-size: 11px; }

  .product-grid, .featured-section .product-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 26px 14px; }
  .product-art { border-radius: 13px; }
  .product-tag { top: 11px; left: 10px; font-size: 8px; max-width: calc(100% - 50px); }
  .save-button { top: 3px; right: 3px; width: 40px; height: 40px; }
  .product-heading { flex-direction: column; gap: 4px; margin-top: 13px; }
  .product-heading h3 { font-size: 15px; }
  .product-heading > span { font-size: 12px; }
  .product-meta { font-size: 10px; }
  .product-bottom { align-items: flex-start; }
  .product-bottom .stock { padding-top: 13px; font-size: 9px; }
  .product-art .eyewear { width: 126%; }

  .site-footer { grid-template-columns: 1fr; padding-top: 40px; gap: 28px; }
  .site-footer nav { gap: 20px; }
  .page-container { padding-top: 45px; padding-bottom: 64px; }
  .page-heading { margin-bottom: 32px; }
  .page-heading h1 { font-size: 44px; }
  .catalog-controls { grid-template-columns: 1fr auto; gap: 14px; }
  .search-field { grid-column: 1 / -1; }
  .category-tabs { gap: 5px; }
  .category-tabs a { padding: 10px 15px; font-size: 12px; }

  .detail-layout { grid-template-columns: 1fr; gap: 25px; }
  .detail-art { position: static; min-height: 320px; padding: 22px; }
  .detail-copy { padding: 0; }
  .detail-copy h1 { font-size: 46px; }
  .detail-copy > .muted { max-width: 520px; }
  .purchase-actions { flex-wrap: nowrap; }
  .purchase-actions .button { padding: 12px 16px; gap: 12px; }
  .related-section { margin-top: 70px; }

  .cart-line { gap: 12px; flex-wrap: wrap; }
  .cart-art { width: 105px; min-height: 90px; }
  .cart-line-copy { min-width: 125px; }
  .cart-line h2 { font-size: 18px; }
  .cart-line-end { width: 100%; flex-direction: row; align-items: center; }
  .cart-line-end strong { margin-left: 117px; }
  .order-summary { padding: 24px; }
  .summary-row { font-size: 12px; }
  .summary-total { font-size: 14px; }
  .empty-state { padding: 45px 8px; }
  .empty-state h2 { font-size: 34px; }

  .principle-grid { grid-template-columns: 1fr; gap: 34px; margin: 45px 0; }
  .about-bottom { flex-direction: column; gap: 24px; }
  .about-visual { min-height: 240px; }
  .about-visual .eyewear { width: 120%; max-width: none; }

  .auth-dialog { padding: 44px 24px 26px; }
  .auth-dialog h2 { font-size: 34px; }
  .toast-region { bottom: max(16px, env(safe-area-inset-bottom)); right: 16px; }
  .storage-warning { padding: 10px 16px; font-size: 11px; }
}

@media (max-width: 359px) {
  :root { --page-gutter: 16px; }
  .hero-copy h1 { font-size: 54px; }
  .hero-actions { gap: 10px; }
  .hero-actions .text-link { font-size: 11px; }
  .product-grid, .featured-section .product-grid { grid-template-columns: 1fr; }
  .product-heading { flex-direction: row; }
  .product-art { aspect-ratio: 4 / 3; }
  .hero-bottomline { flex-wrap: wrap; }
  .hero { min-height: 825px; }
  .hero-art { bottom: 92px; }
  .catalog-controls { grid-template-columns: 1fr; }
  .search-field { grid-column: auto; }
}

@media (prefers-reduced-motion: reduce) {
  html { scroll-behavior: auto; }
  *, *::before, *::after {
    animation: none !important;
    transition: none !important;
  }
}
```

---

# 12. Run Iteration 1

Use **Node.js 20.9 or newer**.

From the project folder:

```bash
npm install
npm run dev
```

Then open:

```
<http://localhost:3000>
```

For a type and production-build check:

```bash
npm run typecheck
npm run build
```

If you run `typecheck` before starting Next.js for the first time, let Next generate its types first with `npm run dev` or `npm run build`.

---

# 13. Iteration 1 verification checklist

These are **checks to run**, not tests I have already executed.

### Visual

- [x]  Backgrounds are ivory, warm stone, and pale sage—no blue.
- [x]  The hero headline and shopping CTA remain readable.
- [x]  Eyewear does not cover header actions.
- [x]  All five narrative compositions are present.
- [ ]  Mobile uses normal document flow.

### Navigation

- [ ]  Home, About Us, and Shop work.
- [ ]  Category links open the correct filtered collection.
- [ ]  Product cards open their detail routes.
- [ ]  Unknown product URLs show the not-found page.

### Commerce

- [ ]  Save a frame; the wishlist count updates.
- [ ]  Refresh; saved frames remain.
- [ ]  Add a frame; the cart count updates.
- [ ]  Quantity changes update the subtotal and shipping.
- [ ]  An out-of-stock frame cannot be added.
- [ ]  Purchase limits are enforced.
- [ ]  Removing the final cart item shows the empty state.

### Accessibility

- [ ]  Tab navigation shows visible focus.
- [ ]  The demo dialog opens and closes with Escape.
- [ ]  Focus returns to its trigger.
- [ ]  Product actions work without hovering.
- [ ]  Narrow layouts do not create horizontal scrolling.

---

## Next iteration

After this first version is running, **Iteration 2 will focus on the cinematic homepage**:

1. Build or integrate a suitable eyewear model.
2. Approve five camera compositions.
3. Connect those compositions to scroll progress.
4. Synchronize the narrative and background transitions.
5. Retain the current static experience as the mobile and failure fallback.

**Send a desktop screenshot and a mobile screenshot of this first build—or any terminal error—and we’ll refine the actual result before adding the 3D sequence.**

## My changes

Before applying any further iteration

I need you to make the following changes :

First :

The sign in/sign up page should be a profile icon which open into a new window, a seperate page, that shows two blocks, sign in as a customer, sign in as a business 

The customer portal should open into the normal shop as men women and children pages, and it should be a scrollable page where there are other stuff (As will be mentioned in the Fifth change ( Polarised coolers, Fiber Glasses etc…)

The business side should open into the same portal but the prices should be siginificantly lower (lets say 60% for example and the moq should be 20 for a piece)

Second :

The secondary CTA should be scrapped, its bad

Third :

The nav bar is good, but  I want the shop collection to be removed, it feels out of place 

Fourth:

The theme colour is horrible, hate it, use a different theme and color, Font is okay, but if a differnet font looks better for that theme, choose that, be bold

Fifth :

The hero page stuff,

The font “A new perspective is way too big and it is so bad, the frame should be the hero, not the text, and shop collection should open into another tab called, shop for men women and childen (or it can scroll down)

The “Details worth noticing part of the hero page is very uncessary, it serves no reasonable purpose, remove it, because of that, website looks clunky 

The “Differnet days, differnet frames is also bullshit, first of all, most indians just buy one frame and wear it for like 6 months, they treat it as a pair of glasses to help them see and look cool, thats it , its not an accessory to match it with the colour of their clothers, most indians are frugal and dont do that and it is also unecessary

The “ make it yours “s also bad, what is it , why do we have that, we dont need that,

Instead of filling out the hero page with clunk like this, we can add stuff like, ultra premium unbreakable frames - made with ultem

Polarised Coolers

Fiber Glasses 

Metal frames 

etc etc… you get the point ?

Sixth :

I want the about us to be found in the footer, along with contact us and other relavant stuff

Seventh :

Remove the side bar which says Home and About us, Home should be visible when they click the logo SriOpticals, that should be the home 

I will again send u reference images, and the acutall website u created, and hence make the necessary changes 

After finishing this, we will make changes in the about us section, if the corrections made are acceptable 

## Your Reply (Half of it )

Understood. **We’ll pause the planned iterations and correct this version first.** Your new requirements replace the earlier editorial-storytelling direction.

Looking at your screenshots, the problem is clear: the page gives too much space to oversized slogans and repeated illustrations, while the actual products and reasons to buy them arrive too late. The SVG frames also look like flat illustrations—not the premium product visuals you referenced. Recoloring alone won’t fix that.

The revised direction is **product-first, practical, and visually striking**, with separate retail and wholesale buying experiences.

## 1. Header: simpler, no sidebar

The new header will contain:

**SriOpticals logo → empty breathing room → Profile · Wishlist · Cart**

Changes:

- Remove the entire left sidebar, including its monogram.
- Remove the sidebar’s reserved space so the website uses the full width.
- Clicking **SriOpticals** returns home.
- Remove **Shop collection** from the header.
- Replace Sign Up / Sign In text with one accessible profile icon.
- Keep wishlist and cart counts.
- Reduce unnecessary header height, especially on mobile.
- Remove the small “A considered collection” tagline beneath the logo.

About Us will no longer appear in the header or hero.

## 2. Profile icon: dedicated customer/business entry page

The profile icon will open a separate `/account` page—not the current dialog.

That page will have two prominent blocks:

### Sign in as a Customer

Browse and buy individual frames.

### Sign in as a Business

Browse the same range with wholesale prices and minimum-order quantities.

Each block leads to its respective mock sign-in flow, with a signup option inside that flow.

**I recommend a separate page in the same browser tab**, rather than forcibly opening another browser window. It preserves normal back navigation and works better on mobile. If you specifically mean a new browser tab, we can implement that instead.

### Customer destination

A shopping portal with:

- Men.
- Women.
- Children.
- Scrollable product collections.
- Retail prices.
- Individual-unit purchasing.

### Business destination

**Your clarification changes Business from store administration to wholesale purchasing.** We will remove inventory editing and merchant-management functionality from the intended business experience.

Business users will see:

- The same shopping structure and products.
- Wholesale unit prices.
- MOQ displayed beside the price.
- Quantity controls starting at the minimum.
- Line totals clearly calculated from quantity.

### Pricing and MOQ interpretation

Unless you correct it, I’ll interpret your request as:

- **60% lower than retail**: wholesale price = 40% of retail.
- **Minimum 20 units of each selected product/configuration**.
- Quantities can be 20, 21, 22, etc.—not necessarily multiples of 20.

Example:

|  | Customer | Business |
| --- | --- | --- |
| Unit price | ₹1,000 | ₹400 |
| Minimum quantity | 1 | 20 |
| Minimum line total | ₹1,000 | ₹8,000 |

Retail and wholesale carts will be separate. Switching accounts must not silently reprice an existing cart or turn a one-piece order into twenty pieces.

The mock stock data also needs updating: the current products with fewer than twenty units cannot support wholesale ordering.

## 3. Hero: the frame becomes the focus

Remove:

- The oversized **“A new perspective”** headline.
- The secondary **Our perspective** CTA.
- Decorative orbit circles.
- Chapter numbers and ornamental captions.
- Repeated slogan-led panels.

New opening composition:

- A large, clearly visible eyewear product as the dominant object.
- A short supporting heading, approximately **36–48px desktop**, not 100px-plus.
- One concise product description.
- **One primary button: “Shop frames.”**

That button will scroll to a **Shop for Men / Women / Children** section directly below the hero. Those three choices will open their respective shopping pages.

The product should occupy roughly two-thirds of the hero’s visual emphasis. Copy supports it instead of competing with it.

**The 3D ambition remains**, but camera changes should reveal relevant product features—not accompany generic slogans. We should not animate the current flat SVG and present that as the finished premium experience.

## 4. Replace the filler with actual product collections

These sections will be deleted entirely:

- “Details worth a closer look.”
- “Different days. Different frames.”
- “Make it yours.”
- “A second look. A first choice.”
- The oversized closing “A clearer point of view” promotional block.

Replace them with useful shopping content:

| Collection | What appears |
| --- | --- |
| **Premium ULTEM Frames** | Relevant frame visual, concise material information, matching products |
| **Polarised Coolers** | Sunglasses with polarised lens configuration, prices, shopping action |
| **Fiber Frames** | Matching products and accurate material labels |
| **Metal Frames** | Metal-frame styles, finishes, prices |

Each collection should answer:

1. What is it?
2. What is different about it?
3. What does it cost?
4. Where can I shop it?

Not every collection needs another full-screen section. Use a stronger feature treatment for the lead range, then tighter product rows or paired collection panels.

Two accuracy details:

- I’ll use **“Premium ULTEM Frames”**, not an absolute **“unbreakable”** promise without supporting product evidence.
- **“Fiber” needs your intended meaning**: general plastic/polymer frames, TR90, or actual fiber-reinforced material. These should not be treated as interchangeable.

The copy will emphasize everyday use, fit, appearance, material, and value—not buying a different frame for every outfit.

## 5. Theme: replace sage and beige

My proposed replacement is **Pearl / Graphite / Oxblood**:

| Role | Color |
| --- | --- |
| Main background | Pearl white `#FAF9F7` |
| Product stages | Soft neutral gray `#EEEDEF` |
| Occasional feature surface | Pale rose-stone `#F2E8E6` |
| Text | Graphite `#242326` |
| Primary buttons and accents | Deep oxblood `#762F40` |
| Borders | Neutral gray `#D8D4D5` |

This keeps your earlier preference for light backgrounds but removes the green cast and muted showroom feel.

The stronger identity comes from **contrast, better product imagery, tighter layouts, and restrained burgundy accents**—not covering everything in another pastel color.

I would retain Manrope and Inter initially, but:

- Reduce headline scale.
- Loosen the overly tight letter spacing.
- Use slightly stronger heading weights.
- Eliminate the repetitive tiny uppercase editorial labels.

I’ll validate this proposal against the new references you’re sending before committing it to the replacement styles.

## 6. Footer and About Us

The footer will include:

- About Us.
- Contact Us.
- Men / Women / Children.
- Business account.
- Wishlist.
- Relevant help and prototype information.

No fabricated contact details, return promises, or dead links.

**About Us content will remain untouched for now**, as requested. We’ll relocate its entry point, then revise the page itself after you approve these corrections.

## 7. How we’ll apply this correction

This needs coordinated file replacements, **not another CSS override appended to the existing theme**.

The correction will update:

- Header and footer.
- Homepage structure.
- Global styling.
- Account entry and role handling.
- Customer/business shopping destinations.
- Catalog collection fields.
- Centralized retail/wholesale pricing rules.
- Cart storage and quantity validation.

**Nothing has been changed in your local project yet.** I can provide the replacement files here, but I cannot directly edit or test your localhost environment.

Send the additional reference images you mentioned. Also confirm just these two business/data details:

1. **60% off retail**, or **60% of retail**?
2. What do you mean by **Fiber Glasses**?

Then we can make this correction pass without carrying the rejected layout into the next iteration.

Footer may contain 

Shop now -> under which comes men women and children

Account → under which comes manage your account which opens into you account 

Milestones → which should be a link which gives us another page 

About us → pretty self explanatory

Help → should be faqs 

Footer links and the webpages can be created later, you can even keep place holders for now 

I have added example pictures of the frames that i want, you can select which frame you want to  add into the 3D hero page, and which ones to add under product listings 

**Confirmed. We’ll use your footer structure, and I’m choosing the fourth image—the deep navy rounded-square frame—as the hero reference.** The other three will support the product listings and category sections.

## **1. Footer structure**

The footer will use five columns on desktop, collapsing into a readable two-column layout on mobile.

| **Column** | **Links** | **Destination** |
| --- | --- | --- |
| **Shop now** | Men · Women · Children | Respective shopping pages |
| **Account** | Manage your account | **`/account`** |
| **Milestones** | Milestones | **`/milestones`** |
| **About us** | About us · Contact us | **`/about`** · **`/contact`** |
| **Help** | FAQs | **`/faqs`** |

**Manage your account** will open:

- The Customer / Business selection page when signed out.
- The active customer or business account page when signed in.

For pages we are postponing, we can use simple, explicitly labeled **“Page coming soon”** screens with a working return link. That is better than links that do nothing or unexpectedly jump to the top.

We will leave the existing About Us content unchanged until its dedicated correction pass. No invented milestones, company history, or contact information.

## **2. Frame selection**

### **Hero: Image 4 — Deep navy rounded-square frame**

This is the strongest choice for the homepage because:

- Its silhouette suits an everyday optical storefront.
- The dark finish will stand out against the new pearl background.
- The bridge, rim thickness, hinges, and temple shape provide useful details for camera movement.
- It feels premium without making the website look exclusively like a sunglasses or sports-eyewear brand.

**Opening composition:**

- Large three-quarter view.
- Entire front frame visible.
- Enough temple visible to establish depth.
- Small supporting headline, not oversized display text.
- One **Shop frames** button.
- No orbit circles, floating slogans, or duplicate promotional CTAs.

**Scroll movement:**

1. Establish the complete frame.
2. Rotate toward the temple and hinge.
3. Return to a balanced view as the shopping categories appear.

We will not stretch this into five screens of copy. The material and product collections below will carry the useful information.

The supplied navy frame has visible markings. An original reconstructed demo model should use a neutral finish rather than copying another brand’s markings.

### **Product listings and collection placement**

| **Image** | **Placement** | **Presentation** |
| --- | --- | --- |
| **1 — Teal upswept frame** | Women’s listing and featured frame selection | Emphasize its shape, translucent appearance, and hinge detail |
| **2 — Blue shield sunglasses** | Sports/sunglasses listing; possible Polarised Coolers feature | Large lens surface and distinctive sports profile |
| **3 — Turquoise/lime frame** | Children’s collection visual | Retain its two-tone appearance rather than forcing it into the site’s accent color |
| **4 — Navy rounded-square frame** | Hero, matching product detail, and adult listings | Keep the product consistent between the hero and store |

These are **visual merchandising assignments**, not verified product specifications. Images alone do not establish material, sizing, flexibility, ULTEM construction, or polarisation.

For the mock catalog, those properties can be explicitly simulated. For real listings, they will need actual product information. In particular, none of these images should automatically be labeled **metal**, **ULTEM**, or **unbreakable** based on appearance.

## **3. Theme stays independent of product colors**

We’ll proceed with the approved **Pearl / Graphite / Oxblood** direction:

- Pearl and neutral-gray surfaces.
- Graphite text.
- Oxblood buttons, selected states, and small accents.
- Original colors retained in product imagery.

A blue or teal **frame** does not mean returning to a blue or teal **website background**.

## **4. Important distinction: images versus 3D**

**These attachments are usable visual references, but they are not rotatable 3D assets.** A genuine angle-changing hero requires a model built or sourced to match the selected frame.

For the correction:

- Use the navy image as the initial hero poster.
- Use the supplied images for matching product cards.
- Replace the poster with the matching 3D scene when ready.
- Keep the poster for mobile, reduced-motion, and loading/error fallbacks.

I won’t present a tilted photograph as a finished 3D experience.

### **Prepare the images for the project**

Save the four attachments into your project with these filenames:

```
text
public/images/frames/
├── teal-upswept.png
├── blue-sports-shield.png
├── turquoise-lime-junior.png
└── navy-rounded-square.png
```

Use **`.jpg`** instead if that is their actual format—don’t merely rename a JPEG to PNG. The implementation paths must match.

**The correction scope is now settled:** remove the sidebar and filler sections, simplify the header, add the dedicated account entry, introduce retail/wholesale purchasing rules, apply the new theme, use these product visuals, and restructure the footer. No local files have been changed by this message.