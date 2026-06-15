import { useState } from 'react';
import type { AnswerPayload, QuestionItem } from '../types';

interface Props {
  question: QuestionItem;
  previousAnswer?: AnswerPayload;
  onSubmit: (payload: { value: string | string[] }) => void;
}

export default function ChoiceQuestionCard({ question, previousAnswer, onSubmit }: Props) {
  const isMulti = question.kind === 'multiChoice';
  const initial = Array.isArray(previousAnswer?.value) ? previousAnswer.value : [];
  const [selected, setSelected] = useState<string[]>(initial);

  function choose(id: string) {
    if (!isMulti) {
      onSubmit({ value: id });
      return;
    }
    setSelected((current) => current.includes(id) ? current.filter((item) => item !== id) : [...current, id]);
  }

  return (
    <div className="choice-list">
      {question.maxSelect && <p className="mini-note">Pilih maksimal {question.maxSelect}.</p>}
      {question.options?.map((option) => (
        <button key={option.id} className={`choice-btn ${selected.includes(option.id) ? 'selected' : ''}`} onClick={() => choose(option.id)}>
          {option.text}
        </button>
      ))}
      {isMulti && <button className="primary-btn submit-choice" disabled={!selected.length} onClick={() => onSubmit({ value: selected })}>Lanjut</button>}
    </div>
  );
}
