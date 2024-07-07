import Image from 'next/image';
import selfie from '../public/website_selfie.jpg';
import style from './home.module.css';

export default function Home() {
  return (
    <>
      <div className={style.homeContainer}>
        <div className={style.selfieContainer}>
          <Image src={selfie} alt="Me" width={2426 * 0.2} height={3424 * 0.2} priority />
        </div>
        <div className={style.textContainer}>
          <div>
            <h1 style={{ color: 'cornflowerblue' }}>Jake Ferrero</h1>
            <h3>Software Engineer</h3>
            <br />
            <p>
              I&apos;m a Software Developer with over 5 years of experience; particularly in backend development,
              creating and maintaining cloud-based microservices and RESTful APIs with high availability and millisecond
              response times. I have a passion for innovation, solving problems, and delivering high-quality, scalable
              solutions.
            </p>
            <br />
            <button type="button" className={`btn btn-primary`}>
              Download Resume
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
