import { QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { queryClient } from "./lib/queryClient";
import { Suspense } from "react";
import AppRoutes from "./AppRoutes";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Suspense fallback={null}>
          <AppRoutes />
        </Suspense>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
