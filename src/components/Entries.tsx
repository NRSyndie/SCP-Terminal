import { useState } from 'react';
import { getEntryByNumber } from '../data/entries';

interface EntriesProps {
  onSelect: (id: string) => void;
}

const PAGE_SIZE = 100;
const PAGES_PER_SERIES = 10;

function Entries({ onSelect }: EntriesProps) {
  const [page, setPage] = useState(0); // 0-9

  const startNum = page * PAGE_SIZE + 1;
  const pageEntries = Array.from({ length: PAGE_SIZE }, (_, i) =>
    getEntryByNumber(startNum + i)
  );

  return (
    <div className="entries-page">
      <div className="entries-filters">
        <span className="entries-filters-label">FILTERS</span>
        <select className="entries-series-select" defaultValue="1">
          <option value="1">Series I (001–999)</option>
        </select>
      </div>

      <div className="entries-table entries-table--scrollable">
        {pageEntries.map((entry, index) => (
          <div
            key={entry.id}
            className={`entries-row ${index % 2 === 0 ? 'entries-row--alt' : ''}`}
            onClick={() => onSelect(entry.id)}
          >
            <span className="entries-col entries-col--id">{entry.designation}</span>
            <span className="entries-col entries-col--name">{entry.name || ''}</span>
            <span className="entries-col entries-col--class">{entry.objectClass?.toUpperCase() || ''}</span>
            <span className="entries-col entries-col--class">{entry.disruptionClass?.toUpperCase() || ''}</span>
            <span className="entries-col entries-col--class">{entry.riskClass?.toUpperCase() || ''}</span>
          </div>
        ))}
      </div>

      <div className="entries-pagination">
        {Array.from({ length: PAGES_PER_SERIES }, (_, i) => (
          <button
            key={i}
            className={`page-dot ${page === i ? 'page-dot--active' : ''}`}
            title={`${i * PAGE_SIZE + 1}–${(i + 1) * PAGE_SIZE}`}
            onClick={() => setPage(i)}
          />
        ))}
      </div>
    </div>
  );
}

export default Entries;