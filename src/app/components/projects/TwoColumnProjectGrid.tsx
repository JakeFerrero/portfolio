import ProjectCard from './ProjectCard';
import style from './TwoColumnProjectGrid.module.css';

export default function TwoColumnProjectGrid() {
  return (
    <div className={style.container}>
      <div className={style.projectDescriptionWrapper}>
        <ProjectCard
          name="Portfolio"
          link="https://github.com/JakeFerrero/portfolio"
          tools={['Typescript', 'React', 'NextJS']}
        />
        <div className={style.projectDescription}>
          <p className="small-text" style={{ marginBottom: '8px', fontWeight: 400 }}>
            Personal website and portfolio built using React, NextJS, and Typescript.
          </p>
        </div>
      </div>
      <div className={style.projectDescriptionWrapper}>
        <ProjectCard
          name="Pokedex"
          link="https://github.com/JakeFerrero/Pokedex"
          tools={['Typescript', 'React', 'NextJS']}
        />
        <div className={style.projectDescription}>
          <p className="small-text" style={{ marginBottom: '8px', fontWeight: 400 }}>
            A web app that simulates the functionality of a Pokedex. Built using NextJS and Typescript.
            <br />
            (WIP)
          </p>
        </div>
      </div>
      <div className={style.projectDescriptionWrapper}>
        <ProjectCard
          name="Banking API"
          link="https://github.com/JakeFerrero/banking-api"
          tools={['Typescript', 'NodeJS']}
        />
        <div className={style.projectDescription}>
          <p className="small-text" style={{ marginBottom: '8px', fontWeight: 400 }}>
            A basic Banking API - written in Typescript and utilizing NestJS and sqlite - that simulates day-to-day
            operations that a bank employee may use.
          </p>
        </div>
      </div>
    </div>
  );
}
