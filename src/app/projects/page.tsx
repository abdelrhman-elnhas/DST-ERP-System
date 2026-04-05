

import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { ProjectsTable } from "@/components/Tables/Projects";


import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
};

const Projects = () => {
  return (
    <>
      <Breadcrumb parentCategoryName="HR Management & Core Operations" pageName="Projects" />

      <div className="space-y-10">
        {/* <Suspense fallback={<TopChannelsSkeleton />}>
          <TopChannels />
        </Suspense>

        <Suspense fallback={<TopProductsSkeleton />}>
          <TopProducts />
        </Suspense> */}



        <ProjectsTable />
      </div>
    </>
  );
};

export default Projects;
