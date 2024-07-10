import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.css';
import style from './components/root/root.module.css';
import Sidebar from './components/sidebar';
import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Sidebar />
        <div className={style.contentContainer}>{children}</div>
      </body>
    </html>
  );
}
