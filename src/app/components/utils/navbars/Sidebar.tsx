import Link from 'next/link';
import style from './Sidebar.module.css';
import SidebarButton from './SidebarButton';

export default function Sidebar() {
  return (
    <div className={`${style.sidebar}`}>
      {['home', 'about', 'experience', 'projects', 'contact'].map((type: string, index: number) => (
        <Link key={index} href={`#${type}`}>
          <SidebarButton key={index} id={index} type={type} activeIndex={0} setActiveIndex={() => {}} />
        </Link>
      ))}
    </div>
  );
}
