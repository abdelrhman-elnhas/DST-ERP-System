"use client"

import dynamic from "next/dynamic";
const Map = dynamic(() => import("@/components/Map"), { ssr: false });
import { useDashboard } from "@/hooks/useDashboard"

export default function Page() {
    const dashboard = useDashboard();
    const data = dashboard?.data?.data;
    const fieldPoints = data?.recent_field_points;


    return (
        <div style={{ height: "calc(100vh - 80px)", width: "100%" }}>
            <Map fieldPoints={fieldPoints ?? []} />
        </div>
    )
}
