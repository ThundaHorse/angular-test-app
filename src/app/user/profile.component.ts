import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { AuthService } from "./auth.service";

@Component({
  selector: "",
  templateUrl: "./profile.component.html",
  styles: [``]
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup;

  constructor(private auth: AuthService) {}

  ngOnInit() {
    let firstName = new FormControl(this.auth.abe.firstName);
    let lastName = new FormControl(this.auth.abe.lastName);
    let userName = new FormControl(this.auth.abe.userName);

    this.profileForm = new FormGroup({
      firstName: firstName,
      lastName: lastName,
      userName: userName
    });
  }

  cancel() {
    let firstName = new FormControl("");
    let lastName = new FormControl("");
    let userName = new FormControl("");

    this.profileForm = new FormGroup({
      firstName: firstName,
      lastName: lastName,
      userName: userName
    });
  }
}
