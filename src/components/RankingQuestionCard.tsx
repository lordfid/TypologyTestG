import { useState } from 'react';
import type { AnswerPayload, QuestionItem } from '../types';

interface Props { question: QuestionItem; previousAnswer?: AnswerPayload; onSubmit: (payload: { ranking: string[] }) => void; }

export default function RankingQuestionCard({ question, previousAnswer, onSubmit }: Props) {
  const [ranking, setRanking] = useState<string[]>(previousAnswer?.ranking ?? []);
  const options = question.options ?? [];
  const remaining = options.filter((option) => !ranking.includes(option.id));
  return (
    <div className="ranking-wrap">
      <div className="ranked-list">
        {ranking.map((id, index) => {
          const option = options.find((item) => item.id === id);
          return <button key={id} className="ranked-item" onClick={() => setRanking((r) => r.filter((x) => x !== id))}><span>{index + 1}</span>{option?.text}</button>;
        })}
      </div>
      <div className="choice-list compact">
        {remaining.map((option) => <button key={option.id} className="choice-btn" onClick={() => setRanking((r) => [...r, option.id])}>{option.text}</button>)}
      </div>
      <div className="inline-actions">
        <button className="ghost-btn" onClick={() => setRanking([])}>Reset urutan</button>
        <button className="primary-btn" disabled={ranking.length < Math.min(3, options.length)} onClick={() => onSubmit({ ranking })}>Lanjut</button>
      </div>
    </div>
  );
}
