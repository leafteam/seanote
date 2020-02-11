import { Input, Component, OnInit } from '@angular/core';
import { Note } from '../noter.service';

@Component({
  selector: 'app-note-preview',
  templateUrl: './note-preview.component.html',
  styleUrls: ['./note-preview.component.scss']
})
export class NotePreviewComponent implements OnInit {

	@Input('note') note:Note;

  constructor() { }

  ngOnInit(): void {
  }

}
