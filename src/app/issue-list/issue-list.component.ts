import { Component, OnInit } from '@angular/core';
import { IssueService } from "../issue.service"
import { Issue } from "../issue";  

@Component({
  selector: 'app-issue-list',
  templateUrl: './issue-list.component.html',
  styleUrls: ['./issue-list.component.css']
})
export class IssueListComponent implements OnInit {

  issues: Issue[];
  selectedIssue: Issue;
  filteredIssues: Issue[];
  selectedStatus: string;
  
  constructor(
    private issueService: IssueService
  ) { 
    this.issues = issueService.getIssues();
  }

  ngOnInit() {
    this.selectedStatus = 'NEW';
    this.filter();
  }

  onFilterChange(status: string) {
    this.selectedStatus = status;
    this.filter();
  }

  filter() {
    this.filteredIssues = this.selectedStatus === ''
    ? this.issues
    : this.issues.filter(issue => issue.status === this.selectedStatus);
  }

  onSelectIssue(issue) {
    this.selectedIssue = issue;
 }

 
 onFormSubmit(issue: Issue) {
  if (issue.id > 0) {
    this.selectedIssue.location = issue.location;
    this.selectedIssue.description = issue.description;
  } else {
    this.selectedIssue.id = Math.floor(Math.random()*1000000);
    this.selectedIssue.location = issue.location;
    this.selectedIssue.description = issue.description;
    this.selectedIssue.status = 'ADDED';
    this.issues.push(this.selectedIssue);
  }
  this.selectedIssue = null;
}

onNewClick() {
  this.selectedIssue = new Issue();
}

}
