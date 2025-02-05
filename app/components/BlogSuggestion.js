import { useState } from "react";

const BlogSuggestion = () => {
  const [prompt, setPrompt] = useState("");
  const [suggestion, setSuggestion] = useState("");

  const generateSuggestion = async () => {
    const response = await fetch("/api/generate-suggestion", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt }),
    });
    const data = await response.json();
    setSuggestion(data.suggestion);
  };

  return (
    <div>
      <input
        type="text"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Enter a topic"
      />
      <button onClick={generateSuggestion}>Generate Suggestion</button>
      {suggestion && <p>{suggestion}</p>}
    </div>
  );
};

export default BlogSuggestion;
