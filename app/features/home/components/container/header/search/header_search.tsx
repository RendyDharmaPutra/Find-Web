import { SearchBar } from "./search_bar";

type HeaderSearchProps = {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
};

export const HeaderSearch: React.FC<HeaderSearchProps> = (props) => {
  return (
    <section className="relative w-full h-12 ">
      <SearchBar query={props.query} setQuery={props.setQuery} />
    </section>
  );
};
