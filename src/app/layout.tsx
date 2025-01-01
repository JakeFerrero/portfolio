'use client';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.css';
import { isScreenUnderThreshold } from './components/utils/deviceDetection';
import Navbar from './components/utils/navbars/Navbar';
import Sidebar from './components/utils/navbars/Sidebar';
import './globals.css';
import { useEffect, useState } from 'react';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(isScreenUnderThreshold(700));
    };

    window.addEventListener('resize', handleResize);
    handleResize();  // Check initial size

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  /**
   * TODO: active button should not only be what is clicked on, but also what section
   * the user is in.
   */
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Portfolio</title>
      </head>
      <body>
        {isSmallScreen ? <Navbar /> : <Sidebar />}
        <div>{children}</div>
      </body>
    </html>
  );
}
