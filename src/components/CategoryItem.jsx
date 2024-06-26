"use client";

import Image from "next/image";

const CategoryItem = ({ category }) => {
  return (
    <div
      className="flex flex-col items-center
    bg-pink-100 p-3 rounded-2xl hover:scale-105 transition-all duration-100 cursor-pointer"
    >
      <Image src={category.icon} alt={category.name} height={35} width={35} />
      <h2 className="text-[12px]text-pink-700">{category.name}</h2>
    </div>
  );
};

export default CategoryItem;
