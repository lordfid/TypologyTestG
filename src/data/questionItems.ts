import type { MatchScore, OptionItem, QuestionItem, QuestionKind, ScoreWeights } from '../types';

export const typeLabels: Record<QuestionKind, string> = {
  swipePair: 'Dua Arah',
  singleChoice: 'Pilihan Adegan',
  multiChoice: 'Pilih Beberapa',
  ranking: 'Urutkan Dorongan',
  objectChoice: 'Pilih Benda',
  placeChoice: 'Pilih Tempat',
  dialogueChoice: 'Pilih Kalimat',
  songGenreChoice: 'Vibe Lagu',
  tapMatch: 'Pasangkan Rasa',
  connectDots: 'Hubungkan Pola',
  fictionalFate: 'Nasib Fiksi',
  firstReaction: 'Reaksi Pertama',
  hiddenReaction: 'Reaksi Tersembunyi',
  endingChoice: 'Pilih Ending'
};

type ArchetypeKey =
  | 'quietPattern'
  | 'widePossibility'
  | 'oldAnchor'
  | 'bodyNow'
  | 'privateValue'
  | 'socialWarmth'
  | 'cleanLogic'
  | 'directFix'
  | 'shield'
  | 'storm'
  | 'caretaker'
  | 'achiever'
  | 'observer'
  | 'loyalGuard'
  | 'peaceKeeper'
  | 'reformer';

