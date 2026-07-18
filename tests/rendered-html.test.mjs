import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const root = new URL("../out/", import.meta.url);

for (const [path, title] of [
  ["index.html", "Emotion Explorer"],
  ["compare/index.html", "Compare Emotions"],
  ["body-signals/index.html", "Body Signals"],
  ["intensity/index.html", "Emotion Intensity"],
]) {
  test(`${path} is exported with content and attribution`, async () => {
    const html = await readFile(new URL(path, root), "utf8");
    assert.match(html, new RegExp(title, "i"));
    assert.match(html, /https:\/\/www\.pionamood\.com\//);
    assert.match(html, /psychology-related knowledge presented on this website/i);
    assert.doesNotMatch(html, /codex-preview|react-loading-skeleton/i);
  });
}
