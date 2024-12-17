import Image from 'next/image';
import { useEffect } from 'react';
import pic from '../../images/japan_portfolio_pic.jpeg';
import style from './about.module.css';

export default function About() {
  useEffect(() => {
    const items = document.querySelectorAll(`.${style.gridContainer} .${style.item}`);

    function revealItemsSequentially() {
      items.forEach((child, index) => {
        let order = 0;
        if (index === 4) order = 2;
        else if (index % 2 !== 0) order = 1;

        setTimeout(() => {
          child.classList.add(`${style.slideIn}`);
        }, order * 250);
      });
    }

    const aboutObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            revealItemsSequentially();
            aboutObserver.unobserve(entry.target); // Only trigger on parent
          }
        });
      },
      {
        threshold: 0.5
      }
    );

    aboutObserver.observe(document.querySelector(`.${style.gridContainer}`) as any);
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
      <div className={style.gridContainer}>
        <div className={style.item}>
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
        <div className={style.item}>
          <h4>AWS</h4>
          <div className={style.itemText}>
            <p>5 years of experience developing scalable microservices leveraging core AWS services</p>
          </div>
        </div>
        <div className={style.item}>
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
        <div className={style.item}>
          <h4>Leadership</h4>
          <div className={style.itemText}>
            <p>Proven leadership skills as a technical lead for a small group of engineers</p>
          </div>
        </div>
        <div className={`${style.item} ${style.item5}`}>
          <h4>Education</h4>
          <div className={style.exp}>
            <div className={style.expIcon}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                className="bi bi-mortarboard-fill"
                viewBox="0 0 16 16"
              >
                <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917z" />
                <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466z" />
              </svg>
            </div>
            <h3 style={{ color: 'red' }}>NC State University</h3>
            <p style={{ margin: '1rem 0' }}>August 2013 - December 2018</p>
            <ul className={style.expList}>
              <li>Bachelor&apos;s of Science: Computer Science</li>
              <li>Minor: Japanese</li>
              <li>GPA: 4.0</li>
            </ul>
          </div>
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
          <br />
          <br />
          <span>
            日本語のquote
          </span>
        </div>
        <div id={style.hobbyPic}>
          <Image src={pic} alt="japan_pic" width={3024 * .14} height={4032 * .14} style={{ borderRadius: '5%' }} />
        </div>
      </div>
    </>
  );
}
