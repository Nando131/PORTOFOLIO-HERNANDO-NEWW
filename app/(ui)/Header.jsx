  // app/(ui)/Header.jsx
  'use client';

  import { Layout, Menu } from 'antd';
  import { motion } from 'framer-motion';

  const { Header: AntdHeader } = Layout;

  const navItems = [
    { key: '#home', label: 'Home' },
    { key: '#about', label: 'About' },
    { key: '#projects', label: 'Projects' },
    { key: '#contact', label: 'Contact' },
  ];

  const scrollToSection = (id) => {
      const element = document.getElementById(id.substring(1));
      if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
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
          background: 'rgba(0, 21, 41, 0.95)', // Semi-transparan
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)', 
          height: 64, 
          padding: '0 40px'
        }}
      >
        <motion.div 
          className="logo" 
          whileHover={{ scale: 1.05 }}
          style={{ 
              color: 'white', 
              fontSize: '1.6em', 
              marginRight: '60px', 
              fontWeight: 'bold', 
              cursor: 'pointer' 
          }}
          onClick={() => scrollToSection('#home')}
        >
          <span style={{ color: '#1890ff' }}>Nando</span> Dev
        </motion.div>

        <Menu
          theme="dark"
          mode="horizontal"
          items={navItems.map(item => ({
            key: item.key,
            label: (
              <a onClick={() => scrollToSection(item.key)} style={{ cursor: 'pointer', transition: 'color 0.3s' }}>
                {item.label}
              </a>
            ),
          }))}
          style={{ 
              flex: 1, 
              minWidth: 0, 
              background: 'transparent', 
              borderBottom: 'none'
          }}
        />
      </AntdHeader>
    );
  }