import style from '../components/root/root.module.css';
import Title from '../components/titleCard';

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={style.childPage}>
      <Title title="About Me" />
      {children}
    </div>
  );
}