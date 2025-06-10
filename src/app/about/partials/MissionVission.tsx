import { useGetDataQuery } from "@/api/api";
import { endpoints } from "@/api/endpoints";
import { IMissionVisionMissionVision } from "@/app/(home)/interface/homeMissionVision.interface";
import ErrorMessage from "@/components/ErrorMessage";
import Image from "next/image";
import React from "react";

const MissionVisionCard: React.FC<IMissionVisionMissionVision> = ({
  icon,
  title,
  description,
}) => (
  <div className="px-10 pt-10 pb-14 bg-white rounded-lg ">
    <div>
      <Image
        src={icon}
        alt={title || "Mission/Vision icon"}
        width={80}
        height={80}
        className="w-20 h-20 object-cover object-center"
      />
    </div>
    <div className="mt-3.5 flex flex-col gap-2.5">
      <p className="typography-p-large-semi-bold text-text-500">{title}</p>
      <p
        className="typography-p-regular text-text-400"
        dangerouslySetInnerHTML={{
          __html: description || "",
        }}
      />
    </div>
  </div>
);

const MissionVision = () => {
  const { data, error } = useGetDataQuery({
    url: endpoints.about,
  });

  if (error || !data?.data || !data?.data[0]?.mission_vision) {
    console.error("Failed to load mission and vision data:", error);
    return <ErrorMessage errorMessage="mission and vision data" />;
  }

  const aboutMissionVision: IMissionVisionMissionVision[] =
    data?.data[0]?.mission_vision;

  if (!aboutMissionVision?.length) return null;

  return (
    <div className=" grid grid-cols-1 gap-4 md:gap-10">
      {aboutMissionVision
        ?.slice(0, 2)
        .map((item, index) => <MissionVisionCard key={index} {...item} />)}
    </div>
  );
};

export default MissionVision;
