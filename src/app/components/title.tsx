import style from './title.module.css';

interface Props {
  title: string;
}

export default function Title({ title }: Props) {
  return (
    <div className={style.titleContainer}>
      <h1 className={style.titleText}>{title}</h1>
    </div>
  )
}