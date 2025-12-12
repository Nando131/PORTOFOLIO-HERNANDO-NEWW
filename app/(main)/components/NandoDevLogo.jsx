    // app/(main)/components/NandoDevLogo.jsx
    import React from 'react';
    import { Typography } from 'antd';

    const { Title } = Typography;

    export default function NandoDevLogo({ fontSize = '1.5em', style = {} }) {
        // Style logo yang sama dengan header lu
        return (
            <Title 
                level={3} 
                style={{ 
                    margin: 0, 
                    fontSize: fontSize,
                    ...style,
                }}
            >
                <span style={{ color: '#1890ff', fontWeight: 'bold' }}>Nando </span>
                <span style={{ color: 'white', fontWeight: 'normal' }}>Dev</span>
            </Title>
        );
    }