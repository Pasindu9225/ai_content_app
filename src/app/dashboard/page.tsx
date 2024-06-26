"use client";
import TemplateListSection from "./_components/TemplateListSection";
import SearchSection from "./_components/SerchSection";
import { useState } from "react";

const Page = () => {
  const [userSearchInput, setUserSearchInput] = useState("");
  return (
    <div>
      <SearchSection
        onSearchInput={(value: string) => setUserSearchInput(value)}
      />
      <TemplateListSection userSearchInput={userSearchInput} />
    </div>
  );
};

export default Page;
