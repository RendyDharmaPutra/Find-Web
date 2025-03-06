import { SearchBar } from "./search_bar";

type HeaderSearchProps = {};

export const HeaderSearch: React.FC<HeaderSearchProps> = (props) => {
  return (
    <section className="relative w-full h-12 ">
      <SearchBar />
    </section>
  );
};
