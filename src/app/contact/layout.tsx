import Title from '../components/Title';
import style from '../components/contact/contact.module.css';

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={style.layout}>
      <Title title="Contact Me" />
      {children}
    </div>
  );
}
