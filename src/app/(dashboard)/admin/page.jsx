"use client";

import ModifiedStore from "@/components/modifiedStore";
import { useState } from "react";

const Admin = () => {
  const [pointer, setPointer] = useState(0);

  return (
    <div>
      <h2 className="text-[20px] mt-3 font-bold mb-3 flex items-center justify-between">
        Your store listings
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
        <ModifiedStore />
        <ModifiedStore />
        <ModifiedStore />
        <ModifiedStore />
        <ModifiedStore />
      </div>
    </div>
  );
};

export default Admin;
