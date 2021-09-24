import Supabase from "../models/SupabaseClient";

const favoriteCount = async () => {
  try {
    const userEmail = Supabase.auth.user().email;

    const { data, error, status } = await Supabase
      .from('movie_favorite')
      .select('email')
      .match({ email: userEmail });

    if (error && status !== 406) throw error;

    if (data) {
      return data.length;
    }
  } catch (error) {
    console.log(error);
  }
};

export default favoriteCount;

