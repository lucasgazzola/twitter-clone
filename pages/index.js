import { supabase } from '../utils/supabaseClient';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useUserContext } from '../context/UserContext';

import Head from 'next/head';
import NavBar from '../components/NavBar';
import MainContent from '../components/MainContent';

export default function Home() {
  const router = useRouter();

  const { setUserData } = useUserContext();

  useEffect(() => {
    async function createProfile(user) {
      const { id, email: username, user_metadata } = user;
      const { avatar_url } = user_metadata;
      let response;
      response = await supabase
        .from('profiles')
        .select('*')
        .eq('id', id)
        .single();
      if (response?.data?.length === 0) {
        response = await supabase.from('profiles').insert({
          id,
          username,
          updated_at: new Date(),
          avatar_url
        });
      }
      setUserData(response.data);
    }

    const user = supabase.auth.user();
    if (!user) {
      router.isReady && router.push('/login', '/login', { shallow: true });
    } else {
      createProfile(user);
    }
  }, []);

  return (
    <div className="h-full relative flex gap-2 text-white">
      <Head>
        <title>Twitter Clone</title>
        <meta name="description" content="Twitter Clone" />
      </Head>
      <NavBar />
      <MainContent />
    </div>
  );
}
