import { Metadata } from "next";
import type { PropsWithChildren } from "react";

export const metadata: Metadata = {
  title: {
    template: "%s | DST - Digital Smart Tree",
    default: "DST - Digital Smart Tree",
  },
  description:
    "Digital Smart Tree ERP System",
};


export default function LandingLayout({ children }: PropsWithChildren) {

  return <>{children}</>;
}
