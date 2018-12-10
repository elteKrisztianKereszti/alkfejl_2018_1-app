import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

import { IssueService } from '../../services/issue.service';
import { AuthService } from '../../services/auth.service';

import { Issue } from '../../entities/issue';

@Component({
  selector: 'issue-edit',
  templateUrl: './issue-edit.component.html',
  styleUrls: ['./issue-edit.component.css']
})
export class IssueEditComponent implements OnInit {

  id: number = null;
  issue: Issue = new Issue();
  title = 'New issue';

  constructor(
    private route: ActivatedRoute,
    private issueService: IssueService,
    private location: Location,
    private router: Router,
    private authService: AuthService
  ) { }

  async ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.id = +id;
      this.issue = await this.issueService.getIssue(this.id);
      this.title = 'Edit issue';
    }
  }

  async onFormSave(issue: Issue) {
    console.log("HITTING");
    if (this.id) {
      await this.issueService.updateIssue(issue)
      this.location.back();
    } else {
      await this.issueService.createIssue(issue);
      this.router.navigate(['/issues']);
    }
  }

}