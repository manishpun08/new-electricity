import { useGetDataQuery } from "@/api/api";
import { endpoints } from "@/api/endpoints";
import ErrorMessage from "@/components/ErrorMessage";
import TeamCard from "@/components/TeamCard";
import { ITeamRecord } from "@/Interface/team.interface";

const Commission = () => {
  const { data, error } = useGetDataQuery({
    url: endpoints.homeTeam,
  });

  if (error || !data?.data || !data.data) {
    console.error("Failed to load commission data:", error);
    return <ErrorMessage errorMessage="commission data" />;
  }

  const aboutCommission: ITeamRecord[] = data?.data?.records;

  return (
    <div>
      <div className="grid grid-cols-2 lg:grid-cols-3 mt-6 lg:mt-0 gap-4 lg:gap-8">
        {aboutCommission?.map((team, index) => (
          <TeamCard
            key={index}
            designation={team?.designation}
            email={team?.email}
            image={team?.image}
            name={team?.name}
          />
        ))}
      </div>
    </div>
  );
};

export default Commission;
