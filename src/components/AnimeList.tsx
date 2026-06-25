import Image from "next/image";
import Link from "next/link";
import { TopAnime } from "../app/types/TopAnime";

const AnimeList = ({ title, images, mal_id }: TopAnime) => {
  return (
    <Link
      href={`/${mal_id}`}
      className="group flex flex-col overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500/60 hover:shadow-xl hover:shadow-indigo-500/10"
    >
      {/* thumbnail */}
      <div className="relative overflow-hidden aspect-[2/3]">
        <Image
          src={images.jpg.image_url}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* info */}
      <div className="p-3 flex-1 flex flex-col justify-between">
        <h3 className="line-clamp-2 text-sm font-semibold text-zinc-200 leading-snug transition-colors group-hover:text-indigo-400">
          {title}
        </h3>
        <p className="mt-2 text-xs text-zinc-600 group-hover:text-indigo-500 transition-colors font-medium">
          Lihat detail →
        </p>
      </div>
    </Link>
  );
};

export default AnimeList;
