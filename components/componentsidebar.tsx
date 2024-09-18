"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const ComponentSidebar = () => {
  const pathname = usePathname();
  const isActive = (path: string) => {
    return pathname === path
      ? "text-blue-600 border-l-primary-blue border-l-2 ml-[-1px] font-medium"
      : "text-gray-800 ";
  };
  return (
    <aside className="w-1/5 h-screen sticky top-0 overflow-y-auto">
      <p className=" font-medium text-gray-900">Components</p>
      <ul className=" mt-4 flex flex-col gap-y-5 border-l text-gray-800 border-l-gray-200 text-[15px] ">
        <li className={`  pl-4 ${isActive("/uicomponents/button")}`}>
          <Link href="/uicomponents/button">Button</Link>
        </li>
        <li className={`  pl-4 ${isActive("/uicomponents/input")}`}>
          <Link href="/uicomponents/input">Input</Link>
        </li>
        <li className={`  pl-4 ${isActive("/uicomponents/dropdown")}`}>
          <Link href="/uicomponents/dropdown">Dropdown</Link>
        </li>
        <li className={`  pl-4 ${isActive("/uicomponents/modal")}`}>
          <Link href="/uicomponents/modal">Modal</Link>
        </li>
      </ul>
    </aside>
  );
};

export default ComponentSidebar;
