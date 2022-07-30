import {
  AiOutlineTwitter,
  AiOutlineHome,
  AiOutlineSearch,
  AiOutlineBell
} from 'react-icons/ai';

const navBarData = [
  {
    id: 0,
    name: 'Twitter',
    Icon: (props) => <AiOutlineTwitter {...props} />,
    href: '/'
  },
  {
    id: 1,
    name: 'Home',
    Icon: (props) => <AiOutlineHome {...props} />,
    href: '/'
  },
  {
    id: 2,
    name: 'Search',
    Icon: (props) => <AiOutlineSearch {...props} />,
    href: '/search'
  },
  {
    id: 3,
    name: 'Notifications',
    Icon: (props) => <AiOutlineBell {...props} />,
    href: '/notifictions'
  }
];

export default navBarData;
