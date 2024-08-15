import { singleProduct } from "@/data";
import Image from "next/image";
import React from "react";

const SingleProductPage = () => {
  return (
    <div className="p-4 lg:px-20 xl:px-40 h-screen flex flex-col justify-around text-red-red-500 md:flex-row">
      {/* IMAGE CONTAINER */}
      {singleProduct.img && (
        <div className="relative">
          <Image src={singleProduct.img} alt="" className="object-contain" />
        </div>
      )}
      {/* TEXT CONTAINER */}
      <div className="">
        <h1 className="">{singleProduct.title}</h1>
        <p className="">{singleProduct.desc}</p>
      </div>
    </div>
  );
};

export default SingleProductPage;
