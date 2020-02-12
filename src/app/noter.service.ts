import { Injectable } from "@angular/core";

export class Note {
  public id: string;
  public title: string;
  public subtitle: string;
  public content: string;

  constructor(id: string, title: string, subtitle: string, content: string) {
    this.id = id;
    this.title = title;
    this.subtitle = subtitle;
    this.content = content;
  }
}

@Injectable({
  providedIn: "root"
})
export class NoterService {
  notesArray: Note[];
  constructor() {
    this.notesArray = [
      new Note(
        "1",
        "Shoping",
        "list of items",
        "This is shopping item review main comspafjldsj sljda flds jf"
      ),
      new Note(
        "3",
        "Market",
        "review of items",
        "This is shopping item review main comspafjldsj sljda flds jf"
      ),
      new Note(
        "6",
        "Vegetables",
        "vegeiis stuff",
        "Show caseing changes kin gkt conteten ,This is shopping item review main comspafjldsj sljda flds jf"
      )
    ];
  }

  getNotes() {
    return this.notesArray;
  }

  getNote(id: string) {
    console.log("note id req");
    console.log(id);
    console.log(this.notesArray);
    for (let note of this.notesArray) {
      if (note.id == id) {
        return note;
      }
    }
    return false;
  }
}
