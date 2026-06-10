import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://your-project.supabase.co';
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'sb_publishable_LGh_Zo87w8CCNoJY-wH7KA_2tUdIgom';

export const supabase = createClient(supabaseUrl, supabaseKey);
