interface Props {
  timeframe: string
}

export default function Timeframe({ timeframe }: Props) {
  return (
    <span className="badge badge-pill bg-secondary" style={{ margin: 0, marginBottom: '5px' }}>
      {timeframe}
    </span>
  );
}