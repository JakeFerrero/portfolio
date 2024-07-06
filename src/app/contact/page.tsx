import style from '../components/contact.module.css';

export default function Contact() {
  return (
    <>
      <div className={style.title}>
        <h1>Contact Me</h1>
      </div>
      <div className={style.text}>
        <p>
          Looking for a motivated developer who can bring a fresh perspective to your team? I can help! I&apos;m always
          interested in talking about new oppurtunities and how I can make a difference. Please do not hesitate to contact
          me via email or Linkedin!
        </p>
        <br />
        <p>Email: jake.a.ferrero@gmail.com</p>
        <p><a href='https://www.linkedin.com/in/jacob-ferrero-1358a6123/'>Linkedin</a></p>
        <p><a href='https://github.com/JakeFerrero'>GitHub</a></p>
      </div>
    </>
  );
}
