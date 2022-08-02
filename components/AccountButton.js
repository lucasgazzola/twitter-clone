import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useUserContext } from '../context/UserContext';
import UserAccountMenu from './UserAccountMenu';

function AccountButton() {
  const [showMenu, setShowMenu] = useState(false);
  const [avatarUrl, setAvatarUrl] = useState('');

  const handleAvatarClick = () => {
    setShowMenu((prev) => !prev);
  };

  const { user } = useUserContext();

  useEffect(() => {
    const { avatarUrl } = user;
    setAvatarUrl(avatarUrl);
  }, [user]);

  return (
    <div className="relative">
      <button
        type="button"
        onClick={handleAvatarClick}
        className="self-end flex items-center justify-center w-fit h-fit"
      >
        {avatarUrl ? (
          <Image
            priority={true}
            height={60}
            width={60}
            alt="avatar"
            src={avatarUrl}
            className="rounded-full"
          />
        ) : (
          <div className="w-[60px] h-[60px] bg-gray-800 rounded-full"></div>
        )}
      </button>
      {showMenu && <UserAccountMenu />}
    </div>
  );
}

export default AccountButton;
