import React from "react";
import Accordion from "./partials/faqComponent";
import Image from "next/image";
import ErrorMessage from "@/components/ErrorMessage";
import { getFaqData } from "./hooks/faqHook";

const Faq = async () => {
  try {
    const { faqData } = await getFaqData();

    return (
      <div className="container mx-auto py-[2.5rem] px-[1rem] lg:px-[3.12rem] rounded-[0.25rem] bg-background-100 my-[1.5rem] lg:my-[2.5rem]">
        <h3 className="text-black typography-h3 leading-[150%] font-semibold pb-[2.05rem]">
          FQAs ( Frequently Asked Questions )
        </h3>

        <div className="flex flex-col lg:flex-row justify-between gap-10">
          <div className="">
            <Accordion items={faqData?.data} />
          </div>

          <div className="h-fit">
            <div className="lg:w-[30.03125rem] aspect-[544.50/363]">
              <Image
                src="/faqImg.jpg"
                alt="faq-image"
                width={600}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error fetching faq data:", error);
    return <ErrorMessage errorMessage="fetching faq data" />;
  }
};

export default Faq;
