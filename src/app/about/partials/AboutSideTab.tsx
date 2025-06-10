import { useTranslations } from "next-intl";
import Introduction from "./Introduction";
import MissionVision from "./MissionVission";
import FunctionDuties from "./FunctionDuties";
import ReportOverview from "./ReportOverview";
import OrganizationStructure from "./OrganizationStructure";
import CeoMessage from "./CeoMessage";
import EmployeeDetail from "./EmployeeDetail";
import Commission from "./Commission";

export const useAboutSidebar = () => {
  const t = useTranslations("about");

  return [
    {
      name: t("Introduction"),
      content: <Introduction />,
    },
    {
      name: t("VisionAndMission"),
      content: <MissionVision />,
    },
    {
      name: t("ReportOverview"),
      content: <ReportOverview />,
    },
    {
      name: t("FunctionsDuties"),
      content: <FunctionDuties />,
    },
    {
      name: t("Commission"),
      content: <Commission />,
    },
    {
      name: t("OrganizationalStructure"),
      content: <OrganizationStructure />,
    },
    {
      name: t("ChairpersonMessage"),
      content: <CeoMessage />,
    },
    {
      name: t("EmployeeDetails"),
      content: <EmployeeDetail />,
    },
  ];
};
