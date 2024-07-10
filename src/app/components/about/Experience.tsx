import style from './about.module.css';
import ExperienceTimeframe from './ExperienceTimeframe';

interface Props {
  company: string;
  titles: string[];
  descriptions: string[];
  timeframe: string;
}

export default function Experience({ company, titles, descriptions, timeframe }: Props) {
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
      <ExperienceTimeframe timeframe={timeframe} />
      {rows}
    </div>
  );
}
