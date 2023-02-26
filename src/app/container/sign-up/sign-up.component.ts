import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  signUpForm =  new FormGroup({
    name: new FormControl([''], Validators.required),
    email: new FormControl([''], [Validators.required, Validators.email]),
  });
  
  onSubmit(): void {
    // Submit to backend
    console.log(this.signUpForm);
  }
}
