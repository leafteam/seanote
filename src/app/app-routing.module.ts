import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthenticationComponent } from "./authentication/authentication.component";
import { MainNoteComponent } from "./main-note/main-note.component";
import { NoteviewComponent } from "./noteview/noteview.component";

const routes: Routes = [
  { path: "", component: AuthenticationComponent },
  { path: "main", component: MainNoteComponent },
  { path: "editnote/:id", component: NoteviewComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
