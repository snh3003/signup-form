import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { PasswordChecker } from './custom-validators/password-checker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  
  title = 'signup-form';
  registerForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) {

  }

  ngOnInit(): void {
    console.log('ngOnInit');
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      acceptTerms: [false, Validators.requiredTrue]
    }, {
      validator: PasswordChecker('password', 'confirmPassword')
    });
  }

  get getForm(){
    return this.registerForm.controls;
  }

  onSubmit = () => {

    this.submitted = true;
    
    if (this.registerForm.invalid) {
      return;
    }

    console.table(this.registerForm.value);
    console.table(this.registerForm);
    alert("Success \n" + JSON.stringify(this.registerForm.value));

  };

  onReset = () => {
    this.submitted = false;
    this.registerForm.reset();
  }

}
