import React, { useEffect, useState } from 'react';
import { Trophy, AlertCircle, ArrowRight, MessageCircle } from 'lucide-react';
import confetti from 'canvas-confetti';

interface GameCompleteProps {
  score: number;
  path: string[];
  wrongChoices: string[];
  correctPath: Array<{ word: string; type: string; explanation?: string; }>;
  onPlayAgain: () => void;
  darkMode?: boolean;
}

const FEEDBACK_EMOJIS = [
  { emoji: "😍", label: "Loved it!" },
  { emoji: "🙂", label: "It's good" },
  { emoji: "🤔", label: "Confusing" },
  { emoji: "😴", label: "Too easy" }
];

export function GameComplete({ score, path, wrongChoices, correctPath, onPlayAgain, darkMode = false }: GameCompleteProps) {
  const [showFeedback, setShowFeedback] = useState(false);
  const [selectedEmoji, setSelectedEmoji] = useState<string | null>(null);
  const [feedbackSent, setFeedbackSent] = useState(false);
  const [comment, setComment] = useState('');
  const [showComment, setShowComment] = useState(false);

  useEffect(() => {
    if (wrongChoices.length === 0) {
      const duration = 3000;
      const end = Date.now() + duration;

      const frame = () => {
        confetti({
          particleCount: 2,
          angle: 60,
          spread: 55,
          origin: { x: 0 },
          colors: ['#22c55e', '#3b82f6', '#eab308']
        });
        
        confetti({
          particleCount: 2,
          angle: 120,
          spread: 55,
          origin: { x: 1 },
          colors: ['#22c55e', '#3b82f6', '#eab308']
        });

        if (Date.now() < end) {
          requestAnimationFrame(frame);
        }
      };

      frame();
    }
  }, []);

  const handleFeedback = (emoji: string) => {
    setSelectedEmoji(emoji);
    setShowComment(true);
  };

  const handleSubmitFeedback = () => {
    setFeedbackSent(true);
    // Here you would typically send the feedback to your backend
    console.log('Feedback sent:', { emoji: selectedEmoji, comment });
  };

  // Create pairs of words for showing connections
  const wordPairs = correctPath.slice(0, -1).map((word, index) => ({
    from: word,
    to: correctPath[index + 1]
  }));

  // Function to determine connection type and style
  const getConnectionInfo = (explanation: string = "") => {
    const lowerExp = explanation.toLowerCase();
    
    if (lowerExp.includes("physical") || lowerExp.includes("natural")) {
      return { type: "Physical", category: "Direct", color: darkMode ? "bg-green-900/30 text-green-400" : "bg-green-100 text-green-800" };
    }
    if (lowerExp.includes("function") || lowerExp.includes("used")) {
      return { type: "Functional", category: "Direct", color: darkMode ? "bg-green-900/30 text-green-400" : "bg-green-100 text-green-800" };
    }
    if (lowerExp.includes("property") || lowerExp.includes("characteristic")) {
      return { type: "Property", category: "Direct", color: darkMode ? "bg-green-900/30 text-green-400" : "bg-green-100 text-green-800" };
    }
    if (lowerExp.includes("leads to") || lowerExp.includes("creates")) {
      return { type: "Cause & Effect", category: "Logical", color: darkMode ? "bg-yellow-900/30 text-yellow-400" : "bg-yellow-100 text-yellow-800" };
    }
    if (lowerExp.includes("represents") || lowerExp.includes("symbolizes")) {
      return { type: "Symbolic", category: "Abstract", color: darkMode ? "bg-red-900/30 text-red-400" : "bg-red-100 text-red-800" };
    }
    return { type: "Conceptual", category: "Abstract", color: darkMode ? "bg-red-900/30 text-red-400" : "bg-red-100 text-red-800" };
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl p-4 w-[600px] max-h-[80vh] overflow-y-auto relative`}>
        {/* Feedback Button */}
        <button
          onClick={() => setShowFeedback(true)}
          className={`absolute top-4 right-4 p-2 rounded-full transition-colors ${
            darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
          }`}
          aria-label="Give Feedback"
        >
          <MessageCircle size={20} className={darkMode ? 'text-gray-400' : 'text-gray-600'} />
        </button>

        {/* Feedback Modal */}
        {showFeedback && (
          <div className="absolute inset-0 bg-black/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
            <div className={`${darkMode ? 'bg-gray-900' : 'bg-white'} rounded-lg p-4 w-72 text-center`}>
              <h3 className={`text-lg font-semibold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                {feedbackSent ? 'Thanks for your feedback!' : showComment ? 'Any additional thoughts?' : 'How was this puzzle?'}
              </h3>
              
              {feedbackSent ? (
                <div className="text-3xl animate-bounce">{selectedEmoji}</div>
              ) : showComment ? (
                <div className="space-y-3">
                  <div className="flex flex-col items-start">
                    <div className="w-full relative">
                      <textarea
                        value={comment}
                        onChange={(e) => setComment(e.target.value.slice(0, 100))}
                        placeholder="Share your thoughts..."
                        className={`w-full h-20 p-2 rounded-lg resize-none ${
                          darkMode ? 
                            'bg-gray-800 text-gray-200 placeholder-gray-500' : 
                            'bg-gray-50 text-gray-900 placeholder-gray-400'
                        } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                      />
                      <div className={`absolute bottom-2 right-2 text-xs ${
                        darkMode ? 'text-gray-500' : 'text-gray-400'
                      }`}>
                        {comment.length}/100
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => {
                        setShowComment(false);
                        setSelectedEmoji(null);
                      }}
                      className={`flex-1 px-4 py-2 rounded-lg text-sm ${
                        darkMode ? 
                          'bg-gray-800 hover:bg-gray-700 text-gray-300' : 
                          'bg-gray-100 hover:bg-gray-200 text-gray-700'
                      }`}
                    >
                      Back
                    </button>
                    <button
                      onClick={handleSubmitFeedback}
                      className="flex-1 px-4 py-2 rounded-lg text-sm bg-blue-600 hover:bg-blue-700 text-white"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-4 gap-2">
                  {FEEDBACK_EMOJIS.map(({ emoji, label }) => (
                    <button
                      key={emoji}
                      onClick={() => handleFeedback(emoji)}
                      className={`flex flex-col items-center p-2 rounded-lg transition-colors ${
                        darkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'
                      }`}
                    >
                      <span className="text-2xl mb-1">{emoji}</span>
                      <span className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        {label}
                      </span>
                    </button>
                  ))}
                </div>
              )}
              
              {!showComment && !feedbackSent && (
                <button
                  onClick={() => setShowFeedback(false)}
                  className={`mt-4 px-4 py-2 rounded-lg text-sm ${
                    darkMode ? 'bg-gray-800 hover:bg-gray-700 text-gray-300' : 
                    'bg-gray-100 hover:bg-gray-200 text-gray-700'
                  }`}
                >
                  Close
                </button>
              )}

              {feedbackSent && (
                <button
                  onClick={() => {
                    setShowFeedback(false);
                    setComment('');
                    setSelectedEmoji(null);
                    setShowComment(false);
                    setFeedbackSent(false);
                  }}
                  className={`mt-4 px-4 py-2 rounded-lg text-sm ${
                    darkMode ? 'bg-gray-800 hover:bg-gray-700 text-gray-300' : 
                    'bg-gray-100 hover:bg-gray-200 text-gray-700'
                  }`}
                >
                  Close
                </button>
              )}
            </div>
          </div>
        )}

        <div className="text-center mb-3">
          <h2 className={`text-xl font-bold mb-1 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Game Complete!</h2>
          <div className="flex items-center justify-center gap-2">
            <Trophy size={20} className="text-yellow-500" />
            <p className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Score: {score}</p>
          </div>
        </div>

        <div className="space-y-3">
          {/* Path Overview */}
          <div className={`${darkMode ? 'bg-gray-700' : 'bg-gray-50'} p-2 rounded-lg`}>
            <h3 className={`text-sm font-semibold mb-1.5 text-center ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>Word Connection Path</h3>
            <div className="flex items-center justify-center gap-1 flex-wrap px-1">
              {correctPath.map((word, index) => (
                <React.Fragment key={word.word}>
                  <div className={`px-3 py-1 ${
                    word.type === 'start' ? `${darkMode ? 'bg-green-900/30 border-green-500' : 'bg-green-100 border-green-500'}` :
                    word.type === 'target' ? `${darkMode ? 'bg-blue-900/30 border-blue-500' : 'bg-blue-100 border-blue-500'}` :
                    word.type === 'green' ? `${darkMode ? 'bg-green-900/30 border-green-500' : 'bg-green-100 border-green-500'}` :
                    `${darkMode ? 'bg-gray-800 border-gray-600' : 'bg-white border-gray-300'}`
                  } rounded-md font-medium text-sm whitespace-nowrap border-2 ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                    {word.word}
                  </div>
                  {index < correctPath.length - 1 && (
                    <ArrowRight size={16} className={darkMode ? 'text-gray-500' : 'text-gray-400'} />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Connection Explanations */}
          <div className={`${darkMode ? 'bg-gray-700' : 'bg-gray-50'} p-2 rounded-lg`}>
            <h3 className={`text-sm font-semibold mb-2 text-center ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>
              Understanding the Connections
            </h3>
            <div className="space-y-2">
              {wordPairs.map((pair, index) => {
                const connectionInfo = getConnectionInfo(pair.to.explanation);
                return (
                  <div key={index} className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg p-2`}>
                    <div className="flex items-center justify-between mb-1.5">
                      <div className="flex items-center gap-1.5">
                        <span className={`text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                          {pair.from.word}
                        </span>
                        <ArrowRight size={14} className={darkMode ? 'text-gray-500' : 'text-gray-400'} />
                        <span className={`text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                          {pair.to.word}
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className={`text-xs px-2 py-0.5 rounded-full ${connectionInfo.color}`}>
                          {connectionInfo.type}
                        </span>
                        <span className={`text-xs px-2 py-0.5 rounded-full ${
                          connectionInfo.category === 'Direct' ? 
                            darkMode ? 'bg-green-900/30 text-green-400' : 'bg-green-50 text-green-700' :
                          connectionInfo.category === 'Logical' ? 
                            darkMode ? 'bg-yellow-900/30 text-yellow-400' : 'bg-yellow-50 text-yellow-700' :
                            darkMode ? 'bg-red-900/30 text-red-400' : 'bg-red-50 text-red-700'
                        }`}>
                          {connectionInfo.category}
                        </span>
                      </div>
                    </div>
                    {pair.to.explanation && (
                      <div className="flex items-start gap-2">
                        <div className={`w-1 h-full rounded-full ${
                          connectionInfo.category === 'Direct' ? 'bg-green-500' :
                          connectionInfo.category === 'Logical' ? 'bg-yellow-500' :
                          'bg-red-500'
                        }`}></div>
                        <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'} leading-relaxed`}>
                          {pair.to.explanation}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Wrong Choices */}
          {wrongChoices.length > 0 && (
            <div className={`${darkMode ? 'bg-red-900/20' : 'bg-red-50'} rounded-lg p-2`}>
              <div className="flex items-center gap-2 mb-1.5 justify-center">
                <AlertCircle size={16} className="text-red-500" />
                <h3 className={`text-sm font-semibold ${darkMode ? 'text-red-400' : 'text-red-800'}`}>Incorrect Choices</h3>
              </div>
              <div className="flex flex-wrap gap-2 justify-center">
                {wrongChoices.map((word, index) => (
                  <div key={index} className={`px-2 py-0.5 ${
                    darkMode ? 'bg-gray-800 border-red-900/50 text-red-400' : 'bg-white border-red-200 text-red-700'
                  } rounded-md text-sm border-2`}>
                    {word}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <button
          onClick={onPlayAgain}
          className="w-full mt-3 bg-blue-600 text-white py-2 rounded-lg text-sm font-semibold 
            hover:bg-blue-700 transition-colors"
        >
          Play Again
        </button>
      </div>
    </div>
  );
}