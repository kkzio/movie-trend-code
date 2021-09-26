import Supabase from "../models/SupabaseClient";

const getFavorite = async () => {
  try {
    const user = await Supabase.auth.user().email;

    const { data, error, status } = await Supabase
      .from('movie_favorite')
      .select('*')
      .match({ email: user });

    if (error && status !== 406) throw error;

    if (data) return data;
  } catch (error) {
    console.log(error);
  }
};

export default getFavorite;
