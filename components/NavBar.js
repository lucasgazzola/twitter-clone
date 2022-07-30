import AccountButton from './AccountButton';
import navLinks from '../utils/navBarItemsInfo';
import NavLink from './NavLink';

function NavBar() {
  const handleNewTweetClick = () => {
    alert('New tweet clicked');
  };
  return (
    <nav className="flex flex-col h-full w-fit py-6 px-4 justify-between ">
      <div className="flex flex-col items-center lg:items-start gap-10">
        {navLinks.map((link) => (
          <NavLink key={link.id} {...link} />
        ))}
        <button
          onClick={handleNewTweetClick}
          className="w-full bg-cyan-500 rounded-full p-1 hover:bg-cyan-800 active:bg-cyan-700"
          type="button"
        >
          Tweet
        </button>
      </div>
      <AccountButton />
    </nav>
  );
}

export default NavBar;
