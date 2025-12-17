// app/(main)/components/ProjectsSection.jsx
'use client';

import { Typography, Divider, Button } from 'antd';
import { LaptopOutlined, EyeOutlined, GithubOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCards } from 'swiper/modules';
import ProjectCard from './ProjectCard';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-cards';

const { Title, Paragraph } = Typography;

// Data Proyek
const projectsData = [
  {
    title: 'Memory Sequence',
    description: 'Permainan memori sederhana yang dirancang untuk menguji kecepatan dan daya ingat pengguna.',
    techs: ['React', 'JavaScript', 'HTML/CSS'],
    liveLink: 'https://gamenewnando.vercel.app',
    githubLink: 'https://github.com/nando131',
    image: '/images/projects/GameNando.png'
  },
  {
    title: 'Brandingfolim X',
    description: 'Studi kasus branding dan proyek portofolio yang dibangun menggunakan Webflow, menunjukkan kemampuan desain dan struktur web.',
    techs: ['Webflow', 'Design', 'Branding'],
    liveLink: 'https://branding-portofolio.vercel.app/',
    githubLink: 'https://github.com/nando131',
    image: '/images/projects/brandingfolim.png'
  },
  {
    title: 'E-Commerce Platform',
    description: 'Platform e-commerce modern dengan fitur cart, checkout, dan payment gateway integration.',
    techs: ['Next.js', 'Stripe', 'TailwindCSS'],
    liveLink: 'https://soraandco.vercel.app/',
    githubLink: 'https://github.com/nando131',
    image: '/images/projects/soraco.png'
  },
];

const containerVariants = {
  visible: { transition: { staggerChildren: 0.1 } }
};

const ProjectsSection = () => {
  return (
    <motion.section
      id="projects"
      style={{
        padding: '100px 20px',
        minHeight: '100vh',
        background: 'transparent',
        position: 'relative',
        overflow: 'hidden'
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
    >
      {/* Decorative Background Elements */}
      <div
        style={{
          position: 'absolute',
          top: '-10%',
          right: '-5%',
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(24, 144, 255, 0.15) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(60px)',
          zIndex: 0
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '-10%',
          left: '-5%',
          width: '350px',
          height: '350px',
          background: 'radial-gradient(circle, rgba(54, 207, 201, 0.15) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(60px)',
          zIndex: 0
        }}
      />

      <div style={{ maxWidth: '1400px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Title level={1} style={{ textAlign: 'center', color: '#001529', marginBottom: '10px' }}>
            <LaptopOutlined /> Proyek & Portofolio
          </Title>
          <Paragraph
            style={{
              textAlign: 'center',
              marginBottom: '70px',
              fontSize: '1.1em',
              color: '#595959',
              maxWidth: '700px',
              margin: '0 auto 70px'
            }}
          >
            Kumpulan karya yang saya buat, menunjukkan kemampuan teknis dan kreativitas.
            <br />
            <strong style={{ color: '#1890ff' }}>Swipe atau klik panah untuk melihat lebih banyak!</strong>
          </Paragraph>
        </motion.div>

        {/* 3D Card Stack Swiper */}
        <div style={{ perspective: '1500px', paddingBottom: '80px' }}>
          <Swiper
            modules={[Navigation, Pagination, Autoplay, EffectCards]}
            effect="cards"
            grabCursor={true}
            navigation={{
              nextEl: '.custom-next',
              prevEl: '.custom-prev'
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true
            }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true
            }}
            cardsEffect={{
              perSlideOffset: 15,
              perSlideRotate: 5,
              rotate: true,
              slideShadows: true
            }}
            style={{
              width: '380px',
              height: '520px',
              margin: '0 auto',
              '--swiper-pagination-color': '#1890ff',
              '--swiper-pagination-bullet-inactive-color': '#d9d9d9'
            }}
          >
            {projectsData.map((project, index) => (
              <SwiperSlide
                key={index}
                style={{
                  borderRadius: '20px',
                  overflow: 'hidden',
                  boxShadow: '0 25px 50px rgba(0, 0, 0, 0.25)'
                }}
              >
                <ProjectCard project={project} index={index} />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '100%',
              maxWidth: '600px',
              display: 'flex',
              justifyContent: 'space-between',
              pointerEvents: 'none',
              zIndex: 10
            }}
          >
            <motion.button
              className="custom-prev"
              whileHover={{ scale: 1.15, x: -5 }}
              whileTap={{ scale: 0.9 }}
              style={{
                width: '55px',
                height: '55px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #1890ff 0%, #36cfc9 100%)',
                border: 'none',
                color: 'white',
                fontSize: '24px',
                cursor: 'pointer',
                boxShadow: '0 8px 25px rgba(24, 144, 255, 0.4)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                pointerEvents: 'all',
                fontWeight: 'bold',
                transition: 'all 0.3s'
              }}
            >
              ‹
            </motion.button>
            <motion.button
              className="custom-next"
              whileHover={{ scale: 1.15, x: 5 }}
              whileTap={{ scale: 0.9 }}
              style={{
                width: '55px',
                height: '55px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #1890ff 0%, #36cfc9 100%)',
                border: 'none',
                color: 'white',
                fontSize: '24px',
                cursor: 'pointer',
                boxShadow: '0 8px 25px rgba(24, 144, 255, 0.4)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                pointerEvents: 'all',
                fontWeight: 'bold',
                transition: 'all 0.3s'
              }}
            >
              ›
            </motion.button>
          </div>
        </div>

        <Divider style={{ margin: '80px 0 40px' }} />

        {/* CTA Section */}
        <motion.div
          style={{ textAlign: 'center' }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Title level={3} style={{ color: '#001529' }}>
            Lihat Lebih Banyak Karya
          </Title>
          <Paragraph style={{ color: '#595959', marginBottom: '30px' }}>
            Ingin melihat seluruh daftar proyek dan studi kasus?
          </Paragraph>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              size="large"
              type="primary"
              icon={<GithubOutlined />}
              onClick={() => window.open('https://github.com/Nando131', '_blank')}
              style={{
                height: '55px',
                padding: '0 40px',
                fontSize: '1.1em',
                borderRadius: '30px',
                background: 'linear-gradient(135deg, #1890ff 0%, #36cfc9 100%)',
                border: 'none',
                boxShadow: '0 8px 25px rgba(24, 144, 255, 0.3)'
              }}
            >
              Kunjungi GitHub Saya
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Global Styles */}
      <style jsx global>{`
        .swiper-pagination {
          bottom: 10px !important;
        }

        .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          transition: all 0.3s;
        }

        .swiper-pagination-bullet-active {
          width: 28px;
          border-radius: 5px;
        }

        .custom-prev:hover,
        .custom-next:hover {
          box-shadow: 0 12px 35px rgba(24, 144, 255, 0.6) !important;
        }

        @media (max-width: 768px) {
          .custom-prev,
          .custom-next {
            width: 45px !important;
            height: 45px !important;
            font-size: 20px !important;
          }
        }
      `}</style>
    </motion.section>
  );
};

export default ProjectsSection;