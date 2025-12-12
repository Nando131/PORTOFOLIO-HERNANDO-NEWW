// app/(main)/components/ProjectCard.jsx
'use client';

import { Card, Tag, Space, Button, Typography } from 'antd';
import { GithubOutlined, EyeOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion';
import Image from 'next/image';

const { Paragraph, Title } = Typography;

const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 100 } }
};

const ProjectCard = ({ project }) => {
    
    // Fungsi untuk menampilkan image atau placeholder
    const renderImage = () => {
        if (project.image) {
            return (
                <div style={{ 
                    height: 200, 
                    width: '100%', 
                    position: 'relative', 
                    overflow: 'hidden', 
                    borderRadius: '8px 8px 0 0' 
                }}>
                    <Image 
                        src={project.image} 
                        alt={`Screenshot proyek ${project.title}`} 
                        layout="fill" 
                        objectFit="cover" 
                        unoptimized={project.image.startsWith('http')} 
                    />
                </div>
            );
        }
        // Placeholder jika tidak ada gambar
        return (
            <div style={{ 
                height: 200, 
                background: '#e6f7ff', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                borderRadius: '8px 8px 0 0' 
            }}>
                <Title level={4} style={{ color: '#1890ff', textAlign: 'center', padding: '0 10px' }}>
                    {project.title} (Visual Coming Soon)
                </Title>
            </div>
        );
    };

return (
        <motion.div 
            variants={cardVariants}
            whileHover={{ 
                scale: 1.05,
                rotate: 2,
                y: -10,
                transition: { type: "spring", stiffness: 300 }
            }}
        >
            <Card
                hoverable
                // Peringatan diperbaiki di sini:
                // Ganti bodyStyle={{ padding: '24px' }}
                // MENJADI:
                styles={{ body: { padding: '24px' } }} 
                
                cover={renderImage()} 
                style={{ 
                    borderRadius: '12px', 
                    overflow: 'hidden', 
                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1)', 
                    border: '1px solid #e8e8e8',
                    height: '100%'
                }}
            >
                <Title level={4} style={{ marginTop: 0, marginBottom: '10px' }}>{project.title}</Title>
                {/* MinHeight memastikan semua deskripsi memiliki tinggi yang sama */}
                <Paragraph type="secondary" style={{ minHeight: '40px' }}>{project.description}</Paragraph> 

                <Space size={[0, 8]} wrap style={{ marginBottom: '15px' }}>
                    {project.techs.map((tech, i) => (
                        <Tag key={i} color="geekblue">{tech}</Tag>
                    ))}
                </Space>

                <div style={{ display: 'flex', gap: '10px' }}>
                    {project.liveLink && (
                        <Button 
                            icon={<EyeOutlined />} 
                            type="primary" 
                            href={project.liveLink} 
                            target="_blank"
                            style={{ flexGrow: 1 }}
                        >
                            Lihat Live
                        </Button>
                    )}
                    {project.githubLink && (
                        <Button 
                            icon={<GithubOutlined />} 
                            href={project.githubLink} 
                            target="_blank"
                            style={{ flexGrow: 1 }}
                        >
                            GitHub
                        </Button>
                    )}
                </div>
            </Card>
        </motion.div>
    );
};

export default ProjectCard;