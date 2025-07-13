-- create posts table for the SWR example
CREATE TABLE IF NOT EXISTS posts (
  id BIGSERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  content TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- create profiles table for user data that references the auth.users table
CREATE TABLE IF NOT EXISTS profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  full_name TEXT,
  avatar_url TEXT,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- insert sample posts
INSERT INTO posts (title, content) VALUES
  ('Welcome to Next.js + Supabase', 'This is your first post in the template. You can edit this in the Supabase dashboard or through your application.'),
  ('Getting Started with SWR', 'SWR is a powerful data fetching library that provides caching, revalidation, and more. This template includes custom hooks for Supabase integration.'),
  ('Building with Tailwind CSS', 'Tailwind CSS is included and configured with Shadcn/ui components for a great developer experience.'),
  ('Biome.js for Code Quality', 'This template uses Biome.js for fast formatting and linting instead of ESLint and Prettier.'),
  ('Deploy to Vercel', 'This template is ready for deployment on Vercel, Netlify, or any platform that supports Next.js.');

-- enable row level security (RLS) for production use
ALTER TABLE posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

-- create policies for public read access (adjust as needed for your use case)
CREATE POLICY "Posts are viewable by everyone" ON posts
  FOR SELECT USING (true);

-- secure policies for profiles table
CREATE POLICY "Profiles are viewable by everyone." ON public.profiles
  FOR SELECT USING (true);

CREATE POLICY "Users can insert their own profile." ON public.profiles
  FOR INSERT WITH CHECK (auth.uid() = id);

CREATE POLICY "Users can update their own profile." ON public.profiles
  FOR UPDATE USING (auth.uid() = id);
