import MatchQuestionCard from './MatchQuestionCard';
import type { AnswerPayload, QuestionItem } from '../types';

interface Props { question: QuestionItem; previousAnswer?: AnswerPayload; onSubmit: (payload: { matches: Record<string, string> }) => void; }

export default function ConnectQuestionCard(props: Props) {
  return <MatchQuestionCard {...props} />;
}
