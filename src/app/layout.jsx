// src/app/layout.jsx
import "./globals.css"; // ✅ Your global styles
import React from "react";

export const metadata = {
  title: "AAROHAṆ 2025–26",
  description: "Event Timeline - National Institute of Technology, Durgapur",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Rajdhani:wght@300;400;600;700&family=Poppins:wght@300;400;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-black text-white">
        {children}
      </body>
    </html>
  );
}
