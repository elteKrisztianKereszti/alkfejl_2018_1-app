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
  newIssue: Issue;
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
    this.issueService.createIssue(this.newIssue)
                    .then(createdIssue => {
                        this.issues.push(createdIssue);
                      });
    this.newIssue = null;
  }

  onNewClick() {
    this.newIssue = new Issue();
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
