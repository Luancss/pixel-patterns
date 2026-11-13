
<div align="right">
  <details>
    <summary >🌐 Language</summary>
    <div>
      <div align="center">
        <a href="https://openaitx.github.io/view.html?user=Luancss&project=pixel-patterns&lang=en">English</a>
        | <a href="https://openaitx.github.io/view.html?user=Luancss&project=pixel-patterns&lang=zh-CN">简体中文</a>
        | <a href="https://openaitx.github.io/view.html?user=Luancss&project=pixel-patterns&lang=zh-TW">繁體中文</a>
        | <a href="https://openaitx.github.io/view.html?user=Luancss&project=pixel-patterns&lang=ja">日本語</a>
        | <a href="https://openaitx.github.io/view.html?user=Luancss&project=pixel-patterns&lang=ko">한국어</a>
        | <a href="https://openaitx.github.io/view.html?user=Luancss&project=pixel-patterns&lang=hi">हिन्दी</a>
        | <a href="https://openaitx.github.io/view.html?user=Luancss&project=pixel-patterns&lang=th">ไทย</a>
        | <a href="https://openaitx.github.io/view.html?user=Luancss&project=pixel-patterns&lang=fr">Français</a>
        | <a href="https://openaitx.github.io/view.html?user=Luancss&project=pixel-patterns&lang=de">Deutsch</a>
        | <a href="https://openaitx.github.io/view.html?user=Luancss&project=pixel-patterns&lang=es">Español</a>
        | <a href="https://openaitx.github.io/view.html?user=Luancss&project=pixel-patterns&lang=it">Italiano</a>
        | <a href="https://openaitx.github.io/view.html?user=Luancss&project=pixel-patterns&lang=ru">Русский</a>
        | <a href="https://openaitx.github.io/view.html?user=Luancss&project=pixel-patterns&lang=pt">Português</a>
        | <a href="https://openaitx.github.io/view.html?user=Luancss&project=pixel-patterns&lang=nl">Nederlands</a>
        | <a href="https://openaitx.github.io/view.html?user=Luancss&project=pixel-patterns&lang=pl">Polski</a>
        | <a href="https://openaitx.github.io/view.html?user=Luancss&project=pixel-patterns&lang=ar">العربية</a>
        | <a href="https://openaitx.github.io/view.html?user=Luancss&project=pixel-patterns&lang=fa">فارسی</a>
        | <a href="https://openaitx.github.io/view.html?user=Luancss&project=pixel-patterns&lang=tr">Türkçe</a>
        | <a href="https://openaitx.github.io/view.html?user=Luancss&project=pixel-patterns&lang=vi">Tiếng Việt</a>
        | <a href="https://openaitx.github.io/view.html?user=Luancss&project=pixel-patterns&lang=id">Bahasa Indonesia</a>
        | <a href="https://openaitx.github.io/view.html?user=Luancss&project=pixel-patterns&lang=as">অসমীয়া</
      </div>
    </div>
  </details>
</div>

<p align="center">
 <a href="#-demonstration">Demonstration</a> |
 <a href="#-deploy">Deploy</a> |
 <a href="#-technologies">Technologies</a>
</p>

---

Pixel Patterns is a project aimed at developers that simplifies the integration of CSS and Tailwind components into their projects. The application allows you to copy ready-to-use components with just one click, making styling and building interfaces quick and efficient.

This open-source project not only offers an initial library of components but also allows the community to contribute their own components. With an intuitive interface and constantly expanding features, Pixel Patterns is ideal for those looking for a practical way to enhance front-end development.

**Goals**:
  - Facilitate the use of CSS and Tailwind components with a one-click copy feature
  - Allow the community to contribute their own components
  - Continuous expansion with new features and components

* If you like the project, give it a star ⭐ and share to help out.

## 📷 Demonstration

