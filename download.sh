#!/bin/bash

# Create directories
mkdir -p data docs src/components src/lib supabase/migrations

# Download data files
cat > data/daily-facts-template.csv << 'EOL'
text,emoji,date
A day on Venus is longer than its year!,🌟,2025-03-21
The first person to observe a cell was Robert Hooke in 1665.,🔬,2025-03-22
The Great Wall of China is not visible from space with the naked eye.,🌍,2025-03-23
Honey never spoils. Archaeologists found 3000-year-old honey still edible!,🍯,2025-03-24
The shortest war in history lasted only 38 minutes.,⚔️,2025-03-25
EOL

cat > data/example-daily-facts.csv << 'EOL'
text,emoji,date
The first crossword puzzle was published in 1913.,🚀,2025-03-18
The longest word in English has 189819 letters!,📚,2025-03-19
Shakespeare invented over 1700 common words.,🎭,2025-03-20
EOL

cat > data/example-word-paths.csv << 'EOL'
start_word,target_word,theme,date,choice1_1,type1_1,points1_1,choice1_2,type1_2,points1_2,choice1_3,type1_3,points1_3,choice2_1,type2_1,points2_1,choice2_2,type2_2,points2_2,choice2_3,type2_3,points2_3,choice3_1,type3_1,points3_1,choice3_2,type3_2,points3_2,choice3_3,type3_3,points3_3,hint1,hint2,hint3
ENERGY,LIGHT,Scientific Discovery,2025-03-18,ATOM,green,100,CELL,yellow,75,WAVE,red,50,ELECTRON,green,100,PROTON,yellow,75,NEUTRON,red,50,ELECTRICITY,green,100,CURRENT,yellow,75,CHARGE,red,50,Consider the basic building blocks,Think about energy transformation,What powers modern illumination?
EOL

# Download configuration files
cat > package.json << 'EOL'
{
  "name": "vite-react-typescript-starter",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  },
  "dependencies": {
    "canvas-confetti": "^1.9.2",
    "lucide-react": "^0.344.0",
    "react": "^18.3.1",
    "react-dom": "^18.3.1"
  },
  "devDependencies": {
    "@eslint/js": "^9.9.1",
    "@types/canvas-confetti": "^1.6.4",
    "@types/react": "^18.3.5",
    "@types/react-dom": "^18.3.0",
    "@vitejs/plugin-react": "^4.3.1",
    "autoprefixer": "^10.4.18",
    "eslint": "^9.9.1",
    "eslint-plugin-react-hooks": "^5.1.0-rc.0",
    "eslint-plugin-react-refresh": "^0.4.11",
    "globals": "^15.9.0",
    "postcss": "^8.4.35",
    "tailwindcss": "^3.4.1",
    "typescript": "^5.5.3",
    "typescript-eslint": "^8.3.0",
    "vite": "^5.4.2"
  }
}
EOL

# Download source files
# Note: This script will create all the necessary files with their contents
# You'll need to run this script and then the files will be available locally

echo "Project files have been downloaded. To start the development server, run:"
echo "npm install"
echo "npm run dev"