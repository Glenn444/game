/*
  # Word Paths Schema

  1. New Tables
    - `word_paths`
      - `id` (uuid, primary key)
      - `start_word` (text)
      - `target_word` (text)
      - `theme` (text)
      - `date` (date, unique)
      - `choices` (jsonb array)
      - `hints` (jsonb)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS
    - Add policy for authenticated users to read word paths
*/

CREATE TABLE IF NOT EXISTS word_paths (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  start_word text NOT NULL,
  target_word text NOT NULL,
  theme text NOT NULL,
  date date UNIQUE NOT NULL,
  choices jsonb[] NOT NULL,
  hints jsonb NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE word_paths ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read word paths"
  ON word_paths
  FOR SELECT
  TO authenticated
  USING (true);