import Image from 'next/image';
import { useEffect } from 'react';
import pic from '../../images/japan_portfolio_pic.jpeg';
import style from './about.module.css';

export default function About() {
  useEffect(() => {
    const items = document.querySelectorAll(`.${style.item}`);
    const grid = document.querySelector(`.${style.grid}`);
    const hobbies = document.querySelector(`.${style.hobbyContainer}`);

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
        }, reverseIndex * 100);
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
        threshold: 0.8
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
              hobbiesHasCrossed = true; // Lock the state
            }
          } else {
            // User scrolls back up past the line
            const isScrollingUp = entry.boundingClientRect.top > 0;
            if (isScrollingUp) {
              entry.target.classList.remove(`${style.show}`);
              hobbiesHasCrossed = false; // Unlock the state
            }
          }
        });
      },
      {
        threshold: 0.55
      }
    );

    // TODO: why any
    hobbyObserver.observe(hobbies as any);
  });

  return (
    <>
      <div className="sectionTitle">
        <h1>
          <span>About Me</span>
        </h1>
      </div>
      <div className={style.description}>
        <span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
          eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum.
        </span>
      </div>
      {/* ----- GRID ----- */}
      <div className={style.grid}>
        <div className={style.item} id={style.exp}>
          <h4>
            5 Years
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
            <p>5 years of experience developing scalable microservices leveraging AWS</p>
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
          <h3 style={{ color: 'red' }}>NC State University</h3>
          <span>
            <span style={{ fontSize: '1.3rem', color: 'grey' }}>Raleigh, North Carolina</span> <span>2013 - 2018</span>
          </span>
          <span>Bachelor&apos;s Degree, Computer Science</span>
          <h3 style={{ color: 'maroon' }}>Sophia University</h3>
          <span>
            <span style={{ fontSize: '1.3rem', color: 'grey' }}>Tokyo, Japan</span> <span>2018</span>
          </span>
        </div>
      </div>
      {/* ----- HOBBY ----- */}
      <div className={style.hobbyContainer}>
        <div id={style.hobbyDetails}>
          <h4>Hobbies & Interests</h4>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
          </span>
          <span>日本語のquote</span>
        </div>
        <div id={style.hobbyPic}>
          <Image src={pic} alt="japan_pic" width={3024 * 0.14} height={4032 * 0.14} style={{ borderRadius: '5%' }} />
        </div>
      </div>
    </>
  );
}
