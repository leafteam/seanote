import { Component, OnInit } from "@angular/core";
import { NoterService } from '../../noter.service';
import { Note } from '../../noter.service';



@Component({
  selector: "app-notes",
  templateUrl: "./notes.component.html",
  styleUrls: ["./notes.component.scss"]
})
export class NotesComponent implements OnInit {
	noter:NoterService;
  constructor(noter:NoterService) {this.noter = noter;}

  notesArray: Note[];

  ngOnInit(): void {
	  this.notesArray =   this.noter.getNotes();
  }
}
