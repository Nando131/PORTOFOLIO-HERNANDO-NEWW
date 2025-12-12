// app/(main)/components/ProjectsSection.jsx
'use client';

import { Typography, Row, Col, Divider, Space, Button } from 'antd';
import { LaptopOutlined, EyeOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

const { Title, Paragraph } = Typography;

// Data Proyek Anda (Disusun dari CV)
const projectsData = [
    {
        title: "Memory Sequence",
        description: "Permainan memori sederhana yang dirancang untuk menguji kecepatan dan daya ingat pengguna.",
        techs: ["React", "JavaScript", "HTML/CSS"],
        liveLink: "https://gamenewnando.vercel.app", // dari CV 
        githubLink: null,
        image: "/images/projects/GameNando.png"
    },
    {
        title: "Brandingfolim X",
        description: "Studi kasus branding dan proyek portofolio yang dibangun menggunakan Webflow, menunjukkan kemampuan desain dan struktur web.",
        techs: ["Webflow", "Design", "Branding"],
        liveLink: "https://branding-portofolio.vercel.app/", // dari CV 
        githubLink: null,
        image: "/images/projects/brandingfolim.png"
    },
    // Tambahkan lebih banyak proyek di sini
];

const containerVariants = {
    visible: { transition: { staggerChildren: 0.1 } }
};

const ProjectsSection = () => {
    return (
        <motion.section 
            id="projects" 
            style={{ 
                padding: '80px 20px', 
                minHeight: '100vh', 
                background: '#f7f9fb' 
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={containerVariants}
        >
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <motion.div>
                    <Title level={1} style={{ textAlign: 'center', color: '#001529' }}>
                        <LaptopOutlined /> Proyek & Portofolio
                    </Title>
                    <Paragraph style={{ textAlign: 'center', marginBottom: '60px', fontSize: '1.1em' }}>
                        Kumpulan karya yang saya buat, menunjukkan kemampuan teknis dan kreativitas.
                    </Paragraph>
                </motion.div>

                <Row gutter={[30, 40]} justify="center">
                    {projectsData.map((project, index) => (
                        <Col key={index} xs={24} md={12} lg={8}>
                            <ProjectCard project={project} index={index} />
                        </Col>
                    ))}
                </Row>

                <Divider style={{ margin: '80px 0 40px' }} />

                <div style={{ textAlign: 'center' }}>
                    <Title level={3}>Lihat Lebih Banyak Karya</Title>
                    <Paragraph>Ingin melihat seluruh daftar proyek dan studi kasus?</Paragraph>
                    <Button
                        size="large"
                        type="primary"
                        icon={<EyeOutlined />}
                        // Ganti dengan link ke halaman proyek/studi kasus terpisah jika ada
                        onClick={() => window.open("http://github.com/Nando131", "_blank")} // Link ke GitHub Anda [cite: 7]
                        style={{ height: '50px', padding: '0 30px' }}
                    >
                        Kunjungi GitHub Saya
                    </Button>
                </div>
            </div>
        </motion.section>
    );
};

export default ProjectsSection;