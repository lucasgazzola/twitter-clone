import { AiFillGithub } from 'react-icons/ai';
import { useEffect } from 'react';
// import { useRouter } from 'next/router';
import { useUserContext } from '../context/UserContext';
import { useRouterContext } from '../context/RouterContext';
import { supabase } from '../utils/supabaseClient';

function Login() {
  // const router = useRouter();
  const { router, isRouterReady } = useRouterContext();
  const { isLoading, setIsLoading, isLoggedIn } = useUserContext();

  const handleGithubLogin = async () => {
    setIsLoading(true);
    try {
      await supabase.auth.signIn(
        {
          provider: 'github'
        },
        {
          redirectTo: process.env.NEXT_PUBLIC_NEXTAUTH_URL
        }
      );
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (isLoggedIn && !isLoading) {
      router.push('/', '/', { shallow: true });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoggedIn, isLoading]);

  (isLoading || !isRouterReady) && <div className="">Loading</div>;

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
