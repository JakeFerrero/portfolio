import Education from '../components/about/Education';
import Experience from '../components/about/Experience';
import ProjectCard from '../components/about/ProjectCard';
import Skill from '../components/about/Skill';
import style from '../components/about/about.module.css';

export default function About() {
  return (
    <>
      <div className={style.expContainer}>
        <div className={style.expColLarge}>
          <p className={style.sectionTitle}>Skills</p>
          <ul className={style.ulist}>
            <li className={style.litem}>
              <Skill
                title="NodeJS + Typescript"
                description="Over 5 years of experience developing robust, cloud-based NodeJS microservices in Typescript."
              />
            </li>
            <li className={style.litem}>
              <Skill
                title="AWS"
                description="Extensive experience developing and maintaining scalable applications leveraging many of AWS's core services."
              />
            </li>
            <li className={style.litem}>
              <Skill
                title="Leadership"
                description="Served as a technical lead, facilitating team cohesion; managing project timelines; and guiding the team to deliver solutions that meet project requirements."
              />
            </li>
            <li className={style.litem}>
              <Skill
                title="React"
                description="Knowledge of building web applications using React and the NextJS framework."
              />
            </li>
          </ul>
        </div>
        <div className={style.expColSmall}>
          <p className={style.sectionTitle}>Education</p>
          <Education />
        </div>
      </div>
      <hr />
      <div className={style.expContainer}>
        <div className={style.expColLarge}>
          <p className={style.sectionTitle}>Experience</p>
          <ul className={style.ulist}>
            <li className={style.litem}>
              <Experience
                company="JupiterOne"
                titles={['Technical Lead', 'Software Engineer']}
                timeframe="April 2022 - May 2024"
                descriptions={[
                  "Led a team of engineers in developing and maintaining the company's largest integration. Worked with cross-organization teams to identify innovation, prioritize work, and set appropriate deadlines. Introduced new tools that significantly reduced overhead and time needed to create new integrations.",
                  'Developed integrations with numerous 3rd-party applications, allowing customers to visualize asset data and their relationships in a single graph. Maintained the platform responsible for running integrations, including SDKs and infrastructure.'
                ]}
              />
            </li>
            <li className={style.litem}>
              <Experience
                company="Genesys"
                titles={['Software Engineer']}
                timeframe="December 2018 - April 2022"
                descriptions={[
                  'Was responsible for developing and maintaining the cloud-based microservices that make up the Integrations feature inside of the Genesys Cloud platform. Designed and built a new service that allowed for rapid integration of customer applications inside Genesys Cloud.'
                ]}
              />
            </li>
            <li className={style.litem}>
              <Experience
                company="Oracle"
                timeframe="May 2016 - December 2016"
                titles={['Cloud Developer (Internship)']}
                descriptions={[
                  'Developed a cloud-based platform that delivered Environment-as-a-Service to our internal partners. Created GitLab CI pipelines that reflected a production environment for testing automation.'
                ]}
              />
            </li>
          </ul>
        </div>
        <div className={style.expColSmall}>
          <p className={style.sectionTitle}>Projects</p>
          <ul className={style.ulist}>
            <li className={style.projectlitem} style={{ marginTop: '16px', marginBottom: '16px' }}>
              <ProjectCard
                name="Banking API"
                link="https://github.com/JakeFerrero/banking-api"
                tools={['Typescript', 'NodeJS']}
                description="A basic Banking API - written in Typescript and utilizing NestJS and sqlite - that simulates day-to-day operations that a bank employee may use."
              />
            </li>
            <li className={style.projectlitem} style={{ marginTop: '16px', marginBottom: '16px' }}>
              <ProjectCard
                name="Portfolio"
                link="https://github.com/JakeFerrero/portfolio"
                tools={['Typescript', 'React', 'NextJS']}
                description="Personal website and portfolio built using React, NextJS, and Typescript."
              />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
