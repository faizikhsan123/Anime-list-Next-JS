import Image from "next/image";
import Link from "next/link";
import { TopAnime } from "../app/types/TopAnime";

interface AnimeListProps {
  // wajib membuat interface untuk props yang isinya data dari tipe TopAnime sebagai array kosong
  api: TopAnime[];
}

const AnimeList = ({ api }: AnimeListProps) => {
  //isi dari interface di atas di panggil di bawah

  if (api.length === 0) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <h1 className="text-2xl font-bold text-center">Tidak ada data untuk pencarian ini </h1>
      </div>
    );
  }
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
      {api.map((anime) => (
        <Link
          key={anime.mal_id}
          href={`/detail/${anime.mal_id}`}
          className="group flex flex-col overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500/60 hover:shadow-xl hover:shadow-indigo-500/10"
        >
          <div className="relative overflow-hidden aspect-[2/3]">
            <Image
              src={anime.images?.jpg?.image_url ?? "/placeholder.jpg"}
              alt={anime.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>

          <div className="p-3 flex-1 flex flex-col justify-between">
            <h3 className="line-clamp-2 text-sm font-semibold text-zinc-200 leading-snug transition-colors group-hover:text-indigo-400">
              {anime.title}
            </h3>
            <p className="mt-2 text-xs text-zinc-600 group-hover:text-indigo-500 transition-colors font-medium">
              Lihat detail →
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default AnimeList;