const base: Record<ArchetypeKey, ScoreWeights> = {
  quietPattern: {
    functions: { Ni: 5, Ti: 1, Fe: 1 }, roles: { dominant: { Ni: 2 }, auxiliary: { Fe: 1, Te: 1 } }, dichotomy: { I: 2, N: 3, J: 1 },
    bigFive: { O: 4, C: 1, N: 1 }, hexaco: { O: 4, C: 1, E: 1 }, enneagram: { '4': 2, '5': 2, '1': 1 }, instincts: { sx: 2, sp: 1 },
    ap: { L: 2, E: 2 }, disc: { C: 2, S: 1 }, riasec: { I: 3, A: 1 },
    evidence: { observeFirst: 2, symbolicMeaning: 3, indirectEngagement: 1, complexAssociation: 2 },
    styles: { decisionVisionary: 2, communicationMinimal: 1, conflictStrategic: 1, learningConceptual: 2, workStrategist: 2, defenseWithdraw: 1 },
    values: { meaning: 3, truth: 2, beauty: 1 }, reliability: 0.88, ambiguity: 0.05, context: 'pola sunyi'
  },
  widePossibility: {
    functions: { Ne: 5, Fi: 1, Ti: 1 }, roles: { dominant: { Ne: 2 }, auxiliary: { Fi: 1, Ti: 1 } }, dichotomy: { E: 1, N: 3, P: 2 },
    bigFive: { O: 5, E: 1 }, hexaco: { O: 5, X: 1 }, enneagram: { '7': 3, '4': 1, '5': 1 }, instincts: { sx: 1, so: 2 },
    ap: { E: 2, L: 1, V: 1 }, disc: { I: 2 }, riasec: { A: 3, E: 1 },
    evidence: { possibilitySeeking: 3, noveltySeeking: 3, complexAssociation: 2, riskTaking: 1 },
    styles: { decisionInstinctive: 1, communicationPlayful: 2, learningExperimental: 2, workExplorer: 2, defenseRebel: 1 },
    values: { freedom: 3, meaning: 1, beauty: 2 }, reliability: 0.84, ambiguity: 0.08, context: 'kemungkinan bercabang'
  },
  oldAnchor: {
    functions: { Si: 5, Fe: 1, Te: 1 }, roles: { dominant: { Si: 2 }, auxiliary: { Te: 1, Fe: 1 } }, dichotomy: { I: 1, S: 3, J: 2 },
    bigFive: { C: 4, A: 1, N: 1 }, hexaco: { C: 4, H: 1 }, enneagram: { '6': 3, '1': 1, '9': 1 }, instincts: { sp: 3, so: 1 },
    ap: { F: 2, V: 1 }, disc: { S: 2, C: 2 }, riasec: { C: 3, R: 1 },
    evidence: { memoryReferencing: 3, orderSeeking: 2, riskAvoidance: 2, comfortSeeking: 1 },
    styles: { decisionPragmatic: 2, learningStructured: 2, workBuilder: 2, stressControl: 1, moralOrder: 1 },
    values: { safety: 3, peace: 1, competence: 1 }, reliability: 0.88, ambiguity: 0.04, context: 'pegangan lama'
  },
  bodyNow: {
    functions: { Se: 5, Ti: 1, Fi: 1 }, roles: { dominant: { Se: 2 }, auxiliary: { Ti: 1, Fi: 1 } }, dichotomy: { E: 2, S: 3, P: 2 },
    bigFive: { E: 3, O: 1 }, hexaco: { X: 3, O: 1 }, enneagram: { '7': 2, '8': 2, '3': 1 }, instincts: { sx: 2, sp: 1 },
    ap: { F: 2, V: 2 }, disc: { D: 2, I: 1 }, riasec: { R: 2, E: 1 },
    evidence: { actionFirst: 3, directEngagement: 3, riskTaking: 2, practicalRepair: 1 },
    styles: { decisionInstinctive: 2, conflictDirect: 2, learningHandsOn: 2, workExplorer: 1, communicationCommanding: 1 },
    values: { freedom: 2, impact: 2, competence: 1 }, reliability: 0.86, ambiguity: 0.05, context: 'gerak langsung'
  },
  privateValue: {
    functions: { Fi: 5, Ne: 1, Si: 1 }, roles: { dominant: { Fi: 2 }, auxiliary: { Ne: 1, Se: 1 } }, dichotomy: { I: 2, F: 3, P: 1 },
    bigFive: { O: 3, A: 1, N: 2 }, hexaco: { O: 3, H: 1, E: 2 }, enneagram: { '4': 3, '9': 1, '1': 1 }, instincts: { sx: 2, sp: 1 },
    ap: { E: 3, V: 1 }, disc: { S: 1 }, riasec: { A: 3, S: 1 },
    evidence: { symbolicMeaning: 2, boundarySetting: 2, shameResponse: 2, emotionalSuppression: 1, autonomyProtection: 2 },
    styles: { moralPrincipled: 2, decisionRelational: 1, communicationMinimal: 1, relationshipIntenseLean: 1, defenseWithdraw: 1 },
    values: { beauty: 2, meaning: 2, freedom: 1 }, reliability: 0.85, ambiguity: 0.05, context: 'nilai privat'
  },
  socialWarmth: {
    functions: { Fe: 5, Si: 1, Ni: 1 }, roles: { dominant: { Fe: 2 }, auxiliary: { Ni: 1, Si: 1 } }, dichotomy: { E: 2, F: 3, J: 1 },
    bigFive: { A: 4, E: 2 }, hexaco: { A: 4, H: 1, X: 2 }, enneagram: { '2': 3, '3': 1, '9': 1 }, instincts: { so: 3, sx: 1 },
    ap: { E: 2, V: 1 }, disc: { I: 2, S: 1 }, riasec: { S: 3, E: 1 },
    evidence: { belongingSeeking: 3, appeasement: 1, emotionalExpression: 2, visibleRole: 1 },
    styles: { communicationWarm: 2, conflictMediating: 2, relationshipCaretakingLean: 2, decisionRelational: 2, defensePlease: 1 },
    values: { love: 3, belonging: 2, peace: 1 }, reliability: 0.86, ambiguity: 0.06, context: 'hubungan terlihat'
  },
  cleanLogic: {
    functions: { Ti: 5, Ne: 1, Se: 1 }, roles: { dominant: { Ti: 2 }, auxiliary: { Ne: 1, Se: 1 } }, dichotomy: { I: 2, T: 3, P: 1 },
    bigFive: { O: 2, C: 1, A: -1 }, hexaco: { O: 2, C: 1 }, enneagram: { '5': 3, '9': 1, '6': 1 }, instincts: { sp: 2, sx: 1 },
    ap: { L: 3, V: 1 }, disc: { C: 3 }, riasec: { I: 3, R: 1 },
    evidence: { truthSeeking: 3, observeFirst: 1, emotionalSuppression: 2, indirectEngagement: 1 },
    styles: { decisionAnalytic: 3, communicationPrecise: 2, conflictStrategic: 1, learningConceptual: 2, defenseRationalize: 1 },
    values: { truth: 3, mastery: 2, competence: 1 }, reliability: 0.87, ambiguity: 0.04, context: 'akurasi dingin'
  },
  directFix: {
    functions: { Te: 5, Ni: 1, Si: 1 }, roles: { dominant: { Te: 2 }, auxiliary: { Ni: 1, Si: 1 } }, dichotomy: { E: 1, T: 3, J: 3 },
    bigFive: { C: 4, E: 1, A: -1 }, hexaco: { C: 4, X: 1 }, enneagram: { '3': 2, '8': 2, '1': 1 }, instincts: { sp: 2, so: 1 },
    ap: { V: 3, L: 1 }, disc: { D: 3, C: 1 }, riasec: { E: 3, C: 1 },
    evidence: { practicalRepair: 3, actionFirst: 2, orderSeeking: 1, statusAwareness: 1 },
    styles: { decisionPragmatic: 3, conflictDirect: 2, communicationCommanding: 2, workBuilder: 1, workStrategist: 1, stressControl: 1 },
    values: { impact: 3, competence: 2, safety: 1 }, reliability: 0.88, ambiguity: 0.04, context: 'perbaikan nyata'
  },
  shield: {
    functions: { Fi: 2, Ti: 2, Si: 1 }, roles: { inferior: { Fe: 1 }, opposing: { Te: 1 } }, dichotomy: { I: 2, T: 1 },
    bigFive: { N: 3, A: -1 }, hexaco: { E: 3 }, enneagram: { '5': 2, '6': 2, '9': 1 }, instincts: { sp: 3 },
    ap: { L: 1, F: 1, V: 1 }, disc: { C: 1, S: 1 }, riasec: { I: 1 },
    evidence: { withdrawal: 3, emotionalSuppression: 2, riskAvoidance: 2, boundarySetting: 1, fearResponse: 2 },
    styles: { stressFreeze: 2, defenseWithdraw: 2, conflictAvoidant: 2, communicationMinimal: 1, relationshipAvoidantLean: 2 },
    values: { safety: 2, peace: 2, freedom: 1 }, reliability: 0.82, ambiguity: 0.12, contradiction: 0.04, context: 'perlindungan diri'
  },
  storm: {
    functions: { Se: 2, Fi: 2, Te: 1 }, roles: { inferior: { Ni: 1 }, transformative: { Ni: 1 } }, dichotomy: { E: 1, P: 1 },
    bigFive: { N: 3, E: 1 }, hexaco: { E: 3, X: 1 }, enneagram: { '4': 2, '8': 2, '7': 1 }, instincts: { sx: 3 },
    ap: { E: 2, V: 2 }, disc: { D: 2, I: 1 }, riasec: { A: 1, E: 1 },
    evidence: { angerResponse: 2, intensitySeeking: 3, emotionalExpression: 2, confrontation: 2, riskTaking: 1 },
    styles: { stressFight: 2, conflictExplosive: 2, communicationCommanding: 1, relationshipIntenseLean: 2, defenseRebel: 1 },
    values: { freedom: 2, love: 1, impact: 1 }, reliability: 0.8, ambiguity: 0.1, contradiction: 0.08, context: 'tekanan panas'
  },
  caretaker: {
    functions: { Fe: 3, Si: 2, Fi: 1 }, roles: { auxiliary: { Fe: 2 }, tertiary: { Si: 1 } }, dichotomy: { F: 3, J: 1 },
    bigFive: { A: 4, C: 1 }, hexaco: { H: 2, A: 3 }, enneagram: { '2': 3, '6': 1, '9': 1 }, instincts: { so: 2, sp: 1 },
    ap: { E: 2, F: 1 }, disc: { S: 2, I: 1 }, riasec: { S: 4 },
    evidence: { appeasement: 2, belongingSeeking: 2, practicalRepair: 1, backstageRole: 2 },
    styles: { relationshipCaretakingLean: 3, conflictMediating: 2, communicationWarm: 2, workHelper: 3, defensePlease: 1 },
    values: { love: 3, peace: 2, belonging: 2 }, reliability: 0.85, ambiguity: 0.06, context: 'mengurus diam-diam'
  },
  achiever: {
    functions: { Te: 2, Fe: 1, Se: 1, Ni: 1 }, roles: { dominant: { Te: 1 }, auxiliary: { Ni: 1 } }, dichotomy: { E: 1, J: 2, T: 1 },
    bigFive: { C: 4, E: 2 }, hexaco: { C: 4, X: 2 }, enneagram: { '3': 4, '1': 1, '8': 1 }, instincts: { so: 2, sp: 1 },
    ap: { V: 3 }, disc: { D: 2, I: 1 }, riasec: { E: 4 },
    evidence: { statusAwareness: 3, actionFirst: 1, visibleRole: 2, orderSeeking: 1 },
    styles: { workStrategist: 2, communicationCommanding: 1, decisionPragmatic: 2, defensePerform: 2, stressControl: 1 },
    values: { impact: 3, competence: 3, mastery: 1 }, reliability: 0.84, ambiguity: 0.08, context: 'pembuktian diri'
  },
  observer: {
    functions: { Ti: 3, Ni: 2, Si: 1 }, roles: { dominant: { Ti: 1, Ni: 1 }, inferior: { Fe: 1 } }, dichotomy: { I: 3, T: 2, N: 1 },
    bigFive: { O: 2, E: -1 }, hexaco: { O: 2 }, enneagram: { '5': 4, '6': 1 }, instincts: { sp: 3 },
    ap: { L: 3 }, disc: { C: 3 }, riasec: { I: 4 },
    evidence: { observeFirst: 3, indirectEngagement: 2, truthSeeking: 2, withdrawal: 1 },
    styles: { decisionAnalytic: 2, communicationPrecise: 1, learningConceptual: 3, workSpecialist: 2, defenseRationalize: 1 },
    values: { truth: 3, mastery: 2, safety: 1 }, reliability: 0.86, ambiguity: 0.06, context: 'menyimpan jarak'
  },
  loyalGuard: {
    functions: { Si: 2, Fe: 1, Te: 1, Ti: 1 }, roles: { auxiliary: { Si: 1 }, inferior: { Ne: 1 } }, dichotomy: { I: 1, S: 2, J: 2 },
    bigFive: { C: 3, N: 2 }, hexaco: { C: 3, H: 1 }, enneagram: { '6': 4, '1': 1, '2': 1 }, instincts: { sp: 2, so: 2 },
    ap: { F: 1, V: 1 }, disc: { S: 3, C: 1 }, riasec: { C: 2, S: 1 },
    evidence: { riskAvoidance: 2, belongingSeeking: 1, orderSeeking: 2, fearResponse: 2 },
    styles: { stressControl: 2, conflictMediating: 1, communicationPrecise: 1, learningStructured: 2, moralOrder: 1 },
    values: { safety: 3, belonging: 2, peace: 1 }, reliability: 0.86, ambiguity: 0.07, context: 'kesiagaan'
  },
  peaceKeeper: {
    functions: { Fi: 1, Fe: 2, Si: 1, Ne: 1 }, roles: { tertiary: { Fe: 1, Si: 1 }, inferior: { Te: 1 } }, dichotomy: { I: 1, F: 2, P: 1 },
    bigFive: { A: 4, N: 1 }, hexaco: { A: 4, H: 1 }, enneagram: { '9': 4, '2': 1, '6': 1 }, instincts: { sp: 2, so: 1 },
    ap: { E: 1, F: 1 }, disc: { S: 3 }, riasec: { S: 2, A: 1 },
    evidence: { comfortSeeking: 2, appeasement: 2, withdrawal: 1, moodRegulation: 2 },
    styles: { conflictAvoidant: 2, conflictMediating: 2, relationshipSecureLean: 1, communicationWarm: 1, defensePlease: 1 },
    values: { peace: 3, love: 1, safety: 1 }, reliability: 0.84, ambiguity: 0.09, context: 'menjaga tenang'
  },
  reformer: {
    functions: { Te: 2, Si: 2, Fi: 1, Ni: 1 }, roles: { dominant: { Te: 1, Si: 1 }, critical: { Fi: 1 } }, dichotomy: { J: 3, T: 1 },
    bigFive: { C: 4, A: 0 }, hexaco: { C: 4, H: 1 }, enneagram: { '1': 4, '6': 1, '8': 1 }, instincts: { so: 1, sp: 2 },
    ap: { V: 2, L: 1 }, disc: { C: 2, D: 1 }, riasec: { C: 2, E: 1 },
    evidence: { justiceSeeking: 3, orderSeeking: 2, boundarySetting: 1, angerResponse: 1 },
    styles: { moralPrincipled: 2, moralOrder: 2, decisionPragmatic: 1, conflictDirect: 1, stressControl: 1 },
    values: { justice: 3, competence: 1, safety: 1 }, reliability: 0.86, ambiguity: 0.05, context: 'standar benar'
  }
};

