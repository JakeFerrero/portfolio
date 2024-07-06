import style from '../components/experience.module.css';

export default function Experience() {
  return (
    <>
      <div className={style.header}>
        <h1 className={style.headerText}>About Me</h1>
      </div>
      <div className={style.skillContainer}>
        <ul className={style.ulist}>
          <li className={style.litem}>
            <span className={style.skillTitle}>NodeJS + Typescript</span>
            <br />
            Over 5 years of experience developing robust, cloud-based NodeJS microservices in Typescript.
          </li>
          <li className={style.litem}>
            <span className={style.skillTitle}>AWS</span>
            <br />
            Extensive experience developing and maintaining scalable applications leveraging many of AWS&apos;s core
            services.
          </li>
          <li className={style.litem}>
            <span className={style.skillTitle}>Leadership</span>
            <br />
            Demonstrated communication and management skills as a technical lead, navigating complex challenges and
            delivering high quality software solutions while adhering to timelines and requirements.
          </li>
          <li className={style.litem}>
            <span className={style.skillTitle}>React</span>
            <br />
            Knowledge of building web apps using React and the NextJS framework.
          </li>
        </ul>
      </div>
      <hr />
      <div className={style.expEduWrapper}>
        <div className={style.expEduContainer}>
          <p className={style.expEduHeader}>Experience</p>
          <ul className={style.ulist}>
            <li className={style.litem}>
              <div style={{ paddingBottom: '5px' }}>
                <span className="badge badge-pill bg-secondary">April 2022 - May 2024</span>
              </div>
              <p className={style.skillTitle}>JupiterOne</p>
              <p className={style.expTitle}>Technical Lead</p>
              <p>
                Led a team of engineers in developing and maintaining the company’s largest integration. Worked with
                cross-organization teams to identify innovation; prioritize work; and set appropriate deadlines,
                ensuring the highest quality product was delivered on time. Introduced new tools that significantly
                reduced overhead as well as the time needed to create new integrations.
              </p>
              <p className={style.expTitle}>Software Engineer</p>
              <p>
                Developed and maintained integrations with numerous 3rd party products, allowing customers to visualize
                asset data and their relationships in a single graph. Responsible for maintaining the platform, SDKs,
                and architecture responsible for running integrations.
              </p>
            </li>
            <li>
              <div style={{ paddingBottom: '5px' }}>
                <span className="badge badge-pill bg-secondary">December 2018 - April 2022</span>
              </div>
              <p className={style.skillTitle}>Genesys</p>
              <p className={style.expTitle}>Software Engineer</p>
              <p>TODO</p>
            </li>
            <li>
              <div style={{ paddingBottom: '5px' }}>
                <span className="badge badge-pill bg-secondary">May 2016 - December 2016</span>
              </div>
              <p className={style.skillTitle}>Oracle</p>
              <p className={style.expTitle}>Cloud Developer (Internship)</p>
              <p>TODO</p>
            </li>
          </ul>
        </div>
        <div className={style.expEduContainer}>
          <p className={style.expEduHeader}>Education</p>
          <ul className={style.ulist}>
            <li>
              <div style={{ paddingBottom: '5px' }}>
                <span className="badge badge-pill bg-secondary">August 2013 - December 2018</span>
              </div>
              <p className={style.skillTitle}>NC State University</p>
              <p>
                <b>Bachelor&apos;s Degree:</b> Computer Science
                <br />
                <b>Minor:</b> Japanese
                <br />
                <b>GPA:</b> 4.0
              </p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
