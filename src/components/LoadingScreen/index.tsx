"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import "./loading.css";

interface Props {
    onDone: () => void;
}

export default function LoadingScreen({ onDone }: Props) {
    const [visible, setVisible] = useState(true);  

    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(false);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence onExitComplete={onDone}>
            {visible && (
                <motion.div
                    className="loading-container"
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4 }}
                    >
                        <motion.img
                            src="/rotaract-logo.png"
                            alt="Rotaract Wheel"
                            className="loading-logo"
                            animate={{ rotate: 360 }}
                            transition={{
                                repeat: Infinity,
                                duration: 2.0,
                                ease: "linear",
                            }}
                        />
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}