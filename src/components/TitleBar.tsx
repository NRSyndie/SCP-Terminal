import { getCurrentWindow } from '@tauri-apps/api/window';

const appWindow = getCurrentWindow();

interface TitleBarProps {
  view: string;
  setView: (view: string) => void;
  goBack: () => void;
  canGoBack: boolean;
}

const NAV_ITEMS = [
  { id: 'entries', label: 'Entries' },
  { id: 'facilities', label: 'Facilities' },
  { id: 'departments', label: 'Departments' },
  { id: 'terminal', label: 'Terminal' },
  { id: 'mtf', label: 'Mobile Task Forces' },
  { id: 'personnel', label: 'Personnel' },
  { id: 'nexus', label: 'Nexus' },
];

function TitleBar({ view, setView, goBack, canGoBack }: TitleBarProps) {
  const toggleSettings = () => {
    if (view === 'settings') {
      goBack();
    } else {
      setView('settings');
    }
  };

  return (
    <div className="titlebar" data-tauri-drag-region>
      <div className="titlebar-lights">
        <button className="light light--close" onClick={() => appWindow.close()} />
        <button className="light light--minimize" onClick={() => appWindow.minimize()} />
        <button className="light light--maximize" onClick={() => appWindow.toggleMaximize()} />
      </div>

      <nav className="titlebar-nav">
        {NAV_ITEMS.map((item) => (
          <button
            key={item.id}
            className={`nav-link ${view === item.id ? 'nav-link--active' : ''}`}
            onClick={() => setView(item.id)}
          >
            {item.label}
          </button>
        ))}
      </nav>

      <div className="titlebar-actions">
        <button
          className="titlebar-back"
          title="Back"
          onClick={goBack}
          disabled={!canGoBack}
        >
          ←
        </button>
        <button className="titlebar-settings" title="Settings" onClick={toggleSettings}>
          {view === 'settings' ? '✕' : '⚙'}
        </button>
      </div>
    </div>
  );
}

export default TitleBar;