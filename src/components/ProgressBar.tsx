interface Props { current: number; total: number; }

export default function ProgressBar({ current, total }: Props) {
  const percent = Math.round((current / Math.max(total, 1)) * 100);
  return (
    <div className="progress-wrap" aria-label={`Progress ${percent}%`}>
      <div className="progress-meta"><span>{current} / {total}</span><span>{percent}%</span></div>
      <div className="progress"><div style={{ width: `${percent}%` }} /></div>
    </div>
  );
}
