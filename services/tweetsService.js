import { supabase } from '../utils/supabaseClient';

export const getAllTweets = async () => {
  try {
    // select the tweet and the user info
    const { data, error } = await supabase.from('tweets').select(`
    id,
    content,
    created_at,
    retweets,
    likes,
    user:user(
      id,
      username,
      email,
      avatar_url
    )
    `);
    if (error) {
      throw new Error(error.message);
    }
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const createNewTweet = async (userId, content) => {
  try {
    const { data, error } = await supabase
      .from('tweets')
      .insert({ user: userId, content })
      .select()
      .single();

    if (error) {
      throw new Error(error.message);
    }

    // data
    //   {
    //     "id": 7,
    //     "content": "Tercer tweet",
    //     "created_at": "2022-08-02T00:17:10.629752+00:00",
    //     "likes": 0,
    //     "user": "29af4cb4-b34b-4704-ade8-51a06a59d95f",
    //     "retweets": 0
    // }

    const { id } = data;

    const { data: tweet, error: selectError } = await supabase
      .from('tweets')
      .select(
        `
        id,
        content,
        created_at,
        retweets,
        likes,
        user:user(
          id,
          username,
          email,
          avatar_url
        )
        `
      )
      .eq('id', id)
      .single();
    if (selectError) {
      throw new Error(selectError.message);
    }
    return tweet;
  } catch (error) {
    console.log(error);
  }
};
