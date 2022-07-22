import React from "react";
import Image from "next/image";

type ICard = {
  data: any;
};

const Card = ({ data }: ICard) => {


  return (
    <div className="p-4 bg-white rounded-md">
      <div>
        <Image src="/Logos/wallet.png" alt="wallet" width="40" height="40" />
      </div>
      <div className="text-xl font-bold text-gray-700 capitalize">
        {data.title}
      </div>
      <div className="my-3 text-sm font-bold text-gray-400 uppercase">
        {data.tag}
      </div>
      <div className="flex items-center">
        <span className="text-3xl font-bold">${data.price}</span>
        <span
          className={`${
            data.percentage >= 0 ? "bg-green-500" : "bg-red-400"
          } text-white p-1 rounded-full text-sm font-bold mt-1  ml-2 `}
        >
          {data.percentage} %
        </span>
      </div>
      {data.chart}
    </div>
  );
};

export default Card;
