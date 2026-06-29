export type AnimeDetail = {
  title: string;
  score: number;
  params: { keyword: string }; //mengambil params url
  synopsis: string;
  images: {
    webp: {
      image_url: string;
    };
  };
};