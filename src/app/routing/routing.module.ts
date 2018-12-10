import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '../auth.guard';

import { IssueListComponent } from "../components/issue-list/issue-list.component";
import { IssueFormComponent } from '../components/issue-form/issue-form.component';
import { IssueDetailComponent } from '../components/issue-detail/issue-detail.component';
import {IssueEditComponent } from '../components/issue-edit/issue-edit.component';
import { LoginComponent } from '../components/login/login.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/issues',
    pathMatch: 'full'
  },
  {
    path: 'issues',
    component: IssueListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'issues/new',
    component: IssueFormComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'issues/:id',
    component: IssueDetailComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'issues/:id/edit',
    component: IssueEditComponent,
    canActivate: [AuthGuard],
    data: {
      roles: ['ROLE_ADMIN']
    }
  },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)  ],
  exports: [ RouterModule ],
  declarations: []
})
export class RoutingModule { }
