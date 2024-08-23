import Link from "next/link";
import { title } from "process";
import { AiFillHome, AiFillInfoCircle } from "react-icons/ai";

const Navbar = () => {
  const menuItems = [
    { title: "Home", path: "/", Icon: AiFillHome },
    { title: "About", path: "/about", Icon: AiFillInfoCircle },
  ];
  return (
    <nav className="flex justify-between items-center px-2 py-2 max-w-6xl mx-auto">
      <ul className="flex gap-4">
        {menuItems.map(({ title, path, Icon }) => (
          <li key={title}>
            <Link href={path} className="hover:text-amber-500 hover:underline">
              <Icon className="sm:hidden" />
              <span className="uppercase text-lg  hidden sm:inline">{title}</span>
            </Link>
          </li>
        ))}
        </ul>
        <ul>
        <li className="flex items-center">
          <Link href="/" className="bg-amber-500 rounded-md px-1 font-bold text-2xl hover:underline">MovieDB</Link>
          <span className="text-xl hidden sm:inline">Clone</span>
        </li>
      </ul>
    </nav>
  );
}; 

export default Navbar;
