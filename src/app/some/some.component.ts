import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-some',
  templateUrl: './some.component.html',
  styleUrls: ['./some.component.css']
})
export class SomeComponent implements OnInit {

  name = 'Győző';

  constructor() { }

  ngOnInit() {
  }

  changeName() {
    this.name = 'Victorious';
  }
  
  onDataChange(value) {
    this.name = value;
  }

}
