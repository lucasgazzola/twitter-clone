import Avatar from './Avatar';
import NewTweetForm from './NewTweetForm';

function NewTweet() {
  return (
    <div className="w-full flex gap-4 border-b-[1px] border-gray-600 p-4">
      <Avatar />
      <NewTweetForm />
    </div>
  );
}

export default NewTweet;
