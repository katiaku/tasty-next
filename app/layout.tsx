import type { Metadata } from "next";
import { Montserrat, Poppins } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/ui/nav-bar";
import RecipeProvider from "@/context/recipe-context";

const montserratFont = Montserrat({ subsets: ["latin"], weight: ["500", "600", "700"] });
const poppinsFont = Poppins({ subsets: ["latin"], weight: ["300"] });

export const metadata: Metadata = {
  title: "Tasty Next Recipe",
  description:
    "Mouthwatering recipes from all over the world.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserratFont.className} ${poppinsFont.className}`}>
        <RecipeProvider>
          <>
            <NavBar />
            {children}
          </>
        </RecipeProvider>
      </body>
    </html>
  );
}
