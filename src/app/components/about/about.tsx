import Image from 'next/image';
import { useEffect } from 'react';
import pic from '../../images/japan_portfolio_pic.jpeg';
import Education from './Education';
import style from './about.module.css';

export default function About() {
  useEffect(() => {
    const items = document.querySelectorAll(`.${style.item}`);
    const grid = document.querySelector(`.${style.grid}`);
    const hobbies = document.querySelector(`.${style.hobbyContainer}`);
    const cover = document.querySelector(`.${style.cover}`);

    function revealItemsSequentially() {
      items.forEach((child, index) => {
        setTimeout(() => {
          child.classList.add(`${style.slideIn}`);
        }, index * 150);
      });
    }

    function removeItemsSequentially() {
      items.forEach((child, index) => {
        const reverseIndex = items.length - 1 - index;
        setTimeout(() => {
          child.classList.remove(`${style.slideIn}`);
        }, reverseIndex * 160);
      });
    }

    let gridHasCrossed = false;

    const gridObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (!gridHasCrossed) {
              revealItemsSequentially();
              gridHasCrossed = true; // Lock the state
            }
          } else {
            // User scrolls back up past the line
            const isScrollingUp = entry.boundingClientRect.top > 0;
            if (isScrollingUp) {
              removeItemsSequentially();
              gridHasCrossed = false; // Unlock the state
            }
          }
        });
      },
      {
        threshold: 0.85
      }
    );

    // TODO: why any
    gridObserver.observe(grid as any);

    let hobbiesHasCrossed = false;

    const hobbyObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (!hobbiesHasCrossed) {
              entry.target.classList.add(`${style.show}`);
              cover!.classList.add(`${style.animate}`);
              hobbiesHasCrossed = true; // Lock the state
            }
          } else {
            // User scrolls back up past the line
            const isScrollingUp = entry.boundingClientRect.top > 0;
            if (isScrollingUp) {
              entry.target.classList.remove(`${style.show}`);
              cover!.classList.remove(`${style.animate}`);
              hobbiesHasCrossed = false; // Unlock the state
            }
          }
        });
      },
      {
        threshold: 0.4
      }
    );

    // TODO: why any
    hobbyObserver.observe(hobbies as any);
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
      {/* ----- GRID ----- TODO: move to its own component */}
      <div className={style.grid}>
        <div className={style.item} id={style.exp}>
          <h4>
            6 Years
            <br />
            Experience
          </h4>
          <div className={style.itemText}>
            <ul>
              <li>Node.js</li>
              <li>Typescript</li>
              <li>Javascript</li>
            </ul>
          </div>
        </div>
        <div className={style.item} id={style.aws}>
          <h4>AWS</h4>
          <div className={style.itemText}>
            <p>Over 5 years of experience developing scalable microservices leveraging AWS</p>
          </div>
        </div>
        <div className={style.item} id={style.ui}>
          <h4>
            UI / UX
            <br />
            Development
          </h4>
          <div className={style.itemText}>
            <ul>
              <li>React.js</li>
              <li>Next.js</li>
              <li>HTML & CSS</li>
            </ul>
          </div>
        </div>
        <div className={style.item} id={style.leadership}>
          <h4>Leadership</h4>
          <div className={style.itemText}>
            <p>Proven leadership skills as a technical lead for a small group of engineers</p>
          </div>
        </div>
        <div className={style.item} id={style.edu}>
          <h4>Education</h4>
          <Education
            school="NC State University"
            color="#CC0000"
            location="Raleigh, NC"
            text="Bachelor's Degree, Computer Science"
            startDate="August 2013"
            endDate="December 2018"
          />
          <div style={{ padding: '16px' }} />
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
            <div className={style.cover} />
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
          <Image src={pic} alt="japan_pic" width={3024 * 0.14} height={4032 * 0.14} style={{ borderRadius: '5%' }} />
        </div>
      </div>
    </>
  );
}
