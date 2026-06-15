import type { PairChoice, QuestionItem } from '../types';

interface Props { question: QuestionItem; onSubmit: (payload: { value: PairChoice }) => void; }

export default function SwipeQuestionCard({ question, onSubmit }: Props) {
  return (
    <div className="swipe-card">
      <div className="pair-grid">
        <button className="option-card left" onClick={() => onSubmit({ value: 'left' })}>{question.left?.text}</button>
        <button className="option-card right" onClick={() => onSubmit({ value: 'right' })}>{question.right?.text}</button>
      </div>
      <div className="neutral-grid">
        <button onClick={() => onSubmit({ value: 'both' })}>Dua-duanya</button>
        <button onClick={() => onSubmit({ value: 'neither' })}>Tidak dua-duanya</button>
        <button onClick={() => onSubmit({ value: 'depends' })}>Tergantung</button>
      </div>
    </div>
  );
}
