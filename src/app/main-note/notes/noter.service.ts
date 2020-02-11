import { Injectable } from '@angular/core';

export class Note {
  public title: string;
  public subtitle: string;
  public content: string;

  constructor(title: string, subtitle: string, content: string) {
    this.title = title;
    this.subtitle = subtitle;
    this.content = content;
  }
}

@Injectable({
  providedIn: 'root'
})
export class NoterService {

  constructor() { }
}
