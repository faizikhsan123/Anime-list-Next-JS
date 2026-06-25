export type TopAnime = {
  mal_id: number;
  title: string;
  score: number;
  images: { //perhatikan baik baik struktur images ini ntar lihat di file page.tsx dan juga AnimeList.tsx
    jpg: {
      image_url: string;
    };
  };
};


