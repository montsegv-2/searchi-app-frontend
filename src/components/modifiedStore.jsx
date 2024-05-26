"use client";

import Image from "next/image";

const ModifiedStore = () => {
  return (
    <div className="flex gap-4 p-3 border-b-[1px] border-purple-200 mb-4 items-center">
      <Image
        src="/placeholder.jpg"
        alt="business-img"
        width={90}
        height={90}
        className="rounded-xl object-cover h-[150px] w-[300px]"
      />
      <div>
        <h2 className="text-[20px] font-semibold">Business name</h2>
        <h2 className="text-[15px] text-gray-500">Address</h2>
        <div className="flex gap-2 mt-2">
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Edit
          </button>
          <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModifiedStore;
