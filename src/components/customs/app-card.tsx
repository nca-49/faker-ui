/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { getData } from "@/lib/fakerFetch";
import { useState, useRef } from "react";
// import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

export function AppCard({
  _dataClass,
  _length,
}: {
  _dataClass: string;
  _length: number;
}) {
  const [data, setData] = useState<any>(null);
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const inputRef = useRef<{ [key: string]: HTMLInputElement | null }>({});

  const fetchRandomData = async () => {
    const randomItem = await getData(_dataClass, _length);
    const result = randomItem.reduce(
      (acc: { [x: string]: any[] }, obj: { [x: string]: any }) => {
        Object.keys(obj).forEach((key) => {
          if (!acc[key]) {
            acc[key] = [];
          }

          acc[key].push(obj[key]);
        });
        return acc;
      },
      {}
    );

    console.log(result);
    setData(result);
  };

  const copyToClipboard = (key: string, index: number) => {
    const refKey = `${key}-${index}`;
    if (inputRef.current[refKey]) {
      const value = inputRef.current[refKey]?.value;
      navigator.clipboard
        .writeText(value || "")
        .then(() => {
          setCopiedKey(refKey);
          setTimeout(() => {
            setCopiedKey(null);
          }, 5000);
        })
        .catch((err) =>
          console.error("Erreur lors de la copie dans le presse-papiers :", err)
        );
    }
  };

  const handleChange = (key: string, index: number, value: string) => {
    setData((prev: any) => {
      const updatedData = { ...prev };
      updatedData[key][index] = value;
      return updatedData;
    });
  };
  return (
    <div className="elementor flex w-full items-center space-x-2 mb-4">
      {data &&
        Object.keys(data).map((key) => (
          <div key={key}>
            <h3>{key}</h3>
            {data[key].map((value: string, index: number) => {
              const refKey = `${key}-${index}`;
              return (
                <div key={index} className="mb-2">
                  <label>{`${key} ${index + 1}`}</label>
                  <Input
                    type="text"
                    ref={(el) => (inputRef.current[refKey] = el)}
                    value={value}
                    onChange={(e) => handleChange(key, index, e.target.value)}
                  />
                  <Button
                    onClick={() => copyToClipboard(key, index)}
                    variant={
                      copiedKey === `${key}-${index}` ? "default" : "outline"
                    }
                  >
                    {copiedKey === `${key}-${index}` ? "Copied!" : "Copy"}
                  </Button>
                </div>
              );
            })}
          </div>
        ))}
      <Button variant="ghost" onClick={fetchRandomData}>
        Regenerate
      </Button>
    </div>
  );
}
