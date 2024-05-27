"use client";

import { getStores } from "@/services/StoresService";
import EditStore from "@/components/editStore";
import { useEffect, useState } from "react";
import Image from "next/image";
import ModalAddStore from "@/components/modalAddStore";

const Admin = () => {
  const [pointer, setPointer] = useState(0);
  const [stores, setStores] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isAdding, setIsAdding] = useState(false);

  const itemsPerPage = 3;

  const getAllStores = async () => {
    const allStores = await getStores();

    setStores([...allStores]);
    setIsLoading(false);
  };

  useEffect(() => {
    getAllStores();
  }, [isLoading]);

  const currentStores = stores.slice(
    pointer * itemsPerPage,
    (pointer + 1) * itemsPerPage
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 px-6 md:px-10 mt-10 gap-10">
      <div>
        <h2 className="text-[20px] mt-3 font-bold mb-3 flex items-center justify-between">
          Listings of your stores
          <span className="bg-pink-200 px-3 py-1 rounded-xl">
            {stores.length}
          </span>
          <div>
            <button
              className="bg-black text-white px-7 py-2 rounded-2xl hover:bg-pink-400"
              onClick={() => setIsAdding(true)}
            >
              Add store
            </button>
          </div>
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

            {(pointer + 1) * itemsPerPage < stores.length ? (
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
            ) : null}
          </span>
        </h2>
        <div>
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            currentStores.map((store, item) => (
              <EditStore
                key={item}
                id={store._id}
                name={store.name}
                address={store.address}
                image={store.image}
              />
            ))
          )}
        </div>
      </div>
      <div className="h-full w-full flex justify-center items-center">
        {isAdding ? (
          <ModalAddStore onClose={() => setIsAdding(false)} />
        ) : (
          <Image
            src="/phoneMarker.png"
            alt="profile"
            width={900}
            height={800}
            className="object-contain"
            priority
          />
        )}
      </div>
    </div>
  );
};

export default Admin;
