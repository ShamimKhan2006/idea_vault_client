"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { Button, SearchField } from "@heroui/react";
import Category from "./Category";

const Search = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("search") || "");

  const handle = (e) => {
    e.preventDefault();
    router.push(`/ideas?search=${search}`);
  };

  return (
    <div className="w-full mx-auto my-10">
      <form onSubmit={handle}>
        <div className="flex items-center gap-4">
          <SearchField.Input 
  placeholder="Search..."
  value={search} 
  onChange={(e) => setSearch(e.target.value)} /
/>
            <SearchField.Group>
              <SearchField.SearchIcon />
              <SearchField.Input placeholder="Search..." />
              <SearchField.ClearButton />
            </SearchField.Group>
         

          <Button type="submit" className="bg-green-500 text-white">
            Search
          </Button>
          <Category />
        </div>
      </form>
    </div>
  );
};

export default Search;