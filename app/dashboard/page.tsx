import BlueVerzoLogo from "@/components/icons/BlueVerzoLogo";
import PatternBackground from "@/components/icons/HeroPattern";
import PatternBackground2 from "@/components/icons/HeroPattern2";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import Link from "next/link";
import React from "react";

const Dashboard = () => {
  return (
    <div className="relative overflow-hidden bg-gray-50 h-screen">
      <div
        aria-hidden="true"
        className="hidden sm:absolute sm:inset-y-0 sm:block sm:h-full sm:w-full"
      >
        <div className="relative mx-auto h-full max-w-7xl">
          <PatternBackground
            width={404}
            height={900}
            className="absolute right-full translate-x-1/4 translate-y-1/4 transform lg:translate-x-1/2"
          />
          <PatternBackground2
            width={404}
            height={900}
            className="absolute left-full -translate-x-1/4 -translate-y-3/4 transform md:-translate-y-1/2 lg:-translate-x-1/2"
          />
        </div>
      </div>
      <div className="relative pb-16 pt-8 sm:pb-24 h-screen">
        <Popover>
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <nav
              aria-label="Global"
              className="relative flex items-center justify-between sm:h-10 md:justify-center"
            >
              <div className="flex flex-1 items-center md:absolute md:inset-y-0 md:left-0">
                <div className="flex w-full items-center justify-between md:w-auto">
                  <a href="#">
                    <span className="sr-only">Your Company</span>
                    <BlueVerzoLogo width={110} height={50} />
                  </a>
                  <div className="-mr-2 flex items-center md:hidden">
                    <PopoverButton className="relative inline-flex items-center justify-center rounded-md bg-gray-50 p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none">
                      <span className="absolute -inset-0.5" />
                      <span className="sr-only">Open main menu</span>
                      {/* <Bars3Icon aria-hidden="true" className="h-6 w-6" /> */}
                    </PopoverButton>
                  </div>
                </div>
              </div>
              <div className="hidden md:absolute md:inset-y-0 md:right-0 md:flex md:items-center md:justify-end">
                <span className="inline-flex rounded-md  shadow">
                  <a
                    href="#"
                    className="inline-flex items-center rounded-md border border-gray-100 bg-white px-6 py-2.5 text-base font-medium text-primary-blue hover:bg-gray-50"
                  >
                    Get started
                  </a>
                </span>
              </div>
            </nav>
          </div>
          <PopoverPanel
            focus
            transition
            className="absolute inset-x-0 top-0 z-10 origin-top-right transform p-2 transition data-[closed]:scale-95 data-[closed]:opacity-0 data-[enter]:duration-150 data-[leave]:duration-100 data-[enter]:ease-out data-[leave]:ease-in md:hidden"
          >
            <div className="overflow-hidden rounded-lg bg-white shadow-md ring-1 ring-black ring-opacity-5">
              <div className="flex items-center justify-between px-5 pt-4">
                <div>
                  <BlueVerzoLogo />
                </div>
                <div className="-mr-2">
                  <PopoverButton className="relative inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none ">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Close menu</span>
                    {/* <XMarkIcon aria-hidden="true" className="h-6 w-6" /> */}
                  </PopoverButton>
                </div>
              </div>
              <a
                href="#"
                className="block w-full bg-gray-50 px-5 py-3 text-center font-medium text-primary-blue hover:bg-gray-100"
              >
                Get started
              </a>
            </div>
          </PopoverPanel>
        </Popover>
        <main className="mx-auto max-w-7xl px-4 mt-40">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block xl:inline">Verzo</span>{" "}
              <span className="block text-primary-blue xl:inline">
                design system
              </span>
            </h1>
            <p className="mx-auto max-w-md text-base text-gray-500 sm:text-lg md:mt-6 md:max-w-3xl md:text-xl">
              Discover our thoughtfully designed components that ensure
              usability and visual appeal. From buttons to modals, each element
              is flexible and scalable, crafted to create intuitive and engaging
              user interfaces
            </p>
            <div className="mx-auto mt-5 max-w-md sm:flex sm:justify-center md:mt-8">
              <div className="">
                <Link
                  className="flex w-full items-center justify-center rounded-lg bg-primary-blue px-8 text-base font-medium text-white hover:bg-primary-verzobluehover md:px-10 py-3 md:text-lg"
                  href="/uicomponents/button"
                >
                  Components
                </Link>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
