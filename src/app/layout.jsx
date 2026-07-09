import "./globals.css";

export const metadata = {
  title: "GripDigits",
  description: "Government-grade biometric hand scanning solution",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-white">
        {children}
      </body>
    </html>
  );
}