import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-password-visibility',
  templateUrl: './password-visibility.component.html',
  styleUrls: ['./password-visibility.component.css']
})
export class PasswordVisibilityComponent implements OnInit {

  @Input() isShow = false;

  constructor() { }

  ngOnInit(): void {
  }

}
