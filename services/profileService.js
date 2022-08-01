import { supabase } from '../utils/supabaseClient';

export async function createProfile(response) {
  // response is null or
  //   {
  //     "id": "*****************************",
  //     "aud": "authenticated",
  //     "email": "lucasgazzola1@outlook.com",
  //     "user_metadata": {
  //         "avatar_url": "https://avatars.githubusercontent.com/u/85223876?v=4",
  //         "full_name": "Lucas Gazzola",
  //         "user_name": "lucasgazzola"
  //     },
  // }
  const { id, email: username, user_metadata } = response;
  try {
    // it returns an empty array if doesn't find the profile
    // then create it
    const { data } = await supabase.from('profiles').select('*').eq('id', id);
    if (data?.length === 0) {
      const { avatar_url } = user_metadata;
      const { error } = await supabase.from('profiles').insert({
        id,
        username,
        updated_at: new Date(),
        avatar_url
      });
      throw new Error(error.message);
    }
  } catch (error) {
    console.error(error);
  }
}
