import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatToolbarModule, MatIconModule, MatButtonModule, MatMenuModule } from '@angular/material';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'; 

import { AppComponent } from './app.component';
import { MyComponentComponent } from './my-component/my-component.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IssueListComponent } from './issue-list/issue-list.component';
import { IssueFormComponent } from './issue-form/issue-form.component';
import { IssueDetailComponent } from './issue-detail/issue-detail.component';
import { RoutingModule } from './routing/routing.module';

@NgModule({
  declarations: [
    AppComponent,
    MyComponentComponent,
    IssueListComponent,
    IssueFormComponent,
    IssueDetailComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    BrowserAnimationsModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
