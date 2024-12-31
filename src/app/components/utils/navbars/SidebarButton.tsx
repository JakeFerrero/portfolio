import style from './SidebarButton.module.css';

const BUTTON_TYPE_ICON_MAP: Record<string, string> = {
  home: 'bi-house-fill',
  about: 'bi-person-fill',
  experience: 'bi-briefcase-fill',
  projects: 'bi-code-slash',
  contact: 'bi-envelope-fill'
};

interface Props {
  id: number;
  type: string;
  activeIndex: number;
  setActiveIndex: any;
}

export default function SidebarButton({ id, type, activeIndex, setActiveIndex }: Props) {
  return (
    <div className={style.sidebarButtonContainer}>
      <button
        key={id}
        type="button"
        className={`${style.sidebarButton} ${id === activeIndex ? style.active : ''}`}
        onClick={() => setActiveIndex(id)}
      >
        <i className={`bi ${BUTTON_TYPE_ICON_MAP[type]} h4`} />
        <div className={style.buttonText}>{type}</div>
      </button>
    </div>
  );
}
