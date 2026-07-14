import VideoPlayer from "@/utils/videoPlayer";
import Image from "next/image";

//eslint-disable-next-line @typescript-eslint/no-explicit-any
const page = async ({ params }: any) => {
  const { id } = await params; //tangkap idnya desctured

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/anime/${id}`, //endpoint
    {
      next: { revalidate: 3600 }, //di revalidate setiap 1 jam agar tidak banjir request
    },
  );
  const dataAnimeDetail = await res.json(); //ambil datanya
  const anime = dataAnimeDetail.data; //kita hanya ambil datanya

  const youtubeId = anime.trailer?.embed_url?.match(/embed\/([^?]+)/)?.[1]; //karena ambil idnya agak tricky kita gpt dan haslnya ini

  if (!anime) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0B0B0F] text-[#E8E6E1]">
        <p className="font-mono text-sm tracking-widest uppercase text-[#6B6862]">
          Data tidak ditemukan
        </p>
      </div>
    );
  }

  const title = anime.title_english || anime.title;
  const bgImage = anime.images?.jpg?.large_image_url;
  const poster = anime.images?.jpg?.large_image_url;

  const stats: { label: string; value: string | number }[] = [
    { label: "Score", value: anime.score ?? "—" },
    { label: "Ranked", value: anime.rank ? `#${anime.rank}` : "—" },
    {
      label: "Popularity",
      value: anime.popularity ? `#${anime.popularity}` : "—",
    },
    { label: "Members", value: anime.members?.toLocaleString() ?? "—" },
  ];

  const facts: { label: string; value: string }[] = [
    { label: "Type", value: anime.type ?? "—" },
    { label: "Episodes", value: anime.episodes?.toString() ?? "—" },
    { label: "Status", value: anime.status ?? "—" },
    { label: "Aired", value: anime.aired?.string ?? "—" },
    { label: "Duration", value: anime.duration ?? "—" },
    { label: "Rating", value: anime.rating ?? "—" },
    { label: "Source", value: anime.source ?? "—" },
    {
      label: "Studios",
      value:
        anime.studios?.map((s: { name: string }) => s.name).join(", ") || "—",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0B0B0F] text-[#E8E6E1] font-sans">
      {/* Hero */}
      <section className="relative w-full overflow-hidden">
        {bgImage && (
          <div className="absolute inset-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={bgImage}
              alt=""
              className="w-full h-full object-cover object-top scale-110 blur-2xl opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0F]/40 via-[#0B0B0F]/80 to-[#0B0B0F]" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0F] via-[#0B0B0F]/60 to-transparent" />
          </div>
        )}

        <div className="relative max-w-6xl mx-auto px-6 md:px-10 pt-16 pb-14 md:pt-24 md:pb-20">
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
            {/* Poster */}
            <div className="shrink-0 w-40 md:w-64 mx-auto md:mx-0">
              <div className="relative aspect-[2/3] rounded-sm overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8)] ring-1 ring-white/10">
                {poster && (
                  <Image
                    src={poster}
                    alt={title}
                    fill
                    sizes="256px"
                    className="object-cover"
                    priority
                  />
                )}
              </div>
            </div>

            {/* Title + meta */}
            <div className="flex-1 min-w-0 text-center md:text-left">
              <p className="font-mono text-[11px] tracking-[0.25em] uppercase text-[#C9A24B] mb-3">
                {anime.season && anime.year
                  ? `${anime.season} ${anime.year}`
                  : (anime.year ?? "Anime")}
              </p>

              <h1 className="font-serif text-3xl md:text-5xl leading-[1.05] tracking-tight text-[#F4F2EC] text-balance">
                {title}
              </h1>

              {anime.title_japanese && (
                <p className="mt-2 text-sm md:text-base text-[#8C887F] font-light">
                  {anime.title_japanese}
                </p>
              )}

              {/* Genres */}
              {anime.genres?.length > 0 && (
                <div className="mt-5 flex flex-wrap gap-2 justify-center md:justify-start">
                  {anime.genres.map((g: { mal_id: number; name: string }) => (
                    <span
                      key={g.mal_id}
                      className="text-xs tracking-wide uppercase px-3 py-1 rounded-full border border-[#C9A24B]/30 text-[#C9A24B]/90 bg-[#C9A24B]/[0.06]"
                    >
                      {g.name}
                    </span>
                  ))}
                </div>
              )}

              {/* Stats row */}
              <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-px bg-white/10 rounded-sm overflow-hidden max-w-lg mx-auto md:mx-0">
                {stats.map((s) => (
                  <div
                    key={s.label}
                    className="bg-[#0B0B0F] px-4 py-3 text-center md:text-left"
                  >
                    <div className="font-serif text-xl md:text-2xl text-[#F4F2EC]">
                      {s.value}
                    </div>
                    <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#6B6862] mt-1">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>

              {anime.trailer?.url && (
                <a
                  href={anime.trailer.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-8 text-sm font-medium tracking-wide text-[#0B0B0F] bg-[#C9A24B] hover:bg-[#DDB65E] transition-colors px-6 py-3 rounded-full"
                >
                  Tonton trailer
                  <span aria-hidden>↗</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="max-w-6xl mx-auto px-6 md:px-10 pb-24">
        <div className="grid md:grid-cols-[1fr_320px] gap-12 md:gap-16">
          {/* Synopsis */}
          <div>
            <h2 className="font-mono text-xs tracking-[0.25em] uppercase text-[#C9A24B] mb-4">
              Sinopsis
            </h2>
            <p className="text-[#C7C4BC] leading-relaxed text-base md:text-lg font-light whitespace-pre-line">
              {anime.synopsis || "Sinopsis belum tersedia."}
            </p>

            {anime.background && (
              <>
                <h2 className="font-mono text-xs tracking-[0.25em] uppercase text-[#C9A24B] mt-10 mb-4">
                  Latar Belakang
                </h2>
                <p className="text-[#8C887F] leading-relaxed text-sm md:text-base font-light whitespace-pre-line">
                  {anime.background}
                </p>
              </>
            )}
          </div>

          {/* Fact sheet */}
          <aside>
            <h2 className="font-mono text-xs tracking-[0.25em] uppercase text-[#C9A24B] mb-4">
              Detail
            </h2>
            <dl className="divide-y divide-white/10 border-t border-b border-white/10">
              {facts.map((f) => (
                <div key={f.label} className="flex justify-between gap-4 py-3">
                  <dt className="text-sm text-[#6B6862]">{f.label}</dt>
                  <dd className="text-sm text-[#E8E6E1] text-right">
                    {f.value}
                  </dd>
                </div>
              ))}
            </dl>

            {anime.streaming?.length > 0 && (
              <>
                <h2 className="font-mono text-xs tracking-[0.25em] uppercase text-[#C9A24B] mt-8 mb-4">
                  Streaming
                </h2>
                <div className="flex flex-col gap-2">
                  {anime.streaming.map((s: { name: string; url: string }) => (
                    <a
                      key={s.name}
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-[#E8E6E1] hover:text-[#C9A24B] transition-colors flex items-center justify-between border border-white/10 rounded-sm px-4 py-2.5"
                    >
                      {s.name}
                      <span aria-hidden className="text-[#6B6862]">
                        ↗
                      </span>
                    </a>
                  ))}
                </div>
              </>
            )}
          </aside>
        </div>
      </section>
{/* pemanggilan video */}
      <div>
        <VideoPlayer YoutubeId={youtubeId} />
      </div>
    </div>
  );
};

export default page;
