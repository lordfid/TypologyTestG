import { useEffect, useMemo, useState } from 'react';
import type { AnswerPayload, FinalResult } from './types';
import { QUESTIONS } from './data/questions';
import { calculateResults } from './scoring/calculateResults';
import { auditScoring } from './scoring/auditScoring';
import StartScreen from './components/StartScreen';
import QuestionRenderer from './components/QuestionRenderer';
import ResultPage from './components/ResultPage';
import ThemeToggle from './components/ThemeToggle';
import LoadingState from './components/LoadingState';
import { clearAllTestData, clearProgress, loadAnswers, loadCurrentIndex, loadLastResult, loadTheme, saveAnswers, saveCurrentIndex, saveLastResult, saveTheme, type ThemeMode } from './services/storage';

type Screen = 'start' | 'test' | 'result';

export default function App() {
  const [theme, setTheme] = useState<ThemeMode>(() => loadTheme());
  const [answers, setAnswers] = useState<Record<string, AnswerPayload>>(() => loadAnswers());
  const [currentIndex, setCurrentIndex] = useState(() => Math.min(loadCurrentIndex(), QUESTIONS.length - 1));
  const [screen, setScreen] = useState<Screen>('start');
  const [result, setResult] = useState<FinalResult | null>(() => loadLastResult());
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    saveTheme(theme);
  }, [theme]);

  useEffect(() => {
    saveAnswers(answers);
  }, [answers]);

  useEffect(() => {
    saveCurrentIndex(currentIndex);
  }, [currentIndex]);

  useEffect(() => {
    const report = auditScoring(QUESTIONS);
    if (!report.ok) console.warn('Audit scoring:', report);
  }, []);

  const hasProgress = useMemo(() => Object.keys(answers).length > 0 && currentIndex < QUESTIONS.length, [answers, currentIndex]);

  function startFresh() {
    clearProgress();
    setAnswers({});
    setCurrentIndex(0);
    setScreen('test');
  }

  function continueTest() {
    setScreen('test');
  }

  function handleAnswer(answer: AnswerPayload) {
    const nextAnswers = { ...answers, [answer.questionId]: answer };
    setAnswers(nextAnswers);
    const nextIndex = currentIndex + 1;
    if (nextIndex >= QUESTIONS.length) finish(nextAnswers);
    else setCurrentIndex(nextIndex);
  }

  function finish(finalAnswers = answers) {
    setLoading(true);
    window.setTimeout(() => {
      const computed = calculateResults(finalAnswers, QUESTIONS);
      setResult(computed);
      saveLastResult(computed);
      setScreen('result');
      setLoading(false);
    }, 120);
  }

  function goBack() {
    setCurrentIndex((value) => Math.max(0, value - 1));
  }

  function skip() {
    handleAnswer({ questionId: QUESTIONS[currentIndex].id, kind: QUESTIONS[currentIndex].kind, skipped: true, value: 'skip', answeredAt: Date.now() });
  }

  function resetAll() {
    const ok = window.confirm('Ulangi tes dan hapus progress lama?');
    if (!ok) return;
    clearAllTestData();
    setAnswers({});
    setResult(null);
    setCurrentIndex(0);
    setScreen('start');
  }

  function clearSavedProgress() {
    const ok = window.confirm('Hapus progress yang tersimpan?');
    if (!ok) return;
    clearProgress();
    setAnswers({});
    setCurrentIndex(0);
  }

  return (
    <main className="app-shell">
      <div className="bg-orb one" />
      <div className="bg-orb two" />
      <div className="topbar">
        <button className="brand" onClick={() => setScreen('start')}>Tes Kepribadian Mendalam</button>
        <ThemeToggle theme={theme} onChange={setTheme} />
      </div>
      {loading && <LoadingState />}
      {!loading && screen === 'start' && (
        <StartScreen
          total={QUESTIONS.length}
          hasProgress={hasProgress}
          hasLastResult={Boolean(result)}
          onStart={startFresh}
          onContinue={continueTest}
          onOpenResult={() => result && setScreen('result')}
          onClearProgress={clearSavedProgress}
        />
      )}
      {!loading && screen === 'test' && (
        <QuestionRenderer
          question={QUESTIONS[currentIndex]}
          currentIndex={currentIndex}
          total={QUESTIONS.length}
          previousAnswer={answers[QUESTIONS[currentIndex].id]}
          onAnswer={handleAnswer}
          onBack={goBack}
          onSkip={skip}
        />
      )}
      {!loading && screen === 'result' && result && <ResultPage result={result} onRestart={resetAll} />}
    </main>
  );
}
