export type QuestionKind =
  | 'swipePair'
  | 'singleChoice'
  | 'multiChoice'
  | 'ranking'
  | 'objectChoice'
  | 'placeChoice'
  | 'dialogueChoice'
  | 'songGenreChoice'
  | 'tapMatch'
  | 'connectDots'
  | 'fictionalFate'
  | 'firstReaction'
  | 'hiddenReaction'
  | 'endingChoice';

export type CognitiveFunction = 'Ni' | 'Ne' | 'Si' | 'Se' | 'Fi' | 'Fe' | 'Ti' | 'Te';
export type MBTIType =
  | 'INTJ' | 'INFJ' | 'ENTJ' | 'ENFJ'
  | 'INTP' | 'INFP' | 'ENTP' | 'ENFP'
  | 'ISTJ' | 'ISFJ' | 'ESTJ' | 'ESFJ'
  | 'ISTP' | 'ISFP' | 'ESTP' | 'ESFP';
export type DichotomyKey = 'I' | 'E' | 'S' | 'N' | 'T' | 'F' | 'J' | 'P';
export type BigFiveKey = 'O' | 'C' | 'E' | 'A' | 'N';
export type HexacoKey = 'H' | 'E' | 'X' | 'A' | 'C' | 'O';
export type EnneagramType = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9';
export type Instinct = 'sp' | 'sx' | 'so';
export type APAspect = 'L' | 'E' | 'F' | 'V';
export type DISCKey = 'D' | 'I' | 'S' | 'C';
export type RIASECKey = 'R' | 'I' | 'A' | 'S' | 'E' | 'C';
export type FunctionRole = 'dominant' | 'auxiliary' | 'tertiary' | 'inferior' | 'opposing' | 'critical' | 'trickster' | 'transformative';

export type EvidenceKey =
  | 'observeFirst'
  | 'actionFirst'
  | 'directEngagement'
  | 'indirectEngagement'
  | 'symbolicMeaning'
  | 'memoryReferencing'
  | 'possibilitySeeking'
  | 'practicalRepair'
  | 'boundarySetting'
  | 'emotionalSuppression'
  | 'emotionalExpression'
  | 'withdrawal'
  | 'confrontation'
  | 'appeasement'
  | 'fearResponse'
  | 'angerResponse'
  | 'shameResponse'
  | 'comfortSeeking'
  | 'riskTaking'
  | 'riskAvoidance'
  | 'noveltySeeking'
  | 'orderSeeking'
  | 'justiceSeeking'
  | 'truthSeeking'
  | 'belongingSeeking'
  | 'intensitySeeking'
  | 'autonomyProtection'
  | 'statusAwareness'
  | 'rejectionSensitivity'
  | 'moodRegulation'
  | 'nostalgiaSeeking'
  | 'visibleRole'
  | 'backstageRole'
  | 'contextDependence'
  | 'nonIdentification'
  | 'mixedPattern'
  | 'complexAssociation';

export type StyleKey =
  | 'moralPrincipled' | 'moralContextual' | 'moralCare' | 'moralLiberty' | 'moralOrder'
  | 'decisionAnalytic' | 'decisionRelational' | 'decisionInstinctive' | 'decisionPragmatic' | 'decisionVisionary'
  | 'conflictDirect' | 'conflictAvoidant' | 'conflictMediating' | 'conflictStrategic' | 'conflictExplosive'
  | 'communicationWarm' | 'communicationPrecise' | 'communicationPlayful' | 'communicationMinimal' | 'communicationCommanding'
  | 'relationshipSecureLean' | 'relationshipAnxiousLean' | 'relationshipAvoidantLean' | 'relationshipIntenseLean' | 'relationshipCaretakingLean'
  | 'stressFreeze' | 'stressFight' | 'stressFlight' | 'stressFawn' | 'stressControl'
  | 'defenseRationalize' | 'defenseWithdraw' | 'defensePerform' | 'defensePlease' | 'defenseRebel'
  | 'workBuilder' | 'workStrategist' | 'workHelper' | 'workExplorer' | 'workSpecialist'
  | 'learningConceptual' | 'learningHandsOn' | 'learningSocial' | 'learningStructured' | 'learningExperimental';

export type ValueKey =
  | 'truth' | 'freedom' | 'safety' | 'love' | 'beauty' | 'competence' | 'justice' | 'peace' | 'impact' | 'belonging' | 'mastery' | 'meaning';

export type ScoreMap<K extends string> = Partial<Record<K, number>>;

