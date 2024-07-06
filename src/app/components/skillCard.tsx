import style from './skillCard.module.css';

interface Props {
  title: string;
  description: string;
}

export default function SkillCard({ title, description }: Props) {
  return (
    <div>
      <span className={style.skillName}>{title}</span>
      <br />
      {description}
    </div>
  );
}
