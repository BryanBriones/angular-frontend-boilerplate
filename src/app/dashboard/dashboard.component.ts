import { Component, Input } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Http } from '@angular/http';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent { 
  constructor(private formBuilder: FormBuilder, private router: Router, private http: Http){

  }
  showOverlay:boolean =false;
  header:string = " DASHBOARD"
  navItems: any = [
    { displayName: 'Home', route: '/dashboard/home',  class: 'text-white bg-cgi font-weight-bold', faclass: 'fa fa-home text-white'},
    { displayName: 'Career Objectives', route: '/dashboard/careerobjectives', class: 'text-white bg-cgi font-weight-bold' },
    { displayName: '_____________________', route: '', class: 'text-white bg-cgi font-weight-bold' },
    { displayName: 'Logout', route: '/logout', class: 'text-white bg-cgi font-weight-bold' }
  ];
@Input() loginCreds: any
  ngOnInit(){
    console.log(this.loginCreds);


  }

  handleClick(nav:any){

    if(nav.route){
      this.showOverlay=true;
      this.router.navigateByUrl(nav.route);
      this.showOverlay=false;
    }
   

    

  }

 
}