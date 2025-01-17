'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import headshot from '../../images/headshot.webp';
import selfie from '../../images/website_selfie.webp';
import { isScreenUnderThreshold } from '../utils/deviceDetection';
import style from './home.module.css';
import { useWordSwitcher } from './useWordSwitcher';

export default function Home() {
  const { currentWord, animate } = useWordSwitcher();
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(isScreenUnderThreshold(1160));
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Check initial size

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className={style.container}>
      {isSmallScreen ? (
        <Image
          src={headshot}
          alt="headshot"
          width={1280 * 0.25}
          height={1280 * 0.25}
          style={{ borderRadius: '50%' }}
          priority
          loading="eager"
          placeholder='blur'
        />
      ) : (
        <div id={style.selfie}>
          <Image
            src={selfie}
            alt="selfie"
            width={1920 * .25}
            height={2400 * .25}
            style={{ borderRadius: '5%' }}
            priority
            loading="eager"
            placeholder='blur'
          />
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
