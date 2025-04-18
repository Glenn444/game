import { DailyFact } from '../types'
import { wordPaths } from './wordPaths'

let currentPathIndex = Math.floor(Math.random() * wordPaths.length)
let currentPath = wordPaths[currentPathIndex] // Track current path
let currentStep = 0 // Track current step in path

const dailyFacts: DailyFact[] = [
  {
    text: 'Chess was first played in India around 600 AD',
    emoji: '♟️',
  },
  {
    text: 'The number of possible chess games is greater than atoms in the universe',
    emoji: '🌌',
  },
]

let factIndex = 0

export async function saveGameResult(
  score: number,
  path: string[],
  wrongChoices: string[]
): Promise<{
  id: string
  score: number
  path: string[]
  wrongChoices: string[]
}> {
  const result = { id: Date.now().toString(), score, path, wrongChoices }
  const savedGames = JSON.parse(localStorage.getItem('gameHistory') || '[]')
  savedGames.push(result)
  localStorage.setItem('gameHistory', JSON.stringify(savedGames))
  return result
}

export async function getDailyFact(): Promise<DailyFact> {
  const fact = dailyFacts[factIndex]
  factIndex = (factIndex + 1) % dailyFacts.length
  return fact
}

export async function getGameHistory() {
  return JSON.parse(localStorage.getItem('gameHistory') || '[]')
}

export async function getDailyWordPath() {
  currentPath = wordPaths[currentPathIndex]
  currentPathIndex = (currentPathIndex + 1) % wordPaths.length
  currentStep = 0
  return currentPath
}

export function getCurrentWordPath() {
  return currentPath
}

export function getNextChoices(selectedWord: string) {
  // If we're at the start, progress to first set of choices
  if (currentStep === 0) {
    currentStep++
    return currentPath.choices[currentStep - 1] || []
  }

  // Check if selected word is in current step's choices
  const currentChoices = currentPath.choices[currentStep - 1]
  const isValidChoice = currentChoices?.some((c) => c.word === selectedWord)

  // Only progress if selection is valid
  if (isValidChoice) {
    currentStep++
    return currentPath.choices[currentStep] || []
  }

  // Invalid selection - return empty array
  return []
}
