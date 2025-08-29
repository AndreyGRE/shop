import type { Metadata } from "next";
import "./globals.css";

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

           
            <body className="bg-white dark:bg-zinc-100">
                <div className="container mx-auto p-4 ">{children}</div>
            </body> 
        </html>
    );
}
