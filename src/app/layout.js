import { Roboto } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.css';
import "./globals.css";
import NavigasiBar from "@/components/Navbar/NavigasiBar";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata = {
  title: "Quran saya",
  description: "Ayok baca quran bareng yuk",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${roboto.className}`}>
        <NavigasiBar/>
        {children}
      </body>
    </html>
  );
}
