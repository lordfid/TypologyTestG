import type { FinalResult } from '../types';

export default function AnswerSummary({ result }: { result: FinalResult }) {
  return (
    <div className="answer-summary">
      <span>{result.answeredCount}/{result.totalQuestions} item dijawab</span>
      <span>Confidence {result.confidence}</span>
      <span>{result.confidenceLabel}</span>
    </div>
  );
}
