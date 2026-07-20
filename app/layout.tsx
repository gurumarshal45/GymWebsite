import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Metro Flex Gym | Rajajinagar, Bengaluru",
  description:
    "Metro Flex Gym near ISKCON Temple, Rajajinagar. Affordable membership plans and training by T. Suresh with 30 years of experience.",
  keywords: [
    "Metro Flex Gym",
    "Gym in Rajajinagar",
    "Gym near ISKCON Temple",
    "Bengaluru gym",
    "T Suresh trainer",
    "Affordable gym membership",
  ],
  openGraph: {
    title: "Metro Flex Gym | Rajajinagar",
    description:
      "Affordable gym plans, experienced training, and a friendly workout environment near ISKCON Temple.",
    type: "website",
    images: ["/images/image0.jpeg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
