import { NextResponse } from "next/server";
import { number, person, lorem, music, phone, science, string } from "./faker";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const apiFunctions: { [key: string]: (length?: number) => any } = {
  person,
  lorem,
  music,
  number,
  phone,
  science,
  string,
};

export async function GET(
  req: Request,
  { params }: { params: { type: string } }
) {
  const { type } = params;
  const url = new URL(req.url);
  const length = Number(url.searchParams.get("length")) || 1;

  const apiFunction = apiFunctions[type];

  if (!apiFunction) {
    return NextResponse.json(
      { error: "Invalid type parameter" },
      { status: 400 }
    );
  }

  const data = apiFunction(length);
  return NextResponse.json(data);
}
