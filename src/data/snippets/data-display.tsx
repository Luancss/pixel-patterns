import type { Snippet } from "@/types/snippet";

export const dataDisplaySnippets: Snippet[] = [
  {
    category: "tailwind",
    background: "bg-[#0a0a0c]",
    iconColor: "#fff",
    content: (
      <div className="w-[460px] overflow-hidden rounded-xl border border-white/10">
        <table className="w-full text-left text-sm">
          <thead className="bg-white/5 text-xs uppercase tracking-wider text-zinc-400">
            <tr>
              <th className="px-4 py-3 font-medium">Customer</th>
              <th className="px-4 py-3 font-medium">Status</th>
              <th className="px-4 py-3 text-right font-medium">MRR</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5 text-zinc-300">
            <tr className="transition hover:bg-white/[0.03]">
              <td className="px-4 py-3">
                <div className="flex items-center gap-3">
                  <span className="flex size-8 items-center justify-center rounded-full bg-indigo-500/20 text-xs font-semibold text-indigo-300">
                    AC
                  </span>
                  <div>
                    <p className="font-medium text-white">Acme Corp</p>
                    <p className="text-xs text-zinc-500">Enterprise</p>
                  </div>
                </div>
              </td>
              <td className="px-4 py-3">
                <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-xs text-emerald-300">
                  Active
                </span>
              </td>
              <td className="px-4 py-3 text-right font-medium text-white">
                $4,200
              </td>
            </tr>
            <tr className="transition hover:bg-white/[0.03]">
              <td className="px-4 py-3">
                <div className="flex items-center gap-3">
                  <span className="flex size-8 items-center justify-center rounded-full bg-amber-500/20 text-xs font-semibold text-amber-300">
                    GL
                  </span>
                  <div>
                    <p className="font-medium text-white">Globex Labs</p>
                    <p className="text-xs text-zinc-500">Growth</p>
                  </div>
                </div>
              </td>
              <td className="px-4 py-3">
                <span className="rounded-full bg-amber-500/10 px-2 py-0.5 text-xs text-amber-300">
                  Trial
                </span>
              </td>
              <td className="px-4 py-3 text-right font-medium text-white">
                $890
              </td>
            </tr>
            <tr className="transition hover:bg-white/[0.03]">
              <td className="px-4 py-3">
                <div className="flex items-center gap-3">
                  <span className="flex size-8 items-center justify-center rounded-full bg-rose-500/20 text-xs font-semibold text-rose-300">
                    IN
                  </span>
                  <div>
                    <p className="font-medium text-white">Initech</p>
                    <p className="text-xs text-zinc-500">Starter</p>
                  </div>
                </div>
              </td>
              <td className="px-4 py-3">
                <span className="rounded-full bg-rose-500/10 px-2 py-0.5 text-xs text-rose-300">
                  Past due
                </span>
              </td>
              <td className="px-4 py-3 text-right font-medium text-white">
                $120
              </td>
            </tr>
            <tr className="transition hover:bg-white/[0.03]">
              <td className="px-4 py-3">
                <div className="flex items-center gap-3">
                  <span className="flex size-8 items-center justify-center rounded-full bg-sky-500/20 text-xs font-semibold text-sky-300">
                    UM
                  </span>
                  <div>
                    <p className="font-medium text-white">Umbrella</p>
                    <p className="text-xs text-zinc-500">Enterprise</p>
                  </div>
                </div>
              </td>
              <td className="px-4 py-3">
                <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-xs text-emerald-300">
                  Active
                </span>
              </td>
              <td className="px-4 py-3 text-right font-medium text-white">
                $6,750
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
  },
  {
    category: "css",
    background: "bg-[#f1f5f9]",
    iconColor: "#000",
    html: `
      <table class="table-35820">
        <caption>Top pages this week</caption>
        <thead>
          <tr><th>Page</th><th>Views</th><th>Bounce</th></tr>
        </thead>
        <tbody>
          <tr><td>/pricing</td><td>12,480</td><td><span class="table-35820-good">21%</span></td></tr>
          <tr><td>/docs/install</td><td>9,302</td><td><span class="table-35820-good">18%</span></td></tr>
          <tr><td>/blog/release-2</td><td>6,114</td><td><span class="table-35820-bad">47%</span></td></tr>
          <tr><td>/changelog</td><td>3,870</td><td><span class="table-35820-good">29%</span></td></tr>
          <tr><td>/careers</td><td>1,206</td><td><span class="table-35820-bad">52%</span></td></tr>
        </tbody>
      </table>
      <style>
        .table-35820 {
          width: 400px;
          border-collapse: separate;
          border-spacing: 0;
          border-radius: 16px;
          background: #fff;
          box-shadow: 0 16px 36px -24px rgba(15, 23, 42, 0.5);
          font-size: 13px;
        }
        .table-35820 caption {
          padding: 0 0 12px;
          color: #0f172a;
          font-size: 15px;
          font-weight: 700;
          text-align: left;
        }
        .table-35820 th {
          padding: 12px 16px;
          background: #0f172a;
          color: #e2e8f0;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.06em;
          text-align: left;
          text-transform: uppercase;
        }
        .table-35820 th:first-child {
          border-top-left-radius: 16px;
        }
        .table-35820 th:last-child {
          border-top-right-radius: 16px;
        }
        .table-35820 td {
          padding: 12px 16px;
          color: #334155;
        }
        .table-35820 tbody tr:nth-child(even) td {
          background: #f8fafc;
        }
        .table-35820 tbody tr:hover td {
          background: #eef2ff;
        }
        .table-35820 td:first-child {
          color: #0f172a;
          font-weight: 600;
        }
        .table-35820 tbody tr:last-child td:first-child {
          border-bottom-left-radius: 16px;
        }
        .table-35820 tbody tr:last-child td:last-child {
          border-bottom-right-radius: 16px;
        }
        .table-35820-good,
        .table-35820-bad {
          display: inline-block;
          padding: 2px 8px;
          border-radius: 999px;
          font-size: 12px;
          font-weight: 600;
        }
        .table-35820-good {
          background: #dcfce7;
          color: #15803d;
        }
        .table-35820-bad {
          background: #fee2e2;
          color: #b91c1c;
        }
      </style>
    `,
  },
  {
    category: "tailwind",
    background: "bg-gradient-to-br from-zinc-900 to-black",
    iconColor: "#fff",
    content: (
      <div className="grid w-[460px] grid-cols-3 gap-3">
        <div className="rounded-xl border border-white/10 bg-white/5 p-4">
          <p className="text-xs text-zinc-400">Revenue</p>
          <p className="mt-2 text-xl font-semibold text-white">$48.2k</p>
          <p className="mt-1 flex items-center gap-1 text-xs font-medium text-emerald-400">
            <svg
              className="size-3"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={3}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M7 17L17 7M9 7h8v8" />
            </svg>
            12.5%
          </p>
        </div>
        <div className="rounded-xl border border-white/10 bg-white/5 p-4">
          <p className="text-xs text-zinc-400">Active users</p>
          <p className="mt-2 text-xl font-semibold text-white">3,218</p>
          <p className="mt-1 flex items-center gap-1 text-xs font-medium text-emerald-400">
            <svg
              className="size-3"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={3}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M7 17L17 7M9 7h8v8" />
            </svg>
            4.1%
          </p>
        </div>
        <div className="rounded-xl border border-white/10 bg-white/5 p-4">
          <p className="text-xs text-zinc-400">Churn</p>
          <p className="mt-2 text-xl font-semibold text-white">2.4%</p>
          <p className="mt-1 flex items-center gap-1 text-xs font-medium text-rose-400">
            <svg
              className="size-3"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={3}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M7 7l10 10M17 9v8H9" />
            </svg>
            0.8%
          </p>
        </div>
      </div>
    ),
  },
  {
    category: "css",
    background: "bg-[#020617]",
    iconColor: "#fff",
    html: `
      <figure class="bars-92741">
        <figcaption>Weekly sessions<span>+18% vs last week</span></figcaption>
        <div class="bars-92741-plot">
          <div style="--value: 42%" data-label="Mon"></div>
          <div style="--value: 64%" data-label="Tue"></div>
          <div style="--value: 55%" data-label="Wed"></div>
          <div style="--value: 88%" data-label="Thu"></div>
          <div style="--value: 72%" data-label="Fri"></div>
          <div style="--value: 30%" data-label="Sat"></div>
          <div style="--value: 24%" data-label="Sun"></div>
        </div>
      </figure>
      <style>
        .bars-92741 {
          width: 380px;
          margin: 0;
          padding: 20px;
          border: 1px solid #1e293b;
          border-radius: 18px;
          background: #0f172a;
        }
        .bars-92741 figcaption {
          display: flex;
          justify-content: space-between;
          color: #f1f5f9;
          font-size: 15px;
          font-weight: 600;
        }
        .bars-92741 figcaption span {
          color: #4ade80;
          font-size: 12px;
          font-weight: 500;
        }
        .bars-92741-plot {
          display: flex;
          align-items: flex-end;
          gap: 10px;
          height: 180px;
          margin-top: 18px;
          padding-bottom: 22px;
          background: repeating-linear-gradient(to top, #1e293b 0 1px, transparent 1px 45px);
        }
        .bars-92741-plot div {
          position: relative;
          flex: 1;
          height: var(--value);
          border-radius: 8px 8px 4px 4px;
          background: linear-gradient(180deg, #38bdf8, #6366f1);
          transform-origin: bottom;
          animation: bars-92741-grow 0.9s cubic-bezier(0.22, 1, 0.36, 1) both;
          transition: filter 0.2s ease;
        }
        .bars-92741-plot div:nth-child(2) {
          animation-delay: 0.05s;
        }
        .bars-92741-plot div:nth-child(3) {
          animation-delay: 0.1s;
        }
        .bars-92741-plot div:nth-child(4) {
          animation-delay: 0.15s;
        }
        .bars-92741-plot div:nth-child(5) {
          animation-delay: 0.2s;
        }
        .bars-92741-plot div:nth-child(6) {
          animation-delay: 0.25s;
        }
        .bars-92741-plot div:nth-child(7) {
          animation-delay: 0.3s;
        }
        .bars-92741-plot div::after {
          content: attr(data-label);
          position: absolute;
          bottom: -22px;
          left: 50%;
          color: #64748b;
          font-size: 11px;
          transform: translateX(-50%);
        }
        .bars-92741-plot div:hover {
          filter: brightness(1.3);
        }
        @keyframes bars-92741-grow {
          from {
            transform: scaleY(0);
          }
        }
      </style>
    `,
  },
  {
    category: "tailwind",
    background: "bg-gradient-to-br from-violet-950/50 to-black",
    iconColor: "#fff",
    content: (
      <div className="w-[440px] rounded-2xl border border-white/10 bg-zinc-950 p-5">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-sm text-zinc-400">Total revenue</p>
            <p className="mt-1 text-2xl font-semibold text-white">$128,430</p>
          </div>
          <span className="rounded-full bg-emerald-500/10 px-2 py-1 text-xs font-medium text-emerald-300">
            +24.6%
          </span>
        </div>
        <svg
          viewBox="0 0 400 140"
          className="mt-4 h-36 w-full"
          fill="none"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="revenue-fill-81352" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.45" />
              <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M0 110 C40 100 60 70 100 76 S160 40 200 52 S260 96 300 62 S360 20 400 28 V140 H0 Z"
            fill="url(#revenue-fill-81352)"
          />
          <path
            d="M0 110 C40 100 60 70 100 76 S160 40 200 52 S260 96 300 62 S360 20 400 28"
            stroke="#a78bfa"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <circle
            cx="300"
            cy="62"
            r="5"
            fill="#09090b"
            stroke="#c4b5fd"
            strokeWidth="2.5"
          />
        </svg>
        <div className="mt-2 flex justify-between text-[11px] text-zinc-500">
          <span>Jan</span>
          <span>Feb</span>
          <span>Mar</span>
          <span>Apr</span>
          <span>May</span>
          <span>Jun</span>
        </div>
      </div>
    ),
  },
  {
    category: "css",
    background: "bg-gradient-to-br from-[#0b1120] to-[#111827]",
    iconColor: "#fff",
    html: `
      <div class="donut-13579">
        <div class="donut-13579-chart"><span><b>72%</b>Storage used</span></div>
        <ul>
          <li><i style="background: #6366f1"></i>Media<span>38%</span></li>
          <li><i style="background: #22d3ee"></i>Documents<span>22%</span></li>
          <li><i style="background: #f472b6"></i>Backups<span>12%</span></li>
          <li><i style="background: #334155"></i>Free<span>28%</span></li>
        </ul>
      </div>
      <style>
        .donut-13579 {
          display: flex;
          align-items: center;
          gap: 28px;
          padding: 24px;
          border: 1px solid #1f2937;
          border-radius: 20px;
          background: #0b1120;
        }
        .donut-13579-chart {
          position: relative;
          display: grid;
          place-items: center;
          width: 150px;
          height: 150px;
          border-radius: 50%;
          background: conic-gradient(#6366f1 0 38%, #22d3ee 0 60%, #f472b6 0 72%, #334155 0);
        }
        .donut-13579-chart::before {
          content: "";
          position: absolute;
          inset: 18px;
          border-radius: 50%;
          background: #0b1120;
        }
        .donut-13579-chart span {
          position: relative;
          display: grid;
          color: #94a3b8;
          font-size: 11px;
          text-align: center;
        }
        .donut-13579-chart b {
          color: #f8fafc;
          font-size: 26px;
        }
        .donut-13579 ul {
          display: grid;
          gap: 12px;
          margin: 0;
          padding: 0;
          list-style: none;
        }
        .donut-13579 li {
          display: flex;
          align-items: center;
          gap: 10px;
          min-width: 140px;
          color: #cbd5e1;
          font-size: 13px;
        }
        .donut-13579 li i {
          width: 10px;
          height: 10px;
          border-radius: 3px;
        }
        .donut-13579 li span {
          margin-left: auto;
          color: #f8fafc;
          font-weight: 600;
        }
      </style>
    `,
  },
  {
    category: "tailwind",
    background: "bg-[#09090b]",
    iconColor: "#fff",
    content: (
      <div className="w-[400px] space-y-4 rounded-2xl border border-white/10 bg-zinc-900/80 p-5">
        <h3 className="text-sm font-semibold text-white">Quarterly goals</h3>
        <div>
          <div className="mb-1.5 flex justify-between text-xs">
            <span className="text-zinc-300">New customers</span>
            <span className="font-medium text-white">82%</span>
          </div>
          <div className="h-2 rounded-full bg-white/10">
            <div className="h-2 w-[82%] rounded-full bg-emerald-400"></div>
          </div>
        </div>
        <div>
          <div className="mb-1.5 flex justify-between text-xs">
            <span className="text-zinc-300">Retention</span>
            <span className="font-medium text-white">64%</span>
          </div>
          <div className="h-2 rounded-full bg-white/10">
            <div className="h-2 w-[64%] rounded-full bg-sky-400"></div>
          </div>
        </div>
        <div>
          <div className="mb-1.5 flex justify-between text-xs">
            <span className="text-zinc-300">Support SLA</span>
            <span className="font-medium text-white">91%</span>
          </div>
          <div className="h-2 rounded-full bg-white/10">
            <div className="h-2 w-[91%] rounded-full bg-violet-400"></div>
          </div>
        </div>
        <div>
          <div className="mb-1.5 flex justify-between text-xs">
            <span className="text-zinc-300">Expansion revenue</span>
            <span className="font-medium text-white">38%</span>
          </div>
          <div className="h-2 rounded-full bg-white/10">
            <div className="h-2 w-[38%] rounded-full bg-amber-400"></div>
          </div>
        </div>
      </div>
    ),
  },
  {
    category: "tailwind",
    background: "bg-gradient-to-b from-zinc-950 to-indigo-950/40",
    iconColor: "#fff",
    content: (
      <ol className="relative w-[380px] space-y-5 border-l border-white/10 pl-6 text-sm">
        <li className="relative">
          <span className="absolute -left-[32.5px] top-0.5 size-4 rounded-full bg-indigo-500 ring-4 ring-zinc-950"></span>
          <p className="text-zinc-300">
            <span className="font-medium text-white">Lena</span> merged pull
            request{" "}
            <a href="#" className="text-indigo-300 hover:underline">
              #482
            </a>
          </p>
          <time className="text-xs text-zinc-500">2 minutes ago</time>
        </li>
        <li className="relative">
          <span className="absolute -left-[32.5px] top-0.5 size-4 rounded-full bg-emerald-500 ring-4 ring-zinc-950"></span>
          <p className="text-zinc-300">
            <span className="font-medium text-white">Deploy</span> to production
            succeeded
          </p>
          <time className="text-xs text-zinc-500">18 minutes ago</time>
        </li>
        <li className="relative">
          <span className="absolute -left-[32.5px] top-0.5 size-4 rounded-full bg-amber-500 ring-4 ring-zinc-950"></span>
          <p className="text-zinc-300">
            <span className="font-medium text-white">Marcos</span> commented on{" "}
            <a href="#" className="text-indigo-300 hover:underline">
              Pricing page
            </a>
          </p>
          <time className="text-xs text-zinc-500">1 hour ago</time>
        </li>
        <li className="relative">
          <span className="absolute -left-[32.5px] top-0.5 size-4 rounded-full bg-zinc-600 ring-4 ring-zinc-950"></span>
          <p className="text-zinc-300">
            <span className="font-medium text-white">Project</span> created from
            template
          </p>
          <time className="text-xs text-zinc-500">Yesterday</time>
        </li>
      </ol>
    ),
  },
  {
    category: "css",
    background: "bg-gradient-to-br from-[#422006] to-[#0c0a09]",
    iconColor: "#fff",
    html: `
      <ol class="board-60294">
        <li><span class="board-60294-rank">1</span><span class="board-60294-avatar" style="background: linear-gradient(135deg, #fbbf24, #f97316)">MR</span><b>Maya Reed</b><span class="board-60294-score">9,840</span></li>
        <li><span class="board-60294-rank">2</span><span class="board-60294-avatar" style="background: linear-gradient(135deg, #e5e7eb, #9ca3af)">TK</span><b>Theo King</b><span class="board-60294-score">8,215</span></li>
        <li><span class="board-60294-rank">3</span><span class="board-60294-avatar" style="background: linear-gradient(135deg, #fdba74, #b45309)">IS</span><b>Iris Santos</b><span class="board-60294-score">7,960</span></li>
        <li><span class="board-60294-rank">4</span><span class="board-60294-avatar" style="background: linear-gradient(135deg, #a5b4fc, #6366f1)">LP</span><b>Leo Park</b><span class="board-60294-score">6,402</span></li>
      </ol>
      <style>
        .board-60294 {
          display: grid;
          gap: 8px;
          width: 360px;
          margin: 0;
          padding: 0;
          list-style: none;
        }
        .board-60294 li {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 10px 14px;
          border: 1px solid rgba(251, 191, 36, 0.12);
          border-radius: 14px;
          background: rgba(28, 25, 23, 0.85);
          color: #fafaf9;
          font-size: 14px;
          transition: transform 0.2s ease, border-color 0.2s ease;
        }
        .board-60294 li:hover {
          border-color: rgba(251, 191, 36, 0.45);
          transform: translateX(4px);
        }
        .board-60294-rank {
          width: 18px;
          color: #a8a29e;
          font-weight: 700;
          text-align: center;
        }
        .board-60294 li:first-child .board-60294-rank {
          color: #fbbf24;
        }
        .board-60294-avatar {
          display: grid;
          place-items: center;
          width: 34px;
          height: 34px;
          border-radius: 50%;
          color: #1c1917;
          font-size: 12px;
          font-weight: 800;
        }
        .board-60294 b {
          font-weight: 600;
        }
        .board-60294-score {
          margin-left: auto;
          color: #fcd34d;
          font-variant-numeric: tabular-nums;
          font-weight: 700;
        }
      </style>
    `,
  },
  {
    category: "tailwind",
    background: "bg-[#050505]",
    iconColor: "#fff",
    content: (
      <div className="grid w-[460px] grid-cols-2 gap-3">
        <div className="rounded-xl border border-white/10 bg-zinc-900 p-4">
          <div className="flex items-center justify-between">
            <p className="text-xs text-zinc-400">Page views</p>
            <span className="text-xs font-medium text-emerald-400">+9%</span>
          </div>
          <p className="mt-1 text-lg font-semibold text-white">84,302</p>
          <svg
            viewBox="0 0 120 32"
            className="mt-2 h-8 w-full"
            fill="none"
            preserveAspectRatio="none"
          >
            <polyline
              points="0,26 15,22 30,24 45,15 60,18 75,10 90,13 105,6 120,8"
              stroke="#34d399"
              strokeWidth="2"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="rounded-xl border border-white/10 bg-zinc-900 p-4">
          <div className="flex items-center justify-between">
            <p className="text-xs text-zinc-400">Conversion</p>
            <span className="text-xs font-medium text-rose-400">-2%</span>
          </div>
          <p className="mt-1 text-lg font-semibold text-white">3.8%</p>
          <svg
            viewBox="0 0 120 32"
            className="mt-2 h-8 w-full"
            fill="none"
            preserveAspectRatio="none"
          >
            <polyline
              points="0,8 15,10 30,7 45,14 60,12 75,18 90,16 105,22 120,21"
              stroke="#fb7185"
              strokeWidth="2"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="rounded-xl border border-white/10 bg-zinc-900 p-4">
          <div className="flex items-center justify-between">
            <p className="text-xs text-zinc-400">Avg. session</p>
            <span className="text-xs font-medium text-emerald-400">+14%</span>
          </div>
          <p className="mt-1 text-lg font-semibold text-white">4m 12s</p>
          <svg
            viewBox="0 0 120 32"
            className="mt-2 h-8 w-full"
            fill="none"
            preserveAspectRatio="none"
          >
            <polyline
              points="0,24 15,20 30,21 45,17 60,19 75,12 90,9 105,11 120,4"
              stroke="#60a5fa"
              strokeWidth="2"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="rounded-xl border border-white/10 bg-zinc-900 p-4">
          <div className="flex items-center justify-between">
            <p className="text-xs text-zinc-400">Signups</p>
            <span className="text-xs font-medium text-emerald-400">+31%</span>
          </div>
          <p className="mt-1 text-lg font-semibold text-white">1,094</p>
          <svg
            viewBox="0 0 120 32"
            className="mt-2 h-8 w-full"
            fill="none"
            preserveAspectRatio="none"
          >
            <polyline
              points="0,28 15,27 30,22 45,23 60,16 75,14 90,8 105,9 120,3"
              stroke="#c084fc"
              strokeWidth="2"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    ),
  },
  {
    category: "css",
    background: "bg-[#0d1117]",
    iconColor: "#fff",
    html: `
      <div class="heat-46820">
        <p><b>1,284 contributions</b> in the last quarter</p>
        <div class="heat-46820-grid">
          <i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i>
          <i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i>
          <i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i>
          <i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i>
          <i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i>
        </div>
        <div class="heat-46820-legend">Less<i></i><i></i><i></i><i></i><i></i>More</div>
      </div>
      <style>
        .heat-46820 {
          padding: 20px;
          border: 1px solid #30363d;
          border-radius: 16px;
          background: #161b22;
          color: #8b949e;
          font-size: 12px;
        }
        .heat-46820 p {
          margin: 0 0 14px;
        }
        .heat-46820 b {
          color: #e6edf3;
        }
        .heat-46820-grid {
          display: grid;
          grid-template-columns: repeat(14, 18px);
          gap: 5px;
        }
        .heat-46820 i {
          display: block;
          width: 18px;
          height: 18px;
          border-radius: 4px;
          background: #21262d;
        }
        .heat-46820-grid i:nth-child(3n) {
          background: #0e4429;
        }
        .heat-46820-grid i:nth-child(5n + 1) {
          background: #006d32;
        }
        .heat-46820-grid i:nth-child(7n + 2) {
          background: #26a641;
        }
        .heat-46820-grid i:nth-child(11n + 4) {
          background: #39d353;
        }
        .heat-46820-grid i:hover {
          outline: 2px solid #e6edf3;
          outline-offset: 1px;
        }
        .heat-46820-legend {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          gap: 4px;
          margin-top: 12px;
        }
        .heat-46820-legend i {
          width: 12px;
          height: 12px;
          border-radius: 3px;
        }
        .heat-46820-legend i:nth-child(2) {
          background: #0e4429;
        }
        .heat-46820-legend i:nth-child(3) {
          background: #006d32;
        }
        .heat-46820-legend i:nth-child(4) {
          background: #26a641;
        }
        .heat-46820-legend i:nth-child(5) {
          background: #39d353;
        }
      </style>
    `,
  },
  {
    category: "tailwind",
    background: "bg-gradient-to-br from-emerald-950/40 to-zinc-950",
    iconColor: "#fff",
    content: (
      <div className="w-[400px] rounded-2xl border border-white/10 bg-zinc-900 p-5 text-sm">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-white">Invoice INV-2041</h3>
          <span className="rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-xs font-medium text-emerald-300 ring-1 ring-inset ring-emerald-500/20">
            Paid
          </span>
        </div>
        <dl className="mt-4 divide-y divide-white/10">
          <div className="flex justify-between py-2.5">
            <dt className="text-zinc-400">Billed to</dt>
            <dd className="font-medium text-white">Northwind Labs</dd>
          </div>
          <div className="flex justify-between py-2.5">
            <dt className="text-zinc-400">Issued on</dt>
            <dd className="text-zinc-200">Mar 02, 2026</dd>
          </div>
          <div className="flex justify-between py-2.5">
            <dt className="text-zinc-400">Plan</dt>
            <dd className="text-zinc-200">Team · Annual</dd>
          </div>
          <div className="flex justify-between py-2.5">
            <dt className="text-zinc-400">Payment method</dt>
            <dd className="text-zinc-200">Visa ending in 4242</dd>
          </div>
          <div className="flex items-center justify-between pt-3">
            <dt className="font-medium text-zinc-200">Total</dt>
            <dd className="text-lg font-semibold text-white">$1,248.00</dd>
          </div>
        </dl>
      </div>
    ),
  },
];
