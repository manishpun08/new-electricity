import {
  getAffiliatedOrganization,
  getImportantLinks,
  getOrganizationSettingData,
} from "@/hooks/globalHook";
import { IOrganizationSettingDaum } from "@/Interface/organization.interface";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import FooterFallback from "./FooterFallback";
import {
  AffiliatedOrganizationsSection,
  Company,
  ImportantLinksSection,
  OfficeHorus,
} from "./FooterLinks";
import FooterBottom from "./FooterBottom";

const Footer: React.FC = async () => {
  try {
    // global custom hook
    const organizationSettingData = await getOrganizationSettingData();

    const footerData: IOrganizationSettingDaum =
      organizationSettingData?.data[0];

    const importantLinks = await getImportantLinks();
    const importantLinksData = importantLinks?.data;

    const affiliatedOrganization = await getAffiliatedOrganization();
    const affiliatedOrganizationData = affiliatedOrganization?.data;

    return (
      <footer className="footer-gradient padding-x pt-[2.06rem]">
        {/* logos  */}
        <div>
          <div className="flex gap-3 items-center">
            <Link
              href="/"
              className="w-[4.5rem] sm:w-[5rem] md:w-[5.47988rem] aspect-[87.68/74] flex-shrink-0"
            >
              <Image
                src={footerData?.gov_logo}
                alt="Nepal Government Emblem"
                width={1000}
                height={1000}
                className="w-full h-full object-cover"
              />
            </Link>
            <div className="text-white w-[9.5rem] sm:w-fit">
              <h1 className="text-lg sm:text-xl notranslate md:text-[1.85125rem] font-semibold leading-[150%] tracking-tight">
                {footerData?.org_name_nepali}
              </h1>
              <p className="text-sm sm:text-base md:text-[0.92563rem] font-medium leading-[120%]">
                {footerData?.org_name_eng}
              </p>
            </div>
            <Link
              href="/"
              className="w-[3.5rem] sm:w-[4.5rem] md:w-[4.875rem] aspect-square flex-shrink-0"
            >
              <Image
                src={footerData?.erc_logo}
                alt="logo"
                width={1000}
                height={1000}
                className="w-full h-full object-cover"
              />
            </Link>
          </div>
        </div>

        {/* links  */}
        <div className="pt-[1.5rem] lg:pt-[2.5rem] pb-[1.44rem] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[2.88rem]">
          {/* Company Section */}
          <Company footerData={footerData} />

          <ImportantLinksSection importantLinksData={importantLinksData} />
          <AffiliatedOrganizationsSection
            affiliatedOrganizationData={affiliatedOrganizationData}
          />

          <OfficeHorus officeData={footerData?.office_hours} />
        </div>

        <FooterBottom footerData={footerData} />
      </footer>
    );
  } catch (error) {
    console.error("Error fetching footer data:", error);
    return <FooterFallback />;
  }
};

export default Footer;
