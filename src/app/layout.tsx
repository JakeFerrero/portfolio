'use client';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.css';
import Sidebar from './components/utils/navbars/Sidebar';
import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  /**
   * TODO: active button should not only be what is clicked on, but also what section
   * the user is in.
   */
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Portfolio</title>
        <link rel="preload" href="./website_selfie.jpg" as="image" />
      </head>
      <body>
        <Sidebar />
        <div>{children}</div>
      </body>
    </html>
  );
}
