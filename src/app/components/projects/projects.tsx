import { useEffect } from 'react';
import style from './projects.module.css';

export default function Projects() {
  useEffect(() => {
    const projects = document.querySelectorAll(`.${style.card}`);
    const projectContainers = document.querySelectorAll(`.${style.cardContainer}`);

    const projectObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add(`${style.slideIn}`);
            }, index * 250);
            projectObserver.unobserve(entry.target); // Stop observing once the animation has run

            // Add .before-visible after the slide-in animation is done
            setTimeout(() => {
              projectContainers.forEach((container) => {
                container.classList.add(`${style.beforeVisible}`);
              });
            }, 1000); // Delay to match the slide-in duration
          }
        });
      },
      {
        threshold: 0.5
      }
    );

    projects.forEach((project) => projectObserver.observe(project));
  });

  return (
    <>
      <div className="sectionTitle">
        <h1>
          <span>Projects</span>
        </h1>
      </div>
      <p>
        Feel free to explore a variety of projects I&apos;ve worked on by visiting my{' '}
        <a href="https://github.com/JakeFerrero">GitHub</a> page. Highlighted below are a few recent ones that I&apos;m
        particularly proud of.
      </p>
      <div className={style.projectsGrid}>
        <div className={style.cardContainer}>
          <div className={`${style.card} ${style.card1}`}></div>
        </div>
        <div className={style.cardContainer}>
          <div className={`${style.card} ${style.card2}`}></div>
        </div>
        <div className={style.cardContainer}>
          <div className={`${style.card} ${style.card3}`}></div>
        </div>
      </div>
    </>
  );
}
