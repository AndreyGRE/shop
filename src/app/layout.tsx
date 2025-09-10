import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";

export const metadata: Metadata = {
    title: "Мое приложение",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) { 
    return (
        <html lang="ru">
        <head>
            <Script src="https://cdn.jsdelivr.net/npm/@cdek-it/widget@3" strategy="beforeInteractive" />
        </head> 
            <body className="bg-white dark:bg-zinc-100">
                <div className="container mx-auto p-4 ">{children}</div>
            </body> 
        </html>
    );
}
