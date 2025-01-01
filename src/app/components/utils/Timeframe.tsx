import style from './Timeframe.module.css';

interface Props {
  timeframe: string;
}

export default function Timeframe({ timeframe }: Props) {
  return (
    <div className={style.timeframe}>
      <span className="small-text" style={{ fontWeight: 400 }}>
        {timeframe}
      </span>
    </div>
  );
}
