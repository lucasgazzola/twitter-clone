import { useUserContext } from '../context/UserContext';
import { supabase } from '../utils/supabaseClient';

function UserAccountMenu() {
  const { setIsLoggedIn } = useUserContext();

  const handleSignOut = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) {
        throw new Error(error.message);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoggedIn(false);
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
