import React from "react";
import { HeaderAction } from "./action/header_action";
import { HeaderSearch } from "./search/header_search";

type HomeHeaderProps = {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
};

export const HomeHeader: React.FC<HomeHeaderProps> = (props) => {
  return (
    <header className="px-4 py-6 flex flex-col justify-center gap-4 w-full ">
      <HeaderAction />
      <HeaderSearch query={props.query} setQuery={props.setQuery} />
    </header>
  );
};
