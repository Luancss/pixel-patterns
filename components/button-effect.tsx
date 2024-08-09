import Link from "next/link";

export const ButtonEffect = ({ href }: { href?: string }) => {
  return (
    <Link href={href ?? "/"} className="relative inline-flex h-12 active:scale-95 transistion overflow-hidden rounded-lg p-[1px] focus:outline-none">
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#eab308_0%,#696132_50%,#eab308_100%)]"></span>
      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-7 text-base font-bold text-white backdrop-blur-3xl gap-3 undefined">
        <svg
          className="mr-2 text-white"
          stroke-linejoin="round"
          stroke-linecap="round"
          stroke-width="2"
          stroke="currentColor"
          fill="none"
          viewBox="0 0 24 24"
          height="24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
          <path d="M9 18c-4.51 2-5-2-7-2"></path>
        </svg>
        <span className="text-white">Star on Github</span>
        <span className="flex items-center ml-4 group-hover:text-yellow-500 transition-colors duration-200 ease-in-out">
          <svg
            className="text-yellow-500"
            stroke-linejoin="round"
            stroke-linecap="round"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            viewBox="0 0 24 24"
            height="24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
          </svg>
          <span className="text-white ml-2">612</span>
        </span>
      </span>
    </Link>
  );
};

export default ButtonEffect;
