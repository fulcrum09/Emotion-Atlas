import type { Metadata } from "next";
import { CompareTool } from "../components/CompareTool";
import { SiteShell } from "../components/SiteShell";

export const metadata: Metadata = { title: "Compare Emotions", description: "Compare easily confused emotions and understand the distinction between their meanings." };
export default function ComparePage() { return <SiteShell><main><section className="sub-hero"><div className="eyebrow"><span /> Compare emotional language</div><h1>Close in meaning.<br /><em>Different in experience.</em></h1><p>Place two commonly confused feelings side by side and notice the distinction hidden between them.</p></section><CompareTool /></main></SiteShell>; }
