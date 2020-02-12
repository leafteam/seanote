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
  idProvider: number;
  constructor() {
    this.notesArray = [
      new Note(
        "1",
        "Shoping",
        "list of items",
        "This is shopping item review main comspafjldsj sljda flds jf"
      ),
      new Note(
        "2",
        "Market",
        "review of items",
        "This is shopping item review main comspafjldsj sljda flds jf"
      ),
      new Note(
        "3",
        "Vegetables",
        "vegeiis stuff",
        "Show caseing changes kin gkt conteten ,This is shopping item review main comspafjldsj sljda flds jf"
      )
    ];
    this.idProvider = 4;
  }

  getNotes() {
    return this.notesArray;
  }

  newNote() {
    const note = new Note(this.idProvider++, "test", "", "");
    this.notesArray.push(note);
    return note.id;
  }

  saveNote(note: Note) {
    const res = this.noter.getNote(this.id);
    if (res.res) {
      oldnote = res.data || new Note(0, "not found", "", "");
      oldnote.title = note.title;
      oldnote.subtitle = note.subtitle;
      oldnote.content = note.content;
    }
  }

  getNote(id: string) {
    // console.log(`note id req ${id}`);
    // console.log(this.notesArray);
    for (let note of this.notesArray) {
      if (note.id == id) {
        return {
          res: true,
          data: note
        };
      }
    }
    return {
      res: false,
      data: false
    };
  }
}
