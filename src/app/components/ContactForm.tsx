import style from '../components/contact.module.css';

export default function ContactForm() {
  return (
    <form action="https://api.web3forms.com/submit" method="POST">
      <input type="hidden" name="access_key" value="73b8b464-55bc-49ac-8db0-8e41c395a9a8" />
      <input className={style.textField} type="text" name="topic" placeholder="Subject" required />
      <br />
      <br />
      <input className={style.textField} type="email" name="email" placeholder="Email" required />
      <br />
      <br />
      <textarea className={style.textField} style={{ height: '150px' }} name="message" placeholder="Message" required></textarea>
      <br />
      <br />
      <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />
      <button type="submit" className="btn btn-primary" style={{ display: 'flex', alignItems: 'center' }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-envelope"
          viewBox="0 0 16 16"
        >
          <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"></path>
        </svg>
        &nbsp;Send
      </button>
    </form>
  );
}
