import React, { useState } from 'react';
import { Category } from '../types';

interface CategorySpinnerProps {
  onCategorySelected: (category: Category) => void;
}

const categories: Category[] = [
  {
    name: "Indirect Functional",
    description: "Words connected by practical use or purpose",
    color: "bg-blue-500"
  },
  {
    name: "Abstract Cause & Effect",
    description: "Words linked through sequential relationships",
    color: "bg-purple-500"
  },
  {
    name: "Contrasting Pairs",
    description: "Words connected through hidden relationships",
    color: "bg-green-500"
  },
  {
    name: "Evolution of Concept",
    description: "Words representing stages of development",
    color: "bg-orange-500"
  }
];

export function CategorySpinner({ onCategorySelected }: CategorySpinnerProps) {
  const [spinning, setSpinning] = useState(false);
  const [rotation, setRotation] = useState(0);

  const spinWheel = () => {
    if (spinning) return;
    
    setSpinning(true);
    const spins = 3 + Math.random() * 2; // 3-5 full rotations
    const finalIndex = Math.floor(Math.random() * categories.length);
    const finalRotation = (spins * 360) + (finalIndex * (360 / categories.length));
    
    setRotation(finalRotation);

    setTimeout(() => {
      setSpinning(false);
      onCategorySelected(categories[finalIndex]);
    }, 3000);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl p-6 w-[400px] text-center">
        <h2 className="text-xl font-bold mb-4">Spin to Get Your Category</h2>
        
        <div className="relative w-48 h-48 mx-auto mb-6">
          <div 
            className="absolute inset-0 transition-all duration-[3000ms] ease-out"
            style={{ transform: `rotate(${rotation}deg)` }}
          >
            {categories.map((category, index) => (
              <div
                key={category.name}
                className={`absolute w-full h-full origin-center ${category.color}`}
                style={{
                  transform: `rotate(${index * (360 / categories.length)}deg)`,
                  clipPath: 'polygon(50% 50%, 0 0, 100% 0)'
                }}
              >
                <span className="absolute top-4 left-1/2 -translate-x-1/2 text-white text-sm font-bold whitespace-nowrap">
                  {category.name}
                </span>
              </div>
            ))}
          </div>
          <div className="absolute top-1/2 left-1/2 w-3 h-3 -translate-x-1/2 -translate-y-1/2 
            bg-white rounded-full z-10 border-2 border-gray-800" />
        </div>

        <button
          onClick={spinWheel}
          disabled={spinning}
          className="bg-blue-600 text-white px-6 py-2 rounded-full text-base font-semibold
            hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {spinning ? 'Spinning...' : 'Spin the Wheel'}
        </button>
      </div>
    </div>
  );
}