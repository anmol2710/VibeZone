import { Inter } from "next/font/google";
import "./global.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" className="no-scrollbar">
      <body className={`${inter.className}`}>
         {children}
      </body>
    </html >
  );
}
