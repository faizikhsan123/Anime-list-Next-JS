import AnimeList from "../components/AnimeList";
import Headers from "@/components/header";

const Page = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=10`,
  );
  const anime = await res.json();

  const resRecomendation = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/recommendations/anime`,
  );

  const animeRecomendation = await resRecomendation.json();
  const data = animeRecomendation.data;
  // flatten semua entry jadi 1 array anime yang awalnya [[],[],[]] menjadi [] ini di mapping lagi ambil entry aja
  const allAnimeRecommendation = data.flatMap((item) => item.entry);

  const jumlahRekomendasi = 4; // mau ambil berapa

  const startIndex = Math.floor( Math.random() * (allAnimeRecommendation.length - jumlahRekomendasi)); //slice awal
  const akhirIndex = startIndex + jumlahRekomendasi; ///slice akhir
  console.log(startIndex, akhirIndex);
  const limitRekomendasi = allAnimeRecommendation.slice( startIndex, akhirIndex,); // ambil slice dari awal sampai akhir

  return (
    <div>
      <section>
        <Headers
          title="paling populer"
          linkhref="/populer"
          Linktitle="lihat semua"
        />

        <AnimeList api={anime.data}></AnimeList>
      </section>
      <br />
      <br />
      <br />

      <section>
        {/* ini rekomendasi */}
        <Headers title="Rekomendasi untukmu" />

        <AnimeList api={limitRekomendasi}></AnimeList>
      </section>
    </div>
  );
};

export default Page;
