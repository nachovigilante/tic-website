import "../styles/globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "TIC://",
    description: "Tecnología Innovación y Creatividad",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="es">
            <body>{children}</body>
        </html>
    );
}
