import Link from 'next/link';
import style from './Navbar.module.css';
import NavbarButton from './NavbarButton';

export default function Navbar() {
  return (
    <div className={`${style.navbar}`}>
      {['home', 'about', 'experience', 'projects', 'contact'].map((type: string, index: number) => (
        <Link href={`#${type}`}>
          <NavbarButton id={index} type={type} activeIndex={0} setActiveIndex={() => {}} />
        </Link>
      ))}
    </div>
  );
}