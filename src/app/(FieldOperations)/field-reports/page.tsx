

import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import FieldReportsTable from "@/components/Tables/FieldReports/TableContent";


import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Field Reports",
};

const FieldReports = () => {
    return (
        <>
            <Breadcrumb parentCategoryName="Field Operations & GEO-AI" pageName="Field Reports" />

            <div className="space-y-10">
                <FieldReportsTable />
            </div>
        </>
    );
};

export default FieldReports;