| Home Page  | Buttons Page | 
| --- | --- |
| ![page](https://github.com/user-attachments/assets/5eecf6e7-dabb-4075-96b6-b8fc308a2795) | ![buttons](https://github.com/user-attachments/assets/22a98690-0dbc-4d53-8d60-1b131a1bc26c)


| Inputs Page | Loaders Page |
| --- | --- |
| ![inputs](https://github.com/user-attachments/assets/ddcdc2e5-b11f-4647-abe2-e44ffbad826f) | ![loaders](https://github.com/user-attachments/assets/c57090a7-cec2-4665-b21e-c210c73048fc) 

| Cards Page | Checkboxes Page |
| --- | --- |
| ![cards](https://github.com/user-attachments/assets/7282e2bd-b9ba-4792-8e00-d8d702960a10) | ![pp3](https://github.com/user-attachments/assets/f0444e7d-56af-4183-968b-b0635f15d748)

| Forms Page |
| --- |
| ![pp4](https://github.com/user-attachments/assets/5c71a6d6-5e03-47b3-953f-69f7fd30fb23)




## 💻 Deploy

Click the following link to view the <a target="_blank" href="https://pixel-patterns-mauve.vercel.app/">deploy</a>

## 🛠 Getting Started

Requires Node.js 20 or newer.

```bash
npm install
npm run dev
```

| Script | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |
| `npm run typecheck` | Run the TypeScript compiler without emitting files |
| `npm run format` | Format the codebase with Prettier |
| `npm run format:check` | Check formatting without writing changes |

### Code Editor runtimes

JavaScript and TypeScript run directly in the browser, inside a sandboxed Web Worker (TypeScript is type-checked and compiled by the editor's bundled TypeScript service). No setup is needed.

The other languages (Python, Java, Go, Rust, C++, C#, Ruby and Swift) are executed by a [Piston](https://github.com/engineer-man/piston) instance. The public Piston API is whitelist-only, so point the editor to your own instance:

```bash
# .env.local
NEXT_PUBLIC_PISTON_URL=http://localhost:2000/api/v2
```

## 🗂 Project Structure

```
src/
├── app/                        # Routes only: thin pages that compose features
│   ├── [collection]/page.tsx   # Every snippet collection (generated from config)
│   ├── palettes/               # Color palette library
│   ├── resources/[slug]/       # Developer guides
│   └── code-editor/ gradient/ border-radius/ contribute/
├── components/                 # Shared, domain-agnostic building blocks
│   ├── ui/                     # Design-system primitives (button, switch, tooltip…)
│   ├── layout/                 # Site chrome: navbar, footer, hero, navigation links
│   └── decorations/<name>/     # One folder per decoration: component, CSS Module, config
├── features/<domain>/          # Self-contained domains
│   ├── components/             # React components of the domain
│   ├── config/                 # Static configuration and registries
│   ├── data/                   # Content (snippets, palettes, guides)
│   ├── hooks/  lib/  store/    # Domain hooks, pure logic, Zustand stores
│   └── types.ts
├── config/                     # Site metadata (no dependencies)
├── hooks/                      # Generic React hooks
├── lib/                        # Generic utilities (cn, color math, downloads)
└── styles/globals.css          # Tailwind layers and design tokens
```

Features: `snippets`, `code-highlight`, `code-editor`, `palettes`, `resources`, `gradient`, `border-radius` and `contribute`.

Conventions:

- Dependencies point inwards, in four layers:
  1. **Foundation** — `lib`, `hooks`, `config`, `components/ui`, `components/decorations`. Never imports features.
  2. **Features** — domains built on the foundation. The only cross-feature dependency allowed is the shared `code-highlight` feature.
  3. **Shell** — `components/layout`, which composes feature configuration (e.g. the collection registry) into navigation.
  4. **Routes** — `app`, which wires everything together.
- Files use `kebab-case`, components use `PascalCase` named exports, hooks start with `use`.
- Import with the `@/` alias (maps to `src/`); CSS Modules are imported relatively from the component next to them.
- Add `"use client"` only to files that use hooks, browser APIs or event handlers. Large content modules (like `features/snippets/data`) are imported only by Server Components.
- Global CSS is limited to Tailwind layers and design tokens in `src/styles/globals.css`; component styles live in Tailwind classes or a colocated `*.module.css`.

## ➕ Adding a Component

1. Open the collection file in `src/features/snippets/data/` (for example `buttons.tsx`).
2. Append a new entry at the end of the array:

```tsx
{
  category: "css",
  background: "bg-[#212121]",
  iconColor: "#fff",
  html: `
    <button class="button-83501">Click me</button>
    <style>
      .button-83501 { /* ... */ }
    </style>
  `,
},
```

Use `category: "tailwind"` with a `content: (<button className="...">...</button>)` JSX field for Tailwind components. Snippets must be static markup: what is rendered is exactly what gets copied, so event handlers are not supported. Add five random digits to every class and keyframe name in CSS snippets to avoid collisions with other components on the same page.

To add a new collection, register it in `src/features/snippets/config/collections.ts` and map its data in `src/features/snippets/data/index.ts` — the route, navigation entry and page metadata are generated from that registry.

New palettes go in `src/features/palettes/data/palettes.ts` and new guides in `src/features/resources/data/guides/` (then list them in `data/index.ts`).


## 🚀 Technologies

This project was developed with the following technologies:

✔ [NextJS]
<br/>
✔ [ReactJS]
<br/>
✔ [TypeScript]
<br/>
✔ [CSS]
<br/>
✔ [Tailwind CSS]
<br/>
✔ [Shadcn UI]

## ✍ Author

<img alt="Luancss" title="Luancss" src="https://avatars.githubusercontent.com/u/104950187?v=4" width="100">
<p>
    Made by Luancss
</p>
<p align="left">
    <a href="https://www.linkedin.com/in/luan-carlos-30035b246/" target="_blank">
        <img align="center" src="https://img.shields.io/badge/LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="Linkedin Luan Carlos" />
    </a>
    <a href="mailto:luancss.contact@gmail.com" target="_blank">
        <img align="center" src="https://img.shields.io/badge/Gmail-FF0000?style=for-the-badge&logo=gmail&logoColor=white" alt="Gmail Luan Carlos" />
    </a>
</p>
