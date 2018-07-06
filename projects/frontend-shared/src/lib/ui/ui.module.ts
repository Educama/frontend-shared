import {
  ModuleWithProviders,
  NgModule
} from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  AutoCompleteModule,
  BlockUIModule,
  ButtonModule,
  CalendarModule,
  CheckboxModule,
  DataTableModule,
  DialogModule,
  DropdownModule,
  InputTextareaModule,
  InputTextModule,
  MenubarModule,
  MultiSelectModule,
  PanelModule,
  RadioButtonModule,
  TabViewModule
} from "primeng/primeng";

@NgModule({
  imports: [ CommonModule ],
  exports: [
    AutoCompleteModule,
    BlockUIModule,
    ButtonModule,
    CheckboxModule,
    RadioButtonModule,
    DataTableModule,
    DialogModule,
    DropdownModule,
    InputTextModule,
    InputTextareaModule,
    MenubarModule,
    PanelModule,
    TabViewModule,
    CalendarModule,
    MultiSelectModule
  ]
})
export class UIModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: UIModule,
      providers: []
    };
  }
}

