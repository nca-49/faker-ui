"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

type RandomData = {
  firstName: string;
};

const Root = () => {
  const [data, setData] = useState<RandomData | null>(null);
  const [copied, setCopied] = useState(false);

  const fetchRandomData = async () => {
    const res = await fetch("/api/person");
    const result = await res.json();
    const randomItem = result[Math.floor(Math.random() * result.length)];
    setData(randomItem);
    setCopied(false);
  };

  const copyToClipboard = () => {
    if (data) {
      const text = `Nom: ${data.firstName}`;
      navigator.clipboard
        .writeText(text)
        .then(() => setCopied(true))
        .catch((err) =>
          console.error("Erreur lors de la copie dans le presse-papiers :", err)
        );
    }
  };

  return (
    <div className="rootStyle">
      <div className="section">
        <h1>Welcome to Kepler</h1>
        <p>Generate data based on Faker for testing and development.</p>
        <Link href={"/home"}>
          <Button>Explore</Button>
        </Link>
      </div>
      <div className="section">
        <Image
          src="/assets/images/Asset1.svg"
          fill
          alt="space"
          priority={true}
        />
      </div>
      <div className="section">
        <Button
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
        </Button>
        <p>
          {data && (
            <div style={{ marginTop: "20px" }}>
              <p>
                <strong>Nom :</strong> {data.firstName}
              </p>

              <Button
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
              </Button>
            </div>
          )}
        </p>
      </div>
    </div>
  );
};

export default Root;
