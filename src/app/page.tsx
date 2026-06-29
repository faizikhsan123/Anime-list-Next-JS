import AnimeList from "../components/AnimeList";
import Headers from "@/components/header";

const Page = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=10`,
  );
  const anime = await res.json();
 

  return (
    <div>
      {/* section paling populer */}
      <section>
        {/* kriim beberapa properti di headers */}
        <Headers
          title="paling populer"
          linkhref="/populer"
          Linktitle="lihat semua"
        />

        <AnimeList api={anime.data}></AnimeList>
      </section>
    </div>
  );
};

export default Page;
