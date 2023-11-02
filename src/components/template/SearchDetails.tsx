import {features} from "process";
import React from "react";

const pages = [
  {
    pic: "/images/Group 65.png",
    title: "Ethereum Mainnet",
    icon: "/images/chevron-up.png",
    items: [
      {
        thumbneil: "/images/Group 69.svg",
        name: "WalletName",
        title: "matic:0x27ce...857e",
        icons: "/images/chip.svg",
      },
      {
        thumbneil: "/images/Group 69.svg",
        name: "WalletName",
        title: "matic:0x27ce...857e",
        icons: "/images/chip.svg",
      },
    ],
  },
  {
    pic: "/images/Group 70.png",
    title: "Ethereum Mainnet",
    icon: "/images/chevron-up.png",
    items: [
      {
        thumbneil: "/images/Group 69.svg",
        name: "WalletName",
        title: "matic:0x27ce...857e",
        icons: "/images/Group 70.png",
      },
    ],
  },
  {
    pic: "/images/Group 71.png",
    title: "Ethereum Mainnet",
    icon: "/images/chevron-up.png",
    items: [
      {
        thumbneil: "/images/Group 69.svg",
        name: "WalletName",
        title: "matic:0x27ce...857e",
        icons: "/images/Group 71.png",
      },
    ],
  },
];

function SearchDetails() {
  return (
    <div className="container">
      <div className="bg-[rgba(21,_21,_23,_0.95)] border md:border-white border-gray-400 rounded-md p-4 md:max-w-[75%] m-auto">
        {pages.map((item, index) => (
          <div key={index} className="">
            <div>
              <div className="flex gap-3 items-center justify-between mb-1">
                <div className="flex gap-3 items-center">
                  <div className="py-2 px-1.5">
                    <img src={item.pic} alt="" />
                  </div>
                  <div className="text-md text-white">{item.title}</div>
                </div>
                <div className="px-1.5 pr-3">
                  <img src={item.icon} alt="" />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              {item.items.map((feature, index) => (
                <div
                  role="button"
                  key={index}
                  className="flex gap-3 items-center justify-between bg-emerald-900 py-3 px-4 rounded-md"
                >
                  <div className="flex gap-3 items-center">
                    <div>
                      <img src={feature.thumbneil} alt="" />
                    </div>
                    <div className="text-md text-white">
                      <p className="font-medium mb-1">{feature.name}</p>
                      <p>{feature.title}</p>
                    </div>
                  </div>
                  <div>
                    <img src={feature.icons} alt="" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SearchDetails;
