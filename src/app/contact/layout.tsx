import style from '../components/root/root.module.css';
import Title from '../components/titleCard';

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={style.childPage}>
      <Title title="Contact Me" />
      {children}
    </div>
  );
}
