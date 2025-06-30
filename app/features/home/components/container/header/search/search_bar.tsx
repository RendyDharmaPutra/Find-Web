import { Search } from "lucide-react";
import { useEffect } from "react";

type SearchBarProps = {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
};

export const SearchBar: React.FC<SearchBarProps> = (props) => {
  return (
    <>
      <input
        defaultValue={props.query}
        onChange={(e) => props.setQuery(e.target.value)}
        type="text"
        name="search"
        id="search"
        placeholder="Cari"
        className="pl-11 px-3 py-2 flex flex-row items-center w-full h-full rounded-medium outline-none border border-tertiaryBG bg-secondaryBG hover:bg-tertiaryBG focus:bg-primaryBG focus:border-primary/75 text-secondaryTxt placeholder-tertiaryTxt duration-300"
      />
      <div className="absolute inset-y-0 left-3 ">
        <Search className="w-6 h-full text-secondaryTxt z-10" />
      </div>
    </>
  );
};
