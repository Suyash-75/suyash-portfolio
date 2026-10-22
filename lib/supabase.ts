import { createClient } from '@supabase/supabase-js';

const rawSupabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL?.trim().replace(/^['"]|['"]$/g, '');
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY?.trim().replace(/^['"]|['"]$/g, '');

function getProjectReference(key: string | undefined) {
  if (!key?.startsWith('eyJ')) return undefined;

  try {
    const payload = JSON.parse(Buffer.from(key.split('.')[1], 'base64url').toString('utf8')) as { ref?: string };
    return /^[a-z0-9]+$/i.test(payload.ref ?? '') ? payload.ref : undefined;
  } catch {
    return undefined;
  }
}

const projectReference = getProjectReference(supabaseKey);
const normalizedSupabaseUrl = rawSupabaseUrl && /^https?:\/\//i.test(rawSupabaseUrl)
  ? rawSupabaseUrl
  : projectReference
    ? `https://${projectReference}.supabase.co`
    : undefined;

const hasValidUrl = Boolean(
  normalizedSupabaseUrl && /^https:\/\/[^\s]+\.supabase\.co$/i.test(normalizedSupabaseUrl)
);

export const supabase = hasValidUrl && normalizedSupabaseUrl && supabaseKey
  ? createClient(normalizedSupabaseUrl, supabaseKey)
  : null;
