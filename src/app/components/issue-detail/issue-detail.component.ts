import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from "@angular/router";
import { Issue } from "../../entities/issue";
import { IssueService } from "../../services/issue.service";

@Component({
  selector: 'app-issue-detail',
  templateUrl: './issue-detail.component.html',
  styleUrls: ['./issue-detail.component.css']
})
export class IssueDetailComponent implements OnInit {

  issue: Issue = new Issue();

  constructor(
    private route: ActivatedRoute,
    private issueService: IssueService
  ) { }

  async ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.issue = await this.issueService.getIssue(id);
  }

}
