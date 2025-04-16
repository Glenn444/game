import { ReactNode } from 'react';

export interface WordChoice {
  word: string;
  type: 'green' | 'yellow' | 'red';
  points: number;
}

export interface GameState {
  score: number;
  round: number;
  startWord: string;
  targetWord: string;
  selectedWords: string[];
  currentChoices: WordChoice[];
  gameStatus: 'idle' | 'tutorial' | 'category-select' | 'playing' | 'complete';
  theme: string;
  hintsRemaining: number;
  wrongChoices: string[];
  lastPoints: { value: number; type: string; } | null;
  showHint: boolean;
  currentHint: string;
  explanations: string[];
  selectedCategory: string | null;
}

export interface DailyFact {
  text: string;
  emoji: string;
}

export interface GameHint {
  text: string;
  used: boolean;
}

export interface Category {
  name: string;
  description: string;
  color: string;
}