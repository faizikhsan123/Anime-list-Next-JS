import Link from "next/link";
import AnimeList from "../components/AnimeList";
import { TopAnime } from "./types/TopAnime";

const Home = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=10`,
  ); //pemanggilan API top anime
  const anime = await res.json(); //setelah dapat datanya dijadikan ke json
  const data = await anime.data; //kita ambil bagian data nya saja  karena data sudah array maka kita bisa mapping datanya

  return (
    <div>
      {/* heading */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-extrabold text-white tracking-tight">
            Top Anime
          </h1>
          <Link href={"/populer"} className="text-2xl underline font-semibold">
            {" "}
            Lihat Semua
          </Link>
        </div>

        <p className="text-sm text-zinc-500 mt-1">
          {data.length} anime terpopuler saat ini
        </p>
      </div>

      {/* grid */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {data.map((data: TopAnime) => {
          //mapping datanya
          return (
            // wajib dikasi key agar beda datanya
            <div key={data.mal_id} className="shadow-xl">
              {/* //dan kirimkan ke component AnimeList datanya(props = properti) */}
              <AnimeList
                title={data.title}
                images={data.images}
                mal_id={data.mal_id}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
