import style from './experience.module.css';
import Timeframe from './timeframe';

interface Props {
  company: string;
  titles: string[];
  descriptions: string[];
  timeframe: string;
}

export default function ExperienceCard({ company, titles, descriptions, timeframe }: Props) {
  const rows = [];
  for (let i = 0; i < titles.length; i++) {
    rows.push(
      <>
      <p className={style.expSubtitle}>{titles[i]}</p>
      <p>{descriptions[i]}</p>
      </>
    );
  }

  return (
    <div>
      <p className={style.expTitle}>{company}</p>
      <Timeframe timeframe={timeframe} />
      {rows}
    </div>
  );
}
