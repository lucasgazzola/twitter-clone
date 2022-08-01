import { supabase } from '../utils/supabaseClient';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useUserContext } from '../context/UserContext';

import Head from 'next/head';
import NavBar from '../components/NavBar';
import MainContent from '../components/MainContent';

export default function Home() {
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
