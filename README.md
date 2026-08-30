# Chef Gabe Catering — Homepage

Plain HTML/CSS/JS build of the homepage. No build tools needed — open `index.html` directly in a browser, or deploy the folder as-is to any static host (Netlify, Vercel, GitHub Pages, or your web host's file manager).

## Structure

```
chef-gabe-site/
├── index.html
├── css/styles.css
├── js/script.js
└── images/        (empty — drop real photos here)
```

## Swapping in real photos & logo

Every photo on the page is currently a tan/brown striped **placeholder block** with a text label describing what should go there (e.g. "Hero photo: chafing dishes, tortillas, flowers"). To swap one in:

1. Drop the image file into `images/` (e.g. `images/hero.jpg`).
2. In `index.html`, find the matching `<div class="placeholder-img ..." data-label="...">` and replace it with an `<img>` tag, keeping the same class names so sizing/cropping still works, e.g.:

   ```html
   <!-- before -->
   <div class="placeholder-img dish-img" data-label="Carne Asada photo"></div>

   <!-- after -->
   <img class="dish-img" src="images/carne-asada.jpg" alt="Carne Asada plate">
   ```

3. For the logo, replace the `<span class="logo-script">Chef Gabe</span>` block with an `<img>` of the real logo file if you have one designed, or keep the CSS text logo if you don't.

## Fonts used

- **Pinyon Script** — logo wordmark
- **Cormorant Garamond** — headlines
- **Jost** — nav, body copy, buttons

All loaded from Google Fonts via `<link>` tags in `index.html`.

## Colors (CSS variables in `css/styles.css`)

| Variable | Hex | Use |
|---|---|---|
| `--color-espresso` | #0A0A08 | header bar, dark overlays |
| `--color-rust` | #94411B | primary buttons, accents |
| `--color-olive` | #313220 | dark green sections |
| `--color-cream` | #EBE2D4 | main background |
| `--color-tan` | #DED1BE | footer background |
| `--color-offwhite` | #F4F4EF | light text |

## Not yet built

This is the **homepage only**. Still to do: Our Food, Events, Menus, Gallery, About, and Contact pages/sections (nav links currently point to in-page anchors as placeholders).

## Known placeholders needing real content later

- All photography (hero, 4 dish photos, 5 event category photos, 3 "Experience" section photos)
- Real logo file (if a designed version exists beyond the CSS type treatment)
- Contact form (footer currently only has clickable phone/email, no form)
