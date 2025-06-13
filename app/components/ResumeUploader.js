"use client";

import { useState } from "react";

export default function ResumeUploader() {
  const [parsedData, setParsedData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleFileUpload = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setLoading(true);
    setError("");
    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("/api/parse-resume", {
        method: "POST",
        body: formData,
      });

      const json = await res.json();
      if (json.error) {
        setError("Error parsing resume");
        console.error("Affinda error:", json.error);
      } else {
        setParsedData(json.data);
      }
    } catch (err) {
      setError("Upload failed");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h2 className="text-xl font-bold mb-4">Upload Resume</h2>
      <input
        type="file"
        accept=".pdf,.doc,.docx"
        onChange={handleFileUpload}
        className="mb-4"
      />
      {loading && <p>Parsing...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {parsedData && (
        <div className="bg-gray-100 p-4 rounded mt-4">
          <h3 className="font-semibold mb-2">Parsed Data:</h3>
          <pre className="text-sm overflow-auto max-h-[500px]">
            {JSON.stringify(parsedData, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
}
