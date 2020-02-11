import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthenticationComponent } from "./authentication/authentication.component";
import { MainNoteComponent } from "./main-note/main-note.component";

const routes: Routes = [
  { path: "", component: AuthenticationComponent },
  { path: "main", component: MainNoteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
