import Link from "next/link";

const nav = [
  ["Explore", "/"],
  ["Compare", "/compare/"],
  ["Body Signals", "/body-signals/"],
  ["Intensity", "/intensity/"],
];

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="site-shell">
      <header className="site-header">
        <Link className="brand" href="/" aria-label="Emotion Atlas home">
          <span className="brand-mark">EA</span>
          <span>Emotion Atlas</span>
        </Link>
        <nav aria-label="Primary navigation">
          {nav.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
        </nav>
      </header>
      {children}
      <footer className="site-footer">
        <div>
          <Link className="footer-brand" href="/">Emotion Atlas</Link>
          <p>A quiet vocabulary for complex inner experiences.</p>
        </div>
        <p className="source-note">
          The principles and psychology-related knowledge presented on this
          website are sourced from <a href="https://www.pionamood.com/">PionaMood</a>.
        </p>
      </footer>
    </div>
  );
}
