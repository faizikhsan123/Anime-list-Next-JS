// app/.../page.tsx
"use client";
import AnimeList from "@/components/AnimeList";
import Halaman from "@/hooks/pagination";
import HeaderMenu from "@/utils/HeaderMenu";
import Pagination from "@/utils/Pagination";

const Page = () => {
  const { page, dataApi, handleIncrementPage, handleDecrementPage } = Halaman(); //ini kita bngambil dari custom hooks

  return (
    <div>
      {/* ngelempar page dari custom hooks ke komponen Header */}
      <HeaderMenu title={`paling populer #${page}`} />


      {/* ngelempar data dari custom hooks ke komponen AnimeList */}
      <AnimeList api={dataApi} />

      {/* ngelempar beberapa properti ke komponen Pagination */}
      <Pagination 
        page={page}
        handleIncrementPage={handleIncrementPage}
        handleDecrementPage={handleDecrementPage}
      />
    </div>
  );
};

export default Page;
