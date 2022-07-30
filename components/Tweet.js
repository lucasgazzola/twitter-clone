import React, { useState } from 'react';
import { AiFillHeart, AiOutlineHeart, AiOutlineRetweet } from 'react-icons/ai';
import Image from 'next/image';

function Tweet({ content, created_at, id: tweetId, likes, retweets, user }) {
  const [isLiked, setIsLiked] = useState(false);
  const [likesQty, setLikesQty] = useState(likes);
  const handleClickLikeButton = () => {
    setIsLiked((prevState) => !prevState);
    setLikesQty((prevQty) => {
      return !isLiked ? ++prevQty : --prevQty;
    });
  };

  const { avatar_url, username, id: userId } = user;

  return (
    <div className="border-gray-800 border-[1px] flex w-full p-6 gap-4">
      <div className="avatar-container w-[60px] h-[60px]">
        {avatar_url ? (
          <Image
            height={60}
            width={60}
            alt="avatar"
            src={avatar_url}
            className="rounded-full"
          />
        ) : (
          <div className="w-[60px] h-[60px] bg-gray-800 rounded-full"></div>
        )}
      </div>
      <div className="flex flex-col gap-3 w-full">
        {/* TODO: handle profile click */}
        <h3 className="font-bold">{username}</h3>
        {/* TODO: created at */}
        <p className="w-full">{content}</p>
        {/* TODO: comments - share */}
        <div className="controls-container flex gap-2">
          <button
            type="button"
            onClick={handleClickLikeButton}
            className="flex w-fit h-fit items-center justify-center gap-1"
          >
            {!isLiked ? <AiOutlineHeart /> : <AiFillHeart />}
            <span>{likesQty}</span>
          </button>
          <button
            type="button"
            className="flex w-fit h-fit items-center justify-center gap-1"
          >
            <AiOutlineRetweet />
            <span>{retweets}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
export default Tweet;
