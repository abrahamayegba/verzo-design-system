import ComponentSidebar from "@/components/componentsidebar";
import Navbar from "@/components/navbar";
import { Loader2 } from "lucide-react";
import React from "react";

const Button = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex flex-grow px-6 py-10">
        <div className="lg:max-w-7xl max-w-xl mx-auto flex flex-row w-full">
          <ComponentSidebar />
          <main className="w-4/5 bg-white overflow-y-auto h-screen">
            <section>
              <h1 className="text-3xl font-semibold text-gray-900">Buttons</h1>
              <p className="mt-4 text-gray-500 text-[15px]">
                You know, those things you click to do just about anything in a
                web application.
              </p>
              <div className="mt-6">
                <h2 className="">Primary buttons</h2>
                <div className="mt-4 rounded-lg gap-x-16 border border-gray-200 items-center py-8 px-4 flex justify-center w-full">
                  <button
                    type="button"
                    className="rounded-md bg-primary-blue hover:bg-primary-verzobluehover px-4 py-2 text-xs text-white "
                  >
                    Button text
                  </button>
                  <button
                    type="button"
                    className="rounded-md bg-primary-blue hover:bg-primary-verzobluehover px-4 py-2 text-sm text-white "
                  >
                    Button text
                  </button>
                  <button
                    type="button"
                    className="rounded-md bg-primary-blue hover:bg-primary-verzobluehover px-4 py-2 text-base text-white "
                  >
                    Button text
                  </button>
                  <button
                    type="button"
                    className="rounded-md bg-primary-blue hover:bg-primary-verzobluehover px-6 py-3 text-base text-white  "
                  >
                    Button text
                  </button>
                </div>
              </div>
              <div className="mt-10">
                <h2 className="">Secondary buttons</h2>

                <div className="mt-4 rounded-lg gap-x-16 border border-gray-200 items-center py-8 px-4 flex justify-center w-full">
                  <button
                    type="button"
                    className="rounded-md text-gray-900 border border-gray-300 hover:bg-gray-50 bg-transparent px-4 py-2 text-xs "
                  >
                    Button text
                  </button>
                  <button
                    type="button"
                    className="rounded-md text-gray-900 border border-gray-300 hover:bg-gray-50 bg-transparent  px-4 py-2 text-sm "
                  >
                    Button text
                  </button>
                  <button
                    type="button"
                    className="rounded-md text-gray-900 border border-gray-300 hover:bg-gray-50 bg-transparent  px-4 py-2 text-base "
                  >
                    Button text
                  </button>
                  <button
                    type="button"
                    className="rounded-md text-gray-900 border border-gray-300 hover:bg-gray-50 bg-transparent  px-6 py-3 text-base "
                  >
                    Button text
                  </button>
                </div>
              </div>
              <div className="mt-10">
                <h2 className="">Disabled buttons</h2>
                <div className="mt-4 rounded-lg gap-x-16 border border-gray-200 items-center py-8 px-4 flex justify-center w-full">
                  <button
                    disabled
                    type="button"
                    className="rounded-md text-white disabled:opacity-50 disabled:cursor-not-allowed bg-primary-blue px-4 py-2 text-xs "
                  >
                    Button text
                  </button>
                  <button
                    disabled
                    type="button"
                    className="rounded-md text-white disabled:opacity-50 disabled:cursor-not-allowed bg-primary-blue px-4 py-2 text-sm "
                  >
                    Button text
                  </button>
                  <button
                    disabled
                    type="button"
                    className="rounded-md text-white disabled:opacity-50 disabled:cursor-not-allowed bg-primary-blue px-4 py-2 "
                  >
                    Button text
                  </button>
                  <button
                    disabled
                    type="button"
                    className="rounded-md text-white disabled:opacity-50 disabled:cursor-not-allowed bg-primary-blue px-6 py-3 "
                  >
                    Button text
                  </button>
                </div>
              </div>
              <div className="mt-10">
                <h2 className="">Destructive buttons</h2>
                <div className="mt-4 rounded-lg gap-x-16 border border-gray-200 items-center py-8 px-4 flex justify-center w-full">
                  <button
                    type="button"
                    className="rounded-md bg-destructive hover:bg-red-600 px-4 py-2 text-xs text-white "
                  >
                    Button text
                  </button>
                  <button
                    type="button"
                    className="rounded-md bg-destructive hover:bg-red-600 px-4 py-2 text-sm text-white "
                  >
                    Button text
                  </button>
                  <button
                    type="button"
                    className="rounded-md bg-destructive hover:bg-red-600 px-4 py-2 text-base text-white "
                  >
                    Button text
                  </button>
                  <button
                    type="button"
                    className="rounded-md bg-destructive hover:bg-red-600 px-6 py-3 text-base text-white  "
                  >
                    Button text
                  </button>
                </div>
              </div>
              <div className="mt-10">
                <h2 className="">Loading buttons</h2>
                <div className="mt-4 rounded-lg gap-x-16 border border-gray-200 items-center py-8 px-4 flex justify-center w-full">
                  <button
                    disabled
                    type="button"
                    className="rounded-md flex bg-primary-blue items-center justify-center disabled:opacity-60  px-4 py-2 text-xs text-white "
                  >
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Please wait
                  </button>
                  <button
                    disabled
                    type="button"
                    className="rounded-md flex bg-primary-blue items-center justify-center disabled:opacity-60  px-4 py-2 text-sm text-white "
                  >
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Please wait
                  </button>
                  <button
                    disabled
                    type="button"
                    className="rounded-md flex bg-primary-blue items-center justify-center disabled:opacity-60  px-4 py-2 text-base text-white "
                  >
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Please wait
                  </button>
                  <button
                    disabled
                    type="button"
                    className="rounded-md flex bg-primary-blue items-center justify-center disabled:opacity-60  px-6 py-3 text-white "
                  >
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Please wait
                  </button>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Button;
