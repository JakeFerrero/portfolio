'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import selfie from '../../images/website_selfie.jpg';
import style from './home.module.css';

export default function Home() {
  const words = ['Software Engineer', 'UI / UX Developer', 'Backend Developer', 'Japan Enthusiast'];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 3000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [words.length]);

  return (
    <div className={style.container}>
      <div id={style.selfie}>
        <Image src={selfie} alt="selfie" width={436} height={616} style={{ borderRadius: '5%' }} />
      </div>
      <div id={style.details}>
        {/* <h4>Hello, I&apos;m</h4> */}
        <h1 className="glow-text" data-content="Jake Ferrero">
          Jake Ferrero
        </h1>

        <div className={style.coveredTextContainer}>
          <div className={style.cover} />
          <h2 className="glow-text" data-content={words[currentWordIndex]}>
            {words[currentWordIndex]}
          </h2>
        </div>
        <p className="small-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.
        </p>
        <br />
        <br />
        <div className={style.buttonContainer}>
          <button className={style.button}>Download Resume</button>
        </div>
      </div>
    </div>
  );
}
