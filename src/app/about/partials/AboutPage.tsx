"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import AboutBreadcrumb from "./AboutBreadcrumb";
import { useAboutSidebar } from "./AboutSideTab";

const AboutPage = () => {
  const searchParams = useSearchParams();
  const sections = useAboutSidebar(); // ✅ Call the hook here
  const router = useRouter();

  const initialTab = parseInt(searchParams.get("tab") || "0", 10);
  const [selectedSection, setSelectedSection] = useState(initialTab);

  useEffect(() => {
    // Keep state in sync if the URL changes manually
    setSelectedSection(initialTab);
  }, [initialTab]);

  const handleCategoryClick = (idx: number) => {
    const newParams = new URLSearchParams(searchParams.toString());
    newParams.set("tab", idx.toString());
    router.push(`?${newParams.toString()}`);
    setSelectedSection(idx);
  };

  return (
    <div className="w-full mx-auto padding-x">
      <div className=" py-10">
        <AboutBreadcrumb />
      </div>

      <div className="mb-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Sidebar Tabs */}
          <aside className="sticky inset-0 bg-[rgba(216,235,247,0.60)] rounded-[0.75rem] p-[1.25rem]">
            <h2 className="typography-p-large text-text-500 font-semibold mb-[1.25rem]">
              {sections[selectedSection]?.name}
            </h2>
            <nav className="flex flex-col space-y-2">
              {sections?.map((section, idx) => (
                <button
                  key={idx}
                  onClick={() => handleCategoryClick(idx)}
                  className={`py-3 px-4 text-left rounded-md transition-colors ${
                    selectedSection === idx
                      ? "bg-blue-300 text-white"
                      : "bg-white hover:bg-blue-100"
                  }`}
                >
                  {section.name}
                </button>
              ))}
            </nav>
          </aside>

          {/* Active Section Content */}
          <main className="md:col-span-3">
            {sections[selectedSection]?.content}
          </main>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
