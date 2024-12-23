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
      { threshold: 0.8 }
    );

    const grid = document.querySelector(`.${style.grid}`);
    observer.observe(grid!);
    const descGrid = document.querySelector(`.${style.descriptionGrid}`);
    descriptionGridObserver.observe(descGrid!);
  });

  return (
    <>
      <div className="sectionTitle">
        <h1 className="glow-text" data-content="Projects">
          Projects
        </h1>
      </div>
      <div className={style.gridContainer}>
        <div className={style.grid}>
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
        <div className={style.descriptionGrid}>
          <div className={style.projectDescription}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>
          </div>
          <div className={style.projectDescription}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>
          </div>
          <div className={style.projectDescription}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>
          </div>
        </div>
      </div>

      <div style={{width: '100%', textAlign: 'right', marginBottom: '32px'}}>
        <p className="small-text">
          Feel free to explore all my projects on <a href="https://github.com/JakeFerrero">GitHub</a>.
        </p>
      </div>
    </>
  );
}
