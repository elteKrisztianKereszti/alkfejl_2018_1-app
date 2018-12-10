import { Component, OnInit } from '@angular/core';
import { IssueService } from "../../services/issue.service"
import { Issue } from "../../entities/issue";

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
  }

  async ngOnInit() {
    this.issues = await this.issueService.getIssues();
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
      this.selectedIssue.title = issue.title;
      this.issueService.updateIssue(issue);
    } else {
      this.selectedIssue.id = Math.floor(Math.random()*1000000);
      this.selectedIssue.location = issue.location;
      this.selectedIssue.title = issue.title;
      this.selectedIssue.description = issue.description;
      this.selectedIssue.status = 'NEW';
      this.issueService.createIssue(issue)
                      .then(createdIssue => {
                          this.issues.push(createdIssue);
                        });
    }
    this.selectedIssue = null;
  }

  onNewClick() {
    this.selectedIssue = new Issue();
  }


  onDeleteClick(id: number) {
    this.issueService.deleteIssue(id)
    .then(async () => {
      this.selectedIssue = null;
      this.issues = await this.issueService.getIssues();
      this.filter();
    })
  }

}
