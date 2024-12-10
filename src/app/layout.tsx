import "./globals.css";

import { faker } from "@faker-js/faker";

const randomName = faker.person.fullName();
const randomEmail = faker.internet.email();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        {randomEmail}
        {randomName}
      </body>
    </html>
  );
}
