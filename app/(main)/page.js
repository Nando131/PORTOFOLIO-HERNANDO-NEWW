// app/(main)/page.js
'use client';

import { Typography, Button } from 'antd';
import { ArrowDownOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion';
import Image from 'next/image';

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

// Komponen HomeSection
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
      {/* Particle Background */}
      <div className="particles-container">
        <span className="particle"></span>
        <span className="particle"></span>
        <span className="particle"></span>
        <span className="particle"></span>
        <span className="particle"></span>
        <span className="particle"></span>
        <span className="particle"></span>
        <span className="particle"></span>
        <span className="particle"></span>
        <span className="particle"></span>
      </div>

      {/* Foto Profil dengan Animasi 3D */}
      <motion.div
        variants={itemVariants}
        style={{ 
          marginBottom: '30px', 
          position: 'relative', 
          zIndex: 3,
          perspective: '1000px'
        }}
      >
        <motion.div
          animate={{
            rotateY: [0, 10, 0, -10, 0],
            rotateX: [0, 5, 0, -5, 0],
            y: [0, -15, 0]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
          whileHover={{
            scale: 1.1,
            rotateZ: 5,
            transition: { duration: 0.3 }
          }}
          style={{
            width: '200px',
            height: '200px',
            margin: '0 auto',
            borderRadius: '50%',
            overflow: 'hidden',
            border: '6px solid transparent',
            background: 'linear-gradient(135deg, #1890ff, #36cfc9) border-box',
            boxShadow: '0 20px 60px rgba(24, 144, 255, 0.5), 0 0 0 10px rgba(24, 144, 255, 0.1)',
            position: 'relative',
            cursor: 'pointer',
            transformStyle: 'preserve-3d'
          }}
        >
          <Image
            src="/images/profile/nando-profile.png"
            alt="Foto Profil Hernando Alvoro"
            width={200}
            height={200}
            priority
            style={{ 
              objectFit: 'cover',
              transform: 'translateZ(20px)'
            }}
          />
          
          {/* Glowing Ring Animation */}
          <motion.div
            animate={{
              rotate: 360,
              scale: [1, 1.05, 1]
            }}
            transition={{
              rotate: { duration: 8, repeat: Infinity, ease: 'linear' },
              scale: { duration: 2, repeat: Infinity, ease: 'easeInOut' }
            }}
            style={{
              position: 'absolute',
              top: '-15px',
              left: '-15px',
              right: '-15px',
              bottom: '-15px',
              border: '3px solid transparent',
              borderRadius: '50%',
              borderTopColor: '#1890ff',
              borderRightColor: '#36cfc9',
              borderBottomColor: '#52c41a',
              zIndex: -1
            }}
          />
          
          {/* Floating Sparkles */}
          {[0, 1, 2, 3].map((i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -30, 0],
                x: [0, Math.sin(i * 90) * 20, 0],
                opacity: [0, 1, 0],
                scale: [0, 1, 0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.5,
                ease: 'easeInOut'
              }}
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                width: '8px',
                height: '8px',
                background: 'linear-gradient(135deg, #fff, #1890ff)',
                borderRadius: '50%',
                boxShadow: '0 0 10px rgba(255, 255, 255, 0.8)',
                pointerEvents: 'none'
              }}
            />
          ))}
        </motion.div>
      </motion.div>

      <motion.div variants={itemVariants}>
        <Title
          level={4}
          style={{
            color: '#1890ff',
            letterSpacing: '2px',
            textTransform: 'uppercase',
            marginBottom: 5
          }}
        >
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

      <motion.div
        variants={itemVariants}
        style={{ maxWidth: '600px', margin: '20px 0 40px' }}
      >
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
          onClick={() => {
            const aboutSection = document.getElementById('about');
            if (aboutSection) {
              aboutSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
          }}
          style={{ height: '50px', fontSize: '1.1em', padding: '0 30px' }}
        >
          Jelajahi Portofolio
        </Button>
      </motion.div>

      {/* CSS Inline untuk Animasi */}
      <style jsx>{`
        @keyframes float-profile {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </motion.section>
  );
};

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