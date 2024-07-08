import Image from 'next/image';
import selfie from '../public/website_selfie.jpg';
import style from './home.module.css';

export default function Home() {
  return (
    <>
      <div className={style.homeContainer}>
        <div className={style.selfieContainer}>
          <Image src={selfie} alt="Me" width={2426 * 0.2} height={3424 * 0.2} priority style={{ borderRadius: '30px' }} />
        </div>
        <div className={style.textContainer}>
          <div>
            <h1 style={{ color: 'cornflowerblue', fontFamily: 'Copperplate', fontSize: '48px', margin: 0 }}>Jake Ferrero</h1>
            <h2 style={{fontFamily: 'Copperplate', fontSize: '38px', margin: 0}}>Software Engineer</h2>
            <br />
            <p>
              I&apos;m a Software Developer with over 5 years of experience; particularly in backend development,
              creating and maintaining cloud-based microservices and RESTful APIs with high availability and millisecond
              response times. I have a passion for innovation, solving problems, and delivering high-quality, scalable
              solutions.
            </p>
            <br />
            <a href="/portfolio/resume.pdf" download="Jake Ferrero Resume" style={{textDecoration: 'none'}}>
              <button type="button" className="btn btn-primary" style={{ display: 'flex', alignItems: 'center', background: '#252525', border: '2px solid #252525' }}>
                <i className="bi bi-download" />
                &nbsp;Download Resume
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
