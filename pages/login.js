import { handleGithubLogin } from '../services/profileService';
import { AiFillGithub } from 'react-icons/ai';

function Login() {
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