export interface ScoreWeights {
  functions?: ScoreMap<CognitiveFunction>;
  roles?: Partial<Record<FunctionRole, ScoreMap<CognitiveFunction>>>;
  dichotomy?: ScoreMap<DichotomyKey>;
  bigFive?: ScoreMap<BigFiveKey>;
  hexaco?: ScoreMap<HexacoKey>;
  enneagram?: ScoreMap<EnneagramType>;
  instincts?: ScoreMap<Instinct>;
  ap?: ScoreMap<APAspect>;
  disc?: ScoreMap<DISCKey>;
  riasec?: ScoreMap<RIASECKey>;
  evidence?: ScoreMap<EvidenceKey>;
  styles?: ScoreMap<StyleKey>;
  values?: ScoreMap<ValueKey>;
  reliability?: number;
  ambiguity?: number;
  contradiction?: number;
  context?: string;
  note?: string;
}

export interface OptionItem {
  id: string;
  text: string;
  weights: ScoreWeights;
}

export interface MatchLeftItem {
  id: string;
  text: string;
}

export interface MatchRightItem {
  id: string;
  text: string;
}

export interface MatchScore {
  leftId: string;
  rightId: string;
  weights: ScoreWeights;
}

export interface QuestionItem {
  id: string;
  kind: QuestionKind;
  title: string;
  prompt: string;
  help?: string;
  theme: string;
  typeLabel: string;
  left?: OptionItem;
  right?: OptionItem;
  options?: OptionItem[];
  leftItems?: MatchLeftItem[];
  rightItems?: MatchRightItem[];
  matchScores?: MatchScore[];
  maxSelect?: number;
  requiredSelect?: number;
  lowerReliability?: boolean;
}

export type PairChoice = 'left' | 'right' | 'both' | 'neither' | 'depends' | 'skip';

export interface AnswerPayload {
  questionId: string;
  kind: QuestionKind;
  value?: string | string[] | PairChoice;
  ranking?: string[];
  matches?: Record<string, string>;
  skipped?: boolean;
  answeredAt: number;
}

export interface RawScores {
  functions: Record<CognitiveFunction, number>;
  roles: Record<FunctionRole, Record<CognitiveFunction, number>>;
  dichotomy: Record<DichotomyKey, number>;
  bigFive: Record<BigFiveKey, number>;
  hexaco: Record<HexacoKey, number>;
  enneagram: Record<EnneagramType, number>;
  instincts: Record<Instinct, number>;
  ap: Record<APAspect, number>;
  disc: Record<DISCKey, number>;
  riasec: Record<RIASECKey, number>;
  evidence: Record<EvidenceKey, number>;
  styles: Record<StyleKey, number>;
  values: Record<ValueKey, number>;
  maxPossible: Record<string, number>;
  answeredCount: number;
  skippedCount: number;
  bothCount: number;
  neitherCount: number;
  dependsCount: number;
  ambiguity: number;
  contradiction: number;
  reliabilityTotal: number;
  contextHits: Record<string, number>;
  skippedThemes: string[];
  answerPattern: Record<string, number>;
}

export interface ScoreEntry {
  key: string;
  label: string;
  score: number;
}

export interface MBTIStackResult {
  type: MBTIType;
  score: number;
  stack: CognitiveFunction[];
  notes: string[];
}

export interface FinalResult {
  completedAt: string;
  answeredCount: number;
  totalQuestions: number;
  confidence: number;
  confidenceLabel: string;
  confidenceNote: string;
  mainSummary: string;
  topMBTI: MBTIStackResult[];
  functionRanking: ScoreEntry[];
  stackRoles: Record<'dominant' | 'auxiliary' | 'tertiary' | 'inferior', CognitiveFunction>;
  shadowRoles: Record<'opposing' | 'critical' | 'trickster' | 'transformative', CognitiveFunction>;
  dichotomy: ScoreEntry[];
  enneagram: { type: EnneagramType; score: number; wing: EnneagramType; note: string };
  enneagramTop: ScoreEntry[];
  instinctStacking: Instinct[];
  tritype: string;
  bigFive: ScoreEntry[];
  hexaco: ScoreEntry[];
  socionics: string;
  quadra: string;
  temperament: string;
  classicalTemperament: string;
  attitudinalPsyche: string;
  disc: ScoreEntry[];
  riasec: ScoreEntry[];
  moralStyle: string;
  decisionStyle: string;
  conflictStyle: string;
  communicationStyle: string;
  relationshipTendency: string;
  stressResponse: string;
  coreFear: string;
  coreDesire: string;
  valuesRanking: ScoreEntry[];
  workStyle: string;
  learningStyle: string;
  defensePattern: string;
  closeResultNote: string;
  neutralAnswerNote: string;
  evidenceSummary: ScoreEntry[];
}
