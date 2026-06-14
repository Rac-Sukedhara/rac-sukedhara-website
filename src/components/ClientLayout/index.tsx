"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import LoadingScreen from "@/components/LoadingScreen";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
    const [loading, setLoading] = useState(true);
    const pathname = usePathname();
    const isFirst = useRef(true);

    useEffect(() => {
        if (isFirst.current) {
            isFirst.current = false;
        } else {
            setLoading(true);
        }

        const timer = setTimeout(() => setLoading(false), 5000);
        return () => clearTimeout(timer);
    }, [pathname]);

    return (
        <>
            {loading && <LoadingScreen onDone={() => setLoading(false)} />}
            {children}
        </>
    );
}