import Mapa from "@/components/mapa";
import SearchBar from "@/components/searchBar";
import StoreList from "@/components/storeList";

const Locations = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 px-6 md:px-10 mt-10 gap-8">
        <div>
          <SearchBar />
          <StoreList />
        </div>
        <div>
          <Mapa />
        </div>
      </div>
    </div>
  );
};

export default Locations;
