import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://mxkkqlgkifqkufuwotzq.supabase.co';
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im14a2txbGdraWZxa3VmdXdvdHpxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODEwOTE2MTEsImV4cCI6MjA5NjY2NzYxMX0.LrtF75uAsQfyGuq_35iOumEaN4rUHGHR7ewr5UYPEqE';

export const supabase = createClient(supabaseUrl, supabaseKey);
