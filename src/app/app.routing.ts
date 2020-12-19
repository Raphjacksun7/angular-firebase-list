import { Routes } from "@angular/router";

import { LayoutComponent } from "./layout/layout.component";
import { AuthComponent } from "./pages/auth/auth.component";
import { AuthGuard } from "./guard/auth.guard";

export const AppRoutes: Routes = [
  {
    path: "",
    redirectTo: "students",
    pathMatch: "full",
  },
  {
    path: "",
    component: LayoutComponent,
    children: [
      {
        path: "",
        loadChildren: "./layout/layout.module#LayoutModule",
        canActivate: [AuthGuard],
      },
    ],
  },
  {
    path: "auth",
    component: AuthComponent,
  },
  {
    path: "**",
    redirectTo: "",
  },
];
