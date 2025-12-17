// app/layout.js
import './globals.css';
import AntdRegistry from './AntdRegistry';
import LayoutComponents from './(ui)/LayoutComponents';

export const metadata = {
  title: 'Portofolio Developer | Nando Dev',
  description: 'Portofolio modern Single Page Application (SPA) menggunakan Next.js dan Framer Motion.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>
        <AntdRegistry>
          <LayoutComponents>
            {children}
          </LayoutComponents>
        </AntdRegistry>
      </body>
    </html>
  );
}