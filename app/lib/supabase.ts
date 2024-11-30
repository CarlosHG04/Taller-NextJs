import { createClient } from "@supabase/supabase-js";

const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient((process.env.NEXT_PUBLIC_SUPABASE_URL!), supabaseAnonKey);