interface LoadingBarProps {
  label?: string;
  value: number; // 0-100
}

function LoadingBar({ label, value }: LoadingBarProps) {
  return (
    <div className="loading-bar-wrap">
      {label && <span className="loading-bar-label">{label}</span>}
      <div className="loading-bar-track">
        <div className="loading-bar-fill" style={{ width: `${value}%` }} />
      </div>
      <span className="loading-bar-value">{value.toFixed(1)}</span>
    </div>
  );
}

export default LoadingBar;