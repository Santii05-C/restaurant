import { menu } from "@/data";
import Link from "next/link";
import React from "react";

function MenuPage() {
  return (
    <div className=" p-4  lg:px-20 xl:px-40 h-[calc(100vh-9rem)] md:h-[calc(100vh-6rem)] flex flex-col md:flex-row items-center">
      {menu.map((category) => (
        <Link href={category.slug} key={category.id}>
          <div className="">
            <h1 className="">{category.title}</h1>
            <p>{category.desc}</p>
            <button className="">Explore</button>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default MenuPage;
