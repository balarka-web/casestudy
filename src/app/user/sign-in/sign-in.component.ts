/*import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}*/








import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";

import { UserService } from '../../shared/user.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

//token:any;

  constructor(private userService: UserService,private router : Router) { }


  model ={
    email :'',
    password:''
  };
  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  serverErrorMessages: any;
  ngOnInit() {
    if(this.userService.isLoggedIn())
    this.router.navigateByUrl('/userprofile');
  }




//original code from codafection
  onSubmit(form : NgForm){
    this.userService.login(form.value).subscribe(
      (res:any)=>{
        
        this.userService.setToken(res["token"]);
        
        
        this.router.navigateByUrl('/userprofile');
      },
      err => {
        this.serverErrorMessages = err.error.message;
      }
    );
  }

}







//shivam code

/*onSubmit(form: NgForm){
  //this.submitted =true;
  //if(this.form.invalid){
    //return;
  //}
   
  this.userService.login(form.value).subscribe(
   (data:any)=>{
    
   this.userService.setToken(data['token']);
   //console.log(data);
   
   
   //this.router.navigate(['/']);


   this.router.navigateByUrl('/userprofile');
   
  },
  err=>{
    this.serverErrorMessages = err.error.message;
  })
  
}

}*/
