'use client';
import Image from 'next/image';
import headshot from '../../images/headshot.jpg';
import selfie from '../../images/website_selfie.jpg';
import { useDeviceDetection } from '../utils/useDeviceDetection';
import style from './home.module.css';
import { useWordSwitcher } from './useWordSwitcher';

export default function Home() {
  const { isUnderWidth } = useDeviceDetection(1160);
  const { currentWord, animate } = useWordSwitcher();

  return (
    <div className={style.container}>
      {isUnderWidth ? (
        <Image src={headshot} alt="headshot" width={1490 * 0.18} height={1608 * 0.18} style={{ borderRadius: '50%' }} priority />
      ) : (
        <div id={style.selfie}>
          <Image src={selfie} alt="selfie" width={436} height={616} style={{ borderRadius: '5%' }} priority />
        </div>
      )}

      <div id={style.details}>
        <h1 className="glow-text" data-content="Jake Ferrero">
          Jake Ferrero
        </h1>

        <div className={style.coveredTextContainer}>
          <div className={`${style.cover} ${animate ? `${style.reveal}` : ''}`} />
          <h2 id="changing-text" className="glow-text" data-content={currentWord}>
            {currentWord}
          </h2>
        </div>

        <div className={style.descriptionContainer}>
          <p className="small-text">
            Software developer driven by a passion for learning new technologies and solving complex problems with
            innovative solutions.
          </p>
        </div>

        <div className={style.buttonContainer}>
          <a href="/portfolio/resume.pdf" download="Jake Ferrero Resume">
            <button className={style.button}>Download Resume</button>
          </a>
        </div>
      </div>
    </div>
  );
}
