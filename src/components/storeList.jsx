"use client";

import { getStores } from "@/services/StoresService";
import { useEffect, useState } from "react";
import StoreItem from "./storeItem";

const StoreList = () => {
  const [pointer, setPointer] = useState(0);
  const [stores, setStores] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getAllStores = async () => {
    const allStores = await getStores();

    setStores([...allStores]);
    setIsLoading(false);
  };

  useEffect(() => {
    getAllStores();
  }, [isLoading]);

  return (
    <div>
      <h2 className="text-[20px] mt-3 font-bold mb-3 flex items-center justify-between">
        Top nearby stores
        <span className="flex">
          {pointer > 0 ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              onClick={() => setPointer(pointer - 1)}
              className="w-10 h-10 p-2 text-gray-600 hover:text-pink-500 hover:bg-pink-100 cursor-pointer rounded-lg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>
          ) : null}

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            onClick={() => setPointer(pointer + 1)}
            className="w-10 h-10 p-2 text-gray-600 hover:text-pink-500 hover:bg-pink-100 cursor-pointer rounded-lg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </span>
      </h2>
      <div>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          stores.map((store) => (
            <StoreItem
              key={store._id}
              name={store.name}
              address={store.address}
              image={store.image}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default StoreList;
