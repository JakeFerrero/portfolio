import { useEffect, useState } from 'react';
import { isScreenUnderThreshold } from '../utils/deviceDetection';
import ProjectCard from './ProjectCard';
import style from './projects.module.css';
import { useProjectObserver } from './projectsObserver';
import TwoColumnProjectGrid from './TwoColumnProjectGrid';

export default function Projects() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(isScreenUnderThreshold(1140));
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useProjectObserver(isSmallScreen);

  return (
    <>
      <div className="sectionTitle">
        <h2 className="glow-text" data-content="Projects">
          Projects
        </h2>
      </div>
      {isSmallScreen ? (
        <TwoColumnProjectGrid />
      ) : (
        <div className={style.gridContainer}>
          <div className={style.grid}>
            <div className={style.itemAnimationWrapper}>
              <ProjectCard
                name="Portfolio"
                link="https://github.com/JakeFerrero/portfolio"
                tools={['Typescript', 'React', 'NextJS']}
              />
            </div>
            <div className={style.itemAnimationWrapper}>
              <ProjectCard
                name="Pokedex"
                link="https://github.com/JakeFerrero/Pokedex"
                tools={['Typescript', 'React', 'NextJS']}
              />
            </div>
            <div className={style.itemAnimationWrapper}>
              <ProjectCard
                name="Banking API"
                link="https://github.com/JakeFerrero/banking-api"
                tools={['Typescript', 'NodeJS']}
              />
            </div>
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
              <p className="small-text" style={{ marginBottom: '8px', fontWeight: 400 }}>
                A basic Banking API - written in Typescript and utilizing NestJS and sqlite - that simulates day-to-day
                operations that a bank employee may use.
              </p>
            </div>
            <div className={style.projectDescription}>
              <p className="small-text" style={{ marginBottom: '8px', fontWeight: 400 }}>
                Personal website and portfolio built using React, NextJS, and Typescript.
              </p>
            </div>
          </div>
        </div>
      )}

      <div className={style.projectsBottom}>
        <span className="small-text">
          Feel free to explore all my projects on <a href="https://github.com/JakeFerrero">GitHub</a>.
        </span>
      </div>
    </>
  );
}
