
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 border-b border-zinc-800/60 bg-zinc-950/90 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-6">
        {/* logo */}
        <Link
          href="/"
          className="text-xl font-extrabold tracking-tight text-white hover:opacity-80 transition-opacity"
        >
          Anime<span className="text-indigo-400">List</span>
        </Link>

        {/* search */}
        <div className="relative w-72">
          <input
            type="text"
            placeholder="Search anime..."
            className="w-full rounded-lg border border-zinc-800 bg-zinc-900 pl-9 pr-4 py-2 text-sm text-white placeholder:text-zinc-500 outline-none transition-all focus:border-indigo-500 focus:bg-zinc-800/80"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;