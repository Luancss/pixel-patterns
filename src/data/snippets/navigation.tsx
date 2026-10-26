import type { Snippet } from "@/types/snippet";

export const navigationSnippets: Snippet[] = [
  {
    category: "css",
    background: "bg-gradient-to-br from-indigo-950 via-zinc-950 to-black",
    iconColor: "#fff",
    html: `
      <div class="tabs-30418">
        <label><input type="radio" name="tabs-30418" checked><span>Overview</span></label>
        <label><input type="radio" name="tabs-30418"><span>Activity</span></label>
        <label><input type="radio" name="tabs-30418"><span>Settings</span></label>
        <span class="tabs-30418-glider"></span>
      </div>
      <style>
        .tabs-30418 {
          position: relative;
          display: flex;
          padding: 4px;
          background: #18181b;
          border: 1px solid #27272a;
          border-radius: 999px;
          box-shadow: 0 18px 40px -18px rgba(99, 102, 241, 0.6);
        }
        .tabs-30418 label {
          position: relative;
          z-index: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 112px;
          height: 40px;
          color: #a1a1aa;
          font-size: 14px;
          font-weight: 500;
          cursor: pointer;
          transition: color 0.25s ease;
        }
        .tabs-30418 input {
          position: absolute;
          opacity: 0;
          pointer-events: none;
        }
        .tabs-30418 label:hover,
        .tabs-30418 label:has(input:checked) {
          color: #fff;
        }
        .tabs-30418-glider {
          position: absolute;
          top: 4px;
          left: 4px;
          width: 112px;
          height: 40px;
          border-radius: 999px;
          background: linear-gradient(135deg, #6366f1, #8b5cf6);
          box-shadow: 0 8px 24px -8px rgba(139, 92, 246, 0.9);
          transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .tabs-30418:has(label:nth-child(2) input:checked) .tabs-30418-glider {
          transform: translateX(112px);
        }
        .tabs-30418:has(label:nth-child(3) input:checked) .tabs-30418-glider {
          transform: translateX(224px);
        }
      </style>
    `,
  },
  {
    category: "tailwind",
    background: "bg-[#0b0b0f]",
    iconColor: "#fff",
    content: (
      <div className="w-[440px]">
        <nav className="flex gap-6 border-b border-white/10 text-sm">
          <a
            href="#"
            className="-mb-px border-b-2 border-sky-400 pb-3 font-medium text-white"
          >
            Overview
          </a>
          <a
            href="#"
            className="-mb-px border-b-2 border-transparent pb-3 text-zinc-400 transition hover:border-zinc-500 hover:text-zinc-200"
          >
            Analytics
          </a>
          <a
            href="#"
            className="-mb-px border-b-2 border-transparent pb-3 text-zinc-400 transition hover:border-zinc-500 hover:text-zinc-200"
          >
            Reports
          </a>
          <a
            href="#"
            className="-mb-px flex items-center gap-2 border-b-2 border-transparent pb-3 text-zinc-400 transition hover:border-zinc-500 hover:text-zinc-200"
          >
            Alerts
            <span className="rounded-full bg-sky-500/15 px-2 py-0.5 text-xs font-medium text-sky-300">
              8
            </span>
          </a>
        </nav>
        <div className="pt-5">
          <h3 className="text-base font-semibold text-white">
            Project overview
          </h3>
          <p className="mt-1 text-sm leading-relaxed text-zinc-400">
            Track deployments, review performance and keep your team aligned
            from a single place.
          </p>
        </div>
      </div>
    ),
  },
  {
    category: "tailwind",
    background: "bg-gradient-to-b from-zinc-900 to-black",
    iconColor: "#fff",
    content: (
      <div className="w-[420px] divide-y divide-white/10 rounded-2xl border border-white/10 bg-white/[0.03]">
        <details className="group p-4" open>
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-medium text-white [&::-webkit-details-marker]:hidden">
            Can I use these components for free?
            <svg
              className="size-4 shrink-0 text-zinc-400 transition-transform duration-300 group-open:rotate-180"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M19 9l-7 7-7-7" />
            </svg>
          </summary>
          <p className="mt-3 text-sm leading-relaxed text-zinc-400">
            Yes. Every snippet is open source and can be used in personal and
            commercial projects.
          </p>
        </details>
        <details className="group p-4">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-medium text-white [&::-webkit-details-marker]:hidden">
            Do I need to install any dependency?
            <svg
              className="size-4 shrink-0 text-zinc-400 transition-transform duration-300 group-open:rotate-180"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M19 9l-7 7-7-7" />
            </svg>
          </summary>
          <p className="mt-3 text-sm leading-relaxed text-zinc-400">
            No. Tailwind components only need Tailwind CSS and CSS components
            work in any HTML page.
          </p>
        </details>
        <details className="group p-4">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-medium text-white [&::-webkit-details-marker]:hidden">
            How can I contribute a component?
            <svg
              className="size-4 shrink-0 text-zinc-400 transition-transform duration-300 group-open:rotate-180"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M19 9l-7 7-7-7" />
            </svg>
          </summary>
          <p className="mt-3 text-sm leading-relaxed text-zinc-400">
            Fork the repository, add your snippet to the category file and open
            a pull request.
          </p>
        </details>
      </div>
    ),
  },
  {
    category: "css",
    background: "bg-[#eef2ff]",
    iconColor: "#000",
    html: `
      <div class="faq-71594">
        <details open>
          <summary>How do I install a component?<span></span></summary>
          <p>Copy the markup and the styles into your project. No build step is required.</p>
        </details>
        <details>
          <summary>Are the components accessible?<span></span></summary>
          <p>They use semantic elements, so keyboard and screen reader support come for free.</p>
        </details>
        <details>
          <summary>Can I change the colors?<span></span></summary>
          <p>Every color lives in plain CSS, so you can swap it for your own design tokens.</p>
        </details>
      </div>
      <style>
        .faq-71594 {
          display: grid;
          gap: 10px;
          width: 400px;
        }
        .faq-71594 details {
          padding: 0 18px;
          border-radius: 14px;
          background: #fff;
          box-shadow: 0 1px 2px rgba(15, 23, 42, 0.06), 0 10px 24px -14px rgba(15, 23, 42, 0.35);
        }
        .faq-71594 summary {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          padding: 16px 0;
          color: #0f172a;
          font-size: 14px;
          font-weight: 600;
          list-style: none;
          cursor: pointer;
        }
        .faq-71594 summary::-webkit-details-marker {
          display: none;
        }
        .faq-71594 summary span {
          position: relative;
          flex-shrink: 0;
          width: 14px;
          height: 14px;
        }
        .faq-71594 summary span::before,
        .faq-71594 summary span::after {
          content: "";
          position: absolute;
          top: 6px;
          left: 0;
          width: 14px;
          height: 2px;
          border-radius: 2px;
          background: #6366f1;
          transition: transform 0.25s ease;
        }
        .faq-71594 summary span::after {
          transform: rotate(90deg);
        }
        .faq-71594 details[open] summary span::after {
          transform: rotate(0deg);
        }
        .faq-71594 p {
          margin: 0;
          padding: 0 0 16px;
          color: #475569;
          font-size: 13px;
          line-height: 1.6;
        }
      </style>
    `,
  },
  {
    category: "tailwind",
    background: "bg-gradient-to-r from-zinc-950 to-slate-900",
    iconColor: "#fff",
    content: (
      <nav aria-label="Breadcrumb">
        <ol className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-400">
          <li>
            <a
              href="#"
              className="flex items-center gap-1.5 transition hover:text-white"
            >
              <svg
                className="size-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 11l9-8 9 8M5 9.5V20h5v-6h4v6h5V9.5" />
              </svg>
              Home
            </a>
          </li>
          <li aria-hidden="true" className="text-zinc-600">
            /
          </li>
          <li>
            <a href="#" className="transition hover:text-white">
              Components
            </a>
          </li>
          <li aria-hidden="true" className="text-zinc-600">
            /
          </li>
          <li aria-current="page" className="font-medium text-white">
            Breadcrumbs
          </li>
        </ol>
      </nav>
    ),
  },
  {
    category: "css",
    background: "bg-gradient-to-br from-[#1e1b4b] to-[#0f0a1f]",
    iconColor: "#fff",
    html: `
      <ol class="crumbs-58203">
        <li><a href="#">Store</a></li>
        <li><a href="#">Shoes</a></li>
        <li><a href="#">Running</a></li>
        <li aria-current="page"><span>Pegasus 41</span></li>
      </ol>
      <style>
        .crumbs-58203 {
          display: flex;
          margin: 0;
          padding: 0;
          list-style: none;
          font-size: 13px;
          font-weight: 600;
          filter: drop-shadow(0 12px 18px rgba(0, 0, 0, 0.4));
        }
        .crumbs-58203 a,
        .crumbs-58203 span {
          display: block;
          margin-left: -6px;
          padding: 11px 20px 11px 28px;
          background: #312e81;
          color: #c7d2fe;
          text-decoration: none;
          clip-path: polygon(0 0, calc(100% - 12px) 0, 100% 50%, calc(100% - 12px) 100%, 0 100%, 12px 50%);
          transition: background 0.2s ease, color 0.2s ease;
        }
        .crumbs-58203 li:first-child a {
          margin-left: 0;
          padding-left: 18px;
          border-radius: 10px 0 0 10px;
          clip-path: polygon(0 0, calc(100% - 12px) 0, 100% 50%, calc(100% - 12px) 100%, 0 100%);
        }
        .crumbs-58203 a:hover {
          background: #4338ca;
          color: #fff;
        }
        .crumbs-58203 span {
          background: linear-gradient(90deg, #6366f1, #8b5cf6);
          color: #fff;
        }
      </style>
    `,
  },
  {
    category: "tailwind",
    background: "bg-[#09090b]",
    iconColor: "#fff",
    content: (
      <nav aria-label="Pagination" className="flex items-center gap-1 text-sm">
        <a
          href="#"
          aria-label="Previous page"
          className="flex size-9 items-center justify-center rounded-lg border border-white/10 text-zinc-400 transition hover:bg-white/5 hover:text-white"
        >
          <svg
            className="size-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M15 19l-7-7 7-7" />
          </svg>
        </a>
        <a
          href="#"
          className="flex size-9 items-center justify-center rounded-lg text-zinc-300 transition hover:bg-white/5"
        >
          1
        </a>
        <a
          href="#"
          aria-current="page"
          className="flex size-9 items-center justify-center rounded-lg bg-white font-semibold text-zinc-900"
        >
          2
        </a>
        <a
          href="#"
          className="flex size-9 items-center justify-center rounded-lg text-zinc-300 transition hover:bg-white/5"
        >
          3
        </a>
        <span className="flex size-9 items-center justify-center text-zinc-500">
          ...
        </span>
        <a
          href="#"
          className="flex size-9 items-center justify-center rounded-lg text-zinc-300 transition hover:bg-white/5"
        >
          12
        </a>
        <a
          href="#"
          aria-label="Next page"
          className="flex size-9 items-center justify-center rounded-lg border border-white/10 text-zinc-400 transition hover:bg-white/5 hover:text-white"
        >
          <svg
            className="size-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </nav>
    ),
  },
  {
    category: "tailwind",
    background: "bg-gradient-to-br from-emerald-950/60 via-zinc-950 to-black",
    iconColor: "#fff",
    content: (
      <ol className="flex w-[440px] items-center text-xs font-medium">
        <li className="flex flex-1 items-center gap-2 text-emerald-300">
          <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-white">
            <svg
              className="size-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={3}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 13l4 4L19 7" />
            </svg>
          </span>
          Account
          <span className="mx-2 h-px flex-1 bg-emerald-500/60"></span>
        </li>
        <li className="flex flex-1 items-center gap-2 text-white">
          <span className="flex size-8 shrink-0 items-center justify-center rounded-full border-2 border-emerald-500 bg-emerald-500/10 text-emerald-300">
            2
          </span>
          Billing
          <span className="mx-2 h-px flex-1 bg-white/15"></span>
        </li>
        <li className="flex items-center gap-2 text-zinc-500">
          <span className="flex size-8 shrink-0 items-center justify-center rounded-full border border-white/15">
            3
          </span>
          Confirm
        </li>
      </ol>
    ),
  },
  {
    category: "tailwind",
    background: "bg-gradient-to-br from-fuchsia-950/50 to-zinc-950",
    iconColor: "#fff",
    content: (
      <aside className="w-60 rounded-2xl border border-white/10 bg-zinc-950 p-3 text-sm">
        <div className="mb-2 flex items-center gap-2 px-2 py-1.5">
          <span className="flex size-7 items-center justify-center rounded-lg bg-gradient-to-br from-fuchsia-500 to-indigo-500 text-xs font-bold text-white">
            P
          </span>
          <span className="font-semibold text-white">Pixel Studio</span>
        </div>
        <p className="px-2 pb-1 pt-2 text-[11px] font-semibold uppercase tracking-wider text-zinc-500">
          Workspace
        </p>
        <a
          href="#"
          className="flex items-center gap-3 rounded-lg bg-white/10 px-2 py-2 font-medium text-white"
        >
          <svg
            className="size-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4 5h6v6H4zM14 5h6v6h-6zM4 15h6v4H4zM14 15h6v4h-6z" />
          </svg>
          Dashboard
        </a>
        <a
          href="#"
          className="flex items-center gap-3 rounded-lg px-2 py-2 text-zinc-400 transition hover:bg-white/5 hover:text-white"
        >
          <svg
            className="size-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M3 7a2 2 0 012-2h4l2 2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
          </svg>
          Projects
          <span className="ml-auto rounded-md bg-white/10 px-1.5 text-xs text-zinc-300">
            12
          </span>
        </a>
        <a
          href="#"
          className="flex items-center gap-3 rounded-lg px-2 py-2 text-zinc-400 transition hover:bg-white/5 hover:text-white"
        >
          <svg
            className="size-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M16 19a4 4 0 00-8 0M12 11a3 3 0 100-6 3 3 0 000 6zM20 19a3 3 0 00-3-3M17 11a2.5 2.5 0 000-5" />
          </svg>
          Team
        </a>
        <p className="px-2 pb-1 pt-4 text-[11px] font-semibold uppercase tracking-wider text-zinc-500">
          Account
        </p>
        <a
          href="#"
          className="flex items-center gap-3 rounded-lg px-2 py-2 text-zinc-400 transition hover:bg-white/5 hover:text-white"
        >
          <svg
            className="size-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4 7h10M18 7h2M4 17h4M12 17h8M14 4v6M8 14v6" />
          </svg>
          Preferences
        </a>
      </aside>
    ),
  },
  {
    category: "css",
    background: "bg-gradient-to-br from-[#c7d2fe] to-[#e0e7ff]",
    iconColor: "#000",
    html: `
      <nav class="tabbar-84150">
        <a href="#" class="tabbar-84150-active">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 11l9-8 9 8M5 9.5V20h5v-6h4v6h5V9.5"/></svg>
          <span>Home</span>
        </a>
        <a href="#">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg>
          <span>Search</span>
        </a>
        <a href="#">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20s-7-4.4-7-10a4 4 0 017-2.6A4 4 0 0119 10c0 5.6-7 10-7 10z"/></svg>
          <span>Saved</span>
        </a>
        <a href="#">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0116 0"/></svg>
          <span>Profile</span>
        </a>
      </nav>
      <style>
        .tabbar-84150 {
          display: flex;
          gap: 6px;
          padding: 8px;
          border-radius: 22px;
          background: #fff;
          box-shadow: 0 24px 40px -20px rgba(30, 27, 75, 0.55);
        }
        .tabbar-84150 a {
          display: flex;
          align-items: center;
          height: 44px;
          padding: 0 14px;
          border-radius: 16px;
          color: #64748b;
          font-size: 13px;
          font-weight: 600;
          text-decoration: none;
          transition: background 0.3s ease, color 0.3s ease;
        }
        .tabbar-84150 svg {
          flex-shrink: 0;
          width: 20px;
          height: 20px;
        }
        .tabbar-84150 span {
          max-width: 0;
          margin-left: 0;
          overflow: hidden;
          white-space: nowrap;
          opacity: 0;
          transition: max-width 0.3s ease, margin 0.3s ease, opacity 0.3s ease;
        }
        .tabbar-84150 a:hover,
        .tabbar-84150 .tabbar-84150-active {
          background: #eef2ff;
          color: #4f46e5;
        }
        .tabbar-84150 a:hover span,
        .tabbar-84150 .tabbar-84150-active span {
          max-width: 80px;
          margin-left: 8px;
          opacity: 1;
        }
      </style>
    `,
  },
  {
    category: "tailwind",
    background: "bg-gradient-to-br from-sky-950/70 via-zinc-950 to-black",
    iconColor: "#fff",
    content: (
      <header className="flex w-[460px] items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur">
        <a
          href="#"
          className="flex items-center gap-2 text-sm font-semibold text-white"
        >
          <span className="size-6 rounded-md bg-gradient-to-br from-cyan-400 to-blue-600"></span>
          Nebula
        </a>
        <nav className="flex items-center gap-5 text-sm text-zinc-400">
          <a href="#" className="text-white">
            Product
          </a>
          <a href="#" className="transition hover:text-white">
            Pricing
          </a>
          <a href="#" className="transition hover:text-white">
            Docs
          </a>
        </nav>
        <a
          href="#"
          className="rounded-lg bg-white px-3 py-1.5 text-sm font-medium text-zinc-900 transition hover:bg-zinc-200"
        >
          Sign in
        </a>
      </header>
    ),
  },
  {
    category: "css",
    background: "bg-[#020617]",
    iconColor: "#fff",
    html: `
      <div class="vtabs-26937">
        <div class="vtabs-26937-list">
          <label><input type="radio" name="vtabs-26937" value="profile" checked>Profile</label>
          <label><input type="radio" name="vtabs-26937" value="security">Security</label>
          <label><input type="radio" name="vtabs-26937" value="billing">Billing</label>
        </div>
        <div class="vtabs-26937-panel" data-tab="profile">
          <h4>Profile</h4>
          <p>Update your photo, display name and the information shown on your public page.</p>
        </div>
        <div class="vtabs-26937-panel" data-tab="security">
          <h4>Security</h4>
          <p>Manage passwords, active sessions and two-factor authentication.</p>
        </div>
        <div class="vtabs-26937-panel" data-tab="billing">
          <h4>Billing</h4>
          <p>Review invoices, payment methods and the details of your current plan.</p>
        </div>
      </div>
      <style>
        .vtabs-26937 {
          display: grid;
          grid-template-columns: 140px 250px;
          gap: 16px;
          padding: 16px;
          border: 1px solid #1e293b;
          border-radius: 18px;
          background: #0f172a;
        }
        .vtabs-26937-list {
          display: grid;
          align-content: start;
          gap: 4px;
        }
        .vtabs-26937-list label {
          position: relative;
          padding: 10px 12px;
          border-radius: 10px;
          color: #94a3b8;
          font-size: 14px;
          font-weight: 500;
          cursor: pointer;
          transition: background 0.2s ease, color 0.2s ease;
        }
        .vtabs-26937-list input {
          position: absolute;
          opacity: 0;
          pointer-events: none;
        }
        .vtabs-26937-list label:hover {
          color: #e2e8f0;
        }
        .vtabs-26937-list label:has(input:checked) {
          background: #1e293b;
          color: #fff;
          box-shadow: inset 3px 0 0 #38bdf8;
        }
        .vtabs-26937-panel {
          display: none;
          grid-row: 1;
          grid-column: 2;
          padding: 6px 8px;
        }
        .vtabs-26937-panel h4 {
          margin: 0 0 6px;
          color: #f8fafc;
          font-size: 16px;
        }
        .vtabs-26937-panel p {
          margin: 0;
          color: #94a3b8;
          font-size: 13px;
          line-height: 1.6;
        }
        .vtabs-26937:has([value="profile"]:checked) [data-tab="profile"],
        .vtabs-26937:has([value="security"]:checked) [data-tab="security"],
        .vtabs-26937:has([value="billing"]:checked) [data-tab="billing"] {
          display: block;
        }
      </style>
    `,
  },
];
