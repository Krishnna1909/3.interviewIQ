import Anthropic from "@anthropic-ai/sdk";

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

export const askAi = async (messages) => {
  try {
    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      throw new Error("Messages array is empty.");
    }

    // ✅ Proper formatting (Step 5)
    const formattedMessages = messages.map(msg => ({
      role: msg.role === "assistant" ? "assistant" : "user",
      content: msg.content,
    }));

    const response = await anthropic.messages.create({
      model: "claude-3-haiku-20240307",
      max_tokens: 500,
      messages: formattedMessages, // ✅ FIXED
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