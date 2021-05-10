import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';



@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {

  
  
  
  
  
  
  
  
  
  
  //registerForm: any= FormGroup;
  //submitted = false;

//  constructor(private formBuilder: FormBuilder,private http: HttpClient) { }

  /*ngOnInit() {
      this.registerForm = this.formBuilder.group({
          firstName: ['', Validators.required],
          lastName: ['', Validators.required],
          email: ['', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
          gender: ['', Validators.required],
          age:  ['', Validators.required]
      });
  }*/



  // convenience getter for easy access to form fields
  //get f() { return this.registerForm.controls; }


 // constructor(private http: HttpClient){}
  
  
  /*onSubmit(data:any) {
      this.submitted = true;*/
    
      //this.http.post('http://localhost:3000',data)
      // stop here if form is invalid
      
      
      
      
      
      /*if (this.registerForm.invalid) {
          return;
      }

      alert('RESERVATION SUCCESS!');
      //\n\n' + JSON.stringify(this.registerForm.value))
  }
}*/
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
constructor(private router: Router) { }

  ngOnInit(): void {
  }



  navigateToSecond(){
    this.router.navigateByUrl('/payment')
  }


}
