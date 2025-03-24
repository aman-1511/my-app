
const API_KEY = "API_KEY_HERE";
const API_ENDPOINT = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent";


export const sendMessageToAPI = async (message: string): Promise<string> => {
  try {
    const response = await fetch(
      `${API_ENDPOINT}?key=${API_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: `Provide a medium-length, well-structured response (not too long, not too short) with proper formatting:

${message}

Guidelines for your response:
- Aim for a medium-length response (3-5 paragraphs maximum)
- Be concise and focus on the most important information
- Use bullet points for lists (start lines with -)
- Use numbered lists where appropriate (1., 2., etc.)
- Use *text* for italic emphasis and **text** for strong emphasis
- Use # for main headings and ## for subheadings
- Use \`\`\` for code blocks or examples`,
                },
              ],
            },
          ],
        }),
      }
    );
    
    const data = await response.json();
    const botReply = data?.candidates?.[0]?.content?.parts?.[0]?.text || 
      "I am here to help!";
      
    return botReply;
  } catch (error) {
    console.error("Error fetching response:", error);
    throw new Error("Failed to get response from API");
  }
}; 