"use client";

import React from "react";
import { LuSearch } from "react-icons/lu";

export default function SearchBar({ setSearch }: { setSearch: (value: string) => void }) {
  return (
    <div className="flex h-12 w-[30%] rounded-md border-[3px] border-gray-400 px-3 py-2">
      <LuSearch className="m-1 mr-2 size-6" />
      <input
        placeholder="Search"
        className="w-full outline-none border rounded-lg px-2 bg-transparent text-xl"
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}
