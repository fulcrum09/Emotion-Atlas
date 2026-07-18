export type Emotion = {
  id: string;
  label: string;
  family: string;
  description: string;
  color: string;
  words: string[][];
  situations: string[];
  signals: string[];
};

export const emotions: Emotion[] = [
  {
    id: "anxiety", label: "Anxiety", family: "Uncertainty & threat", color: "#e8845c",
    description: "A future-facing feeling that appears when something important seems uncertain, risky, or difficult to control.",
    words: [["Uneasy", "Concerned"], ["Worried", "Nervous"], ["Anxious", "Restless"], ["Distressed", "Alarmed"], ["Panicked", "Terrified"]],
    situations: ["Waiting for an uncertain outcome", "Anticipating a difficult conversation", "Feeling unable to predict what comes next"],
    signals: ["Tight chest", "Shallow breathing", "Restless energy", "Racing thoughts"],
  },
  {
    id: "sadness", label: "Sadness", family: "Loss & disappointment", color: "#7289ad",
    description: "A response to loss, disappointment, disconnection, or the recognition that something meaningful has changed.",
    words: [["Pensive", "Blue"], ["Disappointed", "Down"], ["Sad", "Heavy"], ["Sorrowful", "Grieving"], ["Devastated", "Despairing"]],
    situations: ["Missing a person, place, or past version of life", "A hope not working out", "Feeling disconnected from meaning"],
    signals: ["Heaviness", "Low energy", "Tearfulness", "Slower movement"],
  },
  {
    id: "anger", label: "Anger", family: "Boundaries & unfairness", color: "#c45c4d",
    description: "An activating feeling that can signal obstruction, unfairness, disrespect, or a boundary that matters to you.",
    words: [["Bothered", "Impatient"], ["Annoyed", "Irritated"], ["Frustrated", "Angry"], ["Furious", "Outraged"], ["Enraged", "Incensed"]],
    situations: ["A boundary being ignored", "Repeated obstacles or interruptions", "Seeing something as unfair"],
    signals: ["Clenched jaw", "Heat in the face", "Tense hands", "Faster heartbeat"],
  },
  {
    id: "shame", label: "Shame", family: "Self-image & belonging", color: "#9c7698",
    description: "A painful self-conscious feeling tied to how you see yourself or imagine you are seen by others.",
    words: [["Self-conscious", "Awkward"], ["Embarrassed", "Exposed"], ["Ashamed", "Inadequate"], ["Humiliated", "Disgraced"], ["Worthless", "Unlovable"]],
    situations: ["Feeling judged after a mistake", "Believing you failed an important standard", "Wanting to hide part of yourself"],
    signals: ["Looking away", "Warm face", "Collapsed posture", "Urge to withdraw"],
  },
  {
    id: "loneliness", label: "Loneliness", family: "Connection & belonging", color: "#617e7a",
    description: "The felt gap between the connection you have and the connection you want—not simply the absence of people.",
    words: [["Apart", "Unnoticed"], ["Left out", "Distant"], ["Lonely", "Disconnected"], ["Isolated", "Abandoned"], ["Forsaken", "Desolate"]],
    situations: ["Being around others but not feeling understood", "Missing a close relationship", "Feeling outside a group"],
    signals: ["Hollow feeling", "Heaviness", "Social hesitation", "Longing for contact"],
  },
  {
    id: "overwhelm", label: "Overwhelm", family: "Demand & capacity", color: "#d09b4c",
    description: "The sense that current demands exceed the attention, energy, time, or emotional capacity available to meet them.",
    words: [["Busy", "Stretched"], ["Pressured", "Scattered"], ["Overwhelmed", "Flooded"], ["Overloaded", "Frantic"], ["Paralyzed", "Consumed"]],
    situations: ["Too many demands arriving at once", "A task feeling larger than your capacity", "Having no room to recover"],
    signals: ["Mental fog", "Tense shoulders", "Difficulty prioritizing", "Urge to escape"],
  },
];

export const comparisons = [
  { a: "Anxious", b: "Overwhelmed", aText: "Concern about a possible threat or uncertain outcome.", bText: "A sense that current demands exceed available capacity.", difference: "Anxiety centers on what might happen; overwhelm centers on how much is already being carried." },
  { a: "Lonely", b: "Isolated", aText: "A subjective longing for more meaningful connection.", bText: "Being separated from people or support, physically or emotionally.", difference: "Loneliness is an inner experience; isolation describes distance or separation, though the two can occur together." },
  { a: "Guilty", b: "Ashamed", aText: "Discomfort about something you did or failed to do.", bText: "A painful judgment about who you believe you are.", difference: "Guilt often says “I did something wrong”; shame often says “There is something wrong with me.”" },
  { a: "Angry", b: "Frustrated", aText: "An activated response to perceived unfairness, harm, or a crossed boundary.", bText: "Tension that arises when progress is blocked or effort does not produce the expected result.", difference: "Anger can focus on violation; frustration usually focuses on obstruction." },
  { a: "Tired", b: "Emotionally drained", aText: "A broad need for physical or mental rest.", bText: "Depletion associated with sustained emotional effort, vigilance, or interpersonal demand.", difference: "Tiredness can have many causes; emotional drain points specifically to the cost of carrying feelings or relationships." },
];

export const bodyRegions = [
  { id: "head", label: "Head", note: "Thought & attention", sensations: ["Racing thoughts", "Pressure", "Mental fog", "Difficulty focusing"], emotions: ["Anxiety", "Overwhelm", "Confusion"] },
  { id: "jaw", label: "Jaw", note: "Holding & restraint", sensations: ["Clenching", "Tightness", "Grinding", "Facial tension"], emotions: ["Anger", "Stress", "Frustration"] },
  { id: "chest", label: "Chest", note: "Activation & heaviness", sensations: ["Tightness", "Heaviness", "Rapid heartbeat", "Shallow breathing"], emotions: ["Anxiety", "Grief", "Fear"] },
  { id: "stomach", label: "Stomach", note: "Uncertainty & anticipation", sensations: ["Fluttering", "Sinking", "Nausea", "Knots"], emotions: ["Nervousness", "Dread", "Excitement"] },
  { id: "shoulders", label: "Shoulders", note: "Load & readiness", sensations: ["Raised shoulders", "Aching", "Stiffness", "Feeling weighed down"], emotions: ["Pressure", "Overwhelm", "Responsibility"] },
  { id: "hands", label: "Hands", note: "Action & activation", sensations: ["Clenching", "Trembling", "Restlessness", "Coldness"], emotions: ["Anger", "Fear", "Anticipation"] },
  { id: "whole", label: "Whole body", note: "Energy & capacity", sensations: ["Heaviness", "Restlessness", "Numbness", "Low energy"], emotions: ["Sadness", "Stress", "Emotional fatigue"] },
];

export const intensityFamilies = [
  { name: "Anger", color: "#c45c4d", levels: [["Bothered", "Impatient"], ["Annoyed", "Irritated"], ["Frustrated", "Angry"], ["Furious", "Outraged"], ["Enraged", "Incensed"]] },
  { name: "Anxiety", color: "#e8845c", levels: [["Uneasy", "Concerned"], ["Worried", "Nervous"], ["Anxious", "Restless"], ["Distressed", "Alarmed"], ["Panicked", "Terrified"]] },
  { name: "Sadness", color: "#7289ad", levels: [["Pensive", "Blue"], ["Disappointed", "Down"], ["Sad", "Heavy"], ["Sorrowful", "Grieving"], ["Devastated", "Despairing"]] },
  { name: "Loneliness", color: "#617e7a", levels: [["Apart", "Unnoticed"], ["Left out", "Distant"], ["Lonely", "Disconnected"], ["Isolated", "Abandoned"], ["Forsaken", "Desolate"]] },
];
