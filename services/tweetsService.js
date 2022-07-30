import { supabase } from '../utils/supabaseClient';

export async function getAllTweets() {
  try {
    // select the tweet and the user info
    // TODO: select all the comments in the tweet
    const { data, error } = await supabase.from('tweets').select(`
    id,
    content,
    created_at,
    retweets,
    likes,
    user:user(
      id,
      username,
      avatar_url
    )
    `);
    if (error) {
      throw new Error("Couldn't get all tweets");
    }
    return [...data];
  } catch (error) {
    console.error(error);
  }
}
