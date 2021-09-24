import Supabase from '../models/SupabaseClient';

const addFavorite = async ({ 
  movie_id,
  img,
  title,
  genres,
  rating,
  popularity,
  minute,
  release,
  overview,
  link,
  budget, 
}) => {
  try {
    const email = Supabase.auth.user().email;

    const insert = {
      email: email,
      movie_id,
      img,
      title,
      genres,
      rating,
      popularity,
      minute,
      release,
      overview,
      link,
      budget,
    }

    let { error } = await Supabase.from('movie_favorite').insert(insert);

    if (error) throw error;
  } catch (error) {
    alert(error.message);
  }
};

export default addFavorite;
