import { IOrganizationSettingDaum } from "@/Interface/organization.interface";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import News from "@/components/News";
import { getOrganizationSettingData } from "@/hooks/globalHook";
import Image from "next/image";
import Link from "next/link";
import HeaderFallback from "./HeaderFallback";
import Navbar from "./Navbar";

const Header = async () => {
  try {
    // global custom hook
    const organizationSettingData = await getOrganizationSettingData();

    const headerData: IOrganizationSettingDaum =
      organizationSettingData?.data[0];

    return (
      <header className="relative w-full">
        {/* Linear Gradient */}
        <div
          className="relative z-10 text-white py-6 padding-x"
          style={{
            backgroundImage:
              "linear-gradient(180deg, #3360A9 0%, #003386 100%)",
          }}
        >
          {/* Background Image */}
          <div className="absolute inset-0 ">
            <Image
              src="/img-header.png"
              alt="Background Image"
              width={1000}
              height={1000}
              className="w-full h-full object-cover opacity-20"
            />
          </div>

          {/* Logos */}
          <div className="relative z-20 flex flex-row justify-between gap-4 md:gap-0">
            {/* Left Logo */}
            <div className="flex gap-3 items-center ">
              <Link
                href="/"
                className="w-[4.5rem] sm:w-[5rem] md:w-[5.47988rem] aspect-[87.68/74] flex-shrink-0 "
              >
                <Image
                  src={headerData?.gov_logo}
                  alt="Nepal Government Emblem"
                  width={1000}
                  height={1000}
                  className="w-full h-full object-cover"
                />
              </Link>
              <div className="text-white">
                <h1 className="text-lg sm:text-xl notranslate md:text-[1.85125rem] font-semibold leading-[150%] tracking-tight">
                  {headerData?.org_name_nepali}
                </h1>
                <p className="text-sm sm:text-base md:text-[0.92563rem] font-medium leading-[120%]">
                  {headerData?.org_name_eng}
                </p>
              </div>
            </div>

            {/* Right Logo */}
            <div className="flex flex-row gap-2 sm:gap-4 items-center ">
              <Link
                href="/"
                className="w-[3.5rem] sm:w-[4.5rem] md:w-[4.875rem] aspect-square flex-shrink-0"
              >
                <Image
                  src={headerData?.erc_logo}
                  alt="logo"
                  width={1000}
                  height={1000}
                  className="w-full h-full object-cover"
                />
              </Link>
              <div className="hidden lg:block w-[2.5rem] sm:w-[2.75rem] md:w-[3rem] aspect-[24/31] flex-shrink-0 ml-6 sm:ml-0">
                <Image
                  src="/flag.gif"
                  alt="flag"
                  width={1000}
                  height={1000}
                  className="w-full h-full object-contain"
                  unoptimized
                />
              </div>

              {/* Language Switcher */}
              <LanguageSwitcher />
            </div>
          </div>
        </div>

        {/* News Section */}
        <News />

        <Navbar />
      </header>
    );
  } catch (error) {
    console.error("Error fetching header data:", error);
    return <HeaderFallback />;
  }
};

export default Header;
