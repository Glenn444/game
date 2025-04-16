import React from 'react';
import { X, Moon, Sun, MessageSquare } from 'lucide-react';

interface SettingsProps {
  darkMode: boolean;
  onToggleDarkMode: () => void;
  onClose: () => void;
}

export function Settings({ darkMode, onToggleDarkMode, onClose }: SettingsProps) {
  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className={`${
        darkMode ? 'bg-gray-800' : 'bg-white'
      } rounded-2xl p-6 max-w-sm w-full relative`}>
        <button
          onClick={onClose}
          className={`absolute top-4 right-4 ${
            darkMode ? 'text-gray-400 hover:text-gray-300' : 'text-gray-400 hover:text-gray-600'
          }`}
        >
          <X size={24} />
        </button>

        <h2 className={`text-2xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Settings</h2>

        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              {darkMode ? (
                <Moon size={20} className="text-blue-400" />
              ) : (
                <Sun size={20} className="text-yellow-500" />
              )}
              <span className={darkMode ? 'text-white' : 'text-gray-900'}>Dark Mode</span>
            </div>
            <button
              onClick={onToggleDarkMode}
              className="relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-300 focus:outline-none"
              style={{
                backgroundColor: darkMode ? '#3b82f6' : '#d1d5db'
              }}
            >
              <span
                className={`${
                  darkMode ? 'translate-x-6' : 'translate-x-1'
                } inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-300`}
              />
            </button>
          </div>

          <div className={`border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'} pt-4`}>
            <button
              onClick={() => window.open('https://forms.gle/feedback', '_blank')}
              className={`flex items-center gap-2 ${
                darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'
              } hover:underline`}
            >
              <MessageSquare size={20} />
              <span>Send Feedback</span>
            </button>
          </div>
        </div>

        <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'} mt-6`}>
          Version 1.0.0
        </p>
      </div>
    </div>
  );
}