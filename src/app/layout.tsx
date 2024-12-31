import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.css';
import './globals.css';
import Sidebar from './components/utils/Sidebar';

export default function RootLayout({ children }: { children: React.ReactNode }) {
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
