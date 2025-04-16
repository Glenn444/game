import React, { useEffect } from 'react';
import { HelpCircle, Lightbulb, Moon, Sun } from 'lucide-react';

interface GameHeaderProps {
  score: number;
  round: number;
  hintsRemaining: number;
  onShowTutorial: () => void;
  onHint: () => void;
  currentHint: string;
  showHint: boolean;
  darkMode: boolean;
  onSettings: () => void;
}

export function GameHeader({
  score,
  round,
  hintsRemaining,
  onShowTutorial,
  onHint,
  currentHint,
  showHint,
  darkMode,
  onSettings
}: GameHeaderProps) {
  const [showHintPopup, setShowHintPopup] = React.useState(false);
  const [isHintCooldown, setIsHintCooldown] = React.useState(false);
  const [hintRound, setHintRound] = React.useState<number | null>(null);

  useEffect(() => {
    let cooldownTimer: number;

    if (isHintCooldown) {
      cooldownTimer = window.setTimeout(() => {
        setIsHintCooldown(false);
      }, 4000);
    }

    return () => {
      if (cooldownTimer) window.clearTimeout(cooldownTimer);
    };
  }, [isHintCooldown]);

  useEffect(() => {
    if (round !== hintRound) {
      setShowHintPopup(false);
    }
  }, [round, hintRound]);

  const handleHintClick = () => {
    if (!isHintCooldown && hintsRemaining > 0) {
      setIsHintCooldown(true);
      setShowHintPopup(true);
      setHintRound(round);
      onHint();
    }
  };

  const handleCloseHint = () => {
    setShowHintPopup(false);
  };

  return (
    <div className="w-full max-w-3xl mx-auto mb-8">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-blue-500"></div>
            <span className={`font-bold text-xl ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Pathogic
            </span>
          </div>

          <button
            onClick={onShowTutorial}
            className={`p-2 ${darkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'} rounded-full transition-colors`}
            aria-label="How to Play"
          >
            <HelpCircle size={20} className={darkMode ? 'text-gray-400' : 'text-gray-600'} />
          </button>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={onSettings}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-300 focus:outline-none ${
              darkMode ? 'bg-blue-600' : 'bg-gray-200'
            }`}
            aria-label="Toggle Dark Mode"
          >
            <span className="sr-only">Toggle Dark Mode</span>
            <span
              className={`${
                darkMode ? 'translate-x-6 bg-gray-800' : 'translate-x-1 bg-white'
              } inline-block h-4 w-4 transform rounded-full transition-transform duration-300 flex items-center justify-center`}
            >
              {darkMode ? (
                <Moon size={10} className="text-blue-400" />
              ) : (
                <Sun size={10} className="text-yellow-500" />
              )}
            </span>
          </button>

          <div className="relative">
            <button
              onClick={handleHintClick}
              disabled={hintsRemaining === 0 || isHintCooldown}
              className={`flex items-center gap-2 ${
                darkMode ? 'bg-gray-800' : 'bg-gray-100'
              } rounded-lg px-4 py-2 
                ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-200'} 
                disabled:opacity-50 disabled:cursor-not-allowed 
                transition-colors duration-200`}
            >
              <Lightbulb size={18} className="text-yellow-500" />
              <span className={`font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>{hintsRemaining}</span>
            </button>
            
            {showHintPopup && round === hintRound && (
              <div className={`absolute top-full left-1/2 transform -translate-x-1/2 mt-2 
                ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} 
                border rounded-lg shadow-lg p-4 w-64 animate-fade-in z-50`}>
                <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-3`}>{currentHint}</p>
                <button
                  onClick={handleCloseHint}
                  className={`w-full ${
                    darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'
                  } text-sm font-medium py-2 rounded-md transition-colors`}
                >
                  Close
                </button>
              </div>
            )}
          </div>

          <div className={`font-bold text-xl ${darkMode ? 'text-white' : 'text-gray-900'} min-w-[100px] text-right`}>
            Score: {score}
          </div>
        </div>
      </div>

      <div className={`${
        darkMode ? 'bg-gray-800 text-gray-300' : 'bg-gray-100 text-gray-700'
      } rounded-full px-4 py-1 text-sm font-medium text-center w-32 mx-auto`}>
        ROUND {round}/3
      </div>
    </div>
  );
}