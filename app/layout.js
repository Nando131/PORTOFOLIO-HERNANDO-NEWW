// app/layout.js
import './globals.css';
import AntdRegistry from './AntdRegistry';
import Header from './(ui)/Header';
import Footer from './(ui)/Footer';

export const metadata = {
  title: 'Portofolio Developer | Nando Dev',
  description: 'Portofolio modern Single Page Application (SPA) menggunakan Next.js dan Framer Motion.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AntdRegistry>
          <div className="layout-container" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            
            <Header /> 
            
            <main style={{ flexGrow: 1, marginTop: 64 }}> 
              {children}
            </main>

            <Footer />
            
          </div>
        </AntdRegistry>
      </body>
    </html>
  );
}