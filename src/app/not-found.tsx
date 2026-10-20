import Link from "next/link";

import { Button } from "@/components/ui/button";

import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main id="main-content" className="relative flex flex-1 min-h-screen items-center justify-center overflow-hidden px-4">
      <div className="aurora-a absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full" aria-hidden="true" />
      <div className="relative flex flex-col items-center gap-5 text-center">
        <span className="font-mono text-7xl sm:text-9xl font-bold gradient-text">404</span>
        <h1 className="font-mono text-xl sm:text-2xl font-semibold text-foreground">Page not found</h1>
        <p className="max-w-sm text-muted-foreground">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Button asChild size="lg" className="h-11 gap-2 px-6">
          <Link href="/">
            <ArrowLeft />
            Back to Home
          </Link>
        </Button>
      </div>
    </main>
  );
}
