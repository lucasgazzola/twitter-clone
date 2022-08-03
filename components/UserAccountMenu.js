import { supabase } from '../utils/supabaseClient';
import { useRouter } from 'next/router';

function UserAccountMenu() {
  const router = useRouter();

  const handleSignOut = async (e) => {
    e.preventDefault();
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw new Error('Error signing out');
      router.isReady && router.push('/login', '/login', { shallow: true });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="absolute z-50 w-fit -top-36 left-4 p-10 rounded-lg bg-black border-[1px]">
      <button
        className="bg-red-600 hover:bg-red-400 rounded-xl p-2 h-fit w-max"
        onClick={handleSignOut}
      >
        Sign Out
      </button>
    </div>
  );
}

export default UserAccountMenu;
