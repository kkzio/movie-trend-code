import Supabase from "../models/SupabaseClient";

const unFavorite = async ({ id }) => {
    try {
      const { error } = await Supabase
        .from('movie_favorite')
        .delete()
        .match({ movie_id: id });

      if (error) throw error;
    } catch (error) {
      console.log(error);
    }
  };

export default unFavorite;
