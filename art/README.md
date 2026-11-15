# art/

Drop image files for the art page here (JPG/PNG/WebP). Keep them reasonably
sized (long edge ~1600px, each ideally under ~400 KB) so the page loads fast.

Then list each one in the `artworks` array near the bottom of `art.html`:

```js
var artworks = [
  { src: "art/charcoal-study.jpg", alt: "Charcoal study, 2024" },
  { src: "art/typography-01.png", alt: "" },   // caption optional
];
```

Order in the array = order on the page.
