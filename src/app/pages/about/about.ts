import { Component } from "@angular/core";

@Component({
  selector: "page-about",
  templateUrl: "about.html",
  styleUrls: ["./about.scss"],
})
export class AboutPage {
  location = "madison";
  conferenceDate = "2047-05-17";

  selectOptions = {
    header: "Select a Location",
  };
}
