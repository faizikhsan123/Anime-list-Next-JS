import AnimeList from "@/components/AnimeList";
import Headers from "@/components/header";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Page = async ({ params }: any) => {
  const { keyword } = await params; //desctured params seperti { "keyword": "naruto" } menjadi "naruto"
  console.log(keyword);
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${keyword}`,
  );
  const anime = await res.json();

  return (
    <div>
      <section>
        <Headers title={`Pencarian untuk "${keyword}"`} />

        <AnimeList api={anime.data}></AnimeList>
      </section>
    </div>
  );
};

export default Page;
