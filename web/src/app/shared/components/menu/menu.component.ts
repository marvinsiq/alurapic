import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ap-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }

  isShown = false;

  toggle() {
    console.log('toggle');
    this.isShown = !this.isShown;
  }

  ngOnInit() {
  }

}
