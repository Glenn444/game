import React from 'react';
import { Play } from 'lucide-react';

interface HomeScreenProps {
  fact: { text: string; emoji: string };
  onPlay: () => void;
  darkMode: boolean;
  onSettings: () => void;
}

export function HomeScreen({ fact, onPlay, darkMode }: HomeScreenProps) {
  return (
    <div className={`min-h-screen flex flex-col items-center justify-center ${
      darkMode ? 'bg-gray-900' : 'bg-gray-50'
    } p-4 relative`}>
      {/* Logo */}
      <div className="flex items-center gap-4 mb-4">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full bg-green-500"></div>
          <div className="w-4 h-4 rounded-full bg-yellow-500"></div>
          <div className="w-4 h-4 rounded-full bg-blue-500"></div>
        </div>
        <h1 className={`text-5xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
          Pathogic
        </h1>
      </div>
      
      <p className={`text-2xl ${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-12`}>
        Every word is a clue. Every choice is logic.
      </p>
      
      <button
        onClick={onPlay}
        className="bg-blue-500 text-white px-12 py-4 rounded-full text-xl font-bold
          shadow-lg hover:bg-blue-600 transition-all hover:transform hover:scale-105
          flex items-center gap-2"
      >
        <Play size={24} />
        Play
      </button>
      
      <div className={`mt-12 ${darkMode ? 'text-gray-400' : 'text-gray-600'} italic text-center`}>
        Did you know? {fact.text} {fact.emoji}
      </div>
      
      <footer className={`absolute bottom-4 ${darkMode ? 'text-gray-500' : 'text-gray-400'} text-sm`}>
        © 2025 Pathogic
      </footer>
    </div>
  );
}