import Head from 'next/head';
import NavBar from '../components/NavBar';

export default function Home() {
  return (
    <div style={{ whith: '100vw', height: '100vh', backgroundColor: 'black' }}>
      <Head>
        <title>Twitter Clone</title>
        <meta name="description" content="Twitter Clone" />
      </Head>
      <NavBar />
    </div>
  );
}
