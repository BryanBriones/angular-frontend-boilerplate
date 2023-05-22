import { Component } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Http } from '@angular/http';


@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent { 
  constructor(private formBuilder: FormBuilder, private router: Router, private http:Http){

  }
  header:string = " This is the header "
  loginForm = this.formBuilder.group({
    username:"",
    password:""
  })
  isShowPassword: boolean = false;
  showOverlay : boolean = false;
  isFormError:boolean = false;
  isLoginError:boolean = false;

  async login(){
    console.log('LOGIN')
    this.isFormError = false;
    this.isLoginError=false;

    if(this.loginForm.status == "INVALID"){
    this.isFormError = true;
    }
    else{
     
      this.showOverlay= true;
        this.http.post("http://localhost:3000/login",this.loginForm.value).map(res => res.json()).subscribe(
        data => {
          
     
  
        if (data.status=="OK"){
          setTimeout(()=>{
            this.router.navigateByUrl("/dashboard/home");
          },2000)
        }
        else{
          this.showOverlay= false;

          this.isLoginError=true;
        }
      }, err => {   this.showOverlay= false;alert("Error contacting BE. Make sure BE is running")}



      
      )


      
    
    }
  }
 
}