import type { Metadata } from "next";
import { IntensityTool } from "../components/IntensityTool";
import { SiteShell } from "../components/SiteShell";

export const metadata: Metadata = { title: "Emotion Intensity", description: "Explore how emotional words change from mild to overwhelming intensity." };
export default function IntensityPage() { return <SiteShell><main><section className="sub-hero"><div className="eyebrow"><span /> A spectrum, not a switch</div><h1>How strong does<br /><em>the feeling feel?</em></h1><p>Move across the scale to find words that describe not only the emotional family, but also its intensity.</p></section><IntensityTool /></main></SiteShell>; }
