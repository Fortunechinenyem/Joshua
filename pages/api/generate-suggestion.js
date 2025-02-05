import OpenAI from "openai";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export default async function handler(req, res) {
  const { prompt } = req.body;

  const response = await openai.completions.create({
    model: "text-davinci-003",
    prompt: `Generate a blog post idea about ${prompt}`,
    max_tokens: 50,
  });

  res.status(200).json({ suggestion: response.choices[0].text });
}
