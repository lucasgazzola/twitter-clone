import React, { useState } from 'react';
import {
  AiFillHeart,
  AiOutlineHeart,
  AiOutlineRetweet,
  AiOutlineComment
} from 'react-icons/ai';
import Image from 'next/image';
import formatDate from '../utils/formatDate';

function Tweet({
  id: tweetId,
  content,
  retweets,
  likes,
  created_at: createdAt,
  user
}) {
  const { avatar_url: avatarUrl, username, email, id: userId } = user;

  const [isLiked, setIsLiked] = useState(false);
  const [likesQty, setLikesQty] = useState(likes);
  const handleClickLikeButton = () => {
    setIsLiked((prevState) => !prevState);
    setLikesQty((prevQty) => {
      return !isLiked ? ++prevQty : --prevQty;
    });
  };
  const [commentsQty, setCommentsQty] = useState(0);
  const handleClickCommentButton = () => {
    setCommentsQty((prevQty) => ++prevQty);
  };

  const createdat = formatDate(createdAt);

  return (
    <div className="border-gray-800 border-[1px] flex w-full p-6 gap-4">
      <div className="avatar-container w-[60px] h-[60px]">
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
      </div>
      <div className="flex flex-col gap-3 w-full">
        {/* TODO: handle profile click */}
        <header className="flex gap-2">
          <h3 className="font-bold">{username}</h3>
          <span className="font-light">{createdat}</span>
        </header>
        <p className="w-full">{content}</p>
        {/* TODO: comments - share */}
        <div className="controls-container flex gap-2">
          <button
            type="button"
            onClick={handleClickCommentButton}
            className="flex w-fit h-fit items-center justify-center gap-1"
          >
            <AiOutlineComment />
            <span>{commentsQty}</span>
          </button>
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
