import { useState } from 'react';
import { entries } from '../data/entries';
import MediaArt from './MediaArt';

interface ArticlePageProps {
  entryId: string;
}

const TABS = ['Document', 'Supplemental', 'Revisions', 'Logs'];

function ArticlePage({ entryId }: ArticlePageProps) {
  const [activeTab, setActiveTab] = useState('Document');
  const entry = entries.find((e) => e.id === entryId);

  if (!entry) {
    return <div className="app-shell">Record not found.</div>;
  }

  return (
    <div className="article-wrapper">
      <div className="article-page">
        <div className="article-main">
          <div className="article-header">
            <span className="article-item-label">ITEM #:</span>
            <span className="article-item-number">{entry.designation}</span>
          </div>

          <div className="article-tabs">
            {TABS.map((tab) => (
              <button
                key={tab}
                className={`article-tab ${activeTab === tab ? 'article-tab--active' : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          {activeTab === 'Document' && (
            <div className="article-body">
              <div className="article-field">
                <span className="article-field-label">OBJECT CLASS:</span>{' '}
                <span className="article-field-value">{entry.objectClass?.toUpperCase()}</span>
              </div>

              {entry.containmentProcedures && (
                <div className="article-section">
                  <h4>Containment Procedures</h4>
                  <p>{entry.containmentProcedures}</p>
                </div>
              )}

              {entry.description && (
                <div className="article-section">
                  <h4>Description</h4>
                  <p>{entry.description}</p>
                </div>
              )}

              {entry.addendums?.map((addendum) => (
                <div className="article-section" key={addendum.title}>
                  <h4>{addendum.title}</h4>
                  <p>{addendum.content}</p>
                </div>
              ))}
            </div>
          )}

          {activeTab !== 'Document' && (
            <div className="article-body">
              <p className="page-placeholder">{activeTab} — coming soon</p>
            </div>
          )}
        </div>

        <div className="article-sidebar">
            <div className="media-section">
                <span className="media-label">MEDIA</span>
                <MediaArt entryId={entry.id} image={entry.image} />
            </div>

          <div className="glass-panel glass-panel--gold glass-panel--subtle">
            <h3>Documents</h3>
            <div className="doc-list">
              {entry.documents?.map((doc) => (
                <div className="doc-row" key={doc.name}>
                  <span className="doc-name">{doc.name}</span>
                  <span className="doc-size">{doc.size}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {entry.tags && (
        <div className="article-tags-footer">
          <span className="article-tags-label">TAGS</span>
          <div className="tag-list">
            {entry.tags.map((tag) => (
              <span className="tag-chip" key={tag}>{tag}</span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default ArticlePage;