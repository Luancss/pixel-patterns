import type { Snippet } from "@/types/snippet";

export const overlaySnippets: Snippet[] = [
  {
    category: "css",
    background: "bg-gradient-to-br from-[#0f172a] to-black",
    iconColor: "#fff",
    html: `
      <div class="tips-24918">
        <button class="tips-24918-top" data-tip="Tooltip on top">Top</button>
        <button class="tips-24918-right" data-tip="On the right">Right</button>
        <button class="tips-24918-bottom" data-tip="Below the trigger">Bottom</button>
        <button class="tips-24918-left" data-tip="On the left">Left</button>
      </div>
      <style>
        .tips-24918 {
          display: grid;
          grid-template-columns: repeat(2, 120px);
          gap: 14px;
        }
        .tips-24918 button {
          position: relative;
          padding: 10px 0;
          border: 1px solid #334155;
          border-radius: 10px;
          background: #1e293b;
          color: #e2e8f0;
          font-size: 13px;
          font-weight: 600;
          cursor: pointer;
        }
        .tips-24918 button::after,
        .tips-24918 button::before {
          position: absolute;
          z-index: 10;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.2s ease, transform 0.2s ease;
        }
        .tips-24918 button::after {
          content: attr(data-tip);
          padding: 6px 10px;
          border-radius: 8px;
          background: #f8fafc;
          color: #0f172a;
          font-size: 12px;
          font-weight: 500;
          white-space: nowrap;
          box-shadow: 0 10px 24px -10px rgba(0, 0, 0, 0.6);
        }
        .tips-24918 button::before {
          content: "";
          border: 5px solid transparent;
        }
        .tips-24918 button:hover::after,
        .tips-24918 button:hover::before,
        .tips-24918 button:focus-visible::after,
        .tips-24918 button:focus-visible::before {
          opacity: 1;
        }
        .tips-24918-top::after {
          bottom: calc(100% + 10px);
          left: 50%;
          transform: translate(-50%, 4px);
        }
        .tips-24918-top::before {
          bottom: calc(100% + 0px);
          left: 50%;
          border-top-color: #f8fafc;
          transform: translate(-50%, 4px);
        }
        .tips-24918-bottom::after {
          top: calc(100% + 10px);
          left: 50%;
          transform: translate(-50%, -4px);
        }
        .tips-24918-bottom::before {
          top: 100%;
          left: 50%;
          border-bottom-color: #f8fafc;
          transform: translate(-50%, -4px);
        }
        .tips-24918-right::after {
          top: 50%;
          left: calc(100% + 10px);
          transform: translate(-4px, -50%);
        }
        .tips-24918-right::before {
          top: 50%;
          left: 100%;
          border-right-color: #f8fafc;
          transform: translate(-4px, -50%);
        }
        .tips-24918-left::after {
          top: 50%;
          right: calc(100% + 10px);
          transform: translate(4px, -50%);
        }
        .tips-24918-left::before {
          top: 50%;
          right: 100%;
          border-left-color: #f8fafc;
          transform: translate(4px, -50%);
        }
        .tips-24918-top:hover::after,
        .tips-24918-top:hover::before,
        .tips-24918-bottom:hover::after,
        .tips-24918-bottom:hover::before {
          transform: translate(-50%, 0);
        }
        .tips-24918-left:hover::after,
        .tips-24918-left:hover::before,
        .tips-24918-right:hover::after,
        .tips-24918-right:hover::before {
          transform: translate(0, -50%);
        }
      </style>
    `,
  },
  {
    category: "tailwind",
    background: "bg-[#0a0a0a]",
    iconColor: "#fff",
    content: (
      <div className="flex items-center gap-5">
        <div className="group relative">
          <button
            aria-label="Edit"
            className="flex size-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-zinc-300 transition hover:bg-white/10 hover:text-white"
          >
            <svg
              className="size-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 20h4L19 9l-4-4L4 16v4z" />
            </svg>
          </button>
          <span
            role="tooltip"
            className="pointer-events-none absolute bottom-full left-1/2 mb-3 -translate-x-1/2 whitespace-nowrap rounded-lg bg-white px-2.5 py-1.5 text-xs font-medium text-zinc-900 opacity-0 shadow-lg transition group-hover:-translate-y-0.5 group-hover:opacity-100"
          >
            Edit file
            <span className="ml-2 rounded bg-zinc-200 px-1 text-[10px] text-zinc-600">
              E
            </span>
          </span>
        </div>
        <div className="group relative">
          <button
            aria-label="Share"
            className="flex size-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-zinc-300 transition hover:bg-white/10 hover:text-white"
          >
            <svg
              className="size-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 12v7a1 1 0 001 1h14a1 1 0 001-1v-7M16 6l-4-4-4 4M12 2v14" />
            </svg>
          </button>
          <span
            role="tooltip"
            className="pointer-events-none absolute bottom-full left-1/2 mb-3 -translate-x-1/2 whitespace-nowrap rounded-lg bg-white px-2.5 py-1.5 text-xs font-medium text-zinc-900 opacity-0 shadow-lg transition group-hover:-translate-y-0.5 group-hover:opacity-100"
          >
            Share link
          </span>
        </div>
        <div className="group relative">
          <button
            aria-label="Delete"
            className="flex size-11 items-center justify-center rounded-xl border border-rose-500/30 bg-rose-500/10 text-rose-300 transition hover:bg-rose-500/20"
          >
            <svg
              className="size-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 7h16M10 11v6M14 11v6M5 7l1 12a2 2 0 002 2h8a2 2 0 002-2l1-12M9 7V4h6v3" />
            </svg>
          </button>
          <span
            role="tooltip"
            className="pointer-events-none absolute bottom-full left-1/2 mb-3 -translate-x-1/2 whitespace-nowrap rounded-lg bg-rose-500 px-2.5 py-1.5 text-xs font-medium text-white opacity-0 shadow-lg transition group-hover:-translate-y-0.5 group-hover:opacity-100"
          >
            Delete forever
          </span>
        </div>
      </div>
    ),
  },
  {
    category: "tailwind",
    background: "bg-gradient-to-b from-zinc-900 to-black",
    iconColor: "#fff",
    content: (
      <div className="h-72">
        <details className="group relative" open>
          <summary className="flex cursor-pointer list-none items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/10 [&::-webkit-details-marker]:hidden">
            Options
            <svg
              className="size-4 transition group-open:rotate-180"
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
          <div className="absolute left-0 top-full z-10 mt-2 w-56 rounded-xl border border-white/10 bg-zinc-900 p-1.5 text-sm shadow-2xl shadow-black/60">
            <a
              href="#"
              className="flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-zinc-300 transition hover:bg-white/5 hover:text-white"
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
                <path d="M4 20h4L19 9l-4-4L4 16v4z" />
              </svg>
              Edit
            </a>
            <a
              href="#"
              className="flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-zinc-300 transition hover:bg-white/5 hover:text-white"
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
                <path d="M8 8h11v11H8zM5 16H4V5h11v1" />
              </svg>
              Duplicate
            </a>
            <a
              href="#"
              className="flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-zinc-300 transition hover:bg-white/5 hover:text-white"
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
                <path d="M3 7h18v4H3zM5 11v8h14v-8M10 15h4" />
              </svg>
              Archive
            </a>
            <hr className="my-1.5 border-white/10" />
            <a
              href="#"
              className="flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-rose-400 transition hover:bg-rose-500/10 hover:text-rose-300"
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
                <path d="M4 7h16M10 11v6M14 11v6M5 7l1 12a2 2 0 002 2h8a2 2 0 002-2l1-12M9 7V4h6v3" />
              </svg>
              Delete
            </a>
          </div>
        </details>
      </div>
    ),
  },
  {
    category: "tailwind",
    background:
      "bg-[radial-gradient(circle_at_30%_20%,#312e81_0%,#09090b_60%)]",
    iconColor: "#fff",
    content: (
      <div className="w-60 rounded-xl border border-white/10 bg-zinc-900/95 p-1.5 text-sm text-zinc-300 shadow-2xl shadow-black/60 backdrop-blur">
        <button className="group flex w-full items-center gap-2.5 rounded-lg px-2.5 py-1.5 transition hover:bg-indigo-500 hover:text-white">
          Back
          <kbd className="ml-auto font-sans text-xs text-zinc-500 group-hover:text-indigo-100">
            ⌘[
          </kbd>
        </button>
        <button
          disabled
          className="flex w-full cursor-not-allowed items-center gap-2.5 rounded-lg px-2.5 py-1.5 opacity-40"
        >
          Forward
          <kbd className="ml-auto font-sans text-xs text-zinc-500">⌘]</kbd>
        </button>
        <button className="group flex w-full items-center gap-2.5 rounded-lg px-2.5 py-1.5 transition hover:bg-indigo-500 hover:text-white">
          Reload
          <kbd className="ml-auto font-sans text-xs text-zinc-500 group-hover:text-indigo-100">
            ⌘R
          </kbd>
        </button>
        <hr className="my-1.5 border-white/10" />
        <button className="group flex w-full items-center gap-2.5 rounded-lg px-2.5 py-1.5 transition hover:bg-indigo-500 hover:text-white">
          Save page as...
          <kbd className="ml-auto font-sans text-xs text-zinc-500 group-hover:text-indigo-100">
            ⌘S
          </kbd>
        </button>
        <button className="group flex w-full items-center gap-2.5 rounded-lg px-2.5 py-1.5 transition hover:bg-indigo-500 hover:text-white">
          Print...
          <kbd className="ml-auto font-sans text-xs text-zinc-500 group-hover:text-indigo-100">
            ⌘P
          </kbd>
        </button>
        <hr className="my-1.5 border-white/10" />
        <button className="group flex w-full items-center gap-2.5 rounded-lg px-2.5 py-1.5 transition hover:bg-indigo-500 hover:text-white">
          Inspect element
          <kbd className="ml-auto font-sans text-xs text-zinc-500 group-hover:text-indigo-100">
            ⌥⌘I
          </kbd>
        </button>
      </div>
    ),
  },
  {
    category: "css",
    background: "bg-gradient-to-br from-[#450a0a] to-[#0c0a09]",
    iconColor: "#fff",
    html: `
      <button class="modal-60371-trigger" popovertarget="modal-60371">Delete project</button>
      <div id="modal-60371" class="modal-60371" popover>
        <div class="modal-60371-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 9v4M12 17h.01M10.3 3.9L1.8 18a2 2 0 001.7 3h17a2 2 0 001.7-3L13.7 3.9a2 2 0 00-3.4 0z"/></svg>
        </div>
        <h3>Delete project?</h3>
        <p>This permanently removes the project and all of its deployments. This action cannot be undone.</p>
        <div class="modal-60371-actions">
          <button class="modal-60371-cancel" popovertarget="modal-60371" popovertargetaction="hide">Cancel</button>
          <button class="modal-60371-confirm" popovertarget="modal-60371" popovertargetaction="hide">Delete</button>
        </div>
      </div>
      <style>
        .modal-60371-trigger {
          padding: 12px 20px;
          border: 1px solid rgba(248, 113, 113, 0.4);
          border-radius: 12px;
          background: rgba(239, 68, 68, 0.12);
          color: #fecaca;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.2s ease;
        }
        .modal-60371-trigger:hover {
          background: rgba(239, 68, 68, 0.22);
        }
        .modal-60371 {
          width: min(380px, calc(100vw - 32px));
          padding: 24px;
          border: 1px solid #27272a;
          border-radius: 20px;
          background: #18181b;
          color: #e4e4e7;
          box-shadow: 0 30px 80px -20px rgba(0, 0, 0, 0.85);
        }
        .modal-60371:popover-open {
          animation: modal-60371-enter 0.2s ease-out;
        }
        .modal-60371::backdrop {
          background: rgba(0, 0, 0, 0.6);
          backdrop-filter: blur(4px);
        }
        .modal-60371-icon {
          display: grid;
          place-items: center;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: rgba(239, 68, 68, 0.15);
          color: #f87171;
        }
        .modal-60371-icon svg {
          width: 22px;
          height: 22px;
        }
        .modal-60371 h3 {
          margin: 16px 0 6px;
          color: #fafafa;
          font-size: 18px;
        }
        .modal-60371 p {
          margin: 0;
          color: #a1a1aa;
          font-size: 14px;
          line-height: 1.6;
        }
        .modal-60371-actions {
          display: flex;
          justify-content: flex-end;
          gap: 8px;
          margin-top: 24px;
        }
        .modal-60371-actions button {
          padding: 9px 16px;
          border-radius: 10px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
        }
        .modal-60371-cancel {
          border: 1px solid #3f3f46;
          background: transparent;
          color: #e4e4e7;
        }
        .modal-60371-confirm {
          border: 0;
          background: #ef4444;
          color: #fff;
        }
        .modal-60371-confirm:hover {
          background: #dc2626;
        }
        @keyframes modal-60371-enter {
          from {
            opacity: 0;
            transform: translateY(8px) scale(0.97);
          }
        }
      </style>
    `,
  },
  {
    category: "tailwind",
    background: "bg-gradient-to-br from-amber-950/40 to-zinc-950",
    iconColor: "#fff",
    content: (
      <div className="w-[400px] rounded-2xl border border-white/10 bg-zinc-900 p-6 shadow-2xl shadow-black/60">
        <div className="flex gap-4">
          <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-amber-500/15 text-amber-400">
            <svg
              className="size-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 9v4M12 17h.01M10.3 3.9L1.8 18a2 2 0 001.7 3h17a2 2 0 001.7-3L13.7 3.9a2 2 0 00-3.4 0z" />
            </svg>
          </span>
          <div>
            <h3 className="text-base font-semibold text-white">
              Unsaved changes
            </h3>
            <p className="mt-1 text-sm leading-relaxed text-zinc-400">
              You have unsaved edits in this document. Do you want to save them
              before leaving?
            </p>
          </div>
        </div>
        <div className="mt-6 flex justify-end gap-2">
          <button className="rounded-lg px-3 py-2 text-sm font-medium text-zinc-300 transition hover:bg-white/5">
            Discard
          </button>
          <button className="rounded-lg border border-white/10 px-3 py-2 text-sm font-medium text-zinc-200 transition hover:bg-white/5">
            Cancel
          </button>
          <button className="rounded-lg bg-amber-500 px-3 py-2 text-sm font-semibold text-zinc-950 transition hover:bg-amber-400">
            Save changes
          </button>
        </div>
      </div>
    ),
  },
  {
    category: "tailwind",
    background: "bg-[radial-gradient(circle_at_50%_0%,#1e3a8a_0%,#030712_65%)]",
    iconColor: "#fff",
    content: (
      <div className="w-[440px] overflow-hidden rounded-2xl border border-white/10 bg-zinc-950/95 shadow-2xl shadow-black/70">
        <div className="flex items-center gap-3 border-b border-white/10 px-4 py-3">
          <svg
            className="size-4 text-zinc-500"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="7" />
            <path d="M21 21l-4.3-4.3" />
          </svg>
          <input
            type="text"
            placeholder="Search commands..."
            className="flex-1 bg-transparent text-sm text-white placeholder:text-zinc-500 focus:outline-none"
          />
          <kbd className="rounded border border-white/10 px-1.5 py-0.5 text-[10px] text-zinc-400">
            ESC
          </kbd>
        </div>
        <div className="p-2 text-sm">
          <p className="px-2 pb-1 pt-2 text-[11px] font-medium uppercase tracking-wider text-zinc-500">
            Suggestions
          </p>
          <a
            href="#"
            className="flex items-center gap-3 rounded-lg bg-white/10 px-2 py-2 text-white"
          >
            <span className="flex size-6 items-center justify-center rounded-md bg-blue-500/20 text-blue-300">
              +
            </span>
            New project
            <kbd className="ml-auto text-xs text-zinc-400">⌘N</kbd>
          </a>
          <a
            href="#"
            className="flex items-center gap-3 rounded-lg px-2 py-2 text-zinc-300 transition hover:bg-white/5"
          >
            <span className="flex size-6 items-center justify-center rounded-md bg-emerald-500/20 text-emerald-300">
              @
            </span>
            Invite teammate
            <kbd className="ml-auto text-xs text-zinc-500">⌘I</kbd>
          </a>
          <p className="px-2 pb-1 pt-3 text-[11px] font-medium uppercase tracking-wider text-zinc-500">
            Navigation
          </p>
          <a
            href="#"
            className="flex items-center gap-3 rounded-lg px-2 py-2 text-zinc-300 transition hover:bg-white/5"
          >
            <span className="flex size-6 items-center justify-center rounded-md bg-white/5 text-zinc-300">
              #
            </span>
            Go to dashboard
            <kbd className="ml-auto text-xs text-zinc-500">G D</kbd>
          </a>
          <a
            href="#"
            className="flex items-center gap-3 rounded-lg px-2 py-2 text-zinc-300 transition hover:bg-white/5"
          >
            <span className="flex size-6 items-center justify-center rounded-md bg-white/5 text-zinc-300">
              ⚙
            </span>
            Open settings
            <kbd className="ml-auto text-xs text-zinc-500">G S</kbd>
          </a>
        </div>
      </div>
    ),
  },
  {
    category: "css",
    background: "bg-gradient-to-br from-[#ecfeff] to-[#e0e7ff]",
    iconColor: "#000",
    html: `
      <div class="hovercard-48572">
        <p>Hover <a href="#">@aurora.design</a> to preview the profile.</p>
        <div class="hovercard-48572-card" role="tooltip">
          <div class="hovercard-48572-avatar">AD</div>
          <strong>Aurora Design</strong>
          <span>Product designer crafting interfaces for developer tools.</span>
          <div class="hovercard-48572-stats"><span><b>1.2k</b> followers</span><span><b>48</b> projects</span></div>
        </div>
      </div>
      <style>
        .hovercard-48572 {
          position: relative;
          padding-top: 170px;
        }
        .hovercard-48572 p {
          margin: 0;
          color: #334155;
          font-size: 15px;
        }
        .hovercard-48572 a {
          color: #4f46e5;
          font-weight: 600;
          text-decoration: none;
          border-bottom: 2px solid #c7d2fe;
        }
        .hovercard-48572-card {
          position: absolute;
          bottom: 34px;
          left: 50%;
          display: grid;
          gap: 4px;
          width: 240px;
          padding: 16px;
          border-radius: 16px;
          background: #fff;
          box-shadow: 0 24px 48px -20px rgba(30, 41, 59, 0.45);
          opacity: 0;
          visibility: hidden;
          transform: translate(-50%, 8px);
          transition: opacity 0.2s ease, transform 0.2s ease, visibility 0.2s;
        }
        .hovercard-48572:has(a:hover) .hovercard-48572-card,
        .hovercard-48572:has(a:focus-visible) .hovercard-48572-card,
        .hovercard-48572-card:hover {
          opacity: 1;
          visibility: visible;
          transform: translate(-50%, 0);
        }
        .hovercard-48572-avatar {
          display: grid;
          place-items: center;
          width: 44px;
          height: 44px;
          margin-bottom: 6px;
          border-radius: 50%;
          background: linear-gradient(135deg, #22d3ee, #6366f1);
          color: #fff;
          font-weight: 700;
        }
        .hovercard-48572-card strong {
          color: #0f172a;
          font-size: 15px;
        }
        .hovercard-48572-card > span {
          color: #64748b;
          font-size: 13px;
          line-height: 1.5;
        }
        .hovercard-48572-stats {
          display: flex;
          gap: 14px;
          margin-top: 8px;
          color: #64748b;
          font-size: 12px;
        }
        .hovercard-48572-stats b {
          color: #0f172a;
        }
      </style>
    `,
  },
  {
    category: "css",
    background: "bg-[#0b0b10]",
    iconColor: "#fff",
    html: `
      <div class="usermenu-72906">
        <button class="usermenu-72906-trigger">
          <span class="usermenu-72906-avatar">JD</span>
          <span class="usermenu-72906-name">Jane Doe<small>jane@studio.io</small></span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 9l-7 7-7-7"/></svg>
        </button>
        <ul class="usermenu-72906-menu">
          <li><a href="#">Your profile</a></li>
          <li><a href="#">Billing</a></li>
          <li><a href="#">Team settings</a></li>
          <li class="usermenu-72906-separator"></li>
          <li><a href="#" class="usermenu-72906-danger">Sign out</a></li>
        </ul>
      </div>
      <style>
        .usermenu-72906 {
          position: relative;
          height: 250px;
        }
        .usermenu-72906-trigger {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 8px 12px 8px 8px;
          border: 1px solid #27272a;
          border-radius: 14px;
          background: #18181b;
          color: #a1a1aa;
          text-align: left;
          cursor: pointer;
        }
        .usermenu-72906-trigger svg {
          width: 16px;
          height: 16px;
          transition: transform 0.2s ease;
        }
        .usermenu-72906:focus-within .usermenu-72906-trigger svg {
          transform: rotate(180deg);
        }
        .usermenu-72906-avatar {
          display: grid;
          place-items: center;
          width: 34px;
          height: 34px;
          border-radius: 10px;
          background: linear-gradient(135deg, #f472b6, #a855f7);
          color: #fff;
          font-size: 13px;
          font-weight: 700;
        }
        .usermenu-72906-name {
          display: grid;
          color: #fafafa;
          font-size: 14px;
          font-weight: 600;
        }
        .usermenu-72906-name small {
          color: #71717a;
          font-size: 12px;
          font-weight: 400;
        }
        .usermenu-72906-menu {
          position: absolute;
          top: calc(100% + 8px);
          right: 0;
          left: 0;
          margin: 0;
          padding: 6px;
          list-style: none;
          border: 1px solid #27272a;
          border-radius: 14px;
          background: #18181b;
          box-shadow: 0 24px 48px -16px rgba(0, 0, 0, 0.8);
          opacity: 0;
          visibility: hidden;
          transform: translateY(-6px);
          transition: opacity 0.2s ease, transform 0.2s ease, visibility 0.2s;
        }
        .usermenu-72906:focus-within .usermenu-72906-menu {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
        }
        .usermenu-72906-menu a {
          display: block;
          padding: 8px 10px;
          border-radius: 8px;
          color: #d4d4d8;
          font-size: 14px;
          text-decoration: none;
        }
        .usermenu-72906-menu a:hover {
          background: #27272a;
          color: #fff;
        }
        .usermenu-72906-separator {
          height: 1px;
          margin: 6px 4px;
          background: #27272a;
        }
        .usermenu-72906-menu .usermenu-72906-danger {
          color: #f87171;
        }
      </style>
    `,
  },
  {
    category: "tailwind",
    background: "bg-black",
    iconColor: "#fff",
    content: (
      <div className="relative h-[340px] w-[460px] overflow-hidden rounded-2xl border border-white/10 bg-zinc-900">
        <div className="space-y-3 p-5">
          <div className="h-3 w-32 rounded-full bg-white/10"></div>
          <div className="h-20 rounded-xl bg-white/5"></div>
          <div className="grid grid-cols-2 gap-3">
            <div className="h-24 rounded-xl bg-white/5"></div>
            <div className="h-24 rounded-xl bg-white/5"></div>
          </div>
        </div>
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"></div>
        <aside className="absolute inset-y-0 right-0 flex w-64 flex-col border-l border-white/10 bg-zinc-950 p-5">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-semibold text-white">Filters</h3>
            <button
              aria-label="Close"
              className="rounded-md p-1 text-zinc-400 transition hover:bg-white/10 hover:text-white"
            >
              <svg
                className="size-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
              >
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <p className="mt-5 text-[11px] font-semibold uppercase tracking-wider text-zinc-500">
            Status
          </p>
          <label className="mt-2 flex items-center gap-2 text-sm text-zinc-300">
            <input
              type="checkbox"
              defaultChecked
              className="size-4 accent-indigo-500"
            />
            Published
          </label>
          <label className="mt-2 flex items-center gap-2 text-sm text-zinc-300">
            <input type="checkbox" className="size-4 accent-indigo-500" />
            Draft
          </label>
          <label className="mt-2 flex items-center gap-2 text-sm text-zinc-300">
            <input
              type="checkbox"
              defaultChecked
              className="size-4 accent-indigo-500"
            />
            Scheduled
          </label>
          <div className="mt-auto flex gap-2">
            <button className="flex-1 rounded-lg border border-white/10 py-2 text-sm text-zinc-300 transition hover:bg-white/5">
              Reset
            </button>
            <button className="flex-1 rounded-lg bg-indigo-500 py-2 text-sm font-medium text-white transition hover:bg-indigo-400">
              Apply
            </button>
          </div>
        </aside>
      </div>
    ),
  },
];
