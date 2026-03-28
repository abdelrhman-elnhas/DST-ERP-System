import { url } from "inspector";
import * as Icons from "../icons";
import { title } from "process";

export const NAV_DATA = [
  {
    label: "MAIN MENU",
    items: [
      {
        title: "Home",
        icon: Icons.HomeIcon,
        url: "/",
        items: [],
      },
      {
        title: "DCS",
        icon: Icons.FourCircle,
        items: [
          {
            title: "Version Control",
            url: "/version-control",
          },
          {
            title: "Approval Workflows",
            url: "/approval-workflows",
          },
          {
            title: "Transmittals & Submittals",
            url: "/transmittals-submittals"
          },
          {
            title: "Access Control",
            url: "/access-control"
          },


        ],
      },
      {
        title: "Digital Archive",
        icon: Icons.Calendar,
        items: [
          {
            title: "Search Engine",
            url: "/search-engine"
          },
          {
            title: "Productivity & Task Management",
            url: "/productivity-task-management"

          },],
      },
      {
        title: "Task Management & Team Follow-up",
        icon: Icons.Calendar,
        items: [
          {
            title: "Task Board",
            url: "/task-board"
          },
          {
            title: "Productivity & Task Management",
            url: "/productivity-task-management"

          },
          {
            title: "Daily Log & Time Sheets",
            url: "/daily-log-time-sheets"
          },
          {
            title: "Automated Reminders",
            url: "/automated-reminders"
          },
          {
            title: "Issue Tracking",
            url: "/issue-tracking"
          },],
      },
      {
        title: "Productionary Dashboards",
        icon: Icons.Calendar,
        items: [
          {
            title: "Leading Board",
            url: "/leading-board"
          },
          {
            title: "Field Progress",
            url: "/field-progress"

          },
          {
            title: "AI & GIS",
            url: "/ai-gis"
          },
          {
            title: "Live Operations Map",
            url: "/live-operations"
          },
          {
            title: "Resource Utilization",
            url: "/resource-utilization"
          },
          {
            title: "Core Operations",
            url: "/core-operations"
          },],
      },
      {
        title: "Field Operations & Data Collection App",
        url: "/field-operations-data-collection",
        icon: Icons.Calendar,
        items: [],
      },
      {
        title: "GIS & Geo-AI",
        icon: Icons.Calendar,
        items: [{
          title: "Metadata Management",
          url: "/metadata-management"
        }, {
          title: "AI Model Catalog",
          url: "/ai-model-catalog"
        },
        {
          title: "Assets & Resources",
          url: "/assets-resources"
        },],
      },
      {
        title: "Asset & Equipment Control",
        icon: Icons.Calendar,
        items: [{
          title: "Drones Tracking",
          url: "/drones-tracking"
        }, {
          title: "Handover",
          url: "/handover"
        },
          ,],
      },
      {
        title: "Fleet & Transport",
        url: "/fleet-transport",
        icon: Icons.Calendar,
        items: [],
      },
      {
        title: "HR Management",
        url: "/hr-management",
        icon: Icons.Calendar,
        items: [],
      },
      {
        title: "Project Costing",
        url: "/project-costing",
        icon: Icons.Calendar,
        items: [],
      },
    ],
  },
  // {
  //   label: "OTHERS",
  //   items: [
  //     {
  //       title: "Charts",
  //       icon: Icons.PieChart,
  //       items: [
  //         {
  //           title: "Basic Chart",
  //           url: "/charts/basic-chart",
  //         },
  //       ],
  //     },
  //     {
  //       title: "UI Elements",
  //       icon: Icons.FourCircle,
  //       items: [
  //         {
  //           title: "Alerts",
  //           url: "/ui-elements/alerts",
  //         },
  //         {
  //           title: "Buttons",
  //           url: "/ui-elements/buttons",
  //         },
  //       ],
  //     },
  //     {
  //       title: "Authentication",
  //       icon: Icons.Authentication,
  //       items: [
  //         {
  //           title: "Sign In",
  //           url: "/auth/sign-in",
  //         },
  //       ],
  //     },
  //   ],
  // },
];
