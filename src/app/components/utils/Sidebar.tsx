import Link from 'next/link';
import style from './Sidebar.module.css';

export default function Sidebar() {
  return (
    <div className={`${style.sidebar}`}>
      <Link href="#home">
        <button type="button" className={style.sidebarButton}>
          <i className="bi bi-house-fill h4" style={{ marginBottom: 0 }} />
        </button>
      </Link>
      <Link href="#about">
        <button type="button" className={style.sidebarButton}>
          <i className="bi bi-person-fill h4" style={{ marginBottom: 0 }} />
        </button>
      </Link>
      <Link href="#experience">
        <button type="button" className={style.sidebarButton}>
          <i className="bi bi-briefcase-fill h4" style={{ marginBottom: 0 }} />
        </button>
      </Link>
      <Link href="#projects">
        <button type="button" className={style.sidebarButton}>
          <i className="bi bi-code-slash h4" style={{ marginBottom: 0 }} />
        </button>
      </Link>
      <Link href="#contact">
        <button type="button" className={style.sidebarButton}>
          <i className="bi bi-envelope-fill h4" style={{ marginBottom: 0 }} />
        </button>
      </Link>
    </div>
  );
}
