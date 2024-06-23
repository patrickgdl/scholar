import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { Router } from "@angular/router";
import { SwUpdate } from "@angular/service-worker";
import { TestBed, waitForAsync } from "@angular/core/testing";
import { MenuController } from "@ionic/angular";
import { IonicStorageModule } from "@ionic/storage";
import { AppComponent } from "./app.component";

describe("AppComponent", () => {
  let menuSpy, routerSpy, swUpdateSpy, app, fixture;

  beforeEach(waitForAsync(() => {
    menuSpy = jasmine.createSpyObj("MenuController", ["toggle", "enable"]);
    routerSpy = jasmine.createSpyObj("Router", ["navigateByUrl"]);
    swUpdateSpy = jasmine.createSpyObj("SwUpdate", [
      "available",
      "activateUpdate",
    ]);

    TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [IonicStorageModule.forRoot()],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        { provide: MenuController, useValue: menuSpy },
        { provide: Router, useValue: routerSpy },
        { provide: SwUpdate, useValue: swUpdateSpy },
        // { provide: Platform, useValue: platformSpy }
      ],
    }).compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.debugElement.componentInstance;
  });

  it("should create the app", () => {
    expect(app).toBeTruthy();
  });
});
