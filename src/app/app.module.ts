import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AuthenticationComponent } from "./authentication/authentication.component";
import { LoginComponent } from "./authentication/login/login.component";
import { SignupComponent } from "./authentication/signup/signup.component";
import { MatGridListModule } from "@angular/material/grid-list";

import { NoterService } from "./noter.service";

import { ReactiveFormsModule } from "@angular/forms";

import { MatCardModule } from "@angular/material/card";
import { MatTabsModule } from "@angular/material/tabs";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MainNoteComponent } from "./main-note/main-note.component";
import { ActionsComponent } from "./main-note/actions/actions.component";
import { NotesComponent } from "./main-note/notes/notes.component";
import { NotePreviewComponent } from "./main-note/notes/note-preview/note-preview.component";
import { NoteviewComponent } from "./noteview/noteview.component";

@NgModule({
  declarations: [
    AppComponent,
    AuthenticationComponent,
    LoginComponent,
    SignupComponent,
    MainNoteComponent,
    ActionsComponent,
    NotesComponent,
    NotePreviewComponent,
    NoteviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatCardModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule
  ],
  providers: [NoterService],
  bootstrap: [AppComponent]
})
export class AppModule {}
