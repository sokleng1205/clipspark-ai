import OpenAI from "openai";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export const generateHighlightsFromFrames = async (frames: string[], audioPeaks: number[]) => {
  const res = await openai.chat.completions.create({
    model: "gpt-4o",
    messages: [
      {
        role: "system",
        content: "You are a viral short‑form video editor. Detect 15s,30s,60s highlight timestamps from frames/audio peaks for TikTok/Reels/Shorts. Return JSON {highlights:[{start,end,duration,type}]}. Types: gaming, reaction, funny, emotional, action.",
      },
      { role: "user", content: JSON.stringify({ frames, audioPeaks }) },
    ],
    response_format: { type: "json_object" },
  });
  return JSON.parse(res.choices[0].message.content!);
};

export const generateWhisperCaptions = async (audioFile: Buffer) => {
  const transcription = await openai.audio.transcriptions.create({
    file: audioFile,
    model: "whisper-1",
    response_format: "verbose_json",
  });
  return transcription;
};

export const generateViralText = async (clipType: string) => {
  const res = await openai.chat.completions.create({
    model: "gpt-4o",
    messages: [
      {
        role: "system",
        content: "Generate viral TikTok/Reels hooks, title, caption, hashtags for gaming/short clips. Return JSON {hook,title,caption,hashtags[]}.",
      },
      { role: "user", content: `Clip type: ${clipType}` },
    ],
    response_format: { type: "json_object" },
  });
  return JSON.parse(res.choices[0].message.content!);
};
