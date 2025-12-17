// app/(ui)/Footer.jsx
'use client';

import { Layout, Typography, Space, Divider, Row, Col } from 'antd';
import {
  GithubOutlined,
  LinkedinOutlined,
  MailOutlined,
  HomeOutlined,
  UserOutlined,
  ProjectOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
  HeartFilled
} from '@ant-design/icons';
import Link from 'next/link';
import { motion } from 'framer-motion';

const { Footer: AntdFooter } = Layout;
const { Text, Title } = Typography;

const scrollToSection = (id) => {
  const element = document.getElementById(id.substring(1));
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

const navItems = [
  { icon: <HomeOutlined />, label: 'Home', id: '#home' },
  { icon: <UserOutlined />, label: 'About', id: '#about' },
  { icon: <ProjectOutlined />, label: 'Projects', id: '#projects' },
  { icon: <MailOutlined />, label: 'Contact', id: '#contact' }
];

const contactInfo = [
  { icon: <MailOutlined />, label: 'nandoher00@gmail.com', href: 'mailto:nandoher00@gmail.com' },
  { icon: <PhoneOutlined />, label: '+62 812-8093-4898', href: 'tel:+6281280934898' },
  { icon: <EnvironmentOutlined />, label: 'Jakarta, Indonesia', href: null }
];

const socialLinks = [
  { icon: <GithubOutlined />, href: 'https://github.com/nando131', label: 'GitHub', color: '#fff' },
  { icon: <LinkedinOutlined />, href: '#', label: 'LinkedIn', color: '#0077b5' }
];

export default function Footer() {
  return (
    <AntdFooter
      style={{
        background: 'linear-gradient(135deg, #001529 0%, #0d47a1 100%)',
        color: 'white',
        padding: '60px 50px 30px',
        borderTop: 'none',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Animated Top Border */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '4px',
          background: 'linear-gradient(90deg, #1890ff 0%, #36cfc9 50%, #1890ff 100%)',
          transformOrigin: 'left'
        }}
      />

      {/* Decorative Background Elements */}
      <div
        style={{
          position: 'absolute',
          top: '-50px',
          right: '-50px',
          width: '300px',
          height: '300px',
          background: 'radial-gradient(circle, rgba(24, 144, 255, 0.1) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(40px)'
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '-50px',
          left: '-50px',
          width: '250px',
          height: '250px',
          background: 'radial-gradient(circle, rgba(54, 207, 201, 0.1) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(40px)'
        }}
      />

      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        {/* Header with CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Title level={2} style={{ color: 'white', textAlign: 'center', marginBottom: '15px' }}>
            Siap Berkolaborasi?
          </Title>
          <Text
            style={{
              color: 'rgba(255, 255, 255, 0.8)',
              fontSize: '1.1em',
              display: 'block',
              textAlign: 'center',
              marginBottom: '50px'
            }}
          >
            Mari wujudkan ide digital Anda menjadi kenyataan! 🚀
          </Text>
        </motion.div>

        <Row gutter={[40, 40]} justify="space-between">
          {/* Kolom 1: Brand & Description */}
          <Col xs={24} md={8}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                style={{ display: 'inline-block', marginBottom: '20px' }}
              >
                <Title level={3} style={{ color: 'white', margin: 0 }}>
                  <span style={{ color: '#1890ff', fontWeight: '900' }}>Nando</span>
                  <span style={{ fontWeight: '300', color: '#e0f7ff' }}> Dev</span>
                </Title>
              </motion.div>
              <Text
                style={{
                  color: 'rgba(255, 255, 255, 0.7)',
                  display: 'block',
                  lineHeight: '1.8',
                  marginBottom: '20px'
                }}
              >
                Frontend Developer yang passionate dalam membangun aplikasi web modern dengan teknologi
                terkini. Fokus pada performa, estetika, dan pengalaman pengguna.
              </Text>
              <div style={{ display: 'flex', gap: '15px', marginTop: '20px' }}>
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, rotate: 5, y: -3 }}
                    whileTap={{ scale: 0.9 }}
                    style={{
                      width: '45px',
                      height: '45px',
                      borderRadius: '50%',
                      background: 'rgba(255, 255, 255, 0.1)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      fontSize: '20px',
                      cursor: 'pointer',
                      transition: 'all 0.3s'
                    }}
                    aria-label={social.label}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </Col>

          {/* Kolom 2: Quick Links */}
          <Col xs={24} md={8}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Title
                level={5}
                style={{
                  color: '#1890ff',
                  marginBottom: '25px',
                  fontSize: '1.1em',
                  fontWeight: '600'
                }}
              >
                Navigasi Cepat
              </Title>
              <Space orientation="vertical" size="middle" style={{ width: '100%' }}>
                {navItems.map((item, index) => (
                  <motion.a
                    key={index}
                    onClick={() => scrollToSection(item.id)}
                    whileHover={{ x: 10, color: '#1890ff' }}
                    style={{
                      color: 'rgba(255, 255, 255, 0.8)',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      fontSize: '1em',
                      transition: 'all 0.3s'
                    }}
                  >
                    {item.icon}
                    {item.label}
                  </motion.a>
                ))}
              </Space>
            </motion.div>
          </Col>

          {/* Kolom 3: Contact Info */}
          <Col xs={24} md={8}>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Title
                level={5}
                style={{
                  color: '#1890ff',
                  marginBottom: '25px',
                  fontSize: '1.1em',
                  fontWeight: '600'
                }}
              >
                Hubungi Saya
              </Title>
              <Space orientation="vertical" size="middle" style={{ width: '100%' }}>
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ x: 5 }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      color: 'rgba(255, 255, 255, 0.8)'
                    }}
                  >
                    <div
                      style={{
                        width: '35px',
                        height: '35px',
                        borderRadius: '8px',
                        background: 'rgba(24, 144, 255, 0.15)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '16px',
                        color: '#1890ff'
                      }}
                    >
                      {info.icon}
                    </div>
                    {info.href ? (
                      <a
                        href={info.href}
                        style={{
                          color: 'rgba(255, 255, 255, 0.8)',
                          textDecoration: 'none',
                          transition: 'color 0.3s'
                        }}
                        onMouseEnter={(e) => (e.target.style.color = '#1890ff')}
                        onMouseLeave={(e) => (e.target.style.color = 'rgba(255, 255, 255, 0.8)')}
                      >
                        {info.label}
                      </a>
                    ) : (
                      <Text style={{ color: 'rgba(255, 255, 255, 0.8)', margin: 0 }}>
                        {info.label}
                      </Text>
                    )}
                  </motion.div>
                ))}
              </Space>
            </motion.div>
          </Col>
        </Row>

        <Divider
          style={{
            background: 'rgba(255, 255, 255, 0.15)',
            margin: '50px 0 25px 0'
          }}
        />

        {/* Copyright & Credits */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{ textAlign: 'center' }}
        >
          <Text
            style={{
              color: 'rgba(255, 255, 255, 0.6)',
              display: 'block',
              fontSize: '0.95em'
            }}
          >
            Portofolio Nando Dev © {new Date().getFullYear()} • Dibuat dengan{' '}
            <HeartFilled style={{ color: '#ff4d4f', fontSize: '14px' }} /> menggunakan{' '}
            <span style={{ color: '#1890ff', fontWeight: '600' }}>Next.js</span> &{' '}
            <span style={{ color: '#36cfc9', fontWeight: '600' }}>Ant Design</span>
          </Text>
        </motion.div>
      </div>
    </AntdFooter>
  );
}