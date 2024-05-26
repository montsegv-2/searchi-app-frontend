"useclient";

import CategoryList from "@/components/categoryList";
import SearchBar from "@/components/searchBar";
import StoreList from "@/components/storeList";

const Locations = () => {
  return (
    <div className="">
      <div>
        <SearchBar />
        <CategoryList />
        <StoreList />
      </div>
    </div>
  );
};

export default Locations;
