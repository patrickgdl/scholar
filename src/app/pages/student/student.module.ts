import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IonicModule } from "@ionic/angular";

import { StudentPage } from "./student";
import { StudentPageRoutingModule } from "./student-routing.module";

@NgModule({
  imports: [CommonModule, IonicModule, StudentPageRoutingModule],
  declarations: [StudentPage],
})
export class StudentModule {}
