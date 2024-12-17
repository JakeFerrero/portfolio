'use client';
import Image from 'next/image';
import { useEffect } from 'react';
import selfie from '../../images/website_selfie.jpg';
import style from './home.module.css';

export default function Home() {
  useEffect(() => {
    const words = document.querySelectorAll(`.${style.rotatingWords} span`);
    let current = 0;

    function showNextWord() {
      if (words.length) {
        words[current].classList.remove(`${style.animate}`);
        current = (current + 1) % words.length;
        words[current].classList.add(`${style.animate}`);
      }
    }

    setInterval(showNextWord, 3000);
  });

  return (
    <div className={style.container}>
      <div id={style.selfie}>
        <Image src={selfie} alt="selfie" width={436} height={616} style={{ borderRadius: '5%' }} />
        {/* <img src="../../../public/website_selfie.jpg" width="436px" height="616px" style={{ borderRadius: '5%' }} /> */}
      </div>
      <div id={style.details}>
        <h1>
          <span>Jake Ferrero</span>
        </h1>
        <h2>
          <div className={style.carousel}>
            <span>I&apos;m a&nbsp;</span>
            <div className={style.rotatingWords}>
              <span className={`${style.rotatingWord} ${style.animate}`}>Developer</span>
              <span className={style.rotatingWord}>Software Engineer</span>
              <span className={style.rotatingWord}>UI / UX Developer</span>
              <span className={style.rotatingWord}>Backend Developer</span>
              <span className={style.rotatingWord}>Leader</span>
            </div>
          </div>
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.
        </p>
        <div className={style.buttonContainer}>
          <button className={style.button}>Download Resume</button>
        </div>
      </div>
    </div>
  );
}
