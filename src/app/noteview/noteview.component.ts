import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Note } from "../noter.service"
import { NoterService } from "../noter.service"

@Component({
  selector: 'app-noteview',
  templateUrl: './noteview.component.html',
  styleUrls: ['./noteview.component.scss']
})
export class NoteviewComponent implements OnInit {

	id: string;
	noter:NoterService;
	note: Note;

	constructor( private route: ActivatedRoute, noter : NoterService) {
		this.noter = noter;
		this.route.params.subscribe(params => {
			this.id = params.id;
		});
	}

  ngOnInit(): void {
	  this.note = this.noter.getNote(this.id) || new Note("0"," "," ", " ");
  }

}
