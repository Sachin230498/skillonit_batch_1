async function refreshToken() {
  const username = "mohan";
  const password = "mohan@123";

  // ✅ Wrap the URL in backticks for template literals
  const url = `https://api.batracards.com/Auth/RefreshToken?login.UserName=${username}&login.Password=${password}`;

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Accept": "*/*",  // ✅ should be */* not just "/"
        // If API requires:
        // "Content-Type": "application/json"
      }
      // No body since credentials are passed in query params
    });

    if (!response.ok) {
      // ✅ Use backticks for template string
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log("Refresh token response:", data);
    return data;

  } catch (err) {
    console.error("Error while refreshing token:", err);
    throw err;
  }
}

// Call the function
refreshToken();
