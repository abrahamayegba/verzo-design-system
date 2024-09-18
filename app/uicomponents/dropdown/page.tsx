import ComponentSidebar from "@/components/componentsidebar";
import Navbar from "@/components/navbar";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import {
  Archive,
  ChevronDown,
  ChevronDownIcon,
  CircleArrowRight,
  Files,
  Heart,
  Pencil,
  Share2,
  Trash2,
} from "lucide-react";
import React from "react";

const Dropdown = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex flex-grow px-6 py-10">
        <div className="lg:max-w-7xl max-w-xl mx-auto flex flex-row w-full">
          <ComponentSidebar />
          <main className="w-4/5 bg-white overflow-y-auto h-screen">
            <section>
              <h1 className="text-3xl font-semibold text-gray-900">
                Dropdowns
              </h1>
              <p className="mt-4 text-gray-500 text-[15px]">
                Probably the number one reason you’re looking for a UI kit in
                the first place.
              </p>
              <div className="mt-6">
                <h2 className=""> Simple</h2>
                <div className="mt-4 rounded-lg gap-x-16 min-h-[280px] border border-gray-200 items-start py-8 px-3 flex justify-center w-full">
                  <Menu as="div" className="relative inline-block text-left">
                    <div>
                      <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-medium text-gray-800 ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                        Open
                        <ChevronDown
                          aria-hidden="true"
                          className="-mr-1 h-5 w-5 text-gray-400"
                        />
                      </MenuButton>
                    </div>

                    <MenuItems
                      transition
                      className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                    >
                      <div className="py-1">
                        <MenuItem>
                          <a
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                          >
                            Account settings
                          </a>
                        </MenuItem>
                        <MenuItem>
                          <a
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                          >
                            Support
                          </a>
                        </MenuItem>
                        <MenuItem>
                          <a
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                          >
                            License
                          </a>
                        </MenuItem>
                        <form action="#" method="POST">
                          <MenuItem>
                            <button
                              type="submit"
                              className="block w-full px-4 py-2 text-left text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                            >
                              Sign out
                            </button>
                          </MenuItem>
                        </form>
                      </div>
                    </MenuItems>
                  </Menu>
                </div>
              </div>
              <div className="mt-10">
                <h2 className="">With dividers</h2>
                <div className="mt-4 rounded-lg gap-x-16 border min-h-[400px] border-gray-200 items-start py-8 px-4 flex justify-center w-full">
                  <Menu as="div" className="relative inline-block text-left">
                    <div>
                      <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-medium text-gray-800 ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                        Open
                        <ChevronDownIcon
                          aria-hidden="true"
                          className="-mr-1 h-5 w-5 text-gray-400"
                        />
                      </MenuButton>
                    </div>

                    <MenuItems
                      transition
                      className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                    >
                      <div className="py-1">
                        <MenuItem>
                          <a
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                          >
                            Edit
                          </a>
                        </MenuItem>
                        <MenuItem>
                          <a
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                          >
                            Duplicate
                          </a>
                        </MenuItem>
                      </div>
                      <div className="py-1">
                        <MenuItem>
                          <a
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                          >
                            Archive
                          </a>
                        </MenuItem>
                        <MenuItem>
                          <a
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                          >
                            Move
                          </a>
                        </MenuItem>
                      </div>
                      <div className="py-1">
                        <MenuItem>
                          <a
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                          >
                            Share
                          </a>
                        </MenuItem>
                        <MenuItem>
                          <a
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                          >
                            Add to favorites
                          </a>
                        </MenuItem>
                      </div>
                      <div className="py-1">
                        <MenuItem>
                          <a
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                          >
                            Delete
                          </a>
                        </MenuItem>
                      </div>
                    </MenuItems>
                  </Menu>
                </div>
              </div>
              <div className="mt-10">
                <h2 className="">With icons</h2>
                <div className="mt-4 rounded-lg gap-x-16 border min-h-[400px] border-gray-200 items-start py-8 px-4 flex justify-center w-full">
                  <Menu as="div" className="relative inline-block text-left">
                    <div>
                      <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-medium text-gray-800 ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                        Open
                        <ChevronDownIcon
                          aria-hidden="true"
                          className="-mr-1 h-5 w-5 text-gray-400"
                        />
                      </MenuButton>
                    </div>

                    <MenuItems
                      transition
                      className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                    >
                      <div className="py-1">
                        <MenuItem>
                          <a
                            href="#"
                            className="group flex items-center px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                          >
                            <Pencil
                              aria-hidden="true"
                              className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                            />
                            Edit
                          </a>
                        </MenuItem>
                        <MenuItem>
                          <a
                            href="#"
                            className="group flex items-center px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                          >
                            <Files
                              aria-hidden="true"
                              className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                            />
                            Duplicate
                          </a>
                        </MenuItem>
                      </div>
                      <div className="py-1">
                        <MenuItem>
                          <a
                            href="#"
                            className="group flex items-center px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                          >
                            <Archive
                              aria-hidden="true"
                              className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                            />
                            Archive
                          </a>
                        </MenuItem>
                        <MenuItem>
                          <a
                            href="#"
                            className="group flex items-center px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                          >
                            <CircleArrowRight
                              aria-hidden="true"
                              className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                            />
                            Move
                          </a>
                        </MenuItem>
                      </div>
                      <div className="py-1">
                        <MenuItem>
                          <a
                            href="#"
                            className="group flex items-center px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                          >
                            <Share2
                              aria-hidden="true"
                              className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                            />
                            Share
                          </a>
                        </MenuItem>
                        <MenuItem>
                          <a
                            href="#"
                            className="group flex items-center px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                          >
                            <Heart
                              aria-hidden="true"
                              className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                            />
                            Add to favorites
                          </a>
                        </MenuItem>
                      </div>
                      <div className="py-1">
                        <MenuItem>
                          <a
                            href="#"
                            className="group flex items-center px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                          >
                            <Trash2
                              aria-hidden="true"
                              className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                            />
                            Delete
                          </a>
                        </MenuItem>
                      </div>
                    </MenuItems>
                  </Menu>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
