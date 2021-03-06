import { Routes, RouterModule } from "@angular/router";
import { WorkspaceComponent } from "./workspace.component";
import { WorkComponent } from "./work/work.component";
import { WorkoneComponent } from "./workone/workone.component";
import { WorkTowComponent } from './workTow/workTow.component';
const routes: Routes = [
  {
    path: "",
    component: WorkspaceComponent,
    children: [
      { path: "", redirectTo: "work", pathMatch: "full" },
      { path: "work", component: WorkComponent },
      { path: "workone/:name", component: WorkoneComponent },
      { path: "workTow", component: WorkTowComponent }
    ]
  }
];

export const WorkspaceRoutes = RouterModule.forChild(routes);
