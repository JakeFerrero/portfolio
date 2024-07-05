import style from './sidebar.module.css';

export default function Sidebar() {
  return (
    <div className="vstack gap-3 justify-content-center">
      <button type="button" className={`btn btn-secondary ${style.myButton}`}>
        Home
      </button>
      <button type="button" className={`btn btn-secondary ${style.myButton}`}>
        Experience
      </button>
      <button type="button" className={`btn btn-secondary ${style.myButton}`}>
        Contact
      </button>
    </div>
  );
}
