import type { FinalResult, ScoreEntry } from '../types';
import { functionLabels, instinctLabels, sectionNotes } from '../data/resultDescriptions';
import AnswerSummary from './AnswerSummary';
import ResultSection from './ResultSection';
import SharePanel from './SharePanel';

interface Props { result: FinalResult; onRestart: () => void; }

export default function ResultPage({ result, onRestart }: Props) {
  return (
    <section className="result-page fade-in">
      <div className="result-hero glass-card">
        <p className="eyebrow">Hasil interpretasi</p>
        <h1>{result.topMBTI[0]?.type ?? 'Belum jelas'}</h1>
        <p className="hero-subtitle">{result.mainSummary}</p>
        <AnswerSummary result={result} />
        <p className="disclaimer">{sectionNotes.disclaimer}</p>
      </div>
      <SharePanel result={result} />
      <ResultSection title="Top 3 MBTI dan stack fit" defaultOpen>
        <div className="score-grid">{result.topMBTI.map((item) => <div className="score-card" key={item.type}><strong>{item.type}</strong><span>{item.stack.join(' · ')}</span><Bar value={item.score} /></div>)}</div>
      </ResultSection>
      <ResultSection title="Fungsi kognitif dan role" defaultOpen>
        <BarList entries={result.functionRanking} />
        <div className="role-grid">
          <span>Dominant: <b>{result.stackRoles.dominant}</b></span>
          <span>Auxiliary: <b>{result.stackRoles.auxiliary}</b></span>
          <span>Tertiary: <b>{result.stackRoles.tertiary}</b></span>
          <span>Inferior: <b>{result.stackRoles.inferior}</b></span>
          <span>Opposing: <b>{result.shadowRoles.opposing}</b></span>
          <span>Critical: <b>{result.shadowRoles.critical}</b></span>
          <span>Trickster: <b>{result.shadowRoles.trickster}</b></span>
          <span>Transformative: <b>{result.shadowRoles.transformative}</b></span>
        </div>
      </ResultSection>
      <ResultSection title="Enneagram, instinct, dan tritype" defaultOpen>
        <p><b>Enneagram:</b> {result.enneagram.type}w{result.enneagram.wing}. {result.enneagram.note}</p>
        <p><b>Instinctual stacking:</b> {result.instinctStacking.map((key) => instinctLabels[key]).join(' / ')}</p>
        <p><b>Tritype:</b> {result.tritype}</p>
        <BarList entries={result.enneagramTop} />
      </ResultSection>
      <ResultSection title="Big Five dan HEXACO">
        <h3>Big Five</h3><BarList entries={result.bigFive} />
        <h3>HEXACO</h3><BarList entries={result.hexaco} />
      </ResultSection>
      <ResultSection title="Socionics, temperament, AP, DISC, RIASEC">
        <div className="fact-list">
          <span>Socionics estimate: <b>{result.socionics}</b></span>
          <span>Quadra tendency: <b>{result.quadra}</b></span>
          <span>Temperament: <b>{result.temperament}</b></span>
          <span>Classical temperament: <b>{result.classicalTemperament}</b></span>
          <span>Attitudinal Psyche: <b>{result.attitudinalPsyche}</b></span>
        </div>
        <h3>DISC</h3><BarList entries={result.disc} />
        <h3>RIASEC</h3><BarList entries={result.riasec} />
      </ResultSection>
      <ResultSection title="Gaya hidup, relasi, kerja, dan belajar">
        <div className="fact-list">
          <span>Moral style: <b>{result.moralStyle}</b></span>
          <span>Decision-making: <b>{result.decisionStyle}</b></span>
          <span>Conflict style: <b>{result.conflictStyle}</b></span>
          <span>Communication: <b>{result.communicationStyle}</b></span>
          <span>Relationship tendency: <b>{result.relationshipTendency}</b></span>
          <span>Stress response: <b>{result.stressResponse}</b></span>
          <span>Defense pattern: <b>{result.defensePattern}</b></span>
          <span>Work style: <b>{result.workStyle}</b></span>
          <span>Learning style: <b>{result.learningStyle}</b></span>
        </div>
      </ResultSection>
      <ResultSection title="Core fear, core desire, values, dan evidence">
        <p><b>Core fear:</b> {result.coreFear}</p>
        <p><b>Core desire:</b> {result.coreDesire}</p>
        <h3>Values ranking</h3><BarList entries={result.valuesRanking} />
        <h3>Evidence dasar terkuat</h3><BarList entries={result.evidenceSummary} />
      </ResultSection>
      <ResultSection title="Catatan confidence dan hasil dekat" defaultOpen>
        <p>{result.confidenceNote}</p>
        <p>{result.closeResultNote}</p>
        <p>{result.neutralAnswerNote}</p>
      </ResultSection>
      <div className="bottom-actions"><button className="primary-btn" onClick={onRestart}>Ulangi tes</button></div>
    </section>
  );
}

function BarList({ entries }: { entries: ScoreEntry[] }) {
  return <div className="bar-list">{entries.map((entry) => <div className="bar-row" key={`${entry.key}-${entry.label}`}><span>{entry.label || functionLabels[entry.key as keyof typeof functionLabels] || entry.key}</span><Bar value={entry.score} /></div>)}</div>;
}

function Bar({ value }: { value: number }) {
  return <div className="mini-bar"><div style={{ width: `${Math.max(0, Math.min(100, value))}%` }} /><em>{value}</em></div>;
}
