//original code
import { Component, OnInit } from '@angular/core';


import { FormGroup, FormBuilder, Validators , FormControl } from '@angular/forms';


import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {








  constructor() { }

  ngOnInit(): void {
  }


 /* exform:any= FormGroup;

ngOnInit() {

  /*this.exform = new FormGroup({
    'email' : new FormControl(null, [Validators.required, Validators.email]),
    'password':new FormControl(null,Validators.required)
  });*/
  






//original code

/*registerForm: any= FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private email:any, private password:any,private router: Router ) { }

  
  
  ngOnInit() {
      this.registerForm = this.formBuilder.group({
          email: ['', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
          password: ['', [Validators.required, Validators.minLength(6)]]
      });
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
      //this.submitted = true;

      //this.router.navigateByUrl('/userprofile');
    console.log("logged In");


      // stop here if form is invalid
      /*if (this.registerForm.invalid) {
          return;
      }

      alert('SUCCESSFully LOGGEDIN!');*/
      //\n\n' 
      //+ JSON.stringify(this.registerForm.value))*/



//original code
    //}

//email:any;
//password:any;


//codeevolution ccode

     /* loginUserData={}
      constructor(){}
      ngOnInit(){

      }

      loginUser(){
        console.log(this.loginUserData)
      }*/








/*    loginUser(){
      if(this.email=="balarka@gmail.com" && this.password== "bala"){
        this.router.navigateByUrl('/reservation')
      }
      else{
        alert("Please enter correct details")
      }
    }*/



  }






























/*import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUserData = {}

  constructor(private _auth: AuthService,
              private _router: Router) { }

  ngOnInit() {
  }

  loginUser () {
    this._auth.loginUser(this.loginUserData)
    .subscribe(
      res => {
        localStorage.setItem('token', res.token)
        this._router.navigate(['/special'])
      },
      err => console.log(err)
    ) 
  }

}*/




















