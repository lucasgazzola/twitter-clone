import Link from 'next/link';

function NavLink({ name, icon, href }) {
  // TODO: Handle custom hover
  return (
    <Link href={href}>
      <a
        className="bg-inherit  rounded-full hover:bg-slate-600 fill-white hover:"
        title={name}
      >
        {icon}
      </a>
    </Link>
  );
}

export default NavLink;
