import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <nav className="pt-6 mb-11 px-6">
      <div className="flex justify-between items-center">
        <Link href="/">
          <img src="/images/Group 48.svg" alt="" />
        </Link>
        <div className="flex gap-2 items-center">
          <div
            role="button"
            className="text-md font-medium text-white py-1.5 px-4 bg-black rounded-md"
          >
            Connect Wallet
          </div>
          <div role="button" className="p-1.5 bg-slate-400 rounded-md">
            <img src="/images/Group 49.svg" alt="" />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
