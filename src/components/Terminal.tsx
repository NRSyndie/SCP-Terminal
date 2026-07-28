function Terminal() {
  return (
    <div className="app-shell">
      <div className="glass-panel glass-panel--search">
        &gt;_ search database...
      </div>

      <div className="glass-panel glass-panel--gold">
        <h3>Quick Access</h3>
        <ul>
          <li>Site Directory</li>
          <li>Recently Declassified</li>
          <li>Incident Log</li>
        </ul>
      </div>

      <div className="glass-panel glass-panel--rose">
        <h3>Flagged For Review</h3>
        <ul>
          <li>SCP-███ — containment breach, 3 days ago</li>
          <li>Site-19 — status update pending</li>
        </ul>
      </div>
    </div>
  );
}

export default Terminal;