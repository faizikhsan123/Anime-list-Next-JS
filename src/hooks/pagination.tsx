import { useEffect, useState } from "react";

const Halaman = () => {
  const [page, setPage] = useState(1); // state untuk halaman di api, nilai awal 1
  const [dataApi, setDataApi] = useState([]); // state untuk nampung data api, nilai awal array kosong

  const scrolltoTOp = () => {
    //fungsi untuk scroll ke atas tiap kali halaman berubah
    window.scrollTo({
      behavior: "smooth",
      top: 0,
    });
  };

  useEffect(() => {
    //wajib di useEffect karena ini dijalankan setiap kali halaman berubah
    const fetchData = async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?page=${page}`,
      );
      const data = await res.json();
      setDataApi(data.data); //nampung data api ke state
    };

    fetchData(); // panggil fungsi fetchData tiap halaman berubah
  }, [page]); // jalan ulang tiap page berubah

  const handleIncrementPage = () => {
    setPage(page + 1); //fungsi untuk menambah halaman
    scrolltoTOp();
  };

  
  const handleDecrementPage = () => {
    if (page > 1) {
      setPage(page - 1); //fungsi untuk mengurangi halaman
      scrolltoTOp();
    }
    return; //kalo dia 1 maka tidak dijalankan
  };

  return {
    page,
    dataApi,
    handleIncrementPage,
    handleDecrementPage,
  };
};

export default Halaman;
