import type { QuestionItem } from '../types';
import { cognitiveQuestions } from './questionItemsCognitive';
import { shadowQuestions } from './questionItemsShadow';
import { enneagramQuestions } from './questionItemsEnneagram';
import { instinctQuestions } from './questionItemsInstinct';
import { traitQuestions } from './questionItemsTraits';
import { relationshipQuestions } from './questionItemsRelationship';
import { workValuesQuestions } from './questionItemsWorkValues';
import { fictionalQuestions } from './questionItemsFictional';
import { tieBreakQuestions } from './questionItemsTieBreak';

export const QUESTIONS: QuestionItem[] = [
  ...cognitiveQuestions,
  ...shadowQuestions,
  ...enneagramQuestions,
  ...instinctQuestions,
  ...traitQuestions,
  ...relationshipQuestions,
  ...workValuesQuestions,
  ...fictionalQuestions,
  ...tieBreakQuestions
];

export const TOTAL_QUESTIONS = QUESTIONS.length;
