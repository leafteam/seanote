import { Component, OnInit } from "@angular/core";
import { Note } from './noter.service';



@Component({
  selector: "app-notes",
  templateUrl: "./notes.component.html",
  styleUrls: ["./notes.component.scss"]
})
export class NotesComponent implements OnInit {
  constructor() {}

  notesArray: Note[];

  ngOnInit(): void {
    this.notesArray = [
      new Note(
        "Shoping",
        "list of items",
        "This is shopping item review main comspafjldsj sljda flds jf"
      ),
      new Note(
        "Market",
        "review of items",
        "This is shopping item review main comspafjldsj sljda flds jf"
      ),
      new Note(
        "Vegetables",
        "vegeiis stuff",
        "Show caseing changes kin gkt conteten ,This is shopping item review main comspafjldsj sljda flds jf"
      )
    ];
  }
}
