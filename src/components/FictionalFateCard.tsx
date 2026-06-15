import type { QuestionItem } from '../types';

interface Props { question: QuestionItem; onSubmit: (payload: { value: string }) => void; }

export default function FictionalFateCard({ question, onSubmit }: Props) {
  return (
    <div className="choice-list fate-list">
      {question.options?.map((option) => <button key={option.id} className="choice-btn fate" onClick={() => onSubmit({ value: option.id })}>{option.text}</button>)}
    </div>
  );
}
