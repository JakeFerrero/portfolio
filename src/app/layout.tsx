'use client';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.css';
import Sidebar from './components/utils/navbars/Sidebar';
import './globals.css';
import { useDeviceDetection } from './components/utils/useDeviceDetection';
import Navbar from './components/utils/navbars/Navbar';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const { isUnderWidth } = useDeviceDetection(700);
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
        { isUnderWidth ? <Navbar /> : <Sidebar /> }
        <div>{children}</div>
      </body>
    </html>
  );
}
