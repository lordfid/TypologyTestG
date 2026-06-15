import type { AnswerPayload, QuestionItem } from '../types';
import ProgressBar from './ProgressBar';
import SwipeQuestionCard from './SwipeQuestionCard';
import ChoiceQuestionCard from './ChoiceQuestionCard';
import RankingQuestionCard from './RankingQuestionCard';
import MatchQuestionCard from './MatchQuestionCard';
import ConnectQuestionCard from './ConnectQuestionCard';
import FictionalFateCard from './FictionalFateCard';
import SongGenreCard from './SongGenreCard';

interface Props {
  question: QuestionItem;
  currentIndex: number;
  total: number;
  previousAnswer?: AnswerPayload;
  onAnswer: (answer: AnswerPayload) => void;
  onBack: () => void;
  onSkip: () => void;
}

export default function QuestionRenderer({ question, currentIndex, total, previousAnswer, onAnswer, onBack, onSkip }: Props) {
  const submit = (payload: Omit<AnswerPayload, 'questionId' | 'kind' | 'answeredAt'>) => onAnswer({ questionId: question.id, kind: question.kind, answeredAt: Date.now(), ...payload });
  const card = (() => {
    if (question.kind === 'swipePair') return <SwipeQuestionCard question={question} onSubmit={submit} />;
    if (question.kind === 'ranking') return <RankingQuestionCard question={question} onSubmit={submit} previousAnswer={previousAnswer} />;
    if (question.kind === 'tapMatch') return <MatchQuestionCard question={question} onSubmit={submit} previousAnswer={previousAnswer} />;
    if (question.kind === 'connectDots') return <ConnectQuestionCard question={question} onSubmit={submit} previousAnswer={previousAnswer} />;
    if (question.kind === 'fictionalFate' || question.kind === 'endingChoice') return <FictionalFateCard question={question} onSubmit={submit} />;
    if (question.kind === 'songGenreChoice') return <SongGenreCard question={question} onSubmit={submit} />;
    return <ChoiceQuestionCard question={question} onSubmit={submit} previousAnswer={previousAnswer} />;
  })();
  return (
    <section className="question-shell">
      <ProgressBar current={currentIndex + 1} total={total} />
      <div className="question-card glass-card fade-in">
        <div className="question-topline"><span>{question.typeLabel}</span><span>Item {currentIndex + 1}</span></div>
        <h2>{question.title}</h2>
        <p className="question-prompt">{question.prompt}</p>
        {question.help && <p className="help-text">{question.help}</p>}
        {card}
        <div className="question-actions">
          <button className="ghost-btn" onClick={onBack} disabled={currentIndex === 0}>Kembali</button>
          <button className="ghost-btn" onClick={onSkip}>Lewati</button>
        </div>
      </div>
    </section>
  );
}