export function mergeWeights(...items: ScoreWeights[]): ScoreWeights {
  const result: ScoreWeights = {};
  for (const item of items) {
    for (const key of Object.keys(item) as (keyof ScoreWeights)[]) {
      if (key === 'reliability' || key === 'ambiguity' || key === 'contradiction') {
        result[key] = (result[key] ?? 0) + (item[key] as number | undefined ?? 0);
      } else if (key === 'context' || key === 'note') {
        result[key] = item[key] as never;
      } else {
        const current = (result[key] ?? {}) as Record<string, number>;
        const incoming = (item[key] ?? {}) as Record<string, number>;
        result[key] = { ...current } as never;
        for (const scoreKey of Object.keys(incoming)) {
          (result[key] as Record<string, number>)[scoreKey] = ((result[key] as Record<string, number>)[scoreKey] ?? 0) + incoming[scoreKey];
        }
      }
    }
  }
  return result;
}

export function w(key: ArchetypeKey, extra: ScoreWeights = {}): ScoreWeights {
  return mergeWeights(base[key], extra);
}

export function option(id: string, text: string, archetype: ArchetypeKey, extra: ScoreWeights = {}): OptionItem {
  return { id, text, weights: w(archetype, extra) };
}

export function makeChoice(
  id: string,
  kind: QuestionKind,
  theme: string,
  titleOrPrompt: string,
  promptOrOptions: string | OptionItem[],
  optionsOrMax?: OptionItem[] | number,
  maxSelect?: number
): QuestionItem {
  const compact = Array.isArray(promptOrOptions);
  const title = compact ? theme : titleOrPrompt;
  const prompt = compact ? titleOrPrompt : promptOrOptions;
  const options = (compact ? promptOrOptions : optionsOrMax) as OptionItem[];
  const max = compact ? (optionsOrMax as number | undefined) : maxSelect;
  return { id, kind, theme, title, prompt, typeLabel: typeLabels[kind], options, maxSelect: max };
}

export function makeSwipe(
  id: string,
  theme: string,
  title: string,
  prompt: string,
  left: OptionItem,
  right: OptionItem
): QuestionItem {
  return { id, kind: 'swipePair', theme, title, prompt, typeLabel: typeLabels.swipePair, left, right };
}

export function makeMatch(
  id: string,
  kind: 'tapMatch' | 'connectDots',
  theme: string,
  title: string,
  promptOrLeft: string | string[],
  leftOrRight: string[],
  rightOrArchetypes: string[] | ArchetypeKey[],
  maybeArchetypes?: ArchetypeKey[]
): QuestionItem {
  const compact = Array.isArray(promptOrLeft);
  const prompt = compact ? title : promptOrLeft;
  const leftItems = (compact ? promptOrLeft : leftOrRight) as string[];
  const rightItems = (compact ? leftOrRight : rightOrArchetypes) as string[];
  const archetypes = (compact ? rightOrArchetypes : maybeArchetypes) as ArchetypeKey[];
  const left = leftItems.map((text, index) => ({ id: `l${index + 1}`, text }));
  const right = rightItems.map((text, index) => ({ id: `r${index + 1}`, text }));
  const matchScores: MatchScore[] = [];
  left.forEach((l, li) => {
    right.forEach((r, ri) => {
      const archetype = archetypes[(li + ri) % archetypes.length];
      matchScores.push({ leftId: l.id, rightId: r.id, weights: w(archetype, { evidence: { complexAssociation: 1 }, reliability: 0.68, ambiguity: 0.08, context: theme }) });
    });
  });
  return { id, kind, theme, title, prompt, typeLabel: typeLabels[kind], leftItems: left, rightItems: right, matchScores };
}

