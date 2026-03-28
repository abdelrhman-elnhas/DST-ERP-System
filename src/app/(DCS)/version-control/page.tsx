import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { DocumentTable } from "@/components/Tables/document-table";
import { TopChannels } from "@/components/Tables/top-channels";
import { TopChannelsSkeleton } from "@/components/Tables/top-channels/skeleton";
import { TopProducts } from "@/components/Tables/top-products";
import { TopProductsSkeleton } from "@/components/Tables/top-products/skeleton";

import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Version Control",
};

const VersionControl = () => {
  return (
    <>
      <Breadcrumb pageName="Version Control" />

      <div className="space-y-10">
        {/* <Suspense fallback={<TopChannelsSkeleton />}>
          <TopChannels />
        </Suspense>

        <Suspense fallback={<TopProductsSkeleton />}>
          <TopProducts />
        </Suspense> */}

        <DocumentTable />
      </div>
    </>
  );
};

export default VersionControl;
