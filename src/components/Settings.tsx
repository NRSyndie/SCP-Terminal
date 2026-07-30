import LoadingBar from './LoadingBar';
import AlertBanner from './AlertBanner';

interface SettingsProps {
  theme: string;
  setTheme: (theme: string) => void;
}

const THEME_OPTIONS = [
  { id: 'lofi', label: 'Lo-fi Terminal' },
  { id: 'cyberpunk', label: 'Cyberpunk' },
];

function Settings({ theme, setTheme }: SettingsProps) {
  return (
    <div className="app-shell">
      <div className="glass-panel glass-panel--gold">
        <h3>Terminal Theme</h3>
        <div className="theme-options">
          {THEME_OPTIONS.map((option) => (
            <button
              key={option.id}
              className={`theme-option ${theme === option.id ? 'theme-option--active' : ''}`}
              onClick={() => setTheme(option.id)}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>

      <div className="glass-panel glass-panel--rose">
        <h3>Display</h3>
        <p className="settings-placeholder">Font size — coming soon</p>
      </div>

      {/* temporary preview */}
      <div className="glass-panel glass-panel--rose" style={{ marginTop: '16px' }}>
        <h3>Component Preview</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <LoadingBar label="SCANNING SECTOR 01" value={64.2} />
          <LoadingBar label="DECRYPTING FILE" value={91.7} />
        </div>
        <div style={{ marginTop: '14px' }}>
          <AlertBanner message="Anomaly containment integrity: warning" />
        </div>
      </div>
    </div>
  );
}

export default Settings;