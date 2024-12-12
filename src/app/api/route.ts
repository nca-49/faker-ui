// import type { NextApiRequest, NextApiResponse } from "next";
import { faker } from "@faker-js/faker";
import { NextResponse } from "next/server";

export async function GET() {
  const data = Array.from({ length: 10 }).map(() => ({
    id: faker.string.uuid(),
    name: faker.person.fullName(),
    email: faker.internet.email(),
    address: faker.location.streetAddress(),
  }));

  return NextResponse.json(data);
}
