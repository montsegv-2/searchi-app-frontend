"use client";

import Data from "@/Shared/Data";
import { useEffect, useState } from "react";
import CategoryItem from "./categoryItem";

const CategoryList = () => {
  const [category, setCategory] = useState();

  useEffect(() => {
    setCategory(Data.CategoryListData);
  }, []);

  return (
    <div>
      <h2 className="text-[20px] mt-3 font-bold mb-3">
        Select your favorite Category
      </h2>
      {category ? (
        <div className="flex gap-6 mb-5">
          {category?.map((item, index) => (
            <div key={index}>
              <CategoryItem category={item} />
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default CategoryList;
