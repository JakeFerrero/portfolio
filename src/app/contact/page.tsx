import style from '../components/contact/contact.module.css';
import ContactCard from '../components/contact/ContactCard';
import ContactForm from '../components/contact/ContactForm';
import LinkButton from '../components/LinkButton';

export default function Contact() {
  return (
    <div className={style.mainContentContainer}>
      <div className={style.contactTextColumn}>
        <p className={style.header}>Let&apos;s Chat!</p>
        <p>
          Looking for a motivated developer who can bring a fresh perspective to your team? I can help! I&apos;m always
          interested in talking about new oppurtunities and how I can make a difference. Please do not hesitate to
          contact me via email or Linkedin!
        </p>
        <div className={style.cardContainer}>
          <ContactCard title="Location" text="Morrisville, NC" bootstrapIconName="bi-map" />
          <ContactCard title="Email" text="jake.a.ferrero@gmail.com" bootstrapIconName="bi-envelope" />
        </div>
        <div className={style.buttonContainer}>
          <LinkButton bootstrapIconName="bi-linkedin" link="https://www.linkedin.com/in/jacob-ferrero-1358a6123/" />
          <LinkButton bootstrapIconName="bi-github" link="https://github.com/JakeFerrero" />
        </div>
      </div>
      <div className={style.emailFormColumn}>
        <ContactForm />
      </div>
    </div>
  );
}
