import style from '../components/contact/contact.module.css';
import Title from '../components/titleCard';

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={style.layout}>
      <Title title="Contact Me" />
      {children}
    </div>
  );
}
