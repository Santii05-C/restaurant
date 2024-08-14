import { pizzas } from "@/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function CategoryPage() {
  return (
    <div className="flex flex-wrap text-red-500">
      {pizzas.map((item) => (
        <Link
          className="w-full h-[60vh] border-r-2 border-b-2 border-red-500 sm:w-1/2 lg:w-1/3 p-4"
          href={`/product/${item.id}`}
          key={item.id}
        >
          {/* IMAGE CONYAINER */}
          {item.img && (
            <div className="relative h-[80%]">
              <Image src={item.img} alt="" fill className="object-contain" />
            </div>
          )}
          {/* IMAGE CONYAINER */}
          <div className="">
            <h1 className="">{item.title}</h1>
            <h2 className="">${item.price}</h2>
            <button></button>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default CategoryPage;
