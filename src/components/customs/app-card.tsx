/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { getData } from "@/lib/fakerFetch";
import { useState, useRef, useEffect } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { ButtonLabel, ButtonVariant, InputType } from "@/lib/enums/constant";

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

  useEffect(() => {
    fetchRandomData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
    <div className="w-full">
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
                    type={InputType.TEXT}
                    ref={(el) => (inputRef.current[refKey] = el)}
                    value={value}
                    onChange={(e) => handleChange(key, index, e.target.value)}
                  />
                  <Button
                    onClick={() => copyToClipboard(key, index)}
                    variant={
                      copiedKey === `${key}-${index}`
                        ? ButtonVariant.DEFAULT
                        : ButtonVariant.OUTLINE
                    }
                  >
                    {copiedKey === `${key}-${index}`
                      ? ButtonLabel.COPIED
                      : ButtonLabel.COPY}
                  </Button>
                </div>
              );
            })}
          </div>
        ))}
      <Button variant="ghost" onClick={fetchRandomData}>
        {ButtonLabel.GENERATE}
      </Button>
    </div>
  );
}
