import style from '../components/contact.module.css';
import ContactCard from '../components/ContactCard';
import ContactForm from '../components/ContactForm';
import Title from '../components/title';

export default function Contact() {
  return (
    <>
      <Title title="Contact Me" />
      <div className={style.expContainer}>
        <div className={style.expColSmall}>
          <p className={style.expSubtitle}>Let&apos;s Chat!</p>
          <p>
            Looking for a motivated developer who can bring a fresh perspective to your team? I can help! I&apos;m
            always interested in talking about new oppurtunities and how I can make a difference. Please do not hesitate
            to contact me via email or Linkedin!
          </p>
          <div style={{ display: 'flex' }}>
            <ContactCard />
            <ContactCard />
          </div>
          <div style={{ display: 'flex' }}>
            <a href="https://www.linkedin.com/in/jacob-ferrero-1358a6123/">
              <button type="button" className={`btn btn-secondary ${style.roundButton}`}>
                <i className="bi bi-envelope-fill h4" />
              </button>
            </a>
            <a href="https://github.com/JakeFerrero">
              <button type="button" className={`btn btn-secondary ${style.roundButton}`}>
                <i className="bi bi-envelope-fill h4" />
              </button>
            </a>
          </div>
        </div>
        <div className={style.expColLarge}>
          <ContactForm />
        </div>
      </div>
    </>
  );
}
