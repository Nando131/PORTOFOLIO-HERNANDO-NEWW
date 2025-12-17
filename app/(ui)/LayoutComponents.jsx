// app/(ui)/LayoutComponents.jsx
'use client';

import Header from './Header';
import Footer from './Footer';
import Preloader from '../(main)/components/Preloader';

export default function LayoutComponents({ children }) {
  return (
    <Preloader>
      <div 
        className="layout-container" 
        style={{ 
          minHeight: '100vh', 
          display: 'flex', 
          flexDirection: 'column' 
        }}
      >
        <Header />
        
        <main style={{ flexGrow: 1, marginTop: 64 }}>
          {children}
        </main>

        <Footer />
      </div>
    </Preloader>
  );
}