/*
  # Create Contact Inquiries Table

  1. New Tables
    - `contact_inquiries`
      - `id` (uuid, primary key) - Unique identifier for each inquiry
      - `name` (text) - Contact person's full name
      - `email` (text) - Contact email address
      - `company` (text) - Company name
      - `budget_range` (text) - Selected budget range
      - `timeline` (text) - Project timeline preference
      - `services` (jsonb) - Array of selected services
      - `project_description` (text) - Detailed project description
      - `referral_source` (text) - How they heard about Digital North
      - `created_at` (timestamptz) - Submission timestamp
      - `status` (text) - Inquiry status (default: 'new')
  
  2. Security
    - Enable RLS on `contact_inquiries` table
    - Add policy for anonymous users to insert their own inquiries
    - Add policy for authenticated admin users to read all inquiries
*/

CREATE TABLE IF NOT EXISTS contact_inquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  company text NOT NULL,
  budget_range text NOT NULL,
  timeline text NOT NULL,
  services jsonb DEFAULT '[]'::jsonb,
  project_description text NOT NULL,
  referral_source text DEFAULT '',
  created_at timestamptz DEFAULT now(),
  status text DEFAULT 'new'
);

ALTER TABLE contact_inquiries ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit contact inquiries"
  ON contact_inquiries
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can read all inquiries"
  ON contact_inquiries
  FOR SELECT
  TO authenticated
  USING (true);
