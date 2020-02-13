import { Component, OnInit } from "@angular/core";
import { NoterService } from "../../noter.service";
import { Note } from "../../noter.service";

@Component({
  selector: "app-notes",
  templateUrl: "./notes.component.html",
  styleUrls: ["./notes.component.scss"]
})
export class NotesComponent implements OnInit {
  notesArray: any;

  constructor(private noter: NoterService) {}

  deleteNote(note) {
	  this.notesArray = this.notesArray.filter( e => e != note );
  }

  ngOnInit(): void {
    this.notesArray = [];
    this.noter.getNotes().subscribe(res => {
      for (const note of res) {
        this.notesArray.push(
          new Note(note._id, note.title, note.subtitle, note.content)
        );
      }
    });
  }
}
