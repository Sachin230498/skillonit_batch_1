import React, { useState } from "react";
import axios from "axios";

const RefreshToken = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResponse(null);
    setError(null);

    try {
      const res = await axios.post(
        "http://api.batracards.com/Auth/RefreshToken",
        {}, // empty body
        {
          params: {
            "login.UserName": username,
            "login.Password": password,
          },
          headers: {
            accept: "*/*",
          },
        }
      );

      setResponse(res.data);
    } catch (err) {
      // Enhanced error handling
      if (err.response) {
        // Server responded with a status outside 2xx
        console.error("Response Error:", err.response);
        setError({
          message: err.message,
          status: err.response.status,
          headers: err.response.headers,
          data: err.response.data,
        });
      } else if (err.request) {
        // Request was made but no response received
        console.error("Request Error:", err.request);
        setError({
          message: "No response received from server",
          request: err.request,
        });
      } else {
        // Something else happened
        console.error("Other Error:", err.message);
        setError({ message: err.message });
      }
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "400px" }}>
      <h2>Refresh Token API</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username: </label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div style={{ marginTop: "10px" }}>
          <label>Password: </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" style={{ marginTop: "15px" }}>
          Refresh Token
        </button>
      </form>

      {response && (
        <div style={{ marginTop: "20px" }}>
          <h4>Response:</h4>
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </div>
      )}

      {error && (
        <div style={{ marginTop: "20px", color: "red" }}>
          <h4>Error Details:</h4>
          <pre>{JSON.stringify(error, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default RefreshToken;
