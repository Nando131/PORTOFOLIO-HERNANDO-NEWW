// app/(main)/components/Preloader.jsx (FINAL DENGAN BOUNCING DOTS)
'use client';

import { Typography } from 'antd';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import NandoDevLogo from './NandoDevLogo'; 

const { Title } = Typography;

const PRELOADER_DURATION = 3500; 

// --- VARIAN BARU UNTUK BOUNCING DOTS ---

// 1. Container untuk Dots
const dotContainerVariants = {
    start: { transition: { staggerChildren: 0.1, delayChildren: 0.5 } }, // Mengatur urutan dots
    end: { transition: { staggerChildren: 0.1 } }
};

// 2. Animasi individual Dot (naik-turun)
const dotVariants = {
    start: { y: "0%" },
    end: { 
        y: "100%", // Titik turun ke bawah
        transition: {
            duration: 0.4,
            yoyo: Infinity, // Ulangi tanpa batas (loop)
            ease: "easeInOut"
        }
    }
};

// --- VARIAN LAMA (Logo dan Welcome) ---

const containerVariants = {
    hidden: { opacity: 1 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.5 } },
    exit: { opacity: 0, transition: { duration: 1.5, delay: 0.5 } } 
};

const logoVariants = {
    hidden: { y: 100, opacity: 0, scale: 0.5 },
    visible: { 
        y: 0, 
        opacity: 1, 
        scale: 1, 
        transition: { type: "spring", stiffness: 100, damping: 20 }
    },
    exit: { 
        y: -500, 
        x: -500, 
        opacity: 0, 
        scale: 0.8, 
        transition: { duration: 1.5, ease: "easeInOut" } 
    }
};

const welcomeVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    exit: { y: -50, opacity: 0, transition: { duration: 0.5, delay: 0.1 } } 
};

// --- KOMPONEN UTAMA PRELOADER ---

export default function Preloader({ children }) {
    const [isLoading, setIsLoading] = useState(true);
    const [showContent, setShowContent] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
            setTimeout(() => setShowContent(true), 500);
        }, PRELOADER_DURATION);

        return () => clearTimeout(timer); 
    }, []);

    const contentVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 1.5, delay: 0.8 } }
    };

    const Dot = () => (
        <motion.span
            variants={dotVariants}
            style={{
                display: 'block',
                width: '10px',
                height: '10px',
                backgroundColor: '#1890ff', // Warna dot biru
                borderRadius: '50%',
                margin: '0 5px'
            }}
        />
    );


    return (
        <AnimatePresence mode="wait">
            {isLoading ? (
                <motion.div 
                    key="preloader"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100vh',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        zIndex: 9999, 
                        background: '#001529', 
                        color: 'white'
                    }}
                >
                    {/* Logo Nando Dev */}
                    <motion.div variants={logoVariants}>
                        <NandoDevLogo fontSize="3em" style={{ margin: 0 }} /> 
                    </motion.div>
                    
                    {/* BOUNCING DOTS CONTAINER (Di bawah logo) */}
                    <motion.div 
                        variants={dotContainerVariants}
                        initial="start"
                        animate="end" // PENTING: Menggunakan "end" untuk memulai loop bouncing
                        style={{ display: 'flex', marginTop: 20 }}
                    >
                        <Dot />
                        <Dot />
                        <Dot />
                    </motion.div>

                    {/* Teks Welcome */}
                    <motion.div variants={welcomeVariants}>
                        <Title level={3} style={{ color: 'white', marginTop: 30 }}>
                            Welcome to Nando Dev
                        </Title>
                    </motion.div>

                </motion.div>
            ) : (
                <motion.div
                    key="main-content"
                    variants={contentVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {children}
                </motion.div>
            )}
        </AnimatePresence>
    );
}