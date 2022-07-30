import Link from 'next/link';

function NavLink({ name, Icon, href }) {
  return (
    <Link href={href}>
      <a
        className="flex gap-2 items-center p-2 w-fit rounded-full hover:bg-slate-600 text-[#d6d9db]"
        title={name}
      >
        <Icon className="w-5 h-5" />
        <p className="hidden lg:inline-flex">{name}</p>
      </a>
    </Link>
  );
}

export default NavLink;
