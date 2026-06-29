"use client";

import { MagnifyingGlassIcon } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import { useRef } from "react";

const InputSearch = () => {
  const searchRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  //eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSearchInput = (event: any) => {
    const valueSearch = searchRef.current?.value; //var untuk mengambil value yang diketik
    const keyDown = event.key; //var untuk mengetahui apa diketik di keyboard laptop
    if (keyDown !== "Enter" || searchRef.current!.value === "") return; //jika tidak diketik enter atau value kosong maka tidak dijalankan

    router.push(`/search/${valueSearch}`);

    searchRef.current!.value = ""; //abis dapat hilangkan value nya
  };

  //eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handlebutton = (event: any) => { //ini event untuk button
    const valueSearch = searchRef.current?.value; 
    if (searchRef.current!.value === "") return; 
    router.push(`/search/${valueSearch}`);
    searchRef.current!.value = "";
  };

  return (
    <div>
      <div className="relative w-72">
        <input
          required
          ref={searchRef}
          onKeyDown={handleSearchInput} //event ketika diketik dari input
          type="text"
          placeholder="Search anime..."
          className="w-full rounded-lg border border-zinc-800 bg-zinc-900 pl-9 pr-4 py-2 text-sm text-white placeholder:text-zinc-500 outline-none transition-all focus:border-indigo-500 focus:bg-zinc-800/80"
        />

        <button
          className="absolute left-65 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-indigo-400 transition-colors"
          onClick={handlebutton} //event ketika diklik dari button
        >
          <MagnifyingGlassIcon size={20} />
        </button>
      </div>
    </div>
  );
};

export default InputSearch;
