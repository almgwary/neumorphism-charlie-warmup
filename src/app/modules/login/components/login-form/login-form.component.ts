import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/modules/shared/models/user';
import { EMAIL_REGEX, PASSWORD_REGEX } from 'src/app/modules/shared/models/constants';

/**
 * LoginFormComponent is a component which takes user email and password
 * from form inputs and validate them with regex
 */
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  @Output() login =  new EventEmitter<User>();

  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder ) {
  }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.loginForm = this.formBuilder.group({
      email: ['amr@vodafone.com' , [ Validators.required, Validators.pattern(EMAIL_REGEX)]],
      password: ['Asd123!@#', [ Validators.required, Validators.pattern(PASSWORD_REGEX)]]
    });
  }

  submit() {
    const user: User = this.loginForm.value;
    this.login.emit(user);
  }

  get formControls() { return this.loginForm.controls; }

  get isEmailInputInvalid() {
    const key = 'email';
    return  this.isInputInvalid(key);
  }


  get isPasswordInputInvalid() {
    const key = 'password';
    return  this.isInputInvalid(key);
  }

  isInputInvalid(key) {
    let isInvalid =  false;
    if (this.formControls) {
      const controller = this.formControls[key];
      isInvalid = controller.invalid &&  !controller.untouched;
    }
    return  isInvalid;
  }

}
