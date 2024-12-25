import Timeframe from '../utils/Timeframe';
import style from './ExperienceBlock.module.css';

interface Props {
  company: string;
  color: string;
  titles: string[];
  startDates: string[];
  bulletPoints: string[][];
  endDates?: string[];
}

export default function ExperienceBlock({ color, titles, company, bulletPoints, startDates, endDates }: Props) {
  const rows = [];
  for (let i = 0; i < titles.length; i++) {
    rows.push(
      <div key={i}>
        <h4>{titles[i]}</h4>
        <div style={{ marginBottom: '8px' }}>
          <Timeframe timeframe={`${startDates[i]} - ${endDates?.[i] ?? 'Current'}`} />
        </div>
        <ul className={style.expList}>
          {bulletPoints[i].map((point, index) => {
            return (
              <li className="small-text" key={index} style={{ fontWeight: 400 }}>
                {point}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }

  return (
    <div className={style.exp}>
      <div className={style.expIcon}>
        <i className="bi bi-briefcase-fill" style={{ fontSize: '24px' }}></i>
      </div>
      <h3 className={`proper-name`} style={{ color: color }}>
        {company}
      </h3>
      {rows}
    </div>
  );
}
