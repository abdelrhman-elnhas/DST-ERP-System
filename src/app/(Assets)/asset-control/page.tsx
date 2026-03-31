

import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { AssetsControlTable } from "@/components/Tables/AssetsControl";



import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Assets Control",
};

const VersionControl = () => {
    return (
        <>
            <Breadcrumb parentCategoryName="Assets & Equipment Control " pageName="Assets Control" />

            <div className="space-y-10">
                <AssetsControlTable />
            </div>
        </>
    );
};

export default VersionControl;
