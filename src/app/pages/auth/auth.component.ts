import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../services";

@Component({
  selector: "app-auth",
  templateUrl: "./auth.component.html",
  styleUrls: ["./auth.component.css"],
})
export class AuthComponent implements OnInit {
  loginBtn = "Login";
  message: any;
  constructor(private readonly auth: AuthService) {}

  ngOnInit(): void {}

  login(email, password) {
    if (!email || !password) return;
    this.loginBtn = "A moment...";
    this.auth
      .signIn(email, password)
      .then((res) => {
        this.loginBtn = "Login";
      })
      .catch((e) => {
        console.log(e);
        this.message = e.message;
      });
  }
}
