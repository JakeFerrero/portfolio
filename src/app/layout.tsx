import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.css';
import style from './components/root.module.css';
import Sidebar from './components/sidebar';
import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className={style.container}>
          <Sidebar />
          <div className={style.childContainer}>{children}</div>
        </div>
      </body>
    </html>
  );
}
