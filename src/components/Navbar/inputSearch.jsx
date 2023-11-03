"use client";

import { MagnifyingGlass } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import { useRef } from "react";

const inputSearch = () => {
  const searchRef = useRef();
  const router = useRouter();
  const handleSearch = (event) => {
    const keyword = searchRef.current.value;

    // Jika input kosong maka langsung return
    if(!keyword || keyword.trim() == "") return

    if (event.key === "Enter" || event.type === 'click') {
      event.preventDefault();  
      router.push(`/search/${keyword}`);
    }
  };

  return (
    <div className="relative">
      <input
        placeholder="Find Anime..."
        className="w-full p-2 rounded"
        ref={searchRef}
        onKeyDown={handleSearch}
      />
      <button className="absolute top-2 end-2">
        <MagnifyingGlass size={24} onClick={handleSearch} />
      </button>
    </div>
  );
};

export default inputSearch;
