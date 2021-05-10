import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//import{ global } from '@angular/core/global';
import { Subject } from 'rxjs';



function _window() : any {
  // return the global native browser window object
  return window;
}





@Injectable({
  providedIn: 'root'
})
export class AuthService {

  
  get nativeWindow() : any {
    return _window();
 }
  
  
  constructor(private httpService:HttpClient) { }

//baseurl=global.apiBaseUrl;

}
