import { useState } from 'react';
import './styles/themes.css';
import './App.css';
import ArticlePage from './components/ArticlePage';
import TitleBar from './components/TitleBar';
import Terminal from './components/Terminal';
import Settings from './components/Settings';
import MTF from './components/MTF';
import Entries from './components/Entries';
import Facilities from './components/Facilities';
import Departments from './components/Departments';
import Personnel from './components/Personnel';
import Nexus from './components/Nexus';

function App() {
  const [theme, setTheme] = useState('lofi');
  const [view, setView] = useState('terminal');
  const [history, setHistory] = useState<string[]>([]);
  const [selectedEntryId, setSelectedEntryId] = useState<string | null>(null);

  const navigate = (nextView: string) => {
    setHistory((prev) => [...prev, view]);
    setView(nextView);
  };

  const goBack = () => {
    if (history.length === 0) return;
    const previous = history[history.length - 1];
    setHistory((prev) => prev.slice(0, -1));
    setView(previous);
  };

  const openEntry = (id: string) => {
    setSelectedEntryId(id);
    navigate('article');
  };

  const renderView = () => {
    switch (view) {
      case 'settings':
        return <Settings theme={theme} setTheme={setTheme} />;
      case 'terminal':
        return <Terminal />;
      case 'mtf':
        return <MTF />;
      case 'entries':
        return <Entries onSelect={openEntry} />;
      case 'article':
        return selectedEntryId ? <ArticlePage entryId={selectedEntryId} /> : <Entries onSelect={openEntry} />;
      case 'facilities':
        return <Facilities />;
      case 'departments':
        return <Departments />;
      case 'personnel':
        return <Personnel />;
      case 'nexus':
        return <Nexus />;
      default:
        return <Terminal />;
    }
  };

  return (
    <div data-theme={theme} className="app-root">
      <TitleBar view={view} setView={navigate} goBack={goBack} canGoBack={history.length > 0} />
      {renderView()}
    </div>
  );
}

export default App;