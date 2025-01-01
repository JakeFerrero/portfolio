import style from './NavbarButton.module.css';
import { BUTTON_TYPE_ICON_MAP } from './SidebarButton';

interface Props {
  id: number;
  type: string;
  activeIndex: number;
  setActiveIndex: any;
}

export default function NavbarButton({ id, type, activeIndex, setActiveIndex }: Props) {
  return (
    <div className={style.navbarButtonContainer}>
      <button
        key={id}
        type="button"
        className={`${style.navbarButton} ${id === activeIndex ? style.active : ''}`}
        onClick={() => setActiveIndex(id)}
      >
        <i className={`bi ${BUTTON_TYPE_ICON_MAP[type]} h4`} />
      </button>
    </div>
  );
}
