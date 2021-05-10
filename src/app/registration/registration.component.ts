import { Component, OnInit } from '@angular/core';

//import { FormControl , Validators} from '@angular/forms';
//import { MatFormFieldModule } from '@angular/material/form-field';
//import { FormGroup } from '@angular/forms';

//import{ HttpClient } from '@angular/common/http'

//import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { FormGroup, FormBuilder, Validators , FormControl } from '@angular/forms';

//import { CustomvalidationService } from '../services/customvalidation.service';




import { NgForm } from '@angular/forms';

//import { UserService } from '../shared/user.service'

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  //registerForm: any= FormGroup;
  //submitted = false;

  //constructor(/*private formBuilder: FormBuilder,private http: HttpClient*/) { }

  ngOnInit() {




      /*this.registerForm = this.formBuilder.group({
          firstName: ['', Validators.required],
          lastName: ['', Validators.required],
          email: ['', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
          password: ['', [Validators.required, Validators.minLength(6)]]*/
      //});
 
 
     }


  // convenience getter for easy access to form fields
  //get f() { return this.registerForm.controls; }


 // constructor(private http: HttpClient){}
  
 
 //onSubmit(/*data:any*/) {
      //this.submitted = true;
    
      //this.http.post('http://localhost:3000',data)
      // stop here if form is invalid
      
      
      
      
      
      /*if (this.registerForm.invalid) {
          return;
      }

      alert('REGISTRATION SUCCESS!');
      //\n\n' + JSON.stringify(this.registerForm.value))
  }*/



//}
//}




}












  //working angular validation
  /*exform:any= FormGroup;

ngOnInit() {

  this.exform = new FormGroup({
    'name' : new FormControl(null, Validators.required),
    'email' : new FormControl(null, [Validators.required, Validators.email]),
    'phone' : new FormControl(
      null,
      [
        Validators.required,
        Validators.pattern('^\\s*(?:\\+?(\\d{1,3}))?[-. (]*(\\d{3})[-. )]*(\\d{3})[-. ]*(\\d{4})(?: *x(\\d+))?\\s*$')
      ]),
    'message' : new FormControl(null, [Validators.required, Validators.minLength(10)]),
    'password':new FormControl(null,Validators.required)
  });
  }

  clicksub() {
    console.log(this.exform.value);
    this.exform.reset();
  }
  get name() {
    return this.exform.get('name');
  }
  get email() {
    return this.exform.get('email');
  }
  get phone() {
    return this.exform.get('phone');
  }
  get message() {
    return this.exform.get('message');
  }
  
  get password() {
    return this.exform.get('password');
  }

}  */
  
  
  
/*  constructor() { }

  ngOnInit(): void {

  }
}*/



  
 
  /*public LoginForm: any*/
  
  /*constructor(private fb: FormBuilder) {  }

  ngOnInit() {
    this.LoginForm = this.fb.group({
      id: [0],
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
    
}
submit(){
  alert("Logged in successfully");
}


}*/
//}






















/*emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  showSucessMessage: boolean;
  serverErrorMessages: string;

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    this.userService.postUser(form.value).subscribe(
      res => {
        this.showSucessMessage = true;
        setTimeout(() => this.showSucessMessage = false, 4000);
        this.resetForm(form);
      },
      err => {
        if (err.status === 422) {
          this.serverErrorMessages = err.error.join('<br/>');
        }
        else
          this.serverErrorMessages = 'Something went wrong.Please contact admin.';
      }
    );
  }

  resetForm(form: NgForm) {
    this.userService.selectedUser = {
      fullName: '',
      email: '',
      password: ''
    };
    form.resetForm();
    this.serverErrorMessages = '';
  }

}*/







