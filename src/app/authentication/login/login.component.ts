import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  msg: String;
  router: Router;

  constructor(router: Router) {
    this.router = router;
  }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    });
  }

  onLoginClick() {
    if (
      this.loginForm.value.email == "test" &&
      this.loginForm.value.password == "123"
    ) {
      this.msg = "login successful";
      this.router.navigate(["main"]);
    } else {
      this.msg = "wrong email or password";
    }
  }
}
