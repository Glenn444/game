import React from 'react';
import { X, Target, Brain } from 'lucide-react';

interface TutorialProps {
  onClose: () => void;
  darkMode?: boolean;
}

export function Tutorial({ onClose, darkMode = false }: TutorialProps) {
  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className={`${darkMode ? 'bg-gray-900' : 'bg-white'} rounded-2xl w-[600px] relative flex flex-col overflow-hidden`}>
        {/* Header */}
        <div className={`sticky top-0 z-10 px-4 py-2 border-b ${darkMode ? 'border-gray-800 bg-gray-900' : 'border-gray-100 bg-white'} rounded-t-2xl`}>
          <h2 className={`text-lg font-bold text-center ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            How To Play
          </h2>
          <button
            onClick={onClose}
            className={`absolute right-2 top-1/2 -translate-y-1/2 ${
              darkMode ? 'text-gray-400 hover:text-gray-300' : 'text-gray-400 hover:text-gray-600'
            } transition-colors p-1.5 rounded-full`}
          >
            <X size={16} />
          </button>
        </div>

        {/* Content */}
        <div className="p-4 space-y-4">
          {/* Word Connections */}
          <div className={`${darkMode ? 'bg-gray-800' : 'bg-gray-100'} rounded-lg p-3`}>
            <div className="flex items-center gap-2 mb-3">
              <Target size={16} className="text-green-500" />
              <h3 className={`text-sm font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Connection Types</h3>
            </div>
            <div className="space-y-2">
              <ConnectionCard title="Category/Instance" example="FRUIT → APPLE" description="Structured category-based connections" darkMode={darkMode} />
              <ConnectionCard title="Characteristic/Attribute" example="SUN → BRIGHT" description="Key feature connections" darkMode={darkMode} />
              <ConnectionCard title="Location/Place" example="FISH → OCEAN" description="Typical location associations" darkMode={darkMode} />
              <ConnectionCard title="Action/Object" example="DRIVE → CAR" description="Action-based relationships" darkMode={darkMode} />
              <ConnectionCard title="Cause/Effect" example="RAIN → FLOOD" description="Logical consequence links" darkMode={darkMode} />
            </div>
          </div>

          {/* Scoring System */}
          <div className={`${darkMode ? 'bg-gray-800' : 'bg-gray-100'} rounded-lg p-3`}>
            <div className="flex items-center gap-2 mb-3">
              <Brain size={16} className="text-blue-500" />
              <h3 className={`text-sm font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Scoring System</h3>
            </div>
            <div className="grid grid-cols-3 gap-2">
              <ScoreCard points={100} label="Strong" color="green" darkMode={darkMode} />
              <ScoreCard points={75} label="Medium" color="yellow" darkMode={darkMode} />
              <ScoreCard points={50} label="Weak" color="red" darkMode={darkMode} />
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className={`sticky bottom-0 p-3 border-t ${darkMode ? 'border-gray-800 bg-gray-900' : 'border-gray-100 bg-white'} rounded-b-2xl`}>
          <button
            onClick={onClose}
            className="w-full bg-blue-600 text-white py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors"
          >
            Let's Play!
          </button>
        </div>
      </div>
    </div>
  );
}

interface ConnectionCardProps {
  title: string;
  example: string;
  description: string;
  darkMode: boolean;
}

function ConnectionCard({ title, example, description, darkMode }: ConnectionCardProps) {
  return (
    <div className={`${darkMode ? 'bg-gray-900' : 'bg-white'} rounded-lg p-2 text-xs`}>
      <div className="flex items-center justify-between">
        <div className={`font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>{title}</div>
        <div className={`font-mono ${
          darkMode ? 'text-gray-300' : 'text-gray-600'
        }`}>
          {example}
        </div>
      </div>
      <div className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} mt-1`}>{description}</div>
    </div>
  );
}

interface ScoreCardProps {
  points: number;
  label: string;
  color: 'green' | 'yellow' | 'red';
  darkMode: boolean;
}

function ScoreCard({ points, label, color, darkMode }: ScoreCardProps) {
  const colors = {
    green: darkMode ? 'bg-green-900/30 text-green-400' : 'bg-green-100 text-green-800',
    yellow: darkMode ? 'bg-yellow-900/30 text-yellow-400' : 'bg-yellow-100 text-yellow-800',
    red: darkMode ? 'bg-red-900/30 text-red-400' : 'bg-red-100 text-red-800'
  };

  return (
    <div className={`${colors[color]} rounded-lg p-2 text-center text-xs`}>
      <div className="font-bold">+{points}</div>
      <div className={darkMode ? 'text-gray-400' : 'text-gray-600'}>{label}</div>
    </div>
  );
}