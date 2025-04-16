import React from 'react';
import { WordChoice } from '../types';

interface GameBoardProps {
  startWord: string;
  targetWord: string;
  selectedWords: string[];
  currentChoices: WordChoice[];
  onSelectWord: (word: string) => void;
  round: number;
  lastPoints: { value: number; type: string; } | null;
  theme: string;
  pointsHistory: Array<{ value: number; type: string; }>;
}

export function GameBoard({
  startWord,
  targetWord,
  selectedWords,
  currentChoices,
  onSelectWord,
  round,
  lastPoints,
  theme,
  pointsHistory
}: GameBoardProps) {
  return (
    <div className="w-full max-w-3xl mx-auto">
      {/* Progress Bar */}
      <div className="w-full h-2 bg-gray-200 rounded-full mb-6">
        <div 
          className="h-full bg-blue-500 rounded-full transition-all duration-500 ease-out"
          style={{ width: `${(round - 1) * 33.33}%` }}
        />
      </div>

      {/* Word Path Display */}
      <div className="flex items-center justify-center gap-4 mb-6">
        <WordBox word={startWord} type="start" />
        {[...Array(3)].map((_, i) => (
          <React.Fragment key={i}>
            <div className="text-gray-400">→</div>
            <WordBox
              word={selectedWords[i] || ''}
              type={selectedWords[i] ? 'selected' : 'empty'}
              points={pointsHistory[i]}
            />
          </React.Fragment>
        ))}
        <div className="text-gray-400">→</div>
        <WordBox word={targetWord} type="target" />
      </div>

      {/* Points Animation */}
      {lastPoints && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none z-50">
          <div className={`text-2xl font-bold animate-float-up
            ${lastPoints.type === 'green' ? 'text-green-500' : 
              lastPoints.type === 'yellow' ? 'text-yellow-500' : 
              'text-red-500'}`}>
            {lastPoints.value >= 0 ? `+${lastPoints.value}` : lastPoints.value}
          </div>
        </div>
      )}

      {/* Word Choices */}
      <div className="flex justify-center gap-4 mb-12">
        {currentChoices.map((choice, index) => (
          <button
            key={index}
            onClick={() => onSelectWord(choice.word)}
            className="px-6 py-3 text-base font-bold rounded-lg shadow-md 
              transition-all duration-300 ease-out
              hover:transform hover:scale-105
              bg-white border-2 border-gray-200
              hover:border-gray-300
              active:scale-95
              min-w-[120px] max-w-[180px] truncate"
          >
            {choice.word}
          </button>
        ))}
      </div>
      
      {/* Theme Display */}
      <div className="fixed bottom-4 left-0 right-0 flex justify-center">
        <div className="text-gray-500 text-sm">
          Today's Theme: {theme}
        </div>
      </div>
    </div>
  );
}

interface WordBoxProps {
  word: string;
  type: 'start' | 'target' | 'selected' | 'empty';
  points?: { value: number; type: string; };
}

function WordBox({ word, type, points }: WordBoxProps) {
  const baseClasses = "w-[120px] h-[48px] rounded-xl flex items-center justify-center font-bold text-base transition-all duration-300 px-4 text-center relative";
  
  const typeClasses = {
    start: "bg-green-100 border-2 border-green-500",
    target: "bg-blue-100 border-2 border-blue-500",
    selected: `bg-white border-2 ${
      points?.type === 'green' ? 'border-green-500' :
      points?.type === 'yellow' ? 'border-yellow-500' :
      points?.type === 'red' ? 'border-red-500' :
      'border-gray-300'
    } animate-pop-in`,
    empty: "bg-gray-50 border-2 border-gray-200",
  };

  return (
    <div className={`${baseClasses} ${typeClasses[type]}`}>
      {word}
      {points && type === 'selected' && (
        <div className={`absolute -top-2 -right-2 text-xs font-bold px-1.5 py-0.5 rounded-full
          ${points.type === 'green' ? 'bg-green-500' :
            points.type === 'yellow' ? 'bg-yellow-500' :
            'bg-red-500'} text-white`}>
          {points.value >= 0 ? `+${points.value}` : points.value}
        </div>
      )}
    </div>
  );
}