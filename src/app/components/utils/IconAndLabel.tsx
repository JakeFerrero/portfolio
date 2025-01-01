interface Props {
  bootstrapIconName: string;
  label: string;
  text: string;
}

export default function IconAndLabel({ label, text, bootstrapIconName }: Props) {
  return (
    <div style={{ display: 'flex' }}>
      <i className={`bi ${bootstrapIconName} h1`} style={{ marginBottom: 0 }} />
      <div style={{ display: 'flex', flexDirection: 'column', paddingLeft: '5px' }}>
        <span style={{ color: 'grey' }}>&nbsp;{label}</span>
        <span>&nbsp;{text}</span>
      </div>
    </div>
  );
}
