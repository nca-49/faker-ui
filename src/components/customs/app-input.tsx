/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { getOneData } from "@/lib/fakerFetch";
// import { user } from "@/types/user";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { useRef, useState } from "react";

export function AppInput({
  dataClass = "person",
  dataType = "bio",
}: {
  dataClass?: string;
  dataType?: string;
  length?: number;
}) {
  const [data, setData] = useState<any>(null);
  const [copied, setCopied] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const fetchRandomData = async () => {
    // const randomItem =
    //   resultatJson[Math.floor(Math.random() * resultatJson.length)];
    const randomItem = await getOneData(dataClass);
    setData(randomItem[0]);
    setCopied(false);
  };

  const copyToClipboard = () => {
    if (inputRef.current) {
      const value = inputRef.current.value;
      navigator.clipboard
        .writeText(value)
        .then(() => setCopied(true))
        .catch((err) =>
          console.error("Erreur lors de la copie dans le presse-papiers :", err)
        );
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData(e.target.value);
  };

  return (
    <div className="elementor flex w-full items-center space-x-2 mb-4">
      <Label> {dataType.toLowerCase()}</Label>
      <Input
        ref={inputRef}
        type="text"
        placeholder="text"
        value={data ? data[dataType] : ""}
        onChange={handleInputChange}
      />
      <Button variant="ghost" onClick={fetchRandomData}>
        Regenerate
      </Button>
      <Button
        onClick={copyToClipboard}
        variant={copied ? "default" : "outline"}
      >
        Copy
      </Button>
    </div>
  );
}
