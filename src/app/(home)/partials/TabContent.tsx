import { PATH } from "@/constant/path";
import { IActRecord } from "@/Interface/document.interface";
import { formatDate } from "@/utils/formatDate";

import Link from "next/link";
import React from "react";

interface Props {
  documentData: IActRecord[];
}

const TabContent: React.FC<Props> = ({ documentData }) => {
  return (
    <div className="space-y-[0.88rem]">
      {documentData?.map((item, index) => (
        <div
          key={index}
          className="py-[1rem] px-[1.25rem] rounded-[0.5rem] border-l-2 border-blue-300 bg-background-100 shadow-[0px_2px_18px_4px rgba(51,96,169,0.06)] group"
        >
          <Link
            href={`${PATH.ACT}/${item?.sub_ctg_slug}/${item?.slug}`}
            className="typography-p-large text-text-500 font-medium cursor-pointer group-hover:text-blue-500"
          >
            {item?.title}
          </Link>
          <p className="typography-p-small text-text-300 font-medium pt-[0.62rem]">
            Published Date: {formatDate(item?.created_at)}
          </p>
        </div>
      ))}
    </div>
  );
};

export default TabContent;
