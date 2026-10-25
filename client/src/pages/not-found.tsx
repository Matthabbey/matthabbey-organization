import { useEffect } from "react";
import { Link } from "wouter";
import { AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { site } from "@/lib/site";

export default function NotFound() {
  useEffect(() => {
    const previous = document.title;
    document.title = `Page not found | ${site.name}`;
    return () => {
      document.title = previous;
    };
  }, []);

  return (
    <main className="min-h-screen w-full flex items-center justify-center bg-background px-4">
      <Card className="w-full max-w-md bg-card border-border">
        <CardContent className="pt-6">
          <div className="flex mb-4 gap-2 items-center">
            <AlertCircle className="h-8 w-8 text-primary" aria-hidden="true" />
            <h1 className="text-2xl font-bold text-foreground">Page not found</h1>
          </div>

          <p className="mt-4 text-sm text-muted-foreground">
            This page doesn't exist. It may have been moved or removed.
          </p>

          <Button asChild className="mt-6">
            <Link href="/">Back to home</Link>
          </Button>
        </CardContent>
      </Card>
    </main>
  );
}
