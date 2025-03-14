"use client";

import { PropsWithChildren } from "react";
import { usePageViewTracking } from "@/hooks/usePageViewTracking";

export function AnalyticsProvider({ children }: PropsWithChildren) {
  usePageViewTracking();

  return <>{children}</>;
}
