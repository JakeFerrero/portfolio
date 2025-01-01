import Link from 'next/link';
import { useState } from 'react';
import style from './Sidebar.module.css';
import SidebarButton from './SidebarButton';

export default function Sidebar() {
  return (
    <div className={`${style.sidebar}`}>
      {['home', 'about', 'experience', 'projects', 'contact'].map((type: string, index: number) => (
        <Link href={`#${type}`}>
          <SidebarButton id={index} type={type} activeIndex={0} setActiveIndex={() => {}} />
        </Link>
      ))}
    </div>
  );
}
