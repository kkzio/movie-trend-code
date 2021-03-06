import { createClient } from "@supabase/supabase-js";

const supbaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supbaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY;

const Supabase = createClient(supbaseUrl, supbaseAnonKey);

export default Supabase;
