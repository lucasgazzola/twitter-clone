import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useUserContext } from '../context/UserContext';

function Avatar() {
  const [avatarUrl, setAvatarUrl] = useState('');

  const { user } = useUserContext();

  const handleAvatarClick = () => {
    alert('Avatar clicked');
  };

  useEffect(() => {
    user?.avatarUrl && setAvatarUrl(user.avatarUrl);
  }, [user?.avatarUrl]);

  return (
    <div
      onClick={handleAvatarClick}
      className="h-full w-fit flex items-center justify-center"
    >
      {avatarUrl ? (
        <Image
          priority={true}
          className="rounded-full"
          alt="avatar"
          width={60}
          height={60}
          src={avatarUrl}
        />
      ) : (
        <div className="rounded-full w-[60px] h-[60px] bg-gray-800"></div>
      )}
    </div>
  );
}

export default Avatar;
