import Navbar from "@/components/navbar";
import Image from "next/image";
import Link from "next/link";

const Homepage = () => {
  return (
    <div className="flex flex-col h-full">
      <Navbar />
      <div className="lg:mx-auto flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-8 text-xl justify-center items-center pt-10 pb-20">
        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center md:text-left">
          {/* TITLE */}
          <span className="text-4xl md:text-6xl font-bold text-black">
            Search and find your favorite stores with{" "}
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent text-4xl md:text-6xl font-bold pt-0 mt-0 md:text-left">
              SearchiStore
            </span>
          </span>

          {/* DESCRIPTION */}
          <p className="md:text-2xl lg:text-left text-justify">
            Discover a seamless way to locate your favorite stores, no matter
            where you are. Whether you're planning a shopping spree or just need
            to find a nearby store quickly, Searchi has got you covered with an
            intuitive and user-friendly interface.
          </p>
          {/* BUTTONS */}
          <div className="flex gap-4 pb-5 justify-start">
            <Link href="/locations">
              <button
                type="button"
                className="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 font-bold rounded-lg text-md px-5 py-2.5 text-center me-2 mb-2"
              >
                See stores on the map
              </button>
            </Link>
          </div>
        </div>
        {/* IMAGE CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-auto ml-20">
          <Image
            src="/location.png"
            alt="profile"
            width={400}
            height={400}
            className="object-contain"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
