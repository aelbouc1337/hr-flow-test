import CategoryFiltering from "./ui/CategoryFiltering";
import LocationFiltering from "./ui/LocationFiltering";
import Sorting from "./ui/Sorting";
import ResetButton from "./ui/ResetButton";
import SearchBar from "./ui/SearchBar";

const FilteringToolbar = () => {
  return (
    <section className="flex w-full justify-center items-center gap-4 lg:flex-row flex-col">
      <SearchBar />
      <CategoryFiltering />
      <LocationFiltering />
      <Sorting />
      <ResetButton />
    </section>
  );
};

export default FilteringToolbar;
