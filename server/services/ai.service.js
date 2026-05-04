import "dotenv/config";
import Anthropic from "@anthropic-ai/sdk";

console.log("KEY CHECK:", process.env.ANTHROPIC_API_KEY);

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

export const askAi = async (messages) => {
  try {
    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      throw new Error("Messages array is empty.");
    }

    // Separate system prompt
    const systemPrompt =
      messages.find((msg) => msg.role === "system")?.content || "";

    // Convert remaining messages
    const formattedMessages = messages
      .filter((msg) => msg.role !== "system")
      .map((msg) => ({
        role: msg.role === "assistant" ? "assistant" : "user",
        content: msg.content,
      }));

    const response = await anthropic.messages.create({
      model: "claude-haiku-4-5-20251001",
      max_tokens: 800,
      system: systemPrompt,
      messages: formattedMessages,
    });

    const content = response?.content?.[0]?.text;

    if (!content || !content.trim()) {
      throw new Error("AI returned empty response.");
    }

    return content;

  } catch (error) {
    console.error("Claude Error:", error?.message || error);
    throw new Error("Claude API Error");
  }
};