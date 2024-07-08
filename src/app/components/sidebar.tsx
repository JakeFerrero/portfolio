import Link from 'next/link';
import style from './sidebar.module.css';

export default function Sidebar() {
  return (
    <div className={`vstack gap-3 justify-content-center ${style.sidebarContainer}`}>
      <Link href="/">
        <button type="button" className={`btn btn-secondary ${style.myButton}`}>
          <i className="bi bi-house-fill h4" />
        </button>
      </Link>
      <Link href="/about">
        <button type="button" className={`btn btn-secondary ${style.myButton}`}>
          <i className="bi bi-person-fill h4" />
        </button>
      </Link>
      <Link href="/contact">
        <button type="button" className={`btn btn-secondary ${style.myButton}`}>
          <i className="bi bi-envelope-fill h4" />
        </button>
      </Link>
    </div>
  );
}
