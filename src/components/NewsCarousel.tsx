import { getNavNewsData } from "@/hooks/globalHook";
import Link from "next/link";
import ErrorMessage from "./ErrorMessage";
import { INewsRecord } from "@/Interface/news.interface";

const NewsCarousel = async () => {
  try {
    const navNewsData = await getNavNewsData();
    const newsData: INewsRecord[] = navNewsData?.data?.records;

    return (
      <div className="overflow-hidden whitespace-nowrap group w-full">
        <div className="flex animate-marquee group-hover:[animation-play-state:paused] space-x-4 md:space-x-10 text-white font-medium cursor-pointer">
          {newsData?.map((item: INewsRecord) => (
            <Link key={item?.id} href={item?.slug}>
              {item?.title}
            </Link>
          ))}
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error fetching news data:", error);
    return <ErrorMessage errorMessage="news data" />;
  }
};

export default NewsCarousel;
