import { supabase } from '../utils/supabaseClient';

export async function createProfileIfNotExists(user = null) {
  if (!user) return;
  const { user_metadata, email, id } = user;
  const { user_name: username } = user_metadata;
  try {
    const { data } = await supabase.from('profiles').select('*').eq('id', id);

    // it returns an empty array if doesn't find the profile

    if (data?.length === 0) {
      const { avatar_url } = user_metadata;

      // then create it
      const { error } = await supabase.from('profiles').insert({
        id,
        username,
        email,
        updated_at: new Date(),
        avatar_url
      });
      if (error) {
        throw new Error(error.message);
      }
    }
  } catch (error) {
    console.error(error);
  }
}
