import ComponentSidebar from "@/components/componentsidebar";
import Navbar from "@/components/navbar";
import { CircleAlert, Search } from "lucide-react";
import React from "react";

const Input = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex flex-grow px-6 py-10">
        <div className="lg:max-w-7xl max-w-xl mx-auto flex flex-row w-full">
          <ComponentSidebar />
          <main className="w-4/5 bg-white overflow-y-auto h-screen">
            <section>
              <h1 className="text-3xl font-semibold text-gray-900">Inputs</h1>
              <p className="mt-4 text-gray-500 text-[15px]">
                If web applications didn’t need inputs, computers wouldn’t have
                keyboards.
              </p>
              <div className="mt-6">
                <h2 className="">Default input</h2>
                <div className="mt-4 rounded-lg gap-x-16 border border-gray-200 items-center py-8 px-3 flex justify-center w-full">
                  <div>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                      className="block min-w-[400px] text-[15px] focus:outline-primary-blue px-4 rounded-md border border-gray-200 py-1.5 text-gray-800 placeholder:text-gray-400"
                    />
                  </div>
                </div>
              </div>
              <div className="mt-10">
                <h2 className="">With label</h2>
                <div className="mt-4 rounded-lg gap-x-16 border border-gray-200 items-center py-8 px-4 flex justify-center w-full">
                  <div className=" flex flex-col gap-y-1">
                    <label
                      className=" pl-0.5 text-sm text-gray-800"
                      htmlFor="input"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                      className="block min-w-[400px] text-[15px] focus:outline-primary-blue px-3 rounded-md border border-gray-200 py-1.5 text-gray-800  placeholder:text-gray-400"
                    />
                  </div>
                </div>
              </div>
              <div className="mt-10">
                <h2 className="">With icon</h2>
                <div className="mt-4 rounded-lg gap-x-16 border border-gray-200 items-center py-8 px-4 flex justify-center w-full">
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                      <Search className=" w-4 h-4 text-gray-700" />
                    </span>
                    <input
                      id="search"
                      name="search"
                      type="text"
                      placeholder="Search..."
                      className="block min-w-[400px] pl-9 text-[15px] focus:outline-primary-blue px-3 rounded-md border border-gray-200 py-1.5 text-gray-800 placeholder:text-gray-400"
                    />
                  </div>
                </div>
              </div>
              <div className="mt-10">
                <h2 className="">Disabled input</h2>
                <div className="mt-4 rounded-lg gap-x-16 border border-gray-200 items-center py-8 px-4 flex justify-center w-full">
                  <input
                    type="text"
                    placeholder="you@example.com"
                    disabled
                    className="block min-w-[400px] text-[15px] focus:outline-none bg-gray-50 px-3 rounded-md border border-gray-200 py-1.5 text-gray-500 placeholder:text-gray-400 cursor-not-allowed"
                  />
                </div>
              </div>
              <div className="mt-10">
                <h2 className="">Input with validation error</h2>
                <div className="mt-4 rounded-lg gap-x-16 border border-gray-200 items-center py-8 px-4 flex justify-center w-full">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Email
                    </label>
                    <div className="relative mt-2 rounded-md ">
                      <input
                        defaultValue="you@example.com"
                        id="email"
                        name="email"
                        type="email"
                        placeholder="you@example.com"
                        aria-invalid="true"
                        aria-describedby="email-error"
                        className="block min-w-[400px] rounded-md font-light border border-primary-red focus:outline-primary-red py-1.5 px-3 text-red-900 sm:text-sm sm:leading-6"
                      />
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                        <CircleAlert
                          aria-hidden="true"
                          className="h-5 w-5 text-red-500"
                        />
                      </div>
                    </div>
                    <p
                      id="email-error"
                      className="mt-2 text-sm font-light text-red-600"
                    >
                      Not a valid email address.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Input;
