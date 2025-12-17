// app/(main)/components/AboutSection.jsx
'use client';

import { Typography, Row, Col, Card, Tag, Space, Divider } from 'antd';
import {
  UserOutlined,
  CodeOutlined,
  BookOutlined,
  Html5Outlined,
  BlockOutlined,
  ToolOutlined,
  FireOutlined
} from '@ant-design/icons';
import { motion } from 'framer-motion';

const { Title, Paragraph, Text } = Typography;

// Variasi Animasi Scroll Reveal
const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.7, ease: 'easeOut' } }
};

const AboutSection = () => {
  const profile = {
    name: 'Hernando Alvoro',
    role: 'Programmer | Web Developer',
    summary:
      'Saya seorang siswa SMK Triratna jurusan Rekayasa Perangkat Lunak (RPL) dengan minat di bidang Web Development. Memiliki dasar pengetahuan HTML, CSS, JavaScript, React. Saya bersemangat untuk mengembangkan kemampuan melalui PKL (Praktik Kerja Lapangan), berkontribusi dalam proyek nyata, serta belajar langsung dari dunia industri.'
  };

  const coreSkills = [
    {
      name: 'Next.js',
      icon: <ToolOutlined style={{ fontSize: '24px', color: '#000000' }} />,
      description: 'Modern Web Framework'
    },
    {
      name: 'React',
      icon: <FireOutlined style={{ fontSize: '24px', color: '#61DAFB' }} />,
      description: 'Frontend Library'
    },
    {
      name: 'HTML5',
      icon: <Html5Outlined style={{ fontSize: '24px', color: '#E34F26' }} />,
      description: 'Markup Language'
    },
    {
      name: 'CSS',
      icon: <BlockOutlined style={{ fontSize: '24px', color: '#1572B6' }} />,
      description: 'Styling & Layout'
    }
  ];

  const otherSkills = [
    { label: 'JavaScript', color: 'gold' },
    { label: 'Figma', color: 'purple' },
    { label: 'Canva', color: 'cyan' },
    { label: 'Good Communication', color: 'green' },
    { label: 'Excellent Analytical Skills', color: 'geekblue' },
    { label: 'Effective Interpersonal Skills', color: 'lime' },
    { label: 'Word', color: 'blue' },
    { label: 'Excel', color: 'green' },
    { label: 'Powerpoint', color: 'volcano' }
  ];

  return (
    <motion.section
      id="about"
      style={{
        padding: '80px 0',
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center',
        background: 'transparent' // Background sama dengan global gradient
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      transition={{ staggerChildren: 0.2, delayChildren: 0.1 }}
    >
      <div style={{ width: '100%', maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        {/* Judul Utama Section */}
        <motion.div variants={itemVariants}>
          <Title level={1} style={{ textAlign: 'center', marginBottom: '60px', color: '#001529' }}>
            <BookOutlined /> Kenali Saya Lebih Dalam
          </Title>
        </motion.div>

        <Row gutter={[40, 40]} justify="center">
          {/* KOLOM KIRI: Profil & Ringkasan */}
          <Col xs={24} lg={12}>
            <motion.div
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02,
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
              style={{ 
                perspective: '1000px',
                transformStyle: 'preserve-3d'
              }}
            >
              <Card
                title={
                  <Title level={3} style={{ margin: 0, color: '#1890ff' }}>
                    <UserOutlined /> Tentang Saya
                  </Title>
                }
                variant="borderless"
                style={{
                  boxShadow: '0 15px 35px rgba(0, 0, 0, 0.15), 0 5px 15px rgba(0, 0, 0, 0.1)',
                  minHeight: '400px',
                  background: 'linear-gradient(135deg, #ffffff 0%, #f5f9ff 100%)',
                  borderRadius: '20px',
                  border: '1px solid rgba(24, 144, 255, 0.1)',
                  transform: 'translateZ(0)',
                  transition: 'all 0.3s ease'
                }}
              >
                <Title level={4} style={{ marginTop: 0 }}>
                  {profile.name} - {profile.role}
                </Title>
                <Paragraph style={{ fontSize: '1.05em', lineHeight: '1.7' }}>
                  {profile.summary}
                </Paragraph>
                <Divider>Pendidikan Terakhir</Divider>
                <Text strong>
                  <BookOutlined /> SMK TRIRATNA
                </Text>
                <Paragraph type="secondary">Rekayasa Perangkat Lunak, 07.2024 - 06.2025</Paragraph>
              </Card>
            </motion.div>
          </Col>

          {/* KOLOM KANAN: Core Skills dengan Logo */}
          <Col xs={24} lg={12}>
            <motion.div
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02,
                rotateY: -5,
                transition: { duration: 0.3 }
              }}
              style={{ 
                perspective: '1000px',
                transformStyle: 'preserve-3d'
              }}
            >
              <Card
                title={
                  <Title level={3} style={{ margin: 0, color: '#001529' }}>
                    <CodeOutlined /> Core Technical Skills
                  </Title>
                }
                variant="borderless"
                style={{
                  boxShadow: '0 15px 35px rgba(0, 0, 0, 0.15), 0 5px 15px rgba(0, 0, 0, 0.1)',
                  minHeight: '400px',
                  background: 'linear-gradient(135deg, #ffffff 0%, #fff7f0 100%)',
                  borderRadius: '20px',
                  border: '1px solid rgba(24, 144, 255, 0.1)',
                  transform: 'translateZ(0)',
                  transition: 'all 0.3s ease'
                }}
              >
                <Space orientation="vertical" size="middle" style={{ width: '100%' }}>
                  {coreSkills.map((skill, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ 
                        scale: 1.05,
                        x: 10,
                        transition: { duration: 0.2 }
                      }}
                    >
                      <Card
                        size="small"
                        style={{
                          background: 'linear-gradient(135deg, #e6f7ff 0%, #bae7ff 100%)',
                          border: '2px solid #91d5ff',
                          borderRadius: '12px',
                          boxShadow: '0 4px 12px rgba(24, 144, 255, 0.15)',
                          transition: 'all 0.3s ease'
                        }}
                      >
                      <Row align="middle" gutter={16}>
                        <Col>{skill.icon}</Col>
                        <Col flex="auto">
                          <Text strong style={{ display: 'block' }}>
                            {skill.name}
                          </Text>
                          <Text type="secondary" style={{ fontSize: '0.9em' }}>
                            {skill.description}
                          </Text>
                        </Col>
                      </Row>
                                          </Card>
                    </motion.div>
                  ))}
                </Space>

                <Divider>Skills Pendukung & Tools</Divider>
                <Space size={[0, 8]} wrap>
                  {otherSkills.map((skill, index) => (
                    <Tag
                      key={index}
                      color={skill.color}
                      style={{ padding: '5px 10px', fontSize: '0.9em' }}
                    >
                      {skill.label}
                    </Tag>
                  ))}
                </Space>
              </Card>
            </motion.div>
          </Col>
        </Row>
      </div>
    </motion.section>
  );
};

export default AboutSection;