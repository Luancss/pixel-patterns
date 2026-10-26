import type { Snippet } from "@/types/snippet";

export const feedbackSnippets: Snippet[] = [
  {
    category: "tailwind",
    background: "bg-[#0a0a0c]",
    iconColor: "#fff",
    content: (
      <div className="flex w-[430px] flex-col gap-2.5 text-sm">
        <div
          role="alert"
          className="flex gap-3 rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-3"
        >
          <svg
            className="mt-0.5 size-5 shrink-0 text-emerald-400"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="9" />
            <path d="M8.5 12.5l2.5 2.5 4.5-5" />
          </svg>
          <div>
            <p className="font-medium text-emerald-100">Changes saved</p>
            <p className="mt-0.5 text-emerald-200/80">
              Your profile has been updated successfully.
            </p>
          </div>
        </div>
        <div
          role="alert"
          className="flex gap-3 rounded-xl border border-sky-500/30 bg-sky-500/10 p-3"
        >
          <svg
            className="mt-0.5 size-5 shrink-0 text-sky-400"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="9" />
            <path d="M12 11v5M12 8h.01" />
          </svg>
          <div>
            <p className="font-medium text-sky-100">New version available</p>
            <p className="mt-0.5 text-sky-200/80">
              Refresh to load the latest improvements.
            </p>
          </div>
        </div>
        <div
          role="alert"
          className="flex gap-3 rounded-xl border border-amber-500/30 bg-amber-500/10 p-3"
        >
          <svg
            className="mt-0.5 size-5 shrink-0 text-amber-400"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 9v4M12 17h.01M10.3 3.9L1.8 18a2 2 0 001.7 3h17a2 2 0 001.7-3L13.7 3.9a2 2 0 00-3.4 0z" />
          </svg>
          <div>
            <p className="font-medium text-amber-100">Storage almost full</p>
            <p className="mt-0.5 text-amber-200/80">
              You have used 92% of your workspace storage.
            </p>
          </div>
        </div>
        <div
          role="alert"
          className="flex gap-3 rounded-xl border border-rose-500/30 bg-rose-500/10 p-3"
        >
          <svg
            className="mt-0.5 size-5 shrink-0 text-rose-400"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="9" />
            <path d="M15 9l-6 6M9 9l6 6" />
          </svg>
          <div>
            <p className="font-medium text-rose-100">Payment failed</p>
            <p className="mt-0.5 text-rose-200/80">
              Update your card to keep your plan active.
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    category: "css",
    background: "bg-gradient-to-br from-zinc-900 to-black",
    iconColor: "#fff",
    html: `
      <div class="toast-63520" role="status">
        <div class="toast-63520-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 13l4 4L19 7"/></svg>
        </div>
        <div class="toast-63520-body">
          <strong>Payment received</strong>
          <p>Invoice #2048 was paid by Acme Inc.</p>
        </div>
        <button class="toast-63520-close" aria-label="Dismiss">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M6 18L18 6M6 6l12 12"/></svg>
        </button>
        <span class="toast-63520-progress"></span>
      </div>
      <style>
        .toast-63520 {
          position: relative;
          display: flex;
          align-items: flex-start;
          gap: 12px;
          width: 340px;
          padding: 14px 14px 18px;
          overflow: hidden;
          border: 1px solid #1f2937;
          border-radius: 14px;
          background: #111827;
          color: #e5e7eb;
          box-shadow: 0 24px 48px -20px rgba(0, 0, 0, 0.8);
        }
        .toast-63520-icon {
          display: grid;
          flex-shrink: 0;
          place-items: center;
          width: 34px;
          height: 34px;
          border-radius: 10px;
          background: rgba(34, 197, 94, 0.15);
          color: #4ade80;
        }
        .toast-63520-icon svg {
          width: 18px;
          height: 18px;
        }
        .toast-63520-body strong {
          display: block;
          color: #f9fafb;
          font-size: 14px;
        }
        .toast-63520-body p {
          margin: 2px 0 0;
          color: #9ca3af;
          font-size: 13px;
        }
        .toast-63520-close {
          margin-left: auto;
          padding: 4px;
          border: 0;
          border-radius: 6px;
          background: transparent;
          color: #6b7280;
          cursor: pointer;
        }
        .toast-63520-close:hover {
          background: #1f2937;
          color: #f9fafb;
        }
        .toast-63520-close svg {
          display: block;
          width: 16px;
          height: 16px;
        }
        .toast-63520-progress {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 3px;
          background: linear-gradient(90deg, #22c55e, #4ade80);
          transform-origin: left;
          animation: toast-63520-timer 5s linear infinite;
        }
        @keyframes toast-63520-timer {
          from {
            transform: scaleX(1);
          }
          to {
            transform: scaleX(0);
          }
        }
      </style>
    `,
  },
  {
    category: "tailwind",
    background: "bg-[#0c0a14]",
    iconColor: "#fff",
    content: (
      <div className="flex w-[420px] flex-wrap items-center justify-center gap-2.5 text-xs font-medium">
        <span className="rounded-full bg-zinc-800 px-2.5 py-1 text-zinc-200">
          Default
        </span>
        <span className="rounded-full bg-indigo-500/15 px-2.5 py-1 text-indigo-300 ring-1 ring-inset ring-indigo-500/30">
          New
        </span>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2.5 py-1 text-emerald-300">
          <span className="size-1.5 rounded-full bg-emerald-400"></span>
          Active
        </span>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-500/10 px-2.5 py-1 text-amber-300">
          <span className="size-1.5 rounded-full bg-amber-400"></span>
          Pending
        </span>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-rose-500/10 px-2.5 py-1 text-rose-300">
          <span className="size-1.5 rounded-full bg-rose-400"></span>
          Failed
        </span>
        <span className="rounded-md border border-white/15 px-2 py-0.5 text-zinc-300">
          v2.4.0
        </span>
        <span className="rounded-md bg-gradient-to-r from-fuchsia-500 to-orange-400 px-2 py-0.5 font-semibold text-white">
          PRO
        </span>
        <span className="inline-flex items-center gap-1 rounded-full bg-sky-500/10 py-1 pl-2.5 pr-1 text-sky-300">
          Design
          <span className="flex size-4 items-center justify-center rounded-full transition hover:bg-sky-500/20">
            <svg
              className="size-3"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.5}
              strokeLinecap="round"
            >
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          </span>
        </span>
        <span className="rounded-full bg-white px-2.5 py-1 font-semibold text-zinc-900">
          99+
        </span>
      </div>
    ),
  },
  {
    category: "css",
    background: "bg-[#020617]",
    iconColor: "#fff",
    html: `
      <ul class="status-41276">
        <li><span class="status-41276-dot status-41276-online"></span>API Gateway<em>Operational</em></li>
        <li><span class="status-41276-dot status-41276-warning"></span>Database<em>Degraded</em></li>
        <li><span class="status-41276-dot status-41276-down"></span>Webhooks<em>Outage</em></li>
        <li><span class="status-41276-dot status-41276-idle"></span>Analytics<em>Maintenance</em></li>
      </ul>
      <style>
        .status-41276 {
          width: 360px;
          margin: 0;
          padding: 6px;
          list-style: none;
          border: 1px solid #1e293b;
          border-radius: 16px;
          background: #0b1120;
        }
        .status-41276 li {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px;
          color: #e2e8f0;
          font-size: 14px;
        }
        .status-41276 li + li {
          border-top: 1px solid #1e293b;
        }
        .status-41276 em {
          margin-left: auto;
          color: #94a3b8;
          font-size: 12px;
          font-style: normal;
        }
        .status-41276-dot {
          position: relative;
          width: 10px;
          height: 10px;
          border-radius: 50%;
        }
        .status-41276-dot::after {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: inherit;
          background: inherit;
          animation: status-41276-ping 1.8s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        .status-41276-online {
          background: #22c55e;
        }
        .status-41276-warning {
          background: #f59e0b;
        }
        .status-41276-down {
          background: #ef4444;
        }
        .status-41276-idle {
          background: #64748b;
        }
        .status-41276-idle::after {
          animation: none;
        }
        @keyframes status-41276-ping {
          75%,
          100% {
            transform: scale(2.4);
            opacity: 0;
          }
        }
      </style>
    `,
  },
  {
    category: "tailwind",
    background: "bg-gradient-to-br from-fuchsia-950/40 to-black",
    iconColor: "#fff",
    content: (
      <div className="w-[440px] rounded-2xl bg-gradient-to-r from-violet-600 via-fuchsia-600 to-pink-500 p-px">
        <div className="flex items-center gap-3 rounded-[15px] bg-zinc-950/90 px-4 py-3">
          <span className="rounded-full bg-white/10 px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-fuchsia-300">
            New
          </span>
          <p className="flex-1 text-sm text-zinc-300">
            Dark mode tokens are now available for every component.
          </p>
          <a
            href="#"
            className="flex shrink-0 items-center gap-1 text-sm font-medium text-white transition hover:text-fuchsia-200"
          >
            Read more
            <svg
              className="size-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    ),
  },
  {
    category: "css",
    background: "bg-gradient-to-b from-[#111827] to-black",
    iconColor: "#fff",
    html: `
      <button class="bell-90283" aria-label="Notifications">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8a6 6 0 10-12 0c0 7-3 9-3 9h18s-3-2-3-9M13.7 21a2 2 0 01-3.4 0"/></svg>
        <span class="bell-90283-badge">3</span>
      </button>
      <style>
        .bell-90283 {
          position: relative;
          display: grid;
          place-items: center;
          width: 60px;
          height: 60px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 18px;
          background: linear-gradient(180deg, #1f2937, #111827);
          color: #e5e7eb;
          cursor: pointer;
          box-shadow: 0 12px 30px -12px rgba(0, 0, 0, 0.8), inset 0 1px 0 rgba(255, 255, 255, 0.06);
        }
        .bell-90283 svg {
          width: 26px;
          height: 26px;
          transform-origin: 50% 3px;
        }
        .bell-90283:hover svg {
          animation: bell-90283-ring 0.9s ease-in-out;
        }
        .bell-90283-badge {
          position: absolute;
          top: -7px;
          right: -7px;
          box-sizing: border-box;
          min-width: 24px;
          height: 24px;
          padding: 0 6px;
          border: 3px solid #0b0b0f;
          border-radius: 999px;
          background: #ef4444;
          color: #fff;
          font-size: 11px;
          font-weight: 700;
          line-height: 18px;
        }
        @keyframes bell-90283-ring {
          0%,
          100% {
            transform: rotate(0);
          }
          15% {
            transform: rotate(14deg);
          }
          30% {
            transform: rotate(-12deg);
          }
          45% {
            transform: rotate(8deg);
          }
          60% {
            transform: rotate(-6deg);
          }
          75% {
            transform: rotate(3deg);
          }
        }
      </style>
    `,
  },
  {
    category: "tailwind",
    background: "bg-[#0b0b0f]",
    iconColor: "#fff",
    content: (
      <div className="w-[340px] space-y-4 text-sm">
        <label className="block">
          <span className="mb-1.5 block font-medium text-zinc-200">Email</span>
          <input
            type="email"
            defaultValue="maria@company"
            className="w-full rounded-lg border border-rose-500/60 bg-rose-500/5 px-3 py-2 text-white outline-none transition focus:ring-4 focus:ring-rose-500/20"
          />
          <span className="mt-1.5 flex items-center gap-1.5 text-xs text-rose-400">
            <svg
              className="size-3.5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="9" />
              <path d="M12 8v5M12 16h.01" />
            </svg>
            Enter a valid email address.
          </span>
        </label>
        <label className="block">
          <span className="mb-1.5 block font-medium text-zinc-200">
            Username
          </span>
          <input
            type="text"
            defaultValue="maria.dev"
            className="w-full rounded-lg border border-emerald-500/60 bg-emerald-500/5 px-3 py-2 text-white outline-none transition focus:ring-4 focus:ring-emerald-500/20"
          />
          <span className="mt-1.5 flex items-center gap-1.5 text-xs text-emerald-400">
            <svg
              className="size-3.5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.5}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 13l4 4L19 7" />
            </svg>
            This username is available.
          </span>
        </label>
      </div>
    ),
  },
  {
    category: "css",
    background: "bg-gradient-to-br from-[#082f49] to-[#020617]",
    iconColor: "#fff",
    html: `
      <div class="stack-17465">
        <div class="stack-17465-toast">
          <span class="stack-17465-dot"></span>
          <div><strong>Deploy finished</strong><p>main · 2 minutes ago</p></div>
        </div>
        <div class="stack-17465-toast">
          <span class="stack-17465-dot"></span>
          <div><strong>Preview ready</strong><p>feat/tabs · 5 minutes ago</p></div>
        </div>
        <div class="stack-17465-toast">
          <span class="stack-17465-dot"></span>
          <div><strong>Build queued</strong><p>fix/modal · 9 minutes ago</p></div>
        </div>
      </div>
      <style>
        .stack-17465 {
          position: relative;
          width: 320px;
          height: 210px;
        }
        .stack-17465-toast {
          position: absolute;
          top: 0;
          right: 0;
          left: 0;
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 14px 16px;
          border: 1px solid rgba(148, 163, 184, 0.2);
          border-radius: 14px;
          background: #0f172a;
          box-shadow: 0 18px 40px -18px rgba(0, 0, 0, 0.9);
          transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.35s ease;
        }
        .stack-17465-toast:nth-child(1) {
          z-index: 3;
        }
        .stack-17465-toast:nth-child(2) {
          z-index: 2;
          opacity: 0.8;
          transform: translateY(12px) scale(0.94);
        }
        .stack-17465-toast:nth-child(3) {
          z-index: 1;
          opacity: 0.6;
          transform: translateY(24px) scale(0.88);
        }
        .stack-17465:hover .stack-17465-toast:nth-child(2) {
          opacity: 1;
          transform: translateY(74px);
        }
        .stack-17465:hover .stack-17465-toast:nth-child(3) {
          opacity: 1;
          transform: translateY(148px);
        }
        .stack-17465-dot {
          flex-shrink: 0;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #38bdf8;
          box-shadow: 0 0 0 4px rgba(56, 189, 248, 0.15);
        }
        .stack-17465-toast strong {
          display: block;
          color: #f1f5f9;
          font-size: 14px;
        }
        .stack-17465-toast p {
          margin: 2px 0 0;
          color: #94a3b8;
          font-size: 12px;
        }
      </style>
    `,
  },
  {
    category: "tailwind",
    background: "bg-[#09090b]",
    iconColor: "#fff",
    content: (
      <div className="w-[420px] space-y-3">
        <aside className="rounded-xl border-l-4 border-sky-400 bg-sky-400/10 p-4">
          <p className="flex items-center gap-2 text-sm font-semibold text-sky-200">
            <svg
              className="size-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="9" />
              <path d="M12 11v5M12 8h.01" />
            </svg>
            Note
          </p>
          <p className="mt-1 text-sm leading-relaxed text-sky-100/80">
            Components inherit the font of their parent, so they match your
            typography automatically.
          </p>
        </aside>
        <aside className="rounded-xl border-l-4 border-amber-400 bg-amber-400/10 p-4">
          <p className="flex items-center gap-2 text-sm font-semibold text-amber-200">
            <svg
              className="size-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 18h6M10 21h4M12 3a6 6 0 00-3.5 10.9c.6.4 1 1.1 1 1.8V16h5v-.3c0-.7.4-1.4 1-1.8A6 6 0 0012 3z" />
            </svg>
            Tip
          </p>
          <p className="mt-1 text-sm leading-relaxed text-amber-100/80">
            Add five random digits to custom class names to avoid collisions
            with other components.
          </p>
        </aside>
      </div>
    ),
  },
  {
    category: "css",
    background: "bg-gradient-to-br from-[#fdf2f8] to-[#ede9fe]",
    iconColor: "#000",
    html: `
      <ul class="presence-50731">
        <li><span class="presence-50731-avatar" style="--hue: 262">AL<i class="presence-50731-online"></i></span><div><b>Ana Lima</b><small>Online</small></div></li>
        <li><span class="presence-50731-avatar" style="--hue: 200">RK<i class="presence-50731-away"></i></span><div><b>Rafael Kim</b><small>Away · 12 min</small></div></li>
        <li><span class="presence-50731-avatar" style="--hue: 340">JS<i class="presence-50731-busy"></i></span><div><b>Julia Souza</b><small>In a meeting</small></div></li>
      </ul>
      <style>
        .presence-50731 {
          display: grid;
          gap: 4px;
          width: 300px;
          margin: 0;
          padding: 8px;
          list-style: none;
          border-radius: 18px;
          background: #fff;
          box-shadow: 0 20px 40px -24px rgba(76, 29, 149, 0.45);
        }
        .presence-50731 li {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 10px;
          border-radius: 12px;
          transition: background 0.2s ease;
        }
        .presence-50731 li:hover {
          background: #f5f3ff;
        }
        .presence-50731-avatar {
          position: relative;
          display: grid;
          flex-shrink: 0;
          place-items: center;
          width: 42px;
          height: 42px;
          border-radius: 50%;
          background: linear-gradient(135deg, hsl(var(--hue) 85% 65%), hsl(calc(var(--hue) + 40) 85% 55%));
          color: #fff;
          font-size: 13px;
          font-weight: 700;
        }
        .presence-50731-avatar i {
          position: absolute;
          right: 0;
          bottom: 0;
          width: 12px;
          height: 12px;
          border: 2px solid #fff;
          border-radius: 50%;
        }
        .presence-50731-online {
          background: #22c55e;
        }
        .presence-50731-away {
          background: #f59e0b;
        }
        .presence-50731-busy {
          background: #ef4444;
        }
        .presence-50731 b {
          display: block;
          color: #1e1b4b;
          font-size: 14px;
        }
        .presence-50731 small {
          color: #6b7280;
          font-size: 12px;
        }
      </style>
    `,
  },
  {
    category: "tailwind",
    background: "bg-gradient-to-br from-indigo-950/50 to-zinc-950",
    iconColor: "#fff",
    content: (
      <div className="w-[360px] rounded-2xl border border-white/10 bg-zinc-900 p-4 shadow-2xl shadow-black/50">
        <div className="flex items-center gap-3">
          <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-indigo-500/15 text-indigo-300">
            <svg
              className="size-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M7 18a4 4 0 01-.9-7.9A5 5 0 0116 8a4 4 0 011 7.9M12 12v8M9 15l3-3 3 3" />
            </svg>
          </span>
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-medium text-white">
              brand-guidelines.pdf
            </p>
            <p className="text-xs text-zinc-400">4.2 MB of 6.8 MB · 12s left</p>
          </div>
          <span className="text-sm font-semibold text-indigo-300">62%</span>
        </div>
        <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/10">
          <div className="h-full w-[62%] rounded-full bg-gradient-to-r from-indigo-500 to-sky-400"></div>
        </div>
      </div>
    ),
  },
  {
    category: "css",
    background: "bg-[#f8fafc]",
    iconColor: "#000",
    html: `
      <div class="helpful-38104">
        <p>Was this page helpful?</p>
        <div class="helpful-38104-actions">
          <label><input type="radio" name="helpful-38104"><span>👍 Yes</span></label>
          <label><input type="radio" name="helpful-38104"><span>👎 No</span></label>
        </div>
        <small>Thanks for helping us improve the docs!</small>
      </div>
      <style>
        .helpful-38104 {
          display: grid;
          justify-items: center;
          gap: 12px;
          width: 300px;
          padding: 22px;
          border: 1px solid #e2e8f0;
          border-radius: 18px;
          background: #fff;
          box-shadow: 0 16px 32px -24px rgba(15, 23, 42, 0.5);
        }
        .helpful-38104 p {
          margin: 0;
          color: #0f172a;
          font-size: 15px;
          font-weight: 600;
        }
        .helpful-38104-actions {
          display: flex;
          gap: 8px;
        }
        .helpful-38104 label span {
          display: block;
          padding: 8px 16px;
          border: 1px solid #e2e8f0;
          border-radius: 999px;
          color: #334155;
          font-size: 13px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .helpful-38104 label:hover span {
          border-color: #c7d2fe;
          background: #eef2ff;
        }
        .helpful-38104 input {
          position: absolute;
          opacity: 0;
          pointer-events: none;
        }
        .helpful-38104 input:checked + span {
          border-color: #6366f1;
          background: #6366f1;
          color: #fff;
        }
        .helpful-38104 small {
          height: 16px;
          color: #16a34a;
          font-size: 12px;
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .helpful-38104:has(input:checked) small {
          opacity: 1;
        }
      </style>
    `,
  },
];
