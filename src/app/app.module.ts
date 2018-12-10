import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatToolbarModule, MatButtonToggleModule, MatIconModule, MatButtonModule, MatMenuModule,
         MatFormFieldModule, MatInputModule } from '@angular/material';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IssueListComponent } from './components/issue-list/issue-list.component';
import { IssueFormComponent } from './components/issue-form/issue-form.component';
import { IssueDetailComponent } from './components/issue-detail/issue-detail.component';
import { RoutingModule } from './routing/routing.module';
import { StatusFilterComponent } from './components/status-filter/status-filter.component';
import { LoginComponent } from './components/login/login.component';
import { IssueEditComponent } from './components/issue-edit/issue-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    IssueListComponent,
    IssueFormComponent,
    IssueDetailComponent,
    StatusFilterComponent,
    LoginComponent,
    IssueEditComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    RoutingModule,
    HttpClientModule,
    FormsModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
