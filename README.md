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

## 🗂 Project Structure

```
src/
├── app/                    # App Router routes (Server Components by default)
│   ├── <route>/page.tsx    # One folder per page
│   ├── <route>/_components # Components used only by that route
│   └── <route>/_lib        # Route-specific state, config and helpers
├── components/
│   ├── decorations/        # Animated backgrounds, each with its own CSS Module
│   ├── layout/             # Site chrome: hero, navbar, footer, buttons
│   ├── snippets/           # Snippet card, gallery, marquee and code preview
│   └── ui/                 # Reusable primitives (shadcn/ui based)
├── data/snippets/          # Component library content, one file per category
├── hooks/                  # Shared React hooks
├── lib/                    # Site configuration and utilities
└── types/                  # Shared TypeScript types
```

Conventions:

- Files use `kebab-case`, components use `PascalCase` named exports, hooks start with `use`.
- Import with the `@/` alias (maps to `src/`); CSS Modules are imported relatively from the component next to them.
- Add `"use client"` only to files that use hooks, browser APIs or event handlers.
- Global CSS is limited to Tailwind layers and design tokens in `src/app/globals.css`; component styles live in Tailwind classes or a colocated `*.module.css`.

## ➕ Adding a Component

1. Open the category file in `src/data/snippets/` (for example `buttons.tsx`).
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
