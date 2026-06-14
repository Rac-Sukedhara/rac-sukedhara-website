import { Metadata } from "next";
import ClientLayout from "@/components/ClientLayout";
import './globals.css';

// Website metadata
export const metadata: Metadata = {
    title: "Rotaract Club of Sukedhara | District 3292",
    description: "Official website of the Rotaract Club of Sukedhara",
};

// Root layout component
export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>
              <ClientLayout> {children} </ClientLayout>
            </body>
        </html>
    );
}