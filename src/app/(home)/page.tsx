import Hero from "./partials/Hero";
import ImpServices from "./partials/ImpServices";

import ErrorMessage from "@/components/ErrorMessage";
import TeamSection from "../../components/TeamSection";
import { getHomePageData } from "./hooks/home.hook";
import LatestNotices from "./partials/LatestNotices";
import MandatesCommission from "./partials/MandatesCommission";
import TeamBottom from "./partials/TeamBottom";
import MissionVision from "./partials/MissionVision";

const Home = async () => {
  try {
    const {
      homeData,
      impServiceData,
      missionVisionData,
      teamData,
      chairperson,
    } = await getHomePageData();

    return (
      <div>
        <Hero heroData={homeData?.data[0]} />
        <ImpServices impServiceData={impServiceData?.data} />
        <MissionVision
          missionVisionData={missionVisionData?.data[0]?.mission_vision}
        />
        <LatestNotices serviceData={impServiceData?.data} />
        <TeamSection
          teamData={teamData?.data?.records}
          chairperson={chairperson}
        />
        <MandatesCommission
          mandatesData={missionVisionData?.data?.[0]?.goals_objectives}
        />
        <TeamBottom teamData={teamData?.data?.records} />
      </div>
    );
  } catch (error) {
    console.error("Error fetching home data:", error);
    return <ErrorMessage errorMessage="home data" />;
  }
};

export default Home;
