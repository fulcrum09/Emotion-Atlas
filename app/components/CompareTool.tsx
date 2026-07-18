"use client";

import { useState } from "react";
import { comparisons } from "../data/emotions";

export function CompareTool() {
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const item = comparisons[index];
  const left = flipped ? { label: item.b, text: item.bText } : { label: item.a, text: item.aText };
  const right = flipped ? { label: item.a, text: item.aText } : { label: item.b, text: item.bText };
  return (
    <section className="tool-panel compare-tool">
      <label className="select-label">Choose a pair to compare
        <select value={index} onChange={(event) => { setIndex(Number(event.target.value)); setFlipped(false); }}>
          {comparisons.map((pair, i) => <option key={pair.a + pair.b} value={i}>{pair.a} vs. {pair.b}</option>)}
        </select>
      </label>
      <div className="comparison-grid">
        <article><span className="comparison-letter">A</span><h2>{left.label}</h2><p>{left.text}</p></article>
        <button className="swap-button" onClick={() => setFlipped(!flipped)} aria-label="Swap comparison order">⇄</button>
        <article><span className="comparison-letter">B</span><h2>{right.label}</h2><p>{right.text}</p></article>
      </div>
      <div className="key-difference"><span>The key distinction</span><p>{item.difference}</p></div>
    </section>
  );
}
