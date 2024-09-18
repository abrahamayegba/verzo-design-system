import ComponentSidebar from "@/components/componentsidebar";
import Navbar from "@/components/navbar";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import React from "react";

const Modal = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex flex-grow px-6 py-10">
        <div className="lg:max-w-7xl max-w-xl mx-auto flex flex-row w-full">
          <ComponentSidebar />
          <main className="w-4/5 bg-white overflow-y-auto h-screen">
            <section>
              <h1 className="text-3xl font-semibold text-gray-900">Modals</h1>
              <p className="mt-4 text-gray-500 text-[15px]">
                Modals are pop-up windows that capture attention, requiring
                action before returning to the page.
              </p>
              <div className="mt-6">
                <h2 className=""> Simple with cancel button</h2>
                <div className="mt-4 rounded-lg gap-x-16 border border-gray-200 items-center py-8 px-3 flex justify-center w-full">
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <button
                        type="button"
                        className="rounded-md bg-primary-blue hover:bg-primary-verzobluehover px-4 py-2 text-base text-white "
                      >
                        Show modal
                      </button>
                    </AlertDialogTrigger>
                    <AlertDialogContent className=" bg-white ">
                      <AlertDialogHeader>
                        <AlertDialogTitle>
                          Are you absolutely sure?
                        </AlertDialogTitle>
                        <AlertDialogDescription>
                          This action cannot be undone. This will permanently
                          delete your account and remove your data from our
                          servers.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction className=" bg-primary-blue text-white hover:bg-primary-verzobluehover">
                          Continue
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </div>
              </div>
              <div className="mt-10">
                <h2 className="">Simple with wide button</h2>
                <div className="mt-4 rounded-lg gap-x-16 border border-gray-200 items-center py-8 px-3 flex justify-center w-full">
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <button
                        type="button"
                        className="rounded-md bg-primary-blue hover:bg-primary-verzobluehover px-4 py-2 text-base text-white "
                      >
                        Show modal
                      </button>
                    </AlertDialogTrigger>
                    <AlertDialogContent className=" bg-white">
                      <AlertDialogHeader>
                        <AlertDialogTitle>
                          Are you absolutely sure?
                        </AlertDialogTitle>
                        <AlertDialogDescription>
                          This action cannot be undone. This will permanently
                          delete your account and remove your data from our
                          servers.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter className=" w-full mb-1.5">
                        <AlertDialogCancel className=" w-1/2">
                          Cancel
                        </AlertDialogCancel>
                        <AlertDialogAction className=" w-1/2 bg-primary-blue text-white hover:bg-primary-verzobluehover">
                          Continue
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Modal;
