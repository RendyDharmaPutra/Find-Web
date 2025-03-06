import React from "react";
import { HeaderAction } from "./action/header_action";
import { HeaderSearch } from "./search/header_search";

export const HomeHeader: React.FC = (props) => {
  return (
    <header className="px-4 py-6 flex flex-col justify-center gap-4 w-full ">
      <HeaderAction />
      <HeaderSearch />
    </header>
  );
};
