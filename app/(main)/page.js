// app/(main)/page.js
'use client';

import { Typography, Button } from 'antd';
import { DownloadOutlined, ArrowDownOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion';

// --- IMPORT KOMPONEN SECTION LAIN ---
import ShinyText from './components/ShinyText'; 
import AboutSection from './components/AboutSection'; 
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';


const { Title, Paragraph } = Typography;

// Variasi Animasi
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            delayChildren: 0.1,
            staggerChildren: 0.2
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};


// --- Komponen HomeSection ---
const HomeSection = () => {
    return (
        <motion.section
            id="home"
            style={{ 
                minHeight: '100vh', 
                display: 'flex', 
                flexDirection: 'column', 
                justifyContent: 'center', 
                alignItems: 'center', 
                textAlign: 'center',
                padding: '0 20px',
                position: 'relative',
                zIndex: 2 
            }}
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            <motion.div variants={itemVariants}>
                <Title level={4} style={{ color: '#1890ff', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: 5 }}>
                    Frontend Developer | Next.js & AntD
                </Title>
            </motion.div>

            <motion.div variants={itemVariants}>
                <Title level={1} style={{ fontSize: '3em', marginBottom: 0 }}>
                    Hai, Saya <ShinyText className="text-xl">Nando</ShinyText>, 
                </Title>
                <Title level={1} style={{ fontSize: '3em', marginTop: 0 }}>
                    Membangun Pengalaman Web Terbaik.
                </Title>
            </motion.div>

            <motion.div variants={itemVariants} style={{ maxWidth: '600px', margin: '20px 0 40px' }}>
                <Paragraph style={{ fontSize: '1.1em', color: '#595959' }}>
                    Portofolio modern yang fokus pada performa, estetika, dan fungsionalitas menggunakan
                    teknologi React, Next.js, dan Ant Design.
                </Paragraph>
            </motion.div>

            <motion.div variants={itemVariants}>
                <Button 
                    type="primary" 
                    size="large" 
                    icon={<ArrowDownOutlined />}
                    onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
                    style={{ height: '50px', fontSize: '1.1em', padding: '0 30px' }}
                >
                    Jelajahi Portofolio
                </Button>
            </motion.div>
        </motion.section>
    )
}


// --- Export Default page.js ---
export default function HomePage() {
    return (
        <>
            <HomeSection />
            <AboutSection />
            <ProjectsSection />
            <ContactSection />
        </>
    );
}