import Link from "next/link";
import InputSearch from "./inputSearch";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 border-b border-zinc-800/60 bg-zinc-950/90 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-6">
        
        <Link
          href="/"
          className="text-xl font-extrabold tracking-tight text-white hover:opacity-80 transition-opacity"
        >
          Anime<span className="text-indigo-400">List</span>
        </Link>

        {/* search */}
        <InputSearch />
      </div>
    </nav>
  );
};

export default Navbar;
