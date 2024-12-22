import IconAndLabel from '../utils/IconAndLabel';
import style from './contact.module.css';
import ContactForm from './ContactForm';

export default function Contact() {
  return (
    <>
      <div className="sectionTitle">
        <h1 className="glow-text" data-content="Contact Me">
          Contact Me
        </h1>
      </div>
      <div className={style.container}>
        <div className={style.grid}>
          <h4>Let&apos;s Chat!</h4>
          <p>
            Looking for a motivated developer who can bring a fresh perspective to your team? I can help! I&apos;m
            always interested in talking about new oppurtunities and how I can make a difference. Please do not hesitate
            to contact me via email or Linkedin!
          </p>
          <IconAndLabel bootstrapIconName="bi-map" label="Location" text="Morrisville, NC" />
          <IconAndLabel bootstrapIconName="bi-envelope" label="Email" text="jake.a.ferrero@gmail.com" />
          <div className={style.sideBySide}>
            <a href="https://www.linkedin.com/in/jacob-ferrero-1358a6123/">
              <button className={style.button}>
                <i className={'bi bi-linkedin h4'} />
              </button>
            </a>
            <a href="https://github.com/JakeFerrero">
              <button className={style.button}>
                <i className={'bi bi-github h4'} />
              </button>
            </a>
          </div>
        </div>
        <div className={style.formContainer}>
          <ContactForm />
        </div>
      </div>
    </>
  );
}
