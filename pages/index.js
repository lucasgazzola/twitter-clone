import Head from 'next/head';
import NavBar from '../components/NavBar';
import MainContent from '../components/MainContent';
import { TweetsContextProvider } from '../context/TweetsContext';

export default function Home() {
  return (
    <div className="h-full relative flex gap-2 text-white">
      <Head>
        <title>Twitter Clone</title>
        <meta name="description" content="Twitter Clone" />
      </Head>
      <NavBar />
      <TweetsContextProvider>
        <MainContent />
      </TweetsContextProvider>
    </div>
  );
}
