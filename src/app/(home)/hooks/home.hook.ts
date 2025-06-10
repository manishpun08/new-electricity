import { endpoints } from "@/api/endpoints";
import { safeFetch } from "@/helper/safeFetch";

export const getHomePageData = async () => {
  const homeData = await safeFetch(endpoints.homeHero);
  const impServiceData = await safeFetch(endpoints.homeImpService);
  const missionVisionData = await safeFetch(endpoints.about);
  const teamData = await safeFetch(endpoints.homeTeam);
  const chairperson = await safeFetch(endpoints.chairperson);

  return {
    homeData,
    impServiceData,
    missionVisionData,
    teamData,
    chairperson,
  };
};
