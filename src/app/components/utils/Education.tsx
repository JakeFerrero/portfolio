import style from './Education.module.css';
import Timeframe from './Timeframe';

interface Props {
  school: string;
  color: string;
  location: string;
  text: string;
  startDate: string;
  endDate: string;
}

export default function Education({ school, color, location, text, startDate, endDate }: Props) {
  return (
    <div className={style.edu}>
      <div className={style.eduIcon}>
        <i className="bi bi-briefcase-fill" style={{ fontSize: '20px' }}></i>
      </div>
      <h4 style={{ color: color, marginBottom: 0 }}>{school}</h4>
      <div className={style.location}>{location}</div>
      <div>
        <Timeframe timeframe={`${startDate} - ${endDate ?? 'Current'}`} />
      </div>
      <span className="small-text">{text}</span>
    </div>
  );
}
