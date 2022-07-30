import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useUserContext } from '../context/UserContext';
import UserAccountMenu from './UserAccountMenu';

function AccountButton() {
  const [avatarUrl, setAvatarUrl] = useState('');
  const [showMenu, setShowMenu] = useState(false);

  const handleAvatarClick = () => {
    setShowMenu((prev) => !prev);
  };

  const { userData } = useUserContext();

  useEffect(() => {
    userData && setAvatarUrl(userData.avatar_url);
  }, [userData]);

  return (
    <div className="relative">
      <button
        type="button"
        onClick={handleAvatarClick}
        className="self-end flex items-center justify-center w-fit h-fit"
      >
        {avatarUrl ? (
          <Image
            className="rounded-full"
            alt="avatar"
            width={60}
            height={60}
            src={avatarUrl}
          />
        ) : (
          <div className="rounded-full w-[60px] h-[60px] bg-gray-800"></div>
        )}
      </button>
      {showMenu && <UserAccountMenu />}
    </div>
  );
}

export default AccountButton;
