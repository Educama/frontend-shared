import {
  ModuleWithProviders,
  NgModule
} from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  FormsModule,
  ReactiveFormsModule
} from "@angular/forms";
import { ErrorModule } from "./error/error.module";
import { RestModule } from "./http/rest.module";
import { TranslationModule } from "./translation/translation.module";
import { UIModule } from "./ui/ui.module";
import { WindowRefService } from "./window-ref/window-ref.service";
import { PostRobotService } from "./post-robot/post-robot.service";
import { CustomerService } from "./api/customer/services/customer.service";
import { AirlineService } from "./api/flight/services/airline.service";
import { AirportService } from "./api/flight/services/airport.service";

@NgModule({
  imports: [],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ErrorModule,
    RestModule,
    TranslationModule,
    UIModule
  ],
  declarations: [],
  entryComponents: []
})

export class FrontendSharedModule {
  public static forRoot(): Array<ModuleWithProviders> {
    return [
      ErrorModule.forRoot(),
      RestModule.forRoot(),
      UIModule.forRoot(),
      ...TranslationModule.forRoot(),
      {
        ngModule: FrontendSharedModule,
        providers: [
          WindowRefService,
          PostRobotService,
          CustomerService,
          AirlineService,
          AirportService
        ]
      }
    ];
  }
}
