import { createClient } from '@supabase/supabase-js';

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const key =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

export const hasSupabase = Boolean(url && key);

let supabase = null;
if (hasSupabase) {
  try {
    supabase = createClient(url!, key!);
  } catch {
    supabase = null;
  }
}

export { supabase };
