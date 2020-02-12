import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Note } from "../noter.service";
import { NoterService } from "../noter.service";
import { FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: "app-noteview",
  templateUrl: "./noteview.component.html",
  styleUrls: ["./noteview.component.scss"]
})
export class NoteviewComponent implements OnInit {
  id: string;
  noter: NoterService;
  note: Note;
  router: Router;
  editForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    noter: NoterService
  ) {
    this.noter = noter;
    this.router = router;
    this.route.params.subscribe(params => {
      this.id = params.id;
    });
  }

  saveNote() {
    this.note.title = this.editForm.value.title;
    this.note.subtitle = this.editForm.value.subtitle;
    this.note.content = this.editForm.value.content;

    this.noter.saveNote(this.note);
    this.router.navigate(["/main"]);
  }

  ngOnInit(): void {
    this.editForm = new FormGroup({
      title: new FormControl(),
      subtitle: new FormControl(),
      content: new FormControl()
    });
    const res = this.noter.getNote(this.id);
    if (res.res) {
      this.note = res.data || new Note(0, "not found", "", "");
    } else {
      this.note = new Note(0, "not found", "", "");
    }

    this.editForm.controls.title.setValue(this.note.title);
    this.editForm.controls.subtitle.setValue(this.note.subtitle);
    this.editForm.controls.content.setValue(this.note.content);
  }
}
