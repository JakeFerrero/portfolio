import Timeframe from '../utils/Timeframe';
import style from './Education.module.css';

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
      <h3 className={`proper-name`} style={{ color: color }}>
        {school}
      </h3>
      <h4 className={style.location}>{location}</h4>
      <div style={{ marginBottom: '8px' }}>
        <Timeframe timeframe={`${startDate} - ${endDate ?? 'Current'}`} />
      </div>
      <span className="small-text" style={{ fontWeight: 400 }}>
        {text}
      </span>
    </div>
  );
}
