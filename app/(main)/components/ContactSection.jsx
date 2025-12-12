// app/(main)/components/ContactSection.jsx
'use client';

import { Typography, Row, Col, Card, Form, Input, Button, message } from 'antd';
import { MailOutlined, PhoneOutlined, PushpinOutlined, SendOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion';

const { Title, Paragraph } = Typography;
const { Item } = Form;
const { TextArea } = Input;

// Data Kontak Statis (Diambil dari CV Anda)
const contactDetails = [
    { icon: <MailOutlined />, label: "Email", value: "Nandoher00@gmail.com" },
    { icon: <PhoneOutlined />, label: "Telepon", value: "+62 812-8093-4898" },
    { icon: <PushpinOutlined />, label: "Lokasi", value: "Jakarta, Indonesia" }, // Diasumsikan
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};


const ContactSection = () => {
    const [form] = Form.useForm();

    const onFinish = (values) => {
        // Logika pengiriman data form (Harap ganti dengan endpoint server Anda!)
        console.log('Nilai yang dikirim:', values);
        
        // Simulasikan pengiriman berhasil
        message.success('Pesan Anda berhasil terkirim! Saya akan segera membalas.');
        form.resetFields(); // Mengosongkan form
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Gagal mengirim:', errorInfo);
        message.error('Gagal mengirim pesan. Harap periksa kembali isian Anda.');
    };

    return (
        <motion.section 
            id="contact" 
            style={{ padding: '80px 20px', minHeight: '80vh', background: '#e0f7fa' }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={containerVariants}
        >
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <motion.div variants={itemVariants}>
                    <Title level={1} style={{ textAlign: 'center', color: '#001529', marginBottom: '50px' }}>
                        <MailOutlined /> Hubungi Saya
                    </Title>
                </motion.div>

                <Row gutter={[30, 30]} justify="center">
                    {/* Kolom Kiri: Form Kirim Pesan */}
                    <Col xs={24} lg={12}>
                        <motion.div variants={itemVariants}>
                            <Title level={3}>Kirim Pesan ke Saya</Title>
                            <Card style={{ borderRadius: '12px', boxShadow: '0 8px 20px rgba(0, 0, 0, 0.05)' }}>
                                <Form
                                    form={form}
                                    layout="vertical"
                                    name="contact_form"
                                    onFinish={onFinish}
                                    onFinishFailed={onFinishFailed}
                                    autoComplete="off"
                                >
                                    <Item
                                        label="Nama"
                                        name="name"
                                        rules={[{ required: true, message: 'Harap masukkan nama Anda!' }]}
                                    >
                                        <Input placeholder="Nama Anda" size="large" />
                                    </Item>

                                    <Item
                                        label="Email"
                                        name="email"
                                        rules={[{ required: true, type: 'email', message: 'Harap masukkan Email yang valid!' }]}
                                    >
                                        <Input placeholder="Email Anda" size="large" />
                                    </Item>

                                    <Item
                                        label="Pesan"
                                        name="message"
                                        rules={[{ required: true, message: 'Harap masukkan pesan Anda!' }]}
                                    >
                                        <TextArea rows={4} placeholder="Pesan Anda" />
                                    </Item>

                                    <Item style={{ marginBottom: 0 }}>
                                        <Button 
                                            type="primary" 
                                            htmlType="submit" 
                                            size="large"
                                            icon={<SendOutlined />}
                                            block
                                        >
                                            Kirim Sekarang
                                        </Button>
                                    </Item>
                                </Form>
                            </Card>
                        </motion.div>
                    </Col>

                    {/* Kolom Kanan: Detail Kontak */}
                    <Col xs={24} lg={12}>
                        <motion.div variants={itemVariants}>
                            <Title level={3}>Detail Kontak</Title>
                            <Card style={{ borderRadius: '12px', boxShadow: '0 8px 20px rgba(0, 0, 0, 0.05)', minHeight: '100%' }}>
                                <div style={{ display: 'grid', gap: '20px' }}>
                                    {contactDetails.map((detail, index) => (
                                        <div key={index}>
                                            <Paragraph style={{ color: '#595959', margin: 0, fontWeight: 500 }}>
                                                {detail.icon} {detail.label}
                                            </Paragraph>
                                            <Title level={5} style={{ marginTop: '5px', marginBottom: 0, color: '#001529' }}>
                                                {detail.value}
                                            </Title>
                                        </div>
                                    ))}
                                </div>
                            </Card>
                        </motion.div>
                    </Col>
                </Row>
            </div>
        </motion.section>
    );
};

export default ContactSection;