import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TabsPage } from "./tabs-page";
import { SchedulePage } from "../schedule/schedule";

const routes: Routes = [
  {
    path: "tabs",
    component: TabsPage,
    children: [
      {
        path: "schedule",
        children: [
          {
            path: "",
            component: SchedulePage,
          },
          {
            path: "session/:sessionId",
            loadChildren: () =>
              import("../session-detail/session-detail.module").then(
                (m) => m.SessionDetailModule
              ),
          },
        ],
      },
      {
        path: "student",
        children: [
          {
            path: "",
            loadChildren: () =>
              import("../student/student.module").then((m) => m.StudentModule),
          },
          {
            path: "session/:sessionId",
            loadChildren: () =>
              import("../session-detail/session-detail.module").then(
                (m) => m.SessionDetailModule
              ),
          },
        ],
      },
      {
        path: "map",
        children: [
          {
            path: "",
            loadChildren: () =>
              import("../map/map.module").then((m) => m.MapModule),
          },
        ],
      },
      {
        path: "about",
        children: [
          {
            path: "",
            loadChildren: () =>
              import("../about/about.module").then((m) => m.AboutModule),
          },
        ],
      },
      {
        path: "",
        redirectTo: "/app/tabs/schedule",
        pathMatch: "full",
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
