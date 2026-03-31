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
        ],
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
            title: "Daily Log & Time Sheets",
            url: "/daily-log-time-sheets"
          },
          {
            title: "Team Follow Up",
            url: "/team-follow-up"
          },],
      },
      {
        title: "Field Operations & GEO-AI",
        icon: Icons.Calendar,
        items: [{
          title: "Field Reports",
          url: "/field-reports"
        }, {
          title: "Live Operations Map",
          url: "/live-operations-map"
        },
        {
          title: "Data Collection",
          url: "/data-collection"
        },],
      },
      {
        title: "Asset & Equipment Control",
        icon: Icons.Calendar,
        items: [{
          title: "Asset Control",
          url: "/asset-control"
        }, {
          title: "Handover",
          url: "/handover"
        }],
      },
      {
        title: "HR Management & Core Operations",
        icon: Icons.Calendar,
        items: [{
          title: "Projects",
          url: "/projects"
        }, {
          title: "Notifications",
          url: "/notifications"
        }],
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
