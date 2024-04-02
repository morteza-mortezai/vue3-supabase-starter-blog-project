
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = 'https://qslkrnthymbyiegyjqip.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFzbGtybnRoeW1ieWllZ3lqcWlwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTE2NDM4MDksImV4cCI6MjAyNzIxOTgwOX0.NWks1M4da7bO3Ga3GwyHksA1o0CMNhWqoOtj3aHZC2c'

export const supabase = createClient(supabaseUrl, supabaseKey);
        