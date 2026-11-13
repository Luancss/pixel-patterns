import type { Snippet } from "@/features/snippets/types";

export const documentationSnippets: Snippet[] = [
  {
    category: "tailwind",
    background: "bg-[#0a0a0c]",
    iconColor: "#fff",
    content: (
      <div className="flex w-[420px] flex-col gap-2 text-[13px] leading-5">
        <aside className="rounded-lg border-l-4 border-blue-400 bg-blue-500/10 px-3.5 py-2.5">
          <p className="font-semibold text-blue-200">Note</p>
          <p className="mt-0.5 text-blue-100/80">
            Environment variables prefixed with NEXT_PUBLIC_ are inlined at
            build time.
          </p>
        </aside>
        <aside className="rounded-lg border-l-4 border-emerald-400 bg-emerald-500/10 px-3.5 py-2.5">
          <p className="font-semibold text-emerald-200">Tip</p>
          <p className="mt-0.5 text-emerald-100/80">
            Use the satisfies operator to validate config objects without
            widening their types.
          </p>
        </aside>
        <aside className="rounded-lg border-l-4 border-amber-400 bg-amber-500/10 px-3.5 py-2.5">
          <p className="font-semibold text-amber-200">Warning</p>
          <p className="mt-0.5 text-amber-100/80">
            This API is rate limited to 60 requests per minute per token.
          </p>
        </aside>
        <aside className="rounded-lg border-l-4 border-red-400 bg-red-500/10 px-3.5 py-2.5">
          <p className="font-semibold text-red-200">Danger</p>
          <p className="mt-0.5 text-red-100/80">
            Deleting a workspace removes all data permanently and cannot be
            undone.
          </p>
        </aside>
      </div>
    ),
  },
  {
    category: "tailwind",
    background: "bg-[#0a0a0c]",
    iconColor: "#fff",
    content: (
      <article className="w-[460px] rounded-xl border border-white/10 bg-zinc-950 text-sm">
        <header className="space-y-2 border-b border-white/10 p-4">
          <div className="flex items-center gap-2 font-mono">
            <span className="rounded-md bg-violet-500/15 px-2 py-0.5 text-xs font-bold text-violet-300">
              POST
            </span>
            <span className="text-zinc-200">
              /v1/projects/<span className="text-amber-300">{"{id}"}</span>
              /deployments
            </span>
          </div>
          <p className="text-zinc-400">
            Creates a new deployment for the given project.
          </p>
        </header>
        <div className="p-4">
          <p className="mb-2 text-[11px] font-semibold uppercase tracking-wider text-zinc-500">
            Body parameters
          </p>
          <dl className="divide-y divide-white/5">
            <div className="flex gap-3 py-2">
              <dt className="w-24 shrink-0 font-mono text-zinc-200">
                branch
                <span className="ml-1 text-[10px] text-red-400">*</span>
              </dt>
              <dd className="text-zinc-400">
                <span className="mr-2 font-mono text-xs text-sky-300">
                  string
                </span>
                Git branch to build.
              </dd>
            </div>
            <div className="flex gap-3 py-2">
              <dt className="w-24 shrink-0 font-mono text-zinc-200">preview</dt>
              <dd className="text-zinc-400">
                <span className="mr-2 font-mono text-xs text-sky-300">
                  boolean
                </span>
                Defaults to <code className="text-zinc-200">false</code>.
              </dd>
            </div>
          </dl>
        </div>
        <footer className="flex flex-wrap gap-2 border-t border-white/10 p-4 font-mono text-xs">
          <span className="rounded bg-emerald-500/10 px-2 py-1 text-emerald-300">
            201 Created
          </span>
          <span className="rounded bg-amber-500/10 px-2 py-1 text-amber-300">
            422 Invalid branch
          </span>
          <span className="rounded bg-red-500/10 px-2 py-1 text-red-300">
            404 Not found
          </span>
        </footer>
      </article>
    ),
  },
  {
    category: "tailwind",
    background: "bg-[#0a0a0c]",
    iconColor: "#fff",
    content: (
      <div className="w-[470px] overflow-hidden rounded-xl border border-white/10">
        <table className="w-full text-left text-[13px]">
          <thead className="bg-white/5 text-[11px] uppercase tracking-wider text-zinc-400">
            <tr>
              <th className="px-3 py-2 font-medium">Prop</th>
              <th className="px-3 py-2 font-medium">Type</th>
              <th className="px-3 py-2 font-medium">Default</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5 text-zinc-300">
            <tr>
              <td className="px-3 py-2.5 font-mono text-sky-300">variant</td>
              <td className="px-3 py-2.5 font-mono text-xs text-zinc-400">
                &quot;solid&quot; | &quot;ghost&quot; | &quot;link&quot;
              </td>
              <td className="px-3 py-2.5 font-mono text-xs">
                &quot;solid&quot;
              </td>
            </tr>
            <tr>
              <td className="px-3 py-2.5 font-mono text-sky-300">size</td>
              <td className="px-3 py-2.5 font-mono text-xs text-zinc-400">
                &quot;sm&quot; | &quot;md&quot; | &quot;lg&quot;
              </td>
              <td className="px-3 py-2.5 font-mono text-xs">&quot;md&quot;</td>
            </tr>
            <tr>
              <td className="px-3 py-2.5 font-mono text-sky-300">isLoading</td>
              <td className="px-3 py-2.5 font-mono text-xs text-zinc-400">
                boolean
              </td>
              <td className="px-3 py-2.5 font-mono text-xs">false</td>
            </tr>
            <tr>
              <td className="px-3 py-2.5 font-mono text-sky-300">
                onClick
                <span className="ml-1.5 rounded bg-amber-500/15 px-1 font-sans text-[10px] text-amber-300">
                  required
                </span>
              </td>
              <td className="px-3 py-2.5 font-mono text-xs text-zinc-400">
                (event) =&gt; void
              </td>
              <td className="px-3 py-2.5 font-mono text-xs text-zinc-600">—</td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
  },
  {
    category: "css",
    background: "bg-gradient-to-br from-zinc-900 to-black",
    iconColor: "#fff",
    html: `
      <ol class="log-64028">
        <li>
          <header><span class="log-64028-version">v2.4.0</span><time>Nov 3, 2026</time></header>
          <p><span class="log-64028-tag log-64028-added">Added</span> Color palette explorer with CSS export</p>
          <p><span class="log-64028-tag log-64028-fixed">Fixed</span> Pagination no longer appends # to the URL</p>
        </li>
        <li>
          <header><span class="log-64028-version">v2.3.0</span><time>Oct 12, 2026</time></header>
          <p><span class="log-64028-tag log-64028-breaking">Breaking</span> Snippets moved to src/features</p>
        </li>
      </ol>
      <style>
        .log-64028 {
          width: 420px;
          margin: 0;
          padding: 0 0 0 20px;
          list-style: none;
          border-left: 1px solid rgba(255, 255, 255, 0.12);
          font-family: system-ui, sans-serif;
        }
        .log-64028 li { position: relative; padding-bottom: 22px; }
        .log-64028 li::before {
          content: "";
          position: absolute;
          left: -26px;
          top: 4px;
          width: 11px;
          height: 11px;
          border-radius: 50%;
          background: #6366f1;
          box-shadow: 0 0 0 4px rgba(99, 102, 241, 0.2);
        }
        .log-64028 li + li::before { background: #3f3f46; box-shadow: none; }
        .log-64028 header {
          display: flex;
          align-items: baseline;
          gap: 10px;
          margin-bottom: 8px;
        }
        .log-64028-version { color: #fafafa; font-weight: 700; font-size: 15px; }
        .log-64028 time { color: #71717a; font-size: 12px; }
        .log-64028 p {
          display: flex;
          align-items: center;
          gap: 8px;
          margin: 6px 0 0;
          color: #a1a1aa;
          font-size: 13px;
        }
        .log-64028-tag {
          flex-shrink: 0;
          padding: 2px 7px;
          border-radius: 999px;
          font-size: 10.5px;
          font-weight: 600;
        }
        .log-64028-added { background: rgba(52, 211, 153, 0.15); color: #6ee7b7; }
        .log-64028-fixed { background: rgba(96, 165, 250, 0.15); color: #93c5fd; }
        .log-64028-breaking { background: rgba(248, 113, 113, 0.15); color: #fca5a5; }
      </style>
    `,
  },
  {
    category: "css",
    background: "bg-gradient-to-br from-[#0b1020] to-black",
    iconColor: "#fff",
    html: `
      <figure class="arch-39175" aria-label="Request flow from client to database">
        <div class="arch-39175-row">
          <div class="arch-39175-node arch-39175-client">Browser<small>Next.js app</small></div>
          <span class="arch-39175-edge">HTTPS</span>
          <div class="arch-39175-node arch-39175-gateway">API Gateway<small>auth · rate limit</small></div>
        </div>
        <span class="arch-39175-down" aria-hidden="true"></span>
        <div class="arch-39175-row">
          <div class="arch-39175-node">Users service</div>
          <div class="arch-39175-node">Billing service</div>
          <div class="arch-39175-node arch-39175-queue">Queue</div>
        </div>
        <span class="arch-39175-down" aria-hidden="true"></span>
        <div class="arch-39175-row">
          <div class="arch-39175-node arch-39175-db">PostgreSQL</div>
          <div class="arch-39175-node arch-39175-db">Redis cache</div>
        </div>
      </figure>
      <style>
        .arch-39175 {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 460px;
          margin: 0;
          font-family: system-ui, sans-serif;
        }
        .arch-39175-row {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          width: 100%;
        }
        .arch-39175-node {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 10px 14px;
          border-radius: 10px;
          border: 1px solid rgba(148, 163, 184, 0.25);
          background: rgba(15, 23, 42, 0.8);
          color: #e2e8f0;
          font-size: 12.5px;
          font-weight: 600;
        }
        .arch-39175-node small { color: #64748b; font-size: 10.5px; font-weight: 500; }
        .arch-39175-client { border-color: rgba(96, 165, 250, 0.5); }
        .arch-39175-gateway { border-color: rgba(167, 139, 250, 0.5); }
        .arch-39175-queue { border-style: dashed; color: #fbbf24; }
        .arch-39175-db { border-color: rgba(52, 211, 153, 0.45); color: #a7f3d0; }
        .arch-39175-edge {
          position: relative;
          flex: 0 0 72px;
          color: #64748b;
          font-size: 10px;
          text-align: center;
          border-bottom: 1px dashed #475569;
          padding-bottom: 2px;
        }
        .arch-39175-edge::after {
          content: "";
          position: absolute;
          right: -1px;
          bottom: -4px;
          border: 4px solid transparent;
          border-left-color: #475569;
        }
        .arch-39175-down {
          position: relative;
          width: 1px;
          height: 22px;
          background: #475569;
        }
        .arch-39175-down::after {
          content: "";
          position: absolute;
          left: -4px;
          bottom: -4px;
          border: 4px solid transparent;
          border-top-color: #475569;
        }
      </style>
    `,
  },
  {
    category: "css",
    background: "bg-gradient-to-br from-zinc-900 to-zinc-950",
    iconColor: "#fff",
    html: `
      <ul class="stability-80264">
        <li><span class="stability-80264-badge stability-80264-stable">Stable</span> useQuery<em>since v1.0</em></li>
        <li><span class="stability-80264-badge stability-80264-beta">Beta</span> useSuspenseQuery<em>since v2.2</em></li>
        <li><span class="stability-80264-badge stability-80264-experimental">Experimental</span> useStream<em>may change</em></li>
        <li><span class="stability-80264-badge stability-80264-deprecated">Deprecated</span> <s>useLegacyCache</s><em>removed in v3</em></li>
      </ul>
      <style>
        .stability-80264 {
          display: grid;
          gap: 8px;
          width: 380px;
          margin: 0;
          padding: 0;
          list-style: none;
          font-family: ui-monospace, Menlo, monospace;
        }
        .stability-80264 li {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 12px;
          border-radius: 10px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          background: rgba(255, 255, 255, 0.03);
          color: #e4e4e7;
          font-size: 13px;
        }
        .stability-80264 em {
          margin-left: auto;
          color: #71717a;
          font: italic 11px system-ui, sans-serif;
        }
        .stability-80264 s { color: #71717a; }
        .stability-80264-badge {
          width: 92px;
          padding: 3px 0;
          border-radius: 999px;
          font: 600 11px system-ui, sans-serif;
          text-align: center;
        }
        .stability-80264-stable { background: rgba(52, 211, 153, 0.15); color: #6ee7b7; }
        .stability-80264-beta { background: rgba(96, 165, 250, 0.15); color: #93c5fd; }
        .stability-80264-experimental { background: rgba(251, 191, 36, 0.15); color: #fcd34d; }
        .stability-80264-deprecated { background: rgba(248, 113, 113, 0.15); color: #fca5a5; }
      </style>
    `,
  },
  {
    category: "tailwind",
    background: "bg-[#0a0a0c]",
    iconColor: "#fff",
    content: (
      <div className="w-[380px] rounded-xl border border-white/10 bg-zinc-950 p-4 text-sm">
        <p className="mb-3 text-[11px] font-semibold uppercase tracking-wider text-zinc-500">
          Keyboard shortcuts
        </p>
        <ul className="space-y-2.5 text-zinc-300">
          <li className="flex items-center justify-between">
            Open command palette
            <span className="flex gap-1">
              <kbd className="rounded border border-white/15 bg-white/5 px-1.5 text-xs text-zinc-300 shadow-[inset_0_-1px_0_rgba(255,255,255,0.08)]">
                ⌘
              </kbd>
              <kbd className="rounded border border-white/15 bg-white/5 px-1.5 text-xs text-zinc-300 shadow-[inset_0_-1px_0_rgba(255,255,255,0.08)]">
                K
              </kbd>
            </span>
          </li>
          <li className="flex items-center justify-between">
            Toggle sidebar
            <span className="flex gap-1">
              <kbd className="rounded border border-white/15 bg-white/5 px-1.5 text-xs text-zinc-300 shadow-[inset_0_-1px_0_rgba(255,255,255,0.08)]">
                ⌘
              </kbd>
              <kbd className="rounded border border-white/15 bg-white/5 px-1.5 text-xs text-zinc-300 shadow-[inset_0_-1px_0_rgba(255,255,255,0.08)]">
                B
              </kbd>
            </span>
          </li>
          <li className="flex items-center justify-between">
            Go to file
            <span className="flex gap-1">
              <kbd className="rounded border border-white/15 bg-white/5 px-1.5 text-xs text-zinc-300 shadow-[inset_0_-1px_0_rgba(255,255,255,0.08)]">
                ⌘
              </kbd>
              <kbd className="rounded border border-white/15 bg-white/5 px-1.5 text-xs text-zinc-300 shadow-[inset_0_-1px_0_rgba(255,255,255,0.08)]">
                P
              </kbd>
            </span>
          </li>
          <li className="flex items-center justify-between">
            Show all shortcuts
            <kbd className="rounded border border-white/15 bg-white/5 px-1.5 text-xs text-zinc-300 shadow-[inset_0_-1px_0_rgba(255,255,255,0.08)]">
              ?
            </kbd>
          </li>
        </ul>
      </div>
    ),
  },
  {
    category: "tailwind",
    background: "bg-[#0a0a0c]",
    iconColor: "#fff",
    content: (
      <div className="grid w-[460px] grid-cols-2 gap-2 text-xs">
        <div className="rounded-lg border border-emerald-500/25 bg-emerald-500/5 p-3">
          <p className="font-mono text-sm font-bold text-emerald-300">2xx</p>
          <p className="mt-1 text-zinc-400">
            <span className="font-mono text-zinc-200">200</span> OK ·{" "}
            <span className="font-mono text-zinc-200">201</span> Created ·{" "}
            <span className="font-mono text-zinc-200">204</span> No Content
          </p>
        </div>
        <div className="rounded-lg border border-sky-500/25 bg-sky-500/5 p-3">
          <p className="font-mono text-sm font-bold text-sky-300">3xx</p>
          <p className="mt-1 text-zinc-400">
            <span className="font-mono text-zinc-200">301</span> Moved ·{" "}
            <span className="font-mono text-zinc-200">304</span> Not Modified
          </p>
        </div>
        <div className="rounded-lg border border-amber-500/25 bg-amber-500/5 p-3">
          <p className="font-mono text-sm font-bold text-amber-300">4xx</p>
          <p className="mt-1 text-zinc-400">
            <span className="font-mono text-zinc-200">401</span> Unauthorized ·{" "}
            <span className="font-mono text-zinc-200">404</span> Not Found ·{" "}
            <span className="font-mono text-zinc-200">429</span> Too Many
          </p>
        </div>
        <div className="rounded-lg border border-red-500/25 bg-red-500/5 p-3">
          <p className="font-mono text-sm font-bold text-red-300">5xx</p>
          <p className="mt-1 text-zinc-400">
            <span className="font-mono text-zinc-200">500</span> Server Error ·{" "}
            <span className="font-mono text-zinc-200">503</span> Unavailable
          </p>
        </div>
      </div>
    ),
  },
  {
    category: "tailwind",
    background: "bg-[#0a0a0c]",
    iconColor: "#fff",
    content: (
      <nav
        aria-label="On this page"
        className="w-60 border-l border-white/10 text-sm"
      >
        <p className="mb-3 pl-4 text-[11px] font-semibold uppercase tracking-wider text-zinc-500">
          On this page
        </p>
        <ul className="space-y-1">
          <li>
            <a
              href="#installation"
              className="-ml-px block border-l border-transparent py-1 pl-4 text-zinc-400 hover:border-zinc-500 hover:text-zinc-200"
            >
              Installation
            </a>
          </li>
          <li>
            <a
              href="#usage"
              aria-current="location"
              className="-ml-px block border-l border-blue-400 py-1 pl-4 font-medium text-blue-300"
            >
              Usage
            </a>
          </li>
          <li>
            <a
              href="#props"
              className="-ml-px block border-l border-transparent py-1 pl-8 text-zinc-500 hover:border-zinc-500 hover:text-zinc-300"
            >
              Props
            </a>
          </li>
          <li>
            <a
              href="#examples"
              className="-ml-px block border-l border-transparent py-1 pl-4 text-zinc-400 hover:border-zinc-500 hover:text-zinc-200"
            >
              Examples
            </a>
          </li>
        </ul>
        <a
          href="#edit"
          className="mt-5 inline-flex items-center gap-1.5 pl-4 text-xs text-zinc-500 hover:text-zinc-300"
        >
          ✎ Edit this page on GitHub
        </a>
      </nav>
    ),
  },
];
