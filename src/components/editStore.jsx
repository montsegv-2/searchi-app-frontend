"use client";

import { deleteStore } from "@/services/StoresService";
import Image from "next/image";

const EditStore = ({ id, name, address, image, onDelete }) => {
  const loaderProp = ({ src }) => {
    return src;
  };

  const handleDelete = async () => {
    try {
      await deleteStore(id);
      if (onDelete) {
        onDelete(id);
      }
    } catch (error) {
      console.error("Failed to delete store:", error);
    }
  };

  return (
    <div className="flex gap-4 p-3 border-b-[1px] border-purple-200 mb-4 items-center">
      <Image
        src={image}
        alt="business-img"
        width={90}
        height={90}
        className="rounded-xl object-cover h-[150px] w-[170px]"
        loader={loaderProp}
        unoptimized
        priority
      />
      <div>
        <h2 className="text-[20px] font-semibold">{name}</h2>
        <h2 className="text-[15px] text-gray-500">{address}</h2>
        <div className="flex gap-2 mt-2">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-2xl hover:bg-blue-600">
            Edit
          </button>
          <button
            className="bg-red-500 text-white px-4 py-2 rounded-2xl hover:bg-red-600"
            onClick={handleDelete}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditStore;
