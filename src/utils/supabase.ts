import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://bankljgliwcehnurvnrn.supabase.co";
const supabaseAnonPublic =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJhbmtsamdsaXdjZWhudXJ2bnJuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzE4MDQ5NDMsImV4cCI6MTk4NzM4MDk0M30.EuXR6hGhMkCNvgNs_Th8S-9M558IXPQfehGsvQIazoE";

export const supabase = createClient(supabaseUrl, supabaseAnonPublic);
