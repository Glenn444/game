import { createClient } from '@supabase/supabase-js';
import { parse } from 'csv-parse';
import { createReadStream } from 'fs';
import { config } from 'dotenv';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

// Load environment variables
config();

const __dirname = dirname(fileURLToPath(import.meta.url));

// Initialize Supabase client
const supabase = createClient(
  process.env.VITE_SUPABASE_URL,
  process.env.VITE_SUPABASE_ANON_KEY
);

async function importWordPaths(filePath) {
  const records = [];
  const parser = createReadStream(filePath).pipe(
    parse({
      columns: true,
      skip_empty_lines: true
    })
  );

  for await (const record of parser) {
    const choices = [
      [
        { word: record.choice1_1, type: record.type1_1, points: parseInt(record.points1_1) },
        { word: record.choice1_2, type: record.type1_2, points: parseInt(record.points1_2) },
        { word: record.choice1_3, type: record.type1_3, points: parseInt(record.points1_3) }
      ],
      [
        { word: record.choice2_1, type: record.type2_1, points: parseInt(record.points2_1) },
        { word: record.choice2_2, type: record.type2_2, points: parseInt(record.points2_2) },
        { word: record.choice2_3, type: record.type2_3, points: parseInt(record.points2_3) }
      ],
      [
        { word: record.choice3_1, type: record.type3_1, points: parseInt(record.points3_1) },
        { word: record.choice3_2, type: record.type3_2, points: parseInt(record.points3_2) },
        { word: record.choice3_3, type: record.type3_3, points: parseInt(record.points3_3) }
      ]
    ];

    const hints = {
      1: record.hint1,
      2: record.hint2,
      3: record.hint3
    };

    records.push({
      start_word: record.start_word,
      target_word: record.target_word,
      theme: record.theme,
      date: record.date,
      choices: choices.map(c => JSON.stringify(c)),
      hints: JSON.stringify(hints)
    });
  }

  const { error } = await supabase
    .from('word_paths')
    .insert(records);

  if (error) {
    console.error('Error importing word paths:', error);
    return;
  }

  console.log(`Successfully imported ${records.length} word paths`);
}

async function importDailyFacts(filePath) {
  const records = [];
  const parser = createReadStream(filePath).pipe(
    parse({
      columns: true,
      skip_empty_lines: true
    })
  );

  for await (const record of parser) {
    records.push({
      text: record.text,
      emoji: record.emoji,
      date: record.date
    });
  }

  const { error } = await supabase
    .from('daily_facts')
    .insert(records);

  if (error) {
    console.error('Error importing daily facts:', error);
    return;
  }

  console.log(`Successfully imported ${records.length} daily facts`);
}

// Main execution
try {
  const dataType = process.argv[2];
  const filePath = process.argv[3];

  if (!dataType || !filePath) {
    console.log('Usage: node import-data.js <word-paths|daily-facts> <file-path>');
    process.exit(1);
  }

  if (dataType === 'word-paths') {
    await importWordPaths(filePath);
  } else if (dataType === 'daily-facts') {
    await importDailyFacts(filePath);
  } else {
    console.log('Invalid data type. Use "word-paths" or "daily-facts"');
    process.exit(1);
  }
} catch (error) {
  console.error('Error:', error);
  process.exit(1);
}