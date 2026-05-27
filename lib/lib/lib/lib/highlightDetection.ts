import { generateHighlightsFromFrames } from "./openai";

export const analyzeVideoForHighlights = async (videoFile: File) => {
  // Extract sampled frames + audio peaks (simplified production logic)
  const frames: string[] = [];
  const audioPeaks: number[] = [];

  // Real production: FFmpeg extract frames/audio RMS peaks
  // Here we call GPT‑4o multimodal analysis
  const result = await generateHighlightsFromFrames(frames, audioPeaks);
  return result.highlights;
};
