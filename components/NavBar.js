import navLinks from '../public/Icons';
import NavLink from './NavLink';

function NavBar() {
  return (
    <nav className="flex h-full w-fit flex-col gap-10 py-6 px-10">
      {navLinks.map((link) => (
        <NavLink key={link.id} {...link} />
      ))}
    </nav>
  );
}

export default NavBar;
