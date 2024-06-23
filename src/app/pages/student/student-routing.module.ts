import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { StudentPage } from "./student";
const routes: Routes = [
  {
    path: "",
    component: StudentPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentPageRoutingModule {}
