import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const hasValidUrl = Boolean(supabaseUrl && /^https?:\/\//i.test(supabaseUrl));

export const supabase =
  hasValidUrl && supabaseKey
    ? createClient(supabaseUrl!, supabaseKey)
    : null;