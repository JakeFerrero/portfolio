import style from '../components/contact.module.css';

export default function ContactPageLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={style.contactContainer}>{children}</div>
  );
}