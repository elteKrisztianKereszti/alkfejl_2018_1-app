import { Component, OnInit, OnChanges, Input, Output, EventEmitter  } from '@angular/core'; 
import { Issue } from '../../entities/issue';

@Component({
  selector: 'issue-form',
  templateUrl: './issue-form.component.html',
  styleUrls: ['./issue-form.component.css']
})
export class IssueFormComponent implements OnInit, OnChanges {

  @Input() issue: Issue
  model: Issue
  @Output() onSubmit = new EventEmitter<Issue>();

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    this.model = Object.assign({}, this.issue);
  }

  submit(form) {
    if (!form.valid) {
      return;
    }
    console.log(this.model);
    this.onSubmit.emit(this.model);
  }
}
