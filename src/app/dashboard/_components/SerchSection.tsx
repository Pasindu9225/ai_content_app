import { Search } from "lucide-react";
import React from "react";

const SearchSection = ({
  onSearchInput,
}: {
  onSearchInput: (value: string) => void;
}) => {
  return (
    <div className="p-10 bg-gradient-to-br text-white flex-col flex justify-center items-center from-purple-500 via-purple-500 to-blue-600">
      <h2 className="font-bold text-3xl">Browse All Templates</h2>
      <p>What would you like to generate?</p>
      <div className="w-full flex justify-center">
        <div className="flex gap-2 w-[50%] items-center p-2 border rounded-md bg-white my-5">
          <Search className="text-primary" />
          <input
            type="text"
            placeholder="Search...."
            onChange={(event) => onSearchInput(event.target.value)}
            className="outline-none w-full text-black bg-transparent"
          />
        </div>
      </div>
    </div>
  );
};

export default SearchSection;
