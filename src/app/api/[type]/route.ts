import { NextResponse } from "next/server";
import { number, person, lorem, music, phone, science, string } from "./faker";

export async function GET(
  req: Request,
  { params }: { params: { type: string } }
) {
  const { type } = params;

  let data;

  switch (type) {
    case "person":
      data = person();
      break;
    case "lorem":
      data = lorem();
      break;
    case "music":
      data = music();
      break;
    case "number":
      data = number();
      break;
    case "phone":
      data = phone();
      break;
    case "science":
      data = science();
      break;
    case "string":
      data = string();
      break;
    default:
      return NextResponse.json(
        { error: "Invalid type parameter" },
        { status: 400 }
      );
  }

  return NextResponse.json(data);
}
