import { supabase } from '../utils/supabaseClient';
import { useRouter } from 'next/router';
import { AiFillGithub } from 'react-icons/ai';
import { useEffect } from 'react';

function Login() {
  const router = useRouter();

  const user = supabase.auth.user();

  const handleGithubLogin = async () => {
    try {
      await supabase.auth.signIn(
        {
          provider: 'github'
        },
        {
          redirectTo: '/'
        }
      );
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (user) {
      router.isReady && router.push('/', '/', { shallow: true });
    }
  }, []);

  return (
    <main className="flex h-full items-center justify-center">
      <div className="flex rounded-xl flex-col gap-2 border-2 p-16 w-fit">
        <button
          onClick={handleGithubLogin}
          type="button"
          className="flex items-center border-[1px] rounded-xl p-4 justify-start gap-2 text-white hover:bg-gray-900"
        >
          <AiFillGithub size="28px" />
          Sign In with Github
        </button>
      </div>
    </main>
  );
}

export default Login;
