import HomePath from './HomePath';
import TwitterPath from './TwitterPath';
import SearchPath from './SearchPath';
import NotificationsPath from './NotificationsPath';
import NewTweetPath from './NewTweetPath';

const navLinks = [
  {
    id: 0,
    name: 'Twitter',
    icon: IconWrapper(TwitterPath),
    href: '/'
  },
  {
    id: 1,
    name: 'Home',
    icon: IconWrapper(HomePath),
    href: '/'
  },
  {
    id: 2,
    name: 'Search',
    icon: IconWrapper(SearchPath),
    href: ''
  },
  {
    id: 3,
    name: 'Notifications',
    icon: IconWrapper(NotificationsPath),
    href: ''
  },
  {
    id: 4,
    name: 'New Tweet',
    icon: IconWrapper(NewTweetPath, '#1da1f2'),
    href: ''
  }
];

function IconWrapper(path, backgroundColor = 'inherit') {
  return (
    <div
      style={{
        backgroundColor
      }}
      className="icon hover:bg-cyan-900"
    >
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <g>{path()}</g>
      </svg>
    </div>
  );
}

export default navLinks;
