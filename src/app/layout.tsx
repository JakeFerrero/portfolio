import 'bootstrap/dist/css/bootstrap.css';
import style from './components/main.module.css';
import Sidebar from './components/sidebar';
import sidebarStyle from './components/sidebar.module.css';
import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // left side, 3 verticle buttons - home, about, contact
  // home is just: name, title, about me and pic, download link with resume
  // contact is an email div
  return (
    <html lang="en">
      <body>
        <div className={style.wrapper}>
          <div className={sidebarStyle.sidebarContainer}>
            <Sidebar />
          </div>
          <div className={style.childContainer}>{children}</div>
        </div>
      </body>
    </html>
  );
}
