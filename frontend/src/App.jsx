
import { useEffect, useState } from "react";

function App() {
  const [backendMessage, setBackendMessage] = useState(
    "Connecting to backend..."
  );

  useEffect(() => {
    fetch("http://127.0.0.1:8000/")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Backend request failed");
        }
        return response.json();
      })
      .then((data) => {
        setBackendMessage(data.message);
      })
      .catch((error) => {
        console.error(error);
        setBackendMessage("Unable to connect to backend");
      });
  }, []);

  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1>ChatSphere</h1>
      <h2>AI Chatbot Application</h2>

      <p>Backend Response:</p>

      <h3>{backendMessage}</h3>
    </div>
  );
}

export default App;
