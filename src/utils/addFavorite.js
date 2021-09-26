import Supabase from '../models/SupabaseClient';

const addFavorite = async ({ 
  id,
  poster_path,
  original_title,
  genre_ids,
  vote_average,
  popularity,
  runtime,
  release_date,
  overview,
  homepage,
  budget, 
}) => {
  try {
    const email = Supabase.auth.user().email;

    const insert = {
      email: email,
      id,
      poster_path,
      original_title,
      genre_ids,
      vote_average,
      popularity,
      runtime,
      release_date,
      overview,
      homepage,
      budget,
    }

    let { error } = await Supabase.from('movie_favorite').insert(insert);

    if (error) throw error;
  } catch (error) {
    alert(error.message);
  }
};

export default addFavorite;
