import { Component, OnInit } from "@angular/core";
import { NoterService } from "../../noter.service";
import { Note } from "../../noter.service";

@Component({
  selector: "app-notes",
  templateUrl: "./notes.component.html",
  styleUrls: ["./notes.component.scss"]
})
export class NotesComponent implements OnInit {
  notesArray: Note[];

  constructor(private noter: NoterService) {}

  ngOnInit(): void {
    this.notesArray = [];
    this.noter.getNotes().subscribe(data => {
      for (const note of data) {
        this.notesArray.push(
          new Note(note._id, note.title, note.subtitle, note.content)
        );
      }
    });
  }
}
