import Link from "next/link";

export default function Header() {
  return (
    <header className="navbar bg-slate-900 text-white">
      <div className="flex-1">
        <Link href={"/"} className="btn btn-ghost text-xl">
          Country App
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link className="hover:text-primary" href={"/"}>
              Home
            </Link>
          </li>
          <li>
            <Link className="hover:text-primary" href={"/new-country"}>
              New country
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
