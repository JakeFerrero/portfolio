import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.css';
import style from './components/root.module.css';
import Sidebar from './components/sidebar';
import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // left side, 3 verticle buttons - home, about, contact
  // home is just: name, title, about me and pic, download link with resume
  // contact is an email div

  // on exp page, top is skills, bottom is half exp, hald edu
  // for skills part, list where each li is a one word header, then under that is
  // sentence describing.
  // Ex.
  // AWS
  // Extensive experience developing distributed, cloud-based microservices leveraging many
  // of AWS's services
  // NodeJS + Typescript
  // AWS
  // Leadership
  // CICD??
  // React

  // on exp page, for exp section
  // 2 divs side by side - if page is to short, stack them
  // each element is a COMPONENT - resumeComponent
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
