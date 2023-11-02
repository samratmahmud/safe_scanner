import Link from "next/link";
import React from "react";

const buttonProps = [
  {
    thumbneil: "/images/Group 54.png",
    title: "Optimism",
  },
  {
    thumbneil: "/images/Group 54.png",
    title: "Optimism Goerli",
  },
  {
    thumbneil: "/images/Group 53.png",
    title: "Ethereum Mainnet",
  },
  {
    thumbneil: "/images/Group 53.png",
    title: "Ethereum Goerli",
  },
  {
    thumbneil: "/images/Group 55.png",
    title: "Polygon",
  },
  {
    thumbneil: "/images/Group 55.png",
    title: "Polygon Mumbai",
  },
  {
    thumbneil: "/images/Group 56.png",
    title: "Arbitrum",
  },
  {
    thumbneil: "/images/Group 56.png",
    title: "Arbitrum Testnet",
  },
];

function ButtonGroup() {
  return (
    <section className="container">
      <div className="py-10 bg-stone-700 rounded-md">
        <div className="text-xl font-medium text-white text-center mb-5">
          Available 8+ Networks
        </div>
        <div className="grid grid-cols-4 gap-3 py-2 px-32">
          {buttonProps.map((item, index) => (
            <div key={index} className="">
              <Link
                href="/"
                className="bg-white flex items-center gap-2 py-3 pl-3 pr-5 rounded-full"
              >
                <div>
                  <img src={item.thumbneil} alt="" />
                </div>
                <div className="text-base font-medium text-stone-900">
                  {item.title}
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ButtonGroup;
