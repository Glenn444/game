import React, { useState, useEffect } from 'react';
import { GameState, WordChoice, DailyFact } from './types';
import { GameBoard } from './components/GameBoard';
import { GameHeader } from './components/GameHeader';
import { HomeScreen } from './components/HomeScreen';
import { Tutorial } from './components/Tutorial';
import { GameComplete } from './components/GameComplete';
import { getDailyFact, getDailyWordPath, saveGameResult, getCurrentWordPath } from './lib/game-service';
import SupabaseFeedbackSystem from './components/Review';


function shuffleChoices(choices: WordChoice[]): WordChoice[] {
  return [...choices].sort(() => Math.random() - 0.5);
}

const initialGameState: GameState = {
  score: 0,
  round: 1,
  startWord: "",
  targetWord: "",
  selectedWords: [],
  currentChoices: [],
  gameStatus: 'idle',
  theme: "",
  hintsRemaining: 1,
  wrongChoices: [],
  lastPoints: null,
  showHint: false,
  currentHint: "",
  explanations: [],
  selectedCategory: null
};

function App() {
  const [gameState, setGameState] = useState<GameState>(initialGameState);
  const [dailyFact, setDailyFact] = useState<DailyFact>({
    text: "Loading...",
    emoji: "⌛"
  });
  const [pointsHistory, setPointsHistory] = useState<Array<{ value: number; type: string; }>>([]);
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    return saved ? JSON.parse(saved) : false;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  const loadGameData = async () => {
    const [fact, wordPath] = await Promise.all([
      getDailyFact(),
      getDailyWordPath()
    ]);

    setDailyFact(fact);
    setPointsHistory([]);

    if (wordPath) {
      setGameState(prev => ({
        ...initialGameState,
        startWord: wordPath.start_word,
        targetWord: wordPath.target_word,
        theme: wordPath.theme,
        currentChoices: shuffleChoices(wordPath.choices[0]),
        currentHint: wordPath.hints[1],
        explanations: wordPath.explanations,
        gameStatus: prev.gameStatus,
        hintsRemaining: 1
      }));
    }
  };

  useEffect(() => {
    loadGameData();
  }, []);

  const handlePlay = () => {
    setGameState(prev => ({
      ...prev,
      gameStatus: 'tutorial'
    }));
  };

  const handleStartGame = () => {
    setGameState(prev => ({
      ...prev,
      gameStatus: 'playing'
    }));
  };

  const handlePlayAgain = async () => {
    await loadGameData();
    setGameState(prev => ({
      ...prev,
      gameStatus: 'tutorial'
    }));
  };

  const handleHint = () => {
    if (gameState.hintsRemaining > 0) {
      setGameState(prev => ({
        ...prev,
        hintsRemaining: prev.hintsRemaining - 1,
        showHint: true
      }));
    }
  };

  const handleWordSelect = async (word: string) => {
  
    
    const selectedChoice = gameState.currentChoices.find(choice => choice.word === word);
    const currentWordPath = getCurrentWordPath();
    
    if (selectedChoice) {
      setPointsHistory(prev => [...prev, {
        value: selectedChoice.points,
        type: selectedChoice.type
      }]);
    }
    
    setGameState(prev => {
      const newSelectedWords = [...prev.selectedWords, word];
      const newRound = prev.round + 1;
      const isGameComplete = newRound > 3;
      
      const newWrongChoices = selectedChoice?.type === 'red' || selectedChoice?.type === 'yellow' ? 
        [...prev.wrongChoices, word] : prev.wrongChoices;
      const points = selectedChoice?.points || 0;
      
      const nextChoices = isGameComplete ? [] : 
        shuffleChoices(currentWordPath.choices[newRound - 1]);
      
      const newState = {
        ...prev,
        selectedWords: newSelectedWords,
        round: newRound,
        currentChoices: nextChoices,
        score: prev.score + points,
        gameStatus: isGameComplete ? 'complete' : 'playing',
        wrongChoices: newWrongChoices,
        lastPoints: {
          value: points,
          type: selectedChoice?.type || 'red'
        },
        showHint: false,
        currentHint: isGameComplete ? prev.currentHint : 
          currentWordPath.hints[newRound]
      };

      if (isGameComplete) {
        
        saveGameResult(
          newState.score,
          [...newSelectedWords, gameState.targetWord],
          newWrongChoices
        ).catch(console.error);
      }

      return newState;
    });
  };

  if (gameState.gameStatus === 'idle') {
    return (
      <HomeScreen 
        fact={dailyFact} 
        onPlay={handlePlay} 
        darkMode={darkMode}
        onSettings={() => {}} 
      />
    );
  }

  if (gameState.gameStatus === 'tutorial') {
    return (
      <Tutorial onClose={handleStartGame} darkMode={darkMode} />
    );
  }

  if (gameState.gameStatus === 'complete') {
    return (
      <GameComplete 
        score={gameState.score} 
        path={[gameState.startWord, ...gameState.selectedWords, gameState.targetWord]}
        wrongChoices={gameState.wrongChoices}
        correctPath={[
          { word: gameState.startWord, type: "start" },
          ...gameState.selectedWords.map((word, index) => ({
            word,
            type: "green",
            explanation: gameState.explanations[index]
          })),
          { word: gameState.targetWord, type: "target",explanation: gameState.explanations[3] }
        ]}
        onPlayAgain={handlePlayAgain}
        darkMode={darkMode}
      />
    );
  }

  return (
    <div className={`min-h-screen flex flex-col justify-center p-4 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <GameHeader
        score={gameState.score}
        round={gameState.round}
        hintsRemaining={gameState.hintsRemaining}
        onShowTutorial={() => setGameState(prev => ({ ...prev, gameStatus: 'tutorial' }))}
        onHint={handleHint}
        currentHint={gameState.currentHint}
        showHint={gameState.showHint}
        darkMode={darkMode}
        onSettings={() => setDarkMode(!darkMode)}
      />
      
      <GameBoard
        startWord={gameState.startWord}
        targetWord={gameState.targetWord}
        selectedWords={gameState.selectedWords}
        currentChoices={gameState.currentChoices}
        onSelectWord={handleWordSelect}
        round={gameState.round}
        lastPoints={gameState.lastPoints}
        theme={gameState.theme}
        pointsHistory={pointsHistory}
        darkMode={darkMode}
      />
      <SupabaseFeedbackSystem />
    </div>
  );
}

export default App;