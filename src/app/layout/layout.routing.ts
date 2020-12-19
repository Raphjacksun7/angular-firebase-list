import { Routes } from "@angular/router";

import { StudentComponent } from "../pages/student/student.component";
import { AuthGuard } from "app/guard/auth.guard";

export const LayoutRoutes: Routes = [
  { path: "students", component: StudentComponent, canActivate: [AuthGuard] },
];
