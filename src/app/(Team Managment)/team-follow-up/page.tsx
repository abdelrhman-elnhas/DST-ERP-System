

import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { TeamFollowUpTable } from "@/components/Tables/TeamFollowUp";



import { Metadata } from "next";
export const metadata: Metadata = {
    title: "Team Follow Up",
};

const TeamFollowUp = () => {
    return (
        <>
            <Breadcrumb parentCategoryName="Team Management" pageName="Team Follow Up" />

            <div className="space-y-10">


                <TeamFollowUpTable />
            </div>
        </>
    );
};

export default TeamFollowUp;
