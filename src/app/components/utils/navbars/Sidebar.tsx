import Link from 'next/link';
import { useState } from 'react';
import style from './Sidebar.module.css';
import SidebarButton from './SidebarButton';

export default function Sidebar() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className={`${style.sidebar}`}>
      {['home', 'about', 'experience', 'projects', 'contact'].map((type: string, index: number) => (
        <Link href={`#${type}`}>
          <SidebarButton id={index} type={type} activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
        </Link>
      ))}
    </div>
  );
}
