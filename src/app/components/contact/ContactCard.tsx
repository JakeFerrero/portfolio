interface Props {
  title: string;
  text: string;
  bootstrapIconName: string;
}

export default function ContactCard({title, text, bootstrapIconName}: Props) {
  return (
    <div style={{ display: 'flex' }}>
      <i className={`bi ${bootstrapIconName} h1`} />
      <div style={{ display: 'flex', flexDirection: 'column', paddingLeft: '5px'}}>
        <span style={{ color: 'grey' }}>&nbsp;{title}</span>
        <span>&nbsp;{text}</span>
      </div>
    </div>
  );
}