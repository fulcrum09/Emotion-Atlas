import type { Metadata } from "next";
import { Explorer } from "./components/Explorer";
import { SiteShell } from "./components/SiteShell";

export const metadata: Metadata = {
  title: "Emotion Explorer",
  description:
    "Explore emotional families, related words, common situations, and the subtle differences between feelings.",
};

export default function Home() {
  return (
    <SiteShell>
      <main>
        <section className="hero home-hero">
          <div className="eyebrow"><span /> A clearer emotional vocabulary</div>
          <h1>Find the words for<br /><em>what you feel.</em></h1>
          <p className="hero-copy">
            Emotions rarely arrive with neat labels. Explore related words,
            notice their intensity, and find language that feels closer to
            your experience.
          </p>
          <div className="hero-note">
            <span className="note-number">01</span>
            <p>Choose an emotional family below. This is a language guide, not an assessment.</p>
          </div>
        </section>
        <Explorer />
      </main>
    </SiteShell>
  );
}
