import { Component, OnInit } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-example-child',
  templateUrl: './example-child.component.html',
  styleUrls: ['./example-child.component.css']
})
export class ExampleChildComponent implements OnInit {
  @Input('value') text: string = "";

  @Output() dataChange: EventEmitter<string> = new EventEmitter<string>();

  someMethod(value) {
    this.dataChange.emit(value);
  }
  constructor() { }

  ngOnInit() {
  }

}
