

import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { CreateDocumentModal } from "@/components/Modals/CreateDocumentModal";
import { DocumentTable } from "@/components/Tables/Version Control";
import { TopChannels } from "@/components/Tables/top-channels";
import { TopChannelsSkeleton } from "@/components/Tables/top-channels/skeleton";
import { TopProducts } from "@/components/Tables/top-products";
import { TopProductsSkeleton } from "@/components/Tables/top-products/skeleton";
import { Button } from "@/components/ui-elements/button";
import { useModalStore } from "@/store/modalStore";


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
