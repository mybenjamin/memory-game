import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  formSubmitted = false;

  nameRegex = new RegExp(/^[A-Za-z\s]*$/);
  signUpForm =  new FormGroup({
    name: new FormControl([''], [Validators.required, Validators.pattern(this.nameRegex)]),
    email: new FormControl([''], [Validators.required, Validators.email]),
  });
  
  onSubmit(): void {
    // Submit to backend
    this.formSubmitted = !this.formSubmitted;
  }
}
