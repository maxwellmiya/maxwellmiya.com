import './globals.css';
import { Analytics } from "@vercel/analytics/react";
import { Analytics } from "@vercel/analytics/react";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>{children} <SpeedInsights /> <Analytics/></body>
    </html>
  );
}