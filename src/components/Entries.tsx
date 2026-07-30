import { useState } from 'react';
import { getEntryByNumber } from '../data/entries';

interface EntriesProps {
  onSelect: (id: string) => void;
}

const PAGE_SIZE = 100;
const PAGES_PER_SERIES = 10;

function getVisiblePages(current: number, total: number): (number | 'ellipsis')[] {
  if (total <= 7) return Array.from({ length: total }, (_, i) => i);

  if (current <= 2) {
    return [0, 1, 2, 'ellipsis', total - 1];
  } else if (current >= total - 3) {
    return [0, 'ellipsis', total - 3, total - 2, total - 1];
  } else {
    return [0, 'ellipsis', current - 1, current, current + 1, 'ellipsis', total - 1];
  }
}

function Entries({ onSelect }: EntriesProps) {
  const [page, setPage] = useState(0);

  const startNum = page * PAGE_SIZE + 1;
  const pageEntries = Array.from({ length: PAGE_SIZE }, (_, i) =>
    getEntryByNumber(startNum + i)
  );

  const visiblePages = getVisiblePages(page, PAGES_PER_SERIES);

  return (
    <div className="entries-page">
      <div className="entries-filters">
        <span className="entries-filters-label">FILTERS</span>
        <select className="entries-series-select" defaultValue="1">
          <option value="1">Series I (001–999)</option>
        </select>
      </div>

      <div className="entries-table entries-table--scrollable">
        <div className="entries-row entries-row--header">
          <span className="entries-col entries-col--icon"></span>
          <span className="entries-col entries-col--id">ID</span>
          <span className="entries-col entries-col--name">NAME</span>
          <span className="entries-col entries-col--class">OBJECT CLASS</span>
          <span className="entries-col entries-col--class">DISRUPTION CLASS</span>
          <span className="entries-col entries-col--class">RISK CLASS</span>
        </div>
        {pageEntries.map((entry, index) => (
          <div
            key={entry.id}
            className={`entries-row ${index % 2 === 0 ? 'entries-row--alt' : ''}`}
            onClick={() => onSelect(entry.id)}
          >
            <span className="entries-col entries-col--icon">⠿</span>
            <span className="entries-col entries-col--id">{entry.designation}</span>
            <span className="entries-col entries-col--name">{entry.name || '—'}</span>
            <span className="entries-col entries-col--class">
              {entry.objectClass?.toUpperCase() || ''}
            </span>
            <span className="entries-col entries-col--class">
              {entry.disruptionClass?.toUpperCase() || ''}
            </span>
            <span className="entries-col entries-col--class">
              {entry.riskClass?.toUpperCase() || ''}
            </span>
          </div>
        ))}
      </div>

      <div className="entries-pagination">
        <div className="pagination-pages">
          {visiblePages.map((item, i) =>
            item === 'ellipsis' ? (
              <span key={`ellipsis-${i}`} className="pagination-ellipsis">
                …
              </span>
            ) : (
              <button
                key={item}
                className={`page-btn ${page === item ? 'page-btn--active' : ''}`}
                onClick={() => setPage(item)}
              >
                {String(item + 1).padStart(2, '0')}
              </button>
            )
          )}
        </div>
        <div className="pagination-arrows">
          <button
            className="pagination-arrow"
            onClick={() => setPage((p) => p - 1)}
            disabled={page === 0}
          >
            ‹
          </button>
          <button
            className="pagination-arrow"
            onClick={() => setPage((p) => p + 1)}
            disabled={page === PAGES_PER_SERIES - 1}
          >
            ›
          </button>
        </div>
      </div>
    </div>
  );
}

export default Entries;