"use client";

import dynamic from "next/dynamic";

const OnboardingApp = dynamic(
  () => import("../components/OnboardingApp"),
  { ssr: false }
);

export default function Page() {
  return <OnboardingApp />;
}
