import ButtonProps from "@/components/template/ButtonProps";
import React from "react";

const feedback = [
  {
    thumbneil1: "/images/Frame 107.svg",
    title: "MVP offers address search for wallet balance and activity.",
  },
  {
    thumbneil1: "/images/Frame 107 (1).svg",
    title: "Smart contract execution history is visible and searchable.",
  },
  {
    thumbneil1: "/images/Frame 107 (2).svg",
    title: "Smart contract execution history is visible and searchable.",
  },
  {
    thumbneil1: "/images/Frame 107 (3).svg",
    title: "Smart contract execution history is visible and searchable.",
  },
];

function Features() {
  return (
    <section className="container mb-20">
      <div className="text-xl font-medium text-white mb-1 text-center">
        Features
      </div>
      <div className="text-base text-slate-300 mb-5 text-center">
        See our latest features and leave feedback
      </div>
      <div className="max-w-[632px] m-auto border-[2px] border-gray-400 rounded-md p-4 mb-5 flex flex-col gap-1">
        {feedback.map((item, index) => (
          <div key={index} className="flex gap-2 justify-center">
            <div className="flex items-center">
              <img className="-mt-1.5" src={item.thumbneil1} alt="" />
            </div>
            <div className="text-base font-medium text-slate-300">
              {item.title}
            </div>
          </div>
        ))}
      </div>
      <div className="flex md:flex-row flex-col justify-center gap-2">
        <ButtonProps
          thumbneil="/images/Group 59.svg"
          name="Leave Feeback"
          theme="green"
        />
        <ButtonProps
          thumbneil="/images/Group 60.svg"
          name="Follow us on Twitter"
        />
      </div>
    </section>
  );
}

export default Features;
