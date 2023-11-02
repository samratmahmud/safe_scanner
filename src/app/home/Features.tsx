import ButtonProps from "@/components/template/ButtonProps";
import React from "react";

const feedback = [
  {
    thumbneil1: "/images/Group 61.png",
    thumbneil2: "/images/Line 6.png",
    title: "MVP offers address search for wallet balance and activity.",
  },
  {
    thumbneil1: "/images/Group 63.png",
    thumbneil2: "/images/Group 64.png",
    title: "Smart contract execution history is visible and searchable.",
  },
  {
    thumbneil1: "/images/Group 63.png",
    thumbneil2: "/images/Group 64.png",
    title: "Smart contract execution history is visible and searchable.",
  },
  {
    thumbneil1: "/images/Group 63.png",
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
      <div className="max-w-[632px] m-auto border-[2px] border-gray-900 rounded-md p-4 mb-5">
        {feedback.map((item, index) => (
          <div key={index} className="flex gap-2 items-center justify-center">
            <div className="flex flex-col items-center">
              <img className="w-7" src={item.thumbneil1} alt="" />
              <img className="w-0.5" src={item.thumbneil2} alt="" />
            </div>
            <div className="text-base font-medium text-slate-300 mb-3">
              {item.title}
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center gap-2">
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
