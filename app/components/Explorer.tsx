"use client";

import { useMemo, useState } from "react";
import { emotions } from "../data/emotions";

export function Explorer() {
  const [selectedId, setSelectedId] = useState("anxiety");
  const [query, setQuery] = useState("");
  const [level, setLevel] = useState(2);
  const selected = emotions.find((item) => item.id === selectedId) ?? emotions[0];
  const filtered = useMemo(() => emotions.filter((item) =>
    `${item.label} ${item.family} ${item.words.flat().join(" ")}`.toLowerCase().includes(query.toLowerCase())
  ), [query]);

  return (
    <section className="explorer section-wrap" aria-labelledby="explorer-title">
      <div className="section-heading">
        <div><span className="section-number">01</span><p className="kicker">Explore the atlas</p></div>
        <h2 id="explorer-title">Start with the<br />closest family.</h2>
      </div>
      <label className="search-field">
        <span>Search a word or feeling</span>
        <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Try “restless” or “heavy”" />
      </label>
      <div className="explorer-layout">
        <div className="emotion-list" role="list" aria-label="Emotional families">
          {filtered.map((emotion, index) => (
            <button key={emotion.id} className={selected.id === emotion.id ? "emotion-row active" : "emotion-row"} onClick={() => { setSelectedId(emotion.id); setLevel(2); }}>
              <span className="emotion-index">{String(index + 1).padStart(2, "0")}</span>
              <span><strong>{emotion.label}</strong><small>{emotion.family}</small></span>
              <span className="row-arrow">↗</span>
            </button>
          ))}
          {filtered.length === 0 && <p className="empty-state">No close match yet. Try a broader word.</p>}
        </div>
        <article className="emotion-detail" style={{ "--accent": selected.color } as React.CSSProperties}>
          <div className="detail-label">Current family</div>
          <h3>{selected.label}</h3>
          <p className="detail-description">{selected.description}</p>
          <div className="level-picker">
            <div className="mini-heading"><span>Intensity</span><span>{level + 1} / 5</span></div>
            <div className="level-buttons">
              {selected.words.map((_, index) => <button key={index} aria-label={`Intensity ${index + 1}`} className={index === level ? "active" : ""} onClick={() => setLevel(index)} />)}
            </div>
            <div className="word-pair">{selected.words[level].map((word) => <span key={word}>{word}</span>)}</div>
          </div>
          <div className="detail-columns">
            <div><h4>Often appears around</h4><ul>{selected.situations.map((item) => <li key={item}>{item}</li>)}</ul></div>
            <div><h4>Sometimes described as</h4><div className="signal-tags">{selected.signals.map((item) => <span key={item}>{item}</span>)}</div></div>
          </div>
        </article>
      </div>
    </section>
  );
}
