import ComponentSidebar from "@/components/componentsidebar";
import Navbar from "@/components/navbar";
import {
  Select as SelectComponent,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React from "react";

const Select = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex flex-grow px-6 py-10">
        <div className="lg:max-w-7xl max-w-xl mx-auto flex flex-row w-full">
          <ComponentSidebar />
          <main className="w-4/5 bg-white overflow-y-auto h-screen">
            <section>
              <h1 className="text-3xl font-semibold text-gray-900">Select</h1>
              <p className="mt-4 text-gray-500 text-[15px]">
                Select allows users to choose an option from a dropdown menu.
              </p>
              <div className="mt-6">
                <h2 className="">Simple</h2>
                <div className="mt-4 rounded-lg gap-x-16 min-h-[200px] border border-gray-200 items-start py-8 px-4 flex justify-center w-full">
                  <SelectComponent>
                    <SelectTrigger className="w-[280px]">
                      <SelectValue placeholder="Status" />
                    </SelectTrigger>
                    <SelectContent className=" shadow-sm">
                      <SelectItem
                        className=" hover:cursor-pointer text-gray-800"
                        value="active"
                      >
                        Active
                      </SelectItem>
                      <SelectItem
                        className=" hover:cursor-pointer text-gray-800"
                        value="paused"
                      >
                        Paused
                      </SelectItem>
                      <SelectItem
                        className=" hover:cursor-pointer text-gray-800"
                        value="delayed"
                      >
                        Delayed
                      </SelectItem>
                    </SelectContent>
                  </SelectComponent>
                </div>
              </div>
              <div className="mt-10">
                <h2 className="">Secondary buttons</h2>
                <div className="mt-4 rounded-lg gap-x-16 min-h-[500px] border border-gray-200 items-start py-8 px-4 flex justify-center w-full">
                  <SelectComponent>
                    <SelectTrigger className="w-[280px]">
                      <SelectValue placeholder="Select a timezone" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>North America</SelectLabel>
                        <SelectItem value="est">
                          Eastern Standard Time (EST)
                        </SelectItem>
                        <SelectItem value="cst">
                          Central Standard Time (CST)
                        </SelectItem>
                        <SelectItem value="mst">
                          Mountain Standard Time (MST)
                        </SelectItem>
                        <SelectItem value="pst">
                          Pacific Standard Time (PST)
                        </SelectItem>
                        <SelectItem value="akst">
                          Alaska Standard Time (AKST)
                        </SelectItem>
                        <SelectItem value="hst">
                          Hawaii Standard Time (HST)
                        </SelectItem>
                      </SelectGroup>
                      <SelectGroup>
                        <SelectLabel>Europe & Africa</SelectLabel>
                        <SelectItem value="gmt">
                          Greenwich Mean Time (GMT)
                        </SelectItem>
                        <SelectItem value="cet">
                          Central European Time (CET)
                        </SelectItem>
                        <SelectItem value="eet">
                          Eastern European Time (EET)
                        </SelectItem>
                        <SelectItem value="west">
                          Western European Summer Time (WEST)
                        </SelectItem>
                        <SelectItem value="cat">
                          Central Africa Time (CAT)
                        </SelectItem>
                        <SelectItem value="eat">
                          East Africa Time (EAT)
                        </SelectItem>
                      </SelectGroup>
                      <SelectGroup>
                        <SelectLabel>Asia</SelectLabel>
                        <SelectItem value="msk">Moscow Time (MSK)</SelectItem>
                        <SelectItem value="ist">
                          India Standard Time (IST)
                        </SelectItem>
                        <SelectItem value="cst_china">
                          China Standard Time (CST)
                        </SelectItem>
                        <SelectItem value="jst">
                          Japan Standard Time (JST)
                        </SelectItem>
                        <SelectItem value="kst">
                          Korea Standard Time (KST)
                        </SelectItem>
                        <SelectItem value="ist_indonesia">
                          Indonesia Central Standard Time (WITA)
                        </SelectItem>
                      </SelectGroup>
                      <SelectGroup>
                        <SelectLabel>Australia & Pacific</SelectLabel>
                        <SelectItem value="awst">
                          Australian Western Standard Time (AWST)
                        </SelectItem>
                        <SelectItem value="acst">
                          Australian Central Standard Time (ACST)
                        </SelectItem>
                        <SelectItem value="aest">
                          Australian Eastern Standard Time (AEST)
                        </SelectItem>
                        <SelectItem value="nzst">
                          New Zealand Standard Time (NZST)
                        </SelectItem>
                        <SelectItem value="fjt">Fiji Time (FJT)</SelectItem>
                      </SelectGroup>
                      <SelectGroup>
                        <SelectLabel>South America</SelectLabel>
                        <SelectItem value="art">
                          Argentina Time (ART)
                        </SelectItem>
                        <SelectItem value="bot">Bolivia Time (BOT)</SelectItem>
                        <SelectItem value="brt">Brasilia Time (BRT)</SelectItem>
                        <SelectItem value="clt">
                          Chile Standard Time (CLT)
                        </SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </SelectComponent>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Select;
