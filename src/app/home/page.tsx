import { PaymentsOverview } from "@/components/Charts/payments-overview";
import { TaskDistribution } from "@/components/Charts/task-distribution";
import { WeeklyActivity } from "@/components/Charts/weekly-activity";
import { createTimeFrameExtractor } from "@/utils/timeframe-extractor";
import { Suspense } from "react";
import { RecentProjects } from "./_components/recent-projects";
import { OverviewCardsGroup } from "./_components/overview-cards";
import { OverviewCardsSkeleton } from "./_components/overview-cards/skeleton";
import { RegionLabels } from "./_components/region-labels";
import { TopChannels } from "@/components/Tables/top-channels";
import { TopChannelsSkeleton } from "@/components/Tables/top-channels/skeleton";



export default function Home() {


  return (
    <>
      <Suspense fallback={<OverviewCardsSkeleton />}>
        <OverviewCardsGroup />
      </Suspense>

      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-9 2xl:gap-7.5">
        {/* <PaymentsOverview
          className="col-span-12 xl:col-span-7"
          key={extractTimeFrame("payments_overview")}
          timeFrame={extractTimeFrame("payments_overview")?.split(":")[1]}
        /> */}

        <WeeklyActivity
          className="col-span-12  xl:col-span-7"
        />

        <TaskDistribution
          className="col-span-12 xl:col-span-5"
        />

        {/* <RegionLabels /> */}

        {/* <div className="col-span-12 grid xl:col-span-8">
          <Suspense fallback={<TopChannelsSkeleton />}>
            <TopChannels />
          </Suspense>
        </div> */}

        <Suspense fallback={null}>
          <RecentProjects />
        </Suspense>
      </div>
    </>
  );
}
