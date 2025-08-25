import { useState } from "react";

const UrlShortner = () => {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setShortUrl("");

    if (!url) {
      setError("Please enter a valid URL");
      return;
    }

    try {
      // Replace with your backend API endpoint
      const response = await fetch("http://localhost:3000/api/shorten", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url }),
      });

      if (!response.ok) {
        throw new Error("Failed to shorten URL");
      }

      const data = await response.json();
      setShortUrl(data.shortUrl); // Assuming your backend returns { shortUrl: "shortened_link" }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="url-shortener">
      <form onSubmit={handleSubmit}>
        <input
          type="url"
          placeholder="Enter your URL here"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          required
        />
        <button type="submit">Shorten</button>
      </form>

      {error && <p className="error">{error}</p>}

      {shortUrl && (
        <p>
          Shortened URL:{" "}
          <a href={shortUrl} target="_blank" rel="noreferrer">
            {shortUrl}
          </a>
        </p>
      )}
    </div>
  );
};

export default UrlShortner;
