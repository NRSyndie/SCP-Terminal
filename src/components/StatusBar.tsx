import { useState, useEffect } from 'react';

interface StatusBarProps {
  timeOverride: Date | null;
  clearanceLevel: number;
}

function StatusBar({ timeOverride, clearanceLevel }: StatusBarProps) {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    if (timeOverride) return;
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, [timeOverride]);

  const displayTime = timeOverride || now;
  const timeStr = displayTime.toLocaleTimeString('en-GB', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  });

  return (
    <div className="status-bar">
      <div className="status-bar-left">
        <svg
          className="scp-badge"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          aria-hidden="true"
        >
          <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.2" />
          <circle cx="8" cy="8" r="2" fill="currentColor" />
          <line x1="8" y1="1.5" x2="8" y2="5" stroke="currentColor" strokeWidth="1.2" />
          <line x1="2.3" y1="11.8" x2="5.5" y2="9.5" stroke="currentColor" strokeWidth="1.2" />
          <line x1="13.7" y1="11.8" x2="10.5" y2="9.5" stroke="currentColor" strokeWidth="1.2" />
        </svg>
        <span className="status-label">SCP TERMINAL</span>
        <span className="status-version">v0.1.0</span>
        <span className="status-divider">│</span>
        <span className="status-text">USER: DR. MARCUS ROSEWELL</span>
        <span className="status-divider">│</span>
        <span className="status-text">
          CLEARANCE: <span className="status-highlight">LEVEL {clearanceLevel}</span>
        </span>
      </div>
      <div className="status-bar-right">
        <span className="status-clock">{timeStr}</span>
      </div>
    </div>
  );
}

export default StatusBar;
