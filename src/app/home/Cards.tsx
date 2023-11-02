"use client";
import React from "react";
import ScrollContainer from "react-indiana-drag-scroll";

const staticCard = [
  {
    pic: "/images/Group 53.png",
    title: "Ethereum Mainnet",
    visibility: "Transactions for the last 7 days",
    thumbnail: "/images/Group 52.svg",
    footer: [
      {
        name: "Latest block found:",
        id: "18390350",
      },
      {
        name: "Last finalized block:",
        id: "18390414",
      },
    ],
  },
  {
    pic: "/images/Group 53.png",
    title: "Ethereum Goerli",
    visibility: "Transactions for the last 7 days",
    thumbnail: "/images/Group 52.svg",
    footer: [
      {
        name: "Latest block found:",
        id: "18390350",
      },
      {
        name: "Last finalized block:",
        id: "18390414",
      },
    ],
  },
  {
    pic: "/images/Group 54.png",
    title: "Optimism",
    visibility: "Transactions for the last 7 days",
    thumbnail: "/images/Group 52.svg",
    footer: [
      {
        name: "Latest block found:",
        id: "18390350",
      },
      {
        name: "Last finalized block:",
        id: "18390414",
      },
    ],
  },
  {
    pic: "/images/Group 54.png",
    title: "Optimism Goerli",
    visibility: "Transactions for the last 7 days",
    thumbnail: "/images/Group 52.svg",
    footer: [
      {
        name: "Latest block found:",
        id: "18390350",
      },
      {
        name: "Last finalized block:",
        id: "18390414",
      },
    ],
  },
  {
    pic: "/images/Group 55.png",
    title: "Polygon",
    visibility: "Transactions for the last 7 days",
    thumbnail: "/images/Group 52.svg",
    footer: [
      {
        name: "Latest block found:",
        id: "18390350",
      },
      {
        name: "Last finalized block:",
        id: "18390414",
      },
    ],
  },
  {
    pic: "/images/Group 55.png",
    title: "Polygon Mumbai",
    visibility: "Transactions for the last 7 days",
    thumbnail: "/images/Group 52.svg",
    footer: [
      {
        name: "Latest block found:",
        id: "18390350",
      },
      {
        name: "Last finalized block:",
        id: "18390414",
      },
    ],
  },
  {
    pic: "/images/Group 56.png",
    title: "Arbitrum",
    visibility: "Transactions for the last 7 days",
    thumbnail: "/images/Group 52.svg",
    footer: [
      {
        name: "Latest block found:",
        id: "18390350",
      },
      {
        name: "Last finalized block:",
        id: "18390414",
      },
    ],
  },
  {
    pic: "/images/Group 56.png",
    title: "Arbitrum Testnet",
    visibility: "Transactions for the last 7 days",
    thumbnail: "/images/Group 52.svg",
    footer: [
      {
        name: "Latest block found:",
        id: "18390350",
      },
      {
        name: "Last finalized block:",
        id: "18390414",
      },
    ],
  },
];

function Cards() {
  return (
    <section className="container">
      <div className="text-xl font-medium text-white mb-5">Statistics</div>
      <ScrollContainer className="scroll-container">
        <div className="flex md:grid lg:grid-cols-4 md:grid-cols-2 gap-2 mb-20">
          {staticCard.map((item, index) => (
            <div key={index} className="bg-stone-700 px-1 pt-1 rounded">
              <div className="flex flex-col gap-3 bg-stone-900 px-3 pt-3 pb-4 rounded">
                <div className="flex gap-2 items-center">
                  <span>
                    <img src={item.pic} alt="" />
                  </span>
                  <span className="text-md font-medium text-slate-300">
                    {item.title}
                  </span>
                </div>
                <div className="text-md text-slate-500">{item.visibility}</div>
                <div>
                  <img src={item.thumbnail} alt="" />
                </div>
              </div>
              <div className="flex gap-3 justify-between p-3">
                {item.footer.map((items, index) => (
                  <div key={index} className="">
                    <div className="text-xs text-slate-500 mb-0.5 whitespace-nowrap">
                      {items.name}
                    </div>
                    <div className="text-md font-medium text-slate-300">
                      {items.id}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </ScrollContainer>
    </section>
  );
}

export default Cards;
