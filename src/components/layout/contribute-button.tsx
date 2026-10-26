import Link from "next/link";

import { Button } from "@/components/ui/button";

export function ContributeButton() {
  return (
    <Button
      asChild
      className="bg-yellow-950/30 hover:bg-yellow-950/10 text-yellow-500 px-4 py-2 sm:px-6 sm:py-3"
    >
      <Link href="/contribute">Contribute to this project! 💡</Link>
    </Button>
  );
}
