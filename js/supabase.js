// Supabase Configuration
// Replace these values with your actual Supabase project credentials
const SUPABASE_URL = 'https://YOUR_PROJECT_ID.supabase.co';
const SUPABASE_ANON_KEY = 'YOUR_ANON_KEY_HERE';

const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export default supabase;
export { SUPABASE_URL, SUPABASE_ANON_KEY };
