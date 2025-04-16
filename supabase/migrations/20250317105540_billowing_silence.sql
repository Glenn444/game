/*
  # Game Data Schema

  1. New Tables
    - `games`
      - `id` (uuid, primary key)
      - `user_id` (uuid, references auth.users)
      - `score` (integer)
      - `completed_at` (timestamp)
      - `path` (text array)
      - `wrong_choices` (text array)
      - `created_at` (timestamp)
    
    - `daily_facts`
      - `id` (uuid, primary key)
      - `text` (text)
      - `emoji` (text)
      - `date` (date, unique)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users to:
      - Read their own game data
      - Create new game records
      - Read daily facts
*/

-- Create games table
CREATE TABLE IF NOT EXISTS games (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users NOT NULL,
  score integer NOT NULL DEFAULT 0,
  completed_at timestamptz,
  path text[] NOT NULL DEFAULT '{}',
  wrong_choices text[] NOT NULL DEFAULT '{}',
  created_at timestamptz DEFAULT now()
);

-- Create daily_facts table
CREATE TABLE IF NOT EXISTS daily_facts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  text text NOT NULL,
  emoji text NOT NULL,
  date date UNIQUE NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE games ENABLE ROW LEVEL SECURITY;
ALTER TABLE daily_facts ENABLE ROW LEVEL SECURITY;

-- Games policies
CREATE POLICY "Users can read own games"
  ON games
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can create games"
  ON games
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

-- Daily facts policies
CREATE POLICY "Anyone can read daily facts"
  ON daily_facts
  FOR SELECT
  TO authenticated
  USING (true);