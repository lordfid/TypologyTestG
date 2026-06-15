import type { QuestionItem } from '../types';

interface Props { question: QuestionItem; onSubmit: (payload: { value: string }) => void; }

export default function SongGenreCard({ question, onSubmit }: Props) {
  return (
    <div className="song-grid">
      {question.options?.map((option) => <button key={option.id} className="song-card" onClick={() => onSubmit({ value: option.id })}><span>♪</span>{option.text}</button>)}
    </div>
  );
}
