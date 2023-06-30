import React from 'react'
import axios from 'axios';
import { useState } from 'react';
function AiPage() {
    const [prompt, setPrompt] = useState("");
    const [response, setResponse] = useState("");
   const HTTP = "http://localhost:8020/chat";
    const handleSubmit = (e) => {
      e.preventDefault();
  
      // Send a request to the server with the prompt
      axios
        .post(`${HTTP}  ` , {prompt})
        .then((res) => {
          // Update the response state with the server's response
          setResponse(res.data);
        })
        .catch((err) => {
          console.error(err);
        });
    };
  
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
        <p>{response}</p>
      </div>
    );
}

export default AiPage