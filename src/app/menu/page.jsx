import { menu } from "@/data/data";
import Link from "next/link";
import React from "react";

const MenuPage = () => {
  return (
    <div className="p-4 lg:px-20 xl:px-40 h-[calc(100vh-6rem)]  flex flex-col md:flex-row items-center">
      {menu.map((category) => (
        <Link
          href={`/menu/${category.slug}`}
          key={category.id}
          className="w-full h-1/3 bg-cover p-8 md:h-1/2 border-solid border-green-500"
          style={{ backgroundImage: `url(${category.img})` }}
        >
          <div
            className={`text-${category.color} w-1/2 flex flex-col justify-between`}
          >
            <div className="md:h-52">
              <h1 className="uppercase font-bold text-3xl ">
                {category.title}
              </h1>
              <p className="text-sm my-8">{category.desc}</p>
            </div>
            <button
              className={`hidden 2xl:block h-max bg-black text-white p-2 rounded-md`}
            >
              Explore
            </button>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MenuPage;
