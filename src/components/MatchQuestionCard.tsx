import { useState } from 'react';
import type { AnswerPayload, QuestionItem } from '../types';

interface Props { question: QuestionItem; previousAnswer?: AnswerPayload; onSubmit: (payload: { matches: Record<string, string> }) => void; }

export default function MatchQuestionCard({ question, previousAnswer, onSubmit }: Props) {
  const [activeLeft, setActiveLeft] = useState<string | null>(null);
  const [matches, setMatches] = useState<Record<string, string>>(previousAnswer?.matches ?? {});
  return (
    <div className="match-wrap">
      <div className="match-columns">
        <div className="match-col">
          {question.leftItems?.map((item) => <button key={item.id} className={`match-chip ${activeLeft === item.id ? 'selected' : ''}`} onClick={() => setActiveLeft(item.id)}>{item.text}<small>{matches[item.id] ? 'terpasang' : 'pilih'}</small></button>)}
        </div>
        <div className="match-col">
          {question.rightItems?.map((item) => <button key={item.id} className="match-chip" onClick={() => {
            if (!activeLeft) return;
            setMatches((current) => ({ ...current, [activeLeft]: item.id }));
            setActiveLeft(null);
          }}>{item.text}</button>)}
        </div>
      </div>
      <MatchPreview question={question} matches={matches} />
      <div className="inline-actions">
        <button className="ghost-btn" onClick={() => setMatches({})}>Reset pasangan</button>
        <button className="primary-btn" disabled={Object.keys(matches).length < Math.min(2, question.leftItems?.length ?? 0)} onClick={() => onSubmit({ matches })}>Lanjut</button>
      </div>
    </div>
  );
}

function MatchPreview({ question, matches }: { question: QuestionItem; matches: Record<string, string> }) {
  return <div className="match-preview">{Object.entries(matches).map(([left, right]) => {
    const l = question.leftItems?.find((item) => item.id === left)?.text;
    const r = question.rightItems?.find((item) => item.id === right)?.text;
    return <span key={left}>{l} → {r}</span>;
  })}</div>;
}
