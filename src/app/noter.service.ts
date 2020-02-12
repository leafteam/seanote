import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

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
  serverIp: string;
  constructor(private http: HttpClient) {
    this.serverIp = "http://127.0.0.1:8072";
  }

  getNotes() {
    return this.http.get(`${this.serverIp}/notes`);
  }

  saveNote(note: Note) {
    // const res = this.getNote(note.id);
    // if (res.res) {
    //   const oldnote = res.data;
    //   oldnote.title = note.title;
    //   oldnote.subtitle = note.subtitle;
    //   oldnote.content = note.content;
    // }
    console.log("saving note------------");
    console.log(note);
    return this.http
      .post<Note>(`${this.serverIp}/savenote`, note);
  }

  getNote(id: string) {
    return this.http.get(`${this.serverIp}/note/${id}`);
  }
}
