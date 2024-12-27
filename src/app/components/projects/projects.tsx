import { useEffect } from 'react';
import ProjectCard from './ProjectCard';
import style from './projects.module.css';

export default function Projects() {
  useEffect(() => {
    const wrappers = document.querySelectorAll(`.${style.itemWrapper}`);
    const descriptions = document.querySelectorAll(`.${style.projectDescription}`);

    function slideInItemsSequentially() {
      wrappers.forEach((wrapper, index) => {
        setTimeout(() => {
          wrapper.classList.add(`${style.slideIn}`);
        }, index * 250);
      });
    }

    function slideOutItemsSequentially() {
      wrappers.forEach((wrapper, index) => {
        const reverseIndex = wrappers.length - 1 - index;
        setTimeout(() => {
          wrapper.classList.remove(`${style.slideIn}`);
        }, reverseIndex * 250);
      });
    }

    let gridHasCrossed = false;
    let projectAnimationHasFinished = false;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (!gridHasCrossed) {
              slideInItemsSequentially();
              gridHasCrossed = true;
              setTimeout(() => {
                projectAnimationHasFinished = true;
              }, 1000);
            }
          } else {
            const isScrollingUp = entry.boundingClientRect.top > 0;
            if (isScrollingUp) {
              slideOutItemsSequentially();
              gridHasCrossed = false;
              projectAnimationHasFinished = false;
            }
          }
        });
      },
      { threshold: 0.9 }
    );

    let descGridHasCrossed = false;

    const descriptionGridObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (!descGridHasCrossed) {
              descGridHasCrossed = true;
              setTimeout(
                () => {
                  descriptions.forEach((description) => {
                    description.classList.add(`${style.reveal}`);
                  });
                },
                projectAnimationHasFinished ? 0 : 800
              );
            }
          } else {
            const isScrollingUp = entry.boundingClientRect.top > 0;
            if (isScrollingUp) {
              descriptions.forEach((description) => {
                description.classList.remove(`${style.reveal}`);
              });
              descGridHasCrossed = false;
            }
          }
        });
      },
      { threshold: 0.45 }
    );

    const grid = document.querySelector(`.${style.grid}`);
    observer.observe(grid!);
    const descGrid = document.querySelector(`.${style.descriptionGrid}`);
    descriptionGridObserver.observe(descGrid!);
  });

  return (
    <>
      <div className="sectionTitle">
        <h2 className="glow-text" data-content="Projects">
          Projects
        </h2>
      </div>
      <div className={style.gridContainer}>
        <div className={style.grid}>
          <ProjectCard
            name="Portfolio"
            link="https://github.com/JakeFerrero/portfolio"
            tools={['Typescript', 'React', 'NextJS']}
          />
          <ProjectCard
            name="Pokedex"
            link="https://github.com/JakeFerrero/Pokedex"
            tools={['Typescript', 'React', 'NextJS']}
          />
          <ProjectCard
            name="Banking API"
            link="https://github.com/JakeFerrero/banking-api"
            tools={['Typescript', 'NodeJS']}
          />
        </div>
        <div className={style.descriptionGrid}>
          <div className={style.projectDescription}>
            <p className="small-text" style={{ marginBottom: '8px', fontWeight: 400 }}>
              A web app that simulates the functionality of a Pokedex. Built using NextJS and Typescript.
              <br />
              (WIP)
            </p>
          </div>
          <div className={style.projectDescription}>
            <p className="small-text" style={{ marginBottom: '8px', fontWeight: 400  }}>
              A basic Banking API - written in Typescript and utilizing NestJS and sqlite - that simulates day-to-day
              operations that a bank employee may use.
            </p>
          </div>
          <div className={style.projectDescription}>
            <p className="small-text" style={{ marginBottom: '8px', fontWeight: 400  }}>
              Personal website and portfolio built using React, NextJS, and Typescript.
            </p>
          </div>
        </div>
      </div>

      <div className={style.projectsBottom}>
        <span className="small-text">
          Feel free to explore all my projects on <a href="https://github.com/JakeFerrero">GitHub</a>.
        </span>
      </div>
    </>
  );
}
