import ExperienceTimeframe from './ExperienceTimeframe';
import style from './skillCard.module.css';

export default function Education() {
  return (
    <div>
      <span className={style.skillName}>NC State University</span>
      <br />
      <ExperienceTimeframe timeframe="August 2013 - December 2018" />
      <br />
      <b>Bachelor&apos;s Degree:</b> Computer Science
      <br />
      <b>Minor:</b> Japanese
      <br />
      <b>GPA:</b> 4.0
    </div>
  );
}
