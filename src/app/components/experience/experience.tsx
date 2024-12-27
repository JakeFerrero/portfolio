import { useEffect } from 'react';
import ExperienceBlock from './ExperienceBlock';
import style from './experience.module.css';

export default function Experience() {
  useEffect(() => {
    const subsections = document.querySelectorAll(`.${style.subsection}`);

    const subSectionObserver = new IntersectionObserver(
      (entries) => {
        let hasCrossed = false;
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (!hasCrossed) {
              entry.target.classList.add(`${style.show}`);
              hasCrossed = true; // Lock the state
            }
          } else {
            // User scrolls back up past the line
            const isScrollingUp = entry.boundingClientRect.top > 0;
            if (isScrollingUp) {
              entry.target.classList.remove(`${style.show}`);
              hasCrossed = false; // Unlock the state
            }
          }
        });
      },
      {
        threshold: [0.4]
      }
    );

    subsections.forEach((subsection) => subSectionObserver.observe(subsection));
  });

  return (
    <>
      <div className="sectionTitle">
        <h2 className="glow-text" data-content="Experience">
          Experience
        </h2>
      </div>
      <div className={style.subsection}>
        <ExperienceBlock
          company="HubSpot"
          color="#ff5c36"
          titles={['Senior Software Engineer']}
          startDates={['December 2024']}
          bulletPoints={[
            [
              'Frontend Engineer on the Application Lists team, focusing on building and optimizing user-facing features'
            ]
          ]}
        />
      </div>
      <div className={`${style.subsection}`}>
        <ExperienceBlock
          company="JupiterOne"
          color="#02bea5"
          titles={['Technical Lead', 'Software Engineer']}
          startDates={['December 2023', 'April 2022']}
          endDates={['May 2024', 'December 2023']}
          bulletPoints={[
            [
              "Led a team of engineers in developing and maintaining the company's most profitable integration",
              'Worked with cross-organization teams to identify innovation, prioritize work, and set deadlines',
              'Created a tool that significantly reduced development overhead and enabled rapid creation of new integrations'
            ],
            [
              'Built NodeJS integrations to connect third-party products, enabling customers to visualize asset data and relationships in a unified graph',
              'Implemented event-driven ingestion in our largest integration, enabling real-time updates of customer assets - a first for the company',
              'Served as incident commander during emergencies, diagnosing root causes, deploying fixes, and presenting mitigation strategies to stakeholders',
              'Introduced standardized observability with New Relic, improving product health insights and accelerating emergency responses'
            ]
          ]}
        />
      </div>
      <div className={style.subsection}>
        <ExperienceBlock
          company="Genesys"
          color="#ff4f1f"
          titles={['Software Engineer']}
          startDates={['December 2018']}
          endDates={['April 2022']}
          bulletPoints={[
            [
              'Developed the RESTful API responsible for serving and maintaining integrations inside Genesys Cloud',
              'Delivered a microservice written in Typescript that allowed for rapid integration of customer applications inside the Genesys Cloud platform',
              'Migrated our API to a fully serverless architecture, cutting cost and deployment times while maintaining millisecond response times and high availability',
              "Ensured the team's services were FedRAMP compliant and appropriately handled PII and sensitive data"
            ]
          ]}
        />
      </div>
      <div className={style.subsection}>
        <ExperienceBlock
          company="Oracle"
          color="#C74634"
          titles={['Cloud Developer Co-op']}
          startDates={['May 2016']}
          endDates={['December 2016']}
          bulletPoints={[
            [
              'Developed a cloud-based platform in Go that delivered Environment-as-a-Service to customers',
              'Created GitLab Continuous Integration pipelines that reflected a production environment for testing automation'
            ]
          ]}
        />
      </div>
    </>
  );
}
