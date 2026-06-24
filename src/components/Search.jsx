"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { Button, SearchField } from "@heroui/react";
import Category from "./Category";

const Search = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [search, setSearch] = useState(
    searchParams.get("search") || ""
  );

  const handle = (e) => {
    e.preventDefault();
    router.push(`/ideas?search=${encodeURIComponent(search)}`);
  };

  return (
    <div className="w-full  md:max-w-4xl  my-10">
      <div>
        
    
      <form onSubmit={handle}>
        <div>

          <SearchField.Group>
           
           <div className="flex items-center gap-4  p-2">
              <SearchField.SearchIcon />
            <SearchField.Input
            
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
                 <Button className="bg-green-500 font-bold">Search</Button>
        <Category/>
           </div>
            

            {/* <SearchField.ClearButton
              onClick={() => setSearch("")}
            /> */}
   
          </SearchField.Group>
            

          

        

        </div>
        
      </form>
        </div>
    </div>
  );
};

export default Search;