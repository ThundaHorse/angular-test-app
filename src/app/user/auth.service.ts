import { Injectable } from "@angular/core";
import { IUser } from "./user.model";

@Injectable()
export class AuthService {
  currentUser: IUser;
  abe: IUser = {
    firstName: "Abe",
    lastName: "Kim",
    userName: "abe",
    password: "p"
  };

  logUserIn(userName: string, password: string) {
    this.currentUser = {
      firstName: "Abe",
      lastName: "Kim",
      userName: userName,
      password: password
    };

    console.log(
      this.currentUser.userName === this.abe.userName &&
        this.currentUser.password === this.abe.password
    );
    return (
      this.currentUser.userName === this.abe.userName &&
      this.currentUser.password === this.abe.password
    );
  }

  isAuth() {
    console.log(this.currentUser === this.abe);
    return this.currentUser === this.abe;
  }
}
