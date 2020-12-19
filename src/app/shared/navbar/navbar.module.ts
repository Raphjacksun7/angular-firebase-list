import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { NavbarComponent } from "./navbar.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  imports: [CommonModule, NgbModule],
  declarations: [NavbarComponent],
  exports: [NavbarComponent],
})
export class NavbarModule {}
