"use client";
import { useGetDataQuery } from "@/api/api";
import { endpoints } from "@/api/endpoints";
import {
  IActRelatedSubcategory,
  IActRecord as IActDocumentRecord,
  IActSubcategory,
} from "@/Interface/document.interface";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import CategorySidebar from "./CategorySidebar";
import DocumentList from "./DocumentList";

interface Props {
  slug1: string;
}

const PER_PAGE = 4;

const DocumentPage: React.FC<Props> = ({ slug1 }) => {
  const router = useRouter();
  const [slug, setSlug] = useState<string>(slug1);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);

  const { data: categoryDocumentData } = useGetDataQuery<{
    data: {
      data: {
        subcategory: IActSubcategory;
        documents: {
          records: IActDocumentRecord[];
        };
        related_subcategories: IActRelatedSubcategory[];
      };
    };
  }>({
    url: `${endpoints.categoryDetail}/${slug}/`,
  });

  const categoriesList =
    categoryDocumentData?.data?.related_subcategories ?? [];
  const subcategory = categoryDocumentData?.data?.subcategory;
  const allDocuments = categoryDocumentData?.data?.documents.records ?? [];
  const pageCount = Math.ceil(allDocuments.length / PER_PAGE);

  const annualReport = subcategory?.is_annual_report;

  useEffect(() => {
    if (subcategory) {
      setSelectedCategory(subcategory.name);
    }
  }, [subcategory]);

  const handleCategoryClick = (category: IActRelatedSubcategory) => {
    setSlug(category.sub_ctg_slug);
    setSelectedCategory(category.name);
    setCurrentPage(1);

    const newSearchParams = new URLSearchParams(window.location.search);
    newSearchParams.set("slug", category.sub_ctg_slug);
    router.push(`?${newSearchParams.toString()}`);
  };

  return (
    <div className="container mx-auto py-[2.5rem] px-[1rem] lg:px-[3.12rem] rounded-[0.65rem] bg-background-100 my-[1.5rem] lg:my-[2.5rem]">
      <h1 className="typography-h3 text-text-500 font-semibold mb-4 lg:mb-8">
        {subcategory?.main_category || "Documents"}
      </h1>

      <div className="flex  gap-5 lg:gap-10">
        <div className="shrink-0">
          <CategorySidebar
            categories={categoriesList}
            selectedCategory={selectedCategory}
            onCategoryClick={handleCategoryClick}
          />
        </div>

        <div className="w-full">
          <DocumentList
            annualReport={annualReport}
            documents={allDocuments}
            currentPage={currentPage}
            pageCount={pageCount}
            onPageChange={setCurrentPage}
          />
        </div>
      </div>
    </div>
  );
};

export default DocumentPage;
