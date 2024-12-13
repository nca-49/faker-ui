"use client";
import { useState } from "react";

type RandomData = {
  id: string;
  name: string;
  email: string;
  address: string;
};

const Root = () => {
  const [data, setData] = useState<RandomData | null>(null);
  const [copied, setCopied] = useState(false);

  // Fonction pour récupérer une donnée aléatoire
  const fetchRandomData = async () => {
    const res = await fetch("/api");
    const result = await res.json();
    const randomItem = result[Math.floor(Math.random() * result.length)];
    setData(randomItem);
    setCopied(false); // Réinitialise l'état de copie
  };

  // Fonction pour copier les données dans le presse-papiers
  const copyToClipboard = () => {
    if (data) {
      const text = `Nom: ${data.name}\nEmail: ${data.email}\nAdresse: ${data.address}`;
      navigator.clipboard
        .writeText(text)
        .then(() => setCopied(true))
        .catch((err) =>
          console.error("Erreur lors de la copie dans le presse-papiers :", err)
        );
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Donnée Aléatoire</h1>
      <button
        onClick={fetchRandomData}
        style={{
          padding: "10px 20px",
          backgroundColor: "#0070f3",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          margin: "10px",
        }}
      >
        Générer une donnée
      </button>

      {data && (
        <div style={{ marginTop: "20px" }}>
          <p>
            <strong>Nom :</strong> {data.name}
          </p>
          <p>
            <strong>Email :</strong> {data.email}
          </p>
          <p>
            <strong>Adresse :</strong> {data.address}
          </p>

          <button
            onClick={copyToClipboard}
            style={{
              padding: "10px 20px",
              backgroundColor: copied ? "#28a745" : "#0070f3",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              marginTop: "10px",
            }}
          >
            {copied ? "Copié !" : "Copier dans le presse-papiers"}
          </button>
        </div>
      )}
    </div>
  );
};

export default Root;