export const commonOptions = {
  quietPattern: (id: string, text: string) => option(id, text, 'quietPattern'),
  widePossibility: (id: string, text: string) => option(id, text, 'widePossibility'),
  oldAnchor: (id: string, text: string) => option(id, text, 'oldAnchor'),
  bodyNow: (id: string, text: string) => option(id, text, 'bodyNow'),
  privateValue: (id: string, text: string) => option(id, text, 'privateValue'),
  socialWarmth: (id: string, text: string) => option(id, text, 'socialWarmth'),
  cleanLogic: (id: string, text: string) => option(id, text, 'cleanLogic'),
  directFix: (id: string, text: string) => option(id, text, 'directFix'),
  shield: (id: string, text: string) => option(id, text, 'shield'),
  storm: (id: string, text: string) => option(id, text, 'storm'),
  caretaker: (id: string, text: string) => option(id, text, 'caretaker'),
  achiever: (id: string, text: string) => option(id, text, 'achiever'),
  observer: (id: string, text: string) => option(id, text, 'observer'),
  loyalGuard: (id: string, text: string) => option(id, text, 'loyalGuard'),
  peaceKeeper: (id: string, text: string) => option(id, text, 'peaceKeeper'),
  reformer: (id: string, text: string) => option(id, text, 'reformer')
};
