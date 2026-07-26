# InfraDev Academy Website

This directory contains the first Website MVP for the InfraDev Academy.

---

## Current Stack

```text
HTML5
CSS3
Vanilla JavaScript
```

No framework or external dependency is required.

---

## Structure

```text
website/
├── index.html
├── assets/
│   ├── css/
│   │   └── main.css
│   └── js/
│       └── main.js
└── README.md
```

---

## Running Locally

### Recommended: VS Code Live Server

1. Open the repository in Visual Studio Code.
2. Install the **Live Server** extension, if it is not already installed.
3. Open `website/index.html`.
4. Right-click inside the file and select **Open with Live Server**.

The browser will open the website using a local development address provided by Live Server.

### Alternative: Python Local Server

From the repository root, run:

```bash
cd website
python -m http.server 8000
```
---

## Learning Objectives

This MVP practices:

- semantic HTML;
- responsive layout;
- CSS custom properties;
- accessible navigation;
- DOM selection;
- events;
- attributes;
- responsive JavaScript behavior;
- static-site structure.

---

## JavaScript Responsibilities

`assets/js/main.js` currently controls:

- mobile-navigation state;
- `aria-expanded`;
- closing the menu after navigation;
- resetting the menu on desktop;
- current footer year.

The page remains readable without JavaScript.

Only the mobile menu interaction depends on it.

---

## CSS Responsibilities

`assets/css/main.css` currently defines:

- design tokens;
- layout containers;
- typography;
- buttons;
- cards;
- responsive navigation;
- mobile breakpoints;
- focus styles;
- reduced-motion behavior.

---

## Manual Validation

Check:

- [ ] Page loads without console errors.
- [ ] Navigation links move to the correct sections.
- [ ] Mobile menu opens and closes.
- [ ] `aria-expanded` changes with the menu.
- [ ] Keyboard focus is visible.
- [ ] Layout works at mobile, tablet and desktop widths.
- [ ] Footer year is current.
- [ ] Contributor Guide link matches the repository path.
- [ ] GitHub Pages resolves all relative assets.

---

## Known Limitations

The MVP does not yet include:

- separate pages;
- Markdown rendering;
- search;
- multilingual content;
- backend;
- user accounts;
- persistent learning progress;
- automated tests.

These capabilities remain outside the current Sprint scope.

---

## Next Technical Steps

1. Review the semantic HTML.
2. Run the page locally.
3. inspect responsive behavior.
4. test the JavaScript through browser DevTools.
5. validate repository links.
6. create the first website commit.
7. add automated validation in a later iteration.
