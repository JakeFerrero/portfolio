import style from './ContactForm.module.css';

export default function ContactForm() {
  return (
    <form action="https://api.web3forms.com/submit" method="POST">
      <input type="hidden" name="access_key" value="73b8b464-55bc-49ac-8db0-8e41c395a9a8" />
      <input className={style.formTextField} type="email" name="email" placeholder="Email" required />
      <br /><br />
      <input className={style.formTextField} type="text" name="topic" placeholder="Subject" required />
      <br /><br />
      <textarea className={style.formTextField} style={{ height: '150px' }} name="message" placeholder="Message" required></textarea>
      <br /><br />
      <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />
      <button type="submit" className="btn btn-primary" style={{ display: 'flex', alignItems: 'center', background: '#252525', border: '2px solid #252525' }}>
        <i className="bi bi-send" />
        &nbsp;Send
      </button>
    </form>
  );
}