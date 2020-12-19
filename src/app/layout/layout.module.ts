import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { LayoutRoutes } from "./layout.routing";
import { StudentComponent } from "../pages/student/student.component";
import { NgxPaginationModule } from "ngx-pagination";
import { ModalModule } from "ngx-bootstrap/modal";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(LayoutRoutes),
    FormsModule,
    NgbModule,
    ModalModule.forRoot(),
    NgxPaginationModule,
  ],
  declarations: [StudentComponent],
})
export class LayoutModule {}
