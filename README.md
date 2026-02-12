# Simple Gallery

A lightweight gallery that displays images in a lightbox-style modal.

## Demo

[View live demo](https://foxshack.github.io/simplegallery/)

## Quick Start (CDN)

Include the CSS and JS files, then wrap your images in a `.gallery` container:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Simple Gallery Example</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/foxshack/simplegallery@1.0.3/dist/gallery.css">
</head>
<body>
  <div class="gallery">
    <img src="./images/img1.jpg" alt="Malaga at Christmas">
    <img src="./images/img2.jpg" alt="Seagull">
    <img src="./images/img3.jpg" alt="Lorem ipsum">
    <img src="./images/img4.jpg" alt="At the carwash">
    <img src="./images/img5.jpg" alt="Shell Sculpture">
  </div>
  <script src="https://cdn.jsdelivr.net/gh/foxshack/simplegallery@1.0.3/dist/gallery.js"></script>
</body>
</html>
```

## Installation (npm)

```bash
npm install -D github:foxshack/simplegallery#1.0.3
```

**ES Module Usage:**

```javascript
import simpleGallery from 'simplegallery';

// Initialize with default options
simpleGallery();

// Or customize the selector
simpleGallery({ selector: '.my-gallery' });
```

You will still need to load in or bundle the CSS which will depend on whether
you use a CSS precompiler or other, or you could still use the CDN option above.

## Usage

Wrap images in a container with the `.gallery` class (customizable). Each image
gets a click handler to launch the modal:

```html
<div class="gallery">
  <img src="./images/img1.jpg" data-sg-desc="This is my description" alt="Malaga at Christmas">
  <img src="./images/img2.jpg" data-sg-src="./images/img5.jpg" alt="Seagull">
  <img src="./images/img3.jpg" alt="Southport at Sunset">
</div>

<script src="./dist/gallery.js"></script>
```

## Data Attributes

Optional data attributes for enhanced functionality:

| Attribute | Description |
|-----------|-------------|
| `data-sg-desc` | Description text displayed in the modal |
| `data-sg-src`  | Alternate image source for modal (e.g., high-res version) |

Add these to each image that is part of the gallery

## Styling

The included CSS provides modal styling but not page layout for your gallery. Override CSS variables in your stylesheet for basic theming:

| Variable            | Description |
|----------           |-------------|
| `--sg-modal-bg`     | Modal background color  |
| `--sg-text-color`   | Text color in modal     |
| `--sg-btn-bg`       | Button background color |
| `--sg-modal-zindex` | Modal z-index           |
| `--sg-font-family`  | Font family             |

Example:

```css
:root {
  --sg-modal-bg: rgba(0, 0, 0, 0.95);
  --sg-text-color: #ffffff;
}
```

For extensive customization, copy `dist/gallery.css` (or `src/gallery.scss`)
to your project and modify directly.
