"use client";

import { useState } from "react";
import { intensityFamilies } from "../data/emotions";

const levelNames = ["Mild", "Noticeable", "Strong", "Intense", "Overwhelming"];

export function IntensityTool() {
  const [familyIndex, setFamilyIndex] = useState(0);
  const [level, setLevel] = useState(2);
  const [copied, setCopied] = useState(false);
  const family = intensityFamilies[familyIndex];
  const copy = async () => {
    await navigator.clipboard?.writeText(`${family.name} · ${levelNames[level]} · ${family.levels[level].join(" / ")}`);
    setCopied(true); setTimeout(() => setCopied(false), 1400);
  };
  return (
    <section className="intensity-tool tool-panel" style={{ "--accent": family.color } as React.CSSProperties}>
      <div className="family-tabs" role="tablist" aria-label="Emotion family">
        {intensityFamilies.map((item, index) => <button role="tab" aria-selected={index === familyIndex} className={index === familyIndex ? "active" : ""} key={item.name} onClick={() => setFamilyIndex(index)}>{item.name}</button>)}
      </div>
      <div className="intensity-display">
        <div className="intensity-count">0{level + 1}</div>
        <span className="detail-label">{family.name} · {levelNames[level]}</span>
        <h2>{family.levels[level].join(" / ")}</h2>
        <input aria-label="Emotional intensity" type="range" min="0" max="4" step="1" value={level} onChange={(event) => setLevel(Number(event.target.value))} />
        <div className="range-labels"><span>Mild</span><span>Overwhelming</span></div>
        <div className="level-scale">{family.levels.map((words, index) => <button key={words[0]} className={index === level ? "active" : ""} onClick={() => setLevel(index)}><span>0{index + 1}</span>{words[0]}</button>)}</div>
        <div className="tool-actions"><button onClick={copy}>{copied ? "Copied" : "Copy selection"}</button><button onClick={() => setLevel(2)}>Reset</button></div>
      </div>
    </section>
  );
}
