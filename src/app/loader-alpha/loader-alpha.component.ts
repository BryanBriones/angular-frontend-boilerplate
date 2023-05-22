import { Component, Input, OnInit } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-loader-alpha',
  templateUrl: './loader-alpha.component.html',
  styleUrls: ['./loader-alpha.component.css']
})
export class LoaderAlphaComponent implements OnInit {
  @Input() showOverlay = true;
  constructor(
    private router: Router
    ) {
      router.events.subscribe((event) =>{
        this.navigationInterceptor(event)
      });
   
  }

  ngOnInit(): void {
  }
  navigationInterceptor(event:any): void {
    if (event instanceof NavigationStart) {
      this.showOverlay = true;
    }
    if (event instanceof NavigationEnd) {
      this.showOverlay = false;
    }
  }



}
