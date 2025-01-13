import Image from 'next/image';
import { useEffect } from 'react';
import pic from '../../images/kyoto_selfie.webp';
import style from './about.module.css';
import AboutGrid from './AboutGrid';
import Education from './Education';

export default function About() {
  useEffect(() => {
    const hobbies = document.querySelector(`.${style.hobbyContainer}`);
    const edu = document.querySelector(`.${style.eduContainer}`);
    const hobbyCover = document.querySelector('#hobbyCover')!;
    const eduCover = document.querySelector('#eduCover')!;

    let hobbiesHasCrossed = false;
    const hobbyObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (!hobbiesHasCrossed) {
              entry.target.classList.add(`${style.show}`);
              hobbyCover.classList.add(`${style.animate}`);
              hobbiesHasCrossed = true;
            }
          } else {
            const isScrollingUp = entry.boundingClientRect.top > 0;
            if (isScrollingUp) {
              entry.target.classList.remove(`${style.show}`);
              hobbyCover.classList.remove(`${style.animate}`);
              hobbiesHasCrossed = false;
            }
          }
        });
      },
      { threshold: .35 }
    );

    // TODO: why any
    hobbyObserver.observe(hobbies as any);

    let eduHasCrossed = false;
    const eduObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (!eduHasCrossed) {
              entry.target.classList.add(`${style.show}`);
              eduCover.classList.add(`${style.animate}`);
              eduHasCrossed = true;
            }
          } else {
            const isScrollingUp = entry.boundingClientRect.top > 0;
            if (isScrollingUp) {
              entry.target.classList.remove(`${style.show}`);
              eduCover.classList.remove(`${style.animate}`);
              eduHasCrossed = false;
            }
          }
        });
      },
      { threshold: .55 }
    );

    eduObserver.observe(edu as any);
  });

  return (
    <>
      {/* TODO: make a util component */}
      <div className="sectionTitle">
        <h2 className="glow-text" data-content="About Me">
          About Me
        </h2>
      </div>
      <div className={style.description}>
        <span>
          I&apos;m a Software Developer with 6 years of experience, specializing in Node.js and Typescript. I have a
          history of developing cloud-based microservices and RESTful APIs that prioritize high availability and
          millisecond response times. Recently I&apos;ve expanded my expertise to frontend development, with a focus on
          mastering React.js, CSS, and refining my understanding of frontend design principles and best practices.
          I&apos;m passionate about writing clean code and developing high-quality software with the customer in mind.
          My focus is on creating intuitive, efficient solutions that address customer needs and drive meaningful
          results. I thrive on solving complex problems and delivering scalable, impactful solutions.
        </span>
      </div>

      <div className={style.gridContainer}>
        <AboutGrid />
      </div>

      <div className={style.eduContainer}>
        <div className={style.coverContainer}>
          <h3 className={style.appearingH3}>Education</h3>
          <div id='eduCover' className={style.cover} />
        </div>
        <div className={style.eduGrid}>
          <Education
            school="NC State University"
            color="#CC0000"
            location="Raleigh, NC"
            text="Bachelor's Degree, Computer Science"
            startDate="August 2013"
            endDate="December 2018"
          />
          <Education
            school="Sophia University"
            color="#9a013d"
            location="Tokyo, Japan"
            text="Minor, Japanese"
            startDate="June 2018"
            endDate="July 2018"
          />
        </div>
      </div>

      {/* ----- HOBBY ----- */}
      <div className={style.hobbyContainer}>
        <div id={style.hobbyDetails}>
          <div className={style.coverContainer}>
            <h3>Hobbies & Interests</h3>
            <div id="hobbyCover" className={style.cover} />
          </div>
          <span>
            In my spare time, I enjoy playing video games, spending time with friends and family, and improving my
            Japanese. I studied Japanese for four years in college and spent a semester abroad in Tokyo, which deepened
            my appreciation for the culture. I am passionate about the language and culture, and I try to visit as often
            as I can.
          </span>
          <span>日本や他の趣味について話すのが好きなので、連絡して遠慮しないでよ！</span>
        </div>
        <div id={style.hobbyPic}>
          <Image src={pic} alt="Kyoto Photo" width={960 * 0.45} height={1280 * 0.45} style={{ borderRadius: '5%' }} loading='lazy' />
        </div>
      </div>
    </>
  );
}
