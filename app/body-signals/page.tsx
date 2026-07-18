import type { Metadata } from "next";
import { BodyTool } from "../components/BodyTool";
import { SiteShell } from "../components/SiteShell";

export const metadata: Metadata = { title: "Body Signals", description: "Explore common ways people describe the physical sensations that can accompany emotions." };
export default function BodySignalsPage() { return <SiteShell><main><section className="sub-hero"><div className="eyebrow"><span /> The language of sensation</div><h1>Notice where a feeling<br /><em>seems to land.</em></h1><p>Explore common words people use when emotions are felt through the body. Experiences differ, and no sensation has only one meaning.</p></section><BodyTool /></main></SiteShell>; }
