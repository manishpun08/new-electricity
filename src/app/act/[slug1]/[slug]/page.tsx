import DisplayPdf from "@/components/DisplayPdf";
import React from "react";
import Header from "./partials/Header";
import ErrorMessage from "@/components/ErrorMessage";
import { getData } from "@/api/fetch";
import { endpoints } from "@/api/endpoints";

interface ActDetailSlug {
  params: Promise<{ slug: string }>;
}

const ActDetail = async ({ params }: ActDetailSlug) => {
  try {
    const { slug } = await params;

    const actDetail = await getData(endpoints.actDetail + `/${slug}`);

    return (
      <div>
        <Header actDetailData={actDetail?.data} />

        <div className=" mb-10">
          <DisplayPdf actDetailData={actDetail?.data} />
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error fetching Act data:", error);
    return <ErrorMessage errorMessage="Act data" />;
  }
};

export default ActDetail;
