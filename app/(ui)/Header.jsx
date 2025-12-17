// app/(ui)/Header.jsx
'use client';

import { Layout, Menu, Badge } from 'antd';
import { motion } from 'framer-motion';
import { HomeOutlined, UserOutlined, ProjectOutlined, MailOutlined, CodeOutlined } from '@ant-design/icons';

const { Header: AntdHeader } = Layout;

const navItems = [
  { key: '#home', label: 'Home', icon: <HomeOutlined /> },
  { key: '#about', label: 'About', icon: <UserOutlined /> },
  { key: '#projects', label: 'Projects', icon: <ProjectOutlined /> },
  { key: '#contact', label: 'Contact', icon: <MailOutlined /> }
];

const scrollToSection = (id) => {
  const element = document.getElementById(id.substring(1));
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

export default function Header() {
  return (
    <AntdHeader
      style={{
        position: 'fixed',
        zIndex: 100,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        background: 'linear-gradient(135deg, rgba(0, 21, 41, 0.98) 0%, rgba(13, 71, 161, 0.95) 100%)',
        backdropFilter: 'blur(10px)',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
        height: 64,
        padding: '0 40px',
        borderBottom: '2px solid rgba(24, 144, 255, 0.3)'
      }}
    >
      {/* Logo dengan Animasi & Badge */}
      <motion.div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '15px',
          marginRight: '60px'
        }}
      >
        {/* Icon Code dengan Rotating Animation */}
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
          style={{
            width: '45px',
            height: '45px',
            borderRadius: '12px',
            background: 'linear-gradient(135deg, #1890ff 0%, #36cfc9 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 15px rgba(24, 144, 255, 0.4)'
          }}
        >
          <CodeOutlined style={{ fontSize: '24px', color: 'white' }} />
        </motion.div>

        {/* Logo Text dengan Hover Effect */}
        <motion.div
          whileHover={{ scale: 1.08, rotate: 1 }}
          whileTap={{ scale: 0.95 }}
          style={{
            cursor: 'pointer',
            display: 'flex',
            flexDirection: 'column',
            gap: '2px'
          }}
          onClick={() => scrollToSection('#home')}
        >
          <div
            style={{
              fontSize: '1.8em',
              fontWeight: 'bold',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            <span
              style={{
                color: '#1890ff',
                fontWeight: '900',
                letterSpacing: '1px',
                textShadow: '0 2px 8px rgba(24, 144, 255, 0.6)'
              }}
            >
              Nando
            </span>
            <span style={{ fontWeight: '300', color: '#e0f7ff' }}>Dev</span>
            
            {/* Badge "Available" */}
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.8, 1, 0.8]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
            >
              <Badge 
                count="Available" 
                style={{ 
                  background: 'linear-gradient(135deg, #52c41a 0%, #73d13d 100%)',
                  fontSize: '10px',
                  height: '18px',
                  lineHeight: '18px',
                  borderRadius: '9px',
                  boxShadow: '0 2px 8px rgba(82, 196, 26, 0.4)'
                }} 
              />
            </motion.div>
          </div>
          
          {/* Subtitle dengan Typing Effect */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 'auto' }}
            transition={{ duration: 2, delay: 0.5 }}
            style={{
              overflow: 'hidden',
              whiteSpace: 'nowrap',
              fontSize: '0.75em',
              color: 'rgba(255, 255, 255, 0.6)',
              fontWeight: '400',
              letterSpacing: '1px'
            }}
          >
            Frontend Developer
          </motion.div>
        </motion.div>

        {/* Animated Pulse Dots */}
        <div style={{ display: 'flex', gap: '4px', marginLeft: '10px' }}>
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -8, 0],
                opacity: [0.4, 1, 0.4]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.2,
                ease: 'easeInOut'
              }}
              style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #1890ff 0%, #36cfc9 100%)',
                boxShadow: '0 0 10px rgba(24, 144, 255, 0.6)'
              }}
            />
          ))}
        </div>
      </motion.div>

      {/* Navigation Menu */}
      <Menu
        theme="dark"
        mode="horizontal"
        items={navItems.map((item) => ({
          key: item.key,
          label: (
            <motion.a
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection(item.key)}
              style={{
                cursor: 'pointer',
                transition: 'all 0.3s',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                fontWeight: '500',
                fontSize: '1em'
              }}
            >
              {item.icon}
              {item.label}
            </motion.a>
          )
        }))}
        style={{
          flex: 1,
          minWidth: 0,
          background: 'transparent',
          borderBottom: 'none',
          fontSize: '1em'
        }}
      />

      {/* Decorative Bottom Line with Animation */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '2px',
          background: 'linear-gradient(90deg, transparent, #1890ff 20%, #36cfc9 50%, #1890ff 80%, transparent)',
          opacity: 0.6,
          transformOrigin: 'left'
        }}
      />

      {/* Animated Gradient Overlay */}
      <motion.div
        animate={{
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'linear'
        }}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '2px',
          background: 'linear-gradient(90deg, #1890ff, #36cfc9, #1890ff)',
          backgroundSize: '200% 100%',
          opacity: 0.5
        }}
      />

      {/* CSS untuk Menu Item Styles */}
      <style jsx global>{`
        .ant-menu-dark .ant-menu-item:hover {
          background: rgba(24, 144, 255, 0.15) !important;
          border-radius: 8px;
        }

        .ant-menu-dark .ant-menu-item-selected {
          background: rgba(24, 144, 255, 0.2) !important;
          border-radius: 8px;
        }

        .ant-menu-horizontal > .ant-menu-item::after {
          border-bottom: 2px solid #1890ff !important;
        }

        /* Sakura Falling Animation */
        @keyframes sakuraFall {
          0% {
            transform: translateY(-10px) translateX(0) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) translateX(100px) rotate(360deg);
            opacity: 0;
          }
        }

        .sakura {
          position: fixed;
          top: -10px;
          width: 20px;
          height: 20px;
          background: linear-gradient(135deg, #ff6b9d 0%, #ffc3d5 100%);
          border-radius: 50% 50% 50% 0%;
          transform: rotate(45deg);
          animation: sakuraFall linear infinite;
          pointer-events: none;
          z-index: 99;
          box-shadow: 0 2px 5px rgba(255, 107, 157, 0.3);
        }

        .sakura:nth-child(1) { left: 5%; animation-duration: 12s; animation-delay: 0s; }
        .sakura:nth-child(2) { left: 15%; animation-duration: 15s; animation-delay: 2s; }
        .sakura:nth-child(3) { left: 25%; animation-duration: 18s; animation-delay: 4s; }
        .sakura:nth-child(4) { left: 35%; animation-duration: 14s; animation-delay: 1s; }
        .sakura:nth-child(5) { left: 45%; animation-duration: 16s; animation-delay: 3s; }
        .sakura:nth-child(6) { left: 55%; animation-duration: 13s; animation-delay: 5s; }
        .sakura:nth-child(7) { left: 65%; animation-duration: 17s; animation-delay: 2s; }
        .sakura:nth-child(8) { left: 75%; animation-duration: 19s; animation-delay: 4s; }
        .sakura:nth-child(9) { left: 85%; animation-duration: 15s; animation-delay: 1s; }
        .sakura:nth-child(10) { left: 95%; animation-duration: 14s; animation-delay: 3s; }

        .sakura::before,
        .sakura::after {
          content: '';
          position: absolute;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, #ff8fb5 0%, #ffd4e3 100%);
          border-radius: 50%;
          transform-origin: 0 100%;
        }

        .sakura::before {
          transform: rotate(30deg);
        }

        .sakura::after {
          transform: rotate(60deg);
        }
      `}</style>

      {/* Falling Sakura Petals */}
      {[...Array(10)].map((_, i) => (
        <div key={i} className="sakura" />
      ))}
    </AntdHeader>
  );
}