"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import React from "react";
import { IHomeHeroDaum } from "../interface/homeHero.interface";
import PdfModal from "@/components/modal/PdfModal";
import Link from "next/link";
import { useTranslations } from "next-intl";

interface Props {
  heroData: IHomeHeroDaum;
}

const Hero: React.FC<Props> = ({ heroData }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const t = useTranslations("home");

  useEffect(() => {
    const modalSeen = sessionStorage.getItem("pdfModalShown");

    if (!modalSeen) {
      setIsModalOpen(true);
      sessionStorage.setItem("pdfModalShown", "true");
    }
  }, []);

  return (
    <div className="my-[1.5rem] lg:my-[2.5rem] padding-x ">
      <div className="relative z-5 bg-blue-500 text-white py-[7.5rem]  px-4 lg:px-0 lg:pl-[3.75rem]  rounded-[0.25rem]">
        {/* Background Image */}
        <div className="absolute inset-0 w-full ">
          <Image
            src={heroData?.image}
            alt="Background Image"
            width={1000}
            height={1000}
            className="w-full h-full object-cover opacity-20 "
          />
        </div>

        <div className="lg:w-[32rem]">
          <h1 className=" text-[1.9375rem] lg:text-[2.9375rem] text-white font-bold leading-[130%] pb-[0.62rem]">
            {heroData?.slogan}
          </h1>
          <p className="typography-p-large text-white pb-[1.25rem]">
            {heroData?.title}
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-[1.12rem] pt-4">
          <button className="py-[0.62rem] px-[1.25rem] text-blue-500 typography-p-large font-semibold bg-white rounded-[0.5rem] shadow-[0px_4px_5.3px_0px rgba(0,0,0,0.25)] cursor-pointer">
            {t("ExploreRegulation")}
          </button>

          <Link
            href="/submit-a-complain"
            className="py-[0.62rem] px-[1.25rem] border border-white text-white typography-p-large font-semibold bg-[rgba(255,255,255,0.12)] rounded-[0.5rem] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] backdrop-blur-md cursor-pointer"
          >
            {t("SubmitComplaint")}
          </Link>
        </div>
      </div>

      <PdfModal
        isOpen={isModalOpen}
        setIsOpen={setIsModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default Hero;
