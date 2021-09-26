import Supabase from "../models/SupabaseClient";

const unFavorite = async ({ id }) => {
    try {
      const user = Supabase.auth.user().email;
      const { error } = await Supabase
        .from('movie_favorite')
        .delete()
        .match({ id: id, email: user });

      if (error) throw error;
    } catch (error) {
      console.log(error);
    }
  };

export default unFavorite;
