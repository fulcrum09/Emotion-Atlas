"use client";

import { useState } from "react";
import { bodyRegions } from "../data/emotions";

export function BodyTool() {
  const [selectedId, setSelectedId] = useState("chest");
  const selected = bodyRegions.find((region) => region.id === selectedId) ?? bodyRegions[0];
  return (
    <section className="body-tool tool-panel">
      <div className="body-map" aria-label="Select a body region">
        <div className="figure-head" />
        <div className="figure-body" />
        {bodyRegions.filter((region) => region.id !== "whole").map((region) => (
          <button key={region.id} className={`body-pin pin-${region.id} ${region.id === selectedId ? "active" : ""}`} onClick={() => setSelectedId(region.id)}>
            <span>{region.label}</span>
          </button>
        ))}
        <button className={`whole-body-button ${selectedId === "whole" ? "active" : ""}`} onClick={() => setSelectedId("whole")}>Whole body</button>
      </div>
      <article className="body-detail">
        <span className="detail-label">Selected region · {selected.note}</span>
        <h2>{selected.label}</h2>
        <p>Emotions may be described through sensations in this area. These experiences vary from person to person.</p>
        <div className="body-columns">
          <div><h3>Common descriptions</h3>{selected.sensations.map((item) => <span className="large-tag" key={item}>{item}</span>)}</div>
          <div><h3>Often named alongside</h3>{selected.emotions.map((item) => <span className="large-tag muted" key={item}>{item}</span>)}</div>
        </div>
        <aside className="safety-note"><strong>A language guide, not a diagnosis.</strong> New, severe, or persistent physical symptoms deserve appropriate medical attention.</aside>
      </article>
    </section>
  );
}
