import { Component, OnInit } from '@angular/core';


import { FormGroup, FormBuilder, Validators , FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  /*constructor() { }

  ngOnInit(): void {
  }*/


 /* exform:any= FormGroup;

ngOnInit() {

  /*this.exform = new FormGroup({
    'email' : new FormControl(null, [Validators.required, Validators.email]),
    'password':new FormControl(null,Validators.required)
  });*/
  





  registerForm: any= FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
      this.registerForm = this.formBuilder.group({
          email: ['', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
          password: ['', [Validators.required, Validators.minLength(6)]]
      });
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.registerForm.invalid) {
          return;
      }

      alert('SUCCESSFully LOGGEDIN!');
      //\n\n' 
      //+ JSON.stringify(this.registerForm.value))
  }
}
