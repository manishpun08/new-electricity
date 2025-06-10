import { useGetDataQuery } from "@/api/api";
import { endpoints } from "@/api/endpoints";
import ErrorMessage from "@/components/ErrorMessage";
import React from "react";

interface IFunctionDuties {
  title: string;
  description: string;
}

const FunctionDuties = () => {
  const { data, error } = useGetDataQuery({
    url: endpoints.about,
  });

  if (error || !data?.data || !data.data[0]) {
    console.error("Failed to load function and duties data:", error);
    return <ErrorMessage errorMessage="function and duties data" />;
  }

  const aboutDutiesFunction: IFunctionDuties =
    data?.data[0]?.function_duties_authorities[0];

  return (
    <div className=" bg-background-400 ">
      <p className="typography-h3-bold text-text-500">
        {aboutDutiesFunction?.title}
      </p>

      {/* Function */}
      <div className="mt-5">
        <p
          className="typography-p-regular-medium text-text-500"
          dangerouslySetInnerHTML={{
            __html: aboutDutiesFunction?.description || "",
          }}
        />
      </div>
    </div>
  );
};

export default FunctionDuties;
