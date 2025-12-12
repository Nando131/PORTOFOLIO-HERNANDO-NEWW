// app/(ui)/Footer.jsx (FINAL DAN STABIL)
'use client'; 

import { Layout, Typography, Space, Divider, Row, Col } from 'antd';
import { GithubOutlined, LinkedinOutlined, MailOutlined, HomeOutlined } from '@ant-design/icons';
import Link from 'next/link'; 

const { Footer: AntdFooter } = Layout;
const { Text, Title } = Typography;

const scrollToSection = (id) => {
    const element = document.getElementById(id.substring(1));
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
};

export default function Footer() {
    return (
        <AntdFooter 
            style={{ 
                textAlign: 'center', 
                background: '#001529',
                color: 'white', 
                padding: '40px 50px 20px', 
                borderTop: 'none' 
            }}
        >
            <div 
                style={{
                    height: '5px',
                    width: '100%',
                    margin: '0 auto 20px',
                    background: 'linear-gradient(to right, #1890ff, #36cfc9)', 
                }}
            />

            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <Title level={4} style={{ color: 'white', marginBottom: '30px' }}>
                    Siap Berkolaborasi?
                </Title>
                
                <Row gutter={[32, 32]} justify="space-between" align="top">
                    
                    {/* Kolom Kiri: Navigasi Cepat (Rata Kiri) */}
                    <Col xs={24} md={12} style={{ textAlign: 'left' }}>
                         <Title level={5} style={{ color: '#1890ff', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '10px', marginBottom: '15px' }}>
                            Navigasi
                        </Title>
                        {/* Kembali menggunakan Space dengan orientation vertical dan align start */}
                        <Space orientation="vertical" align="start" size="middle"> 
                            <a onClick={() => scrollToSection('#home')} style={{ color: 'white', opacity: 0.8, cursor: 'pointer' }}>
                                <HomeOutlined /> Home
                            </a>
                            <a onClick={() => scrollToSection('#about')} style={{ color: 'white', opacity: 0.8, cursor: 'pointer' }}>
                                About
                            </a>
                            <a onClick={() => scrollToSection('#projects')} style={{ color: 'white', opacity: 0.8, cursor: 'pointer' }}>
                                Projects
                            </a>
                            <a onClick={() => scrollToSection('#contact')} style={{ color: 'white', opacity: 0.8, cursor: 'pointer' }}>
                                Contact
                            </a>
                        </Space>
                    </Col>
                    
                    {/* Kolom Kanan: Kontak & Sosial (Rata Kanan) */}
                    <Col xs={24} md={12} style={{ textAlign: 'right' }}>
                        <Title level={5} style={{ color: '#1890ff', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '10px', marginBottom: '15px' }}>
                            Hubungi Gua
                        </Title>
                        {/* Kembali menggunakan Space dengan orientation vertical dan align end */}
                        <Space orientation="vertical" align="end" size="middle"> 
                            {/* Email */}
                            <Text style={{ color: 'white' }}>
                                <MailOutlined /> nando.dev@email.com
                            </Text>

                            {/* Sosial Media Icons */}
                            <Space size="large" style={{ marginTop: '10px' }}>
                                <Link href="https://github.com/nando131" target="_blank" 
                                    style={{ color: 'white', fontSize: '1.5em', transition: 'color 0.3s' }} 
                                >
                                    <GithubOutlined />
                                </Link>
                                <Link href="#" target="_blank" 
                                    style={{ color: 'white', fontSize: '1.5em', transition: 'color 0.3s' }} 
                                >
                                    <LinkedinOutlined />
                                </Link>
                            </Space>
                        </Space>
                    </Col>
                </Row>
                
                <Divider style={{ background: 'rgba(255, 255, 255, 0.2)', margin: '30px 0 15px 0' }} />

                {/* Hak Cipta */}
                <Text style={{ color: 'white', display: 'block', opacity: 0.6, textAlign: 'center' }}>
                    Portofolio Nando Dev &copy;{new Date().getFullYear()} Dibuat dengan Next.js & Ant Design.
                </Text>
            </div>
        </AntdFooter>
    );
}