import type { Metadata } from "next";
import "./globals.css";

const repositoryName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
const isUserOrOrganizationSite = repositoryName.endsWith(".github.io");
const assetBase = process.env.GITHUB_ACTIONS && !isUserOrOrganizationSite
  ? `/${repositoryName}`
  : "";

export const metadata: Metadata = {
  title: {
    default: "Emotion Atlas — Find the Words for What You Feel",
    template: "%s | Emotion Atlas",
  },
  description:
    "Explore emotional vocabulary, compare similar feelings, notice common body signals, and understand emotional intensity.",
  icons: {
    icon: `${assetBase}/favicon.svg`,
    shortcut: `${assetBase}/favicon.svg`,
  },
  openGraph: {
    title: "Emotion Atlas",
    description:
      "A quiet, interactive guide to emotional vocabulary, body signals, and intensity.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
