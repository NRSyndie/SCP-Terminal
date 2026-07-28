export interface SCPEntry {
  id: string;
  designation: string;
  name?: string;
  objectClass?: 'safe' | 'euclid' | 'keter' | 'thaumiel';
  disruptionClass?: 'dark' | 'vlam' | 'keneq' | 'ekhi' | 'amida';
  riskClass?: 'notice' | 'caution' | 'warning' | 'danger' | 'critical';
  clearanceRequired?: number;
  containmentProcedures?: string;
  description?: string;
  addendums?: { title: string; content: string }[];
  tags?: string[];
  documents?: { name: string; size: string }[];
  image?: string; // filename only, e.g. 'scp-173.jpg'
}

export const entries: SCPEntry[] = [
  { id: 'scp-001', designation: 'SCP-001' },
  {
    id: 'scp-002',
    designation: 'SCP-002',
    name: 'The Living Room',
    objectClass: 'euclid',
    disruptionClass: 'dark',
    riskClass: 'critical',
  },
  {
    id: 'scp-003',
    designation: 'SCP-003',
    name: 'Biological Motherboard',
    objectClass: 'euclid',
    disruptionClass: 'keneq',
    riskClass: 'critical',
  },
  {
    id: 'scp-004',
    designation: 'SCP-004',
    name: 'The 12 keys and the Door',
    objectClass: 'euclid',
    disruptionClass: 'dark',
    riskClass: 'critical',
  },
  {
    id: 'scp-005',
    designation: 'SCP-005',
    name: 'The Skeleton Key',
    objectClass: 'safe',
    disruptionClass: 'dark',
    riskClass: 'warning',
  },
  { 
    id: 'scp-006',
    designation: 'SCP-006',
    name: 'Fountain of Youth',
    objectClass: 'safe',
    disruptionClass: 'ekhi',
    riskClass: 'notice',
  },
  { 
    id: 'scp-007',
    designation: 'SCP-007',
    name: 'Abdominal Planet',
    objectClass: 'euclid',
    disruptionClass: 'vlam',
    riskClass: 'caution',
  },
  {
  id: 'scp-173',
  designation: 'SCP-173',
  name: 'The Sculpture',
  objectClass: 'euclid',
  clearanceRequired: 2,
  containmentProcedures:
    'SCP-173 is to be kept in a locked container at all times. The container is to be constructed of concrete lined with sheet metal, kept in a windowless room with a direct line of sight to SCP-173\'s container. Personnel entering the containment area are to wear a stabilizing harness attached to the far wall. Personnel must avoid looking directly at SCP-173 at all times.',
  description:
    'SCP-173 is a concrete sculpture of unknown origin and depicting a humanoid figure. SCP-173 is animate and extremely hostile. SCP-173 will attack by snapping the neck of any living organism that enters its line of sight.',
  addendums: [
    {
      title: 'Addendum 173-A',
      content:
        'Attempts to determine the origin of SCP-173 are ongoing. Analysis of the concrete composition suggests a creation date circa 1993–1994. No known artists match SCP-173\'s style.',
    },
    {
      title: 'Addendum 173-B',
      content:
        'Incident 173-1: A Class D subject disregarded containment procedures and entered SCP-173\'s containment without a blindfold. Subject was found deceased; cause of death was cervical vertebrae dislocation.',
    },
  ],
  tags: ['sculpture', 'hostile', 'animate', 'euclid', 'visual-hazard'],
  documents: [
    { name: 'incident_173-1_report.log', size: '12 KB' },
    { name: 'interview_173-1a.log', size: '8 KB' },
    { name: 'researcher_notes.txt', size: '14 KB' },
  ],
  image: 'scp-173.png',
},
];

export function getEntryByNumber(num: number): SCPEntry {
  const padded = String(num).padStart(3, '0');
  const id = `scp-${padded}`;
  const found = entries.find((e) => e.id === id);
  return found || { id, designation: `SCP-${padded}` };
}