import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerStep: string = '0';
  //* 0 - new username & password;
  //* 1 - email code
  //* 2 - greetings!

  userEmail: string = '';
  userPass: string = '';
  repeatUserPass: string = '';
  emailCode: string = '';
  hiddenCode = '';

  constructor() {}

  ngOnInit(): void {}

  enterEmailAndPass(): void {
    if (this.validateEmail() && this.validatePass()) {
      this.registerStep = '1';
      this.generateCode();
      console.log(this.hiddenCode);
    }
  }

  enterEmailCode(): void {
    if (this.emailCode === this.hiddenCode) {
      alert('Succsess! You have registered!');
      this.registerStep = '2';
    } else {
      alert('Error! Invalid Code!');
      this.emailCode = '';
    }
  }

  generateCode(): void {
    let code = '';
    let possible = 'abcdefghijklmnopqrstuvwxyz';

    for (let i = 0; i < 6; i++) {
      code += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    this.hiddenCode = code;
  }

  validateEmail(): boolean {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.userEmail)) {
      return true;
    } else {
      alert('You have entered an invalid email address!');
      this.userEmail = '';
      return false;
    }
  }

  validatePass(): boolean {
    if (this.userPass.length < 6 || this.userPass.length > 20) {
      alert('Invalid password length! 6 to 20 characters!');
      this.userPass = '';
      this.repeatUserPass = '';
      return false;
    } else if (!/^(?![\d]+$)[a-zA-Z0-9]*$/.test(this.userPass)) {
      alert('Invalid password! Only a-z, A-Z, 0-9 !');
      this.userPass = '';
      this.repeatUserPass = '';
      return false;
    } else if (this.userPass !== this.repeatUserPass) {
      alert('Passwords do not match! Try again!');
      this.userPass = '';
      this.repeatUserPass = '';
      return false;
    }
    return true;
  }
}
