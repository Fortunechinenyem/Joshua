import { useState } from "react";

const VoiceSearch = () => {
  const [query, setQuery] = useState("");

  const startVoiceSearch = () => {
    const recognition = new (window.SpeechRecognition ||
      window.webkitSpeechRecognition)();
    recognition.lang = "en-US";
    recognition.onresult = (event) => {
      setQuery(event.results[0][0].transcript);
    };
    recognition.start();
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={startVoiceSearch}>🎤</button>
    </div>
  );
};

export default VoiceSearch;
