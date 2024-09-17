import React from "react";
import BlueVerzoLogo from "./icons/BlueVerzoLogo";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-white sticky top-0 z-50 min-h-[75px] flex items-center px-6 border-b border-b-gray-200">
      <div className="lg:max-w-7xl max-w-xl w-full mx-auto flex items-center">
        <Link href="/dashboard">
          <BlueVerzoLogo width={90} height={40} />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
