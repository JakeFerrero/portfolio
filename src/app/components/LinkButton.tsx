import style from './linkButton.module.css';

interface Props {
  bootstrapIconName: string;
  link: string;
}

export default function LinkButton({bootstrapIconName, link}: Props) {
  return (
    <a href={link}>
      <button type="button" className={`btn btn-secondary ${style.linkButton}`}>
        <i className={`bi ${bootstrapIconName} h4`} />
      </button>
    </a>
  );
}