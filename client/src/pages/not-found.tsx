import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background">
      <Card className="w-full max-w-md mx-4 bg-white dark:bg-gray-900 border-gray-200 dark:border-white/10">
        <CardContent className="pt-6">
          <div className="flex mb-4 gap-2 items-center">
            <AlertCircle className="h-8 w-8 text-primary" />
            <h1 className="text-2xl font-bold text-foreground">Page Not Found</h1>
          </div>

          <p className="mt-4 text-sm text-muted-foreground">
            This page doesn't exist. It may have been moved or removed.
          </p>

          <Link href="/">
            <Button className="mt-6 bg-primary hover:bg-primary/90 text-white">
              Back to Home
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
