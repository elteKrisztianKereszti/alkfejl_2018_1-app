import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatToolbarModule, MatButtonToggleModule, MatIconModule, MatButtonModule, MatMenuModule } from '@angular/material';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'; 

import { AppComponent } from './app.component';
import { MyComponentComponent } from './my-component/my-component.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IssueListComponent } from './issue-list/issue-list.component';
import { IssueFormComponent } from './issue-form/issue-form.component';
import { IssueDetailComponent } from './issue-detail/issue-detail.component';
import { RoutingModule } from './routing/routing.module';
import { GlinkComponent } from './glink/glink.component';
import { StatusFilterComponent } from './status-filter/status-filter.component';
import { SomeComponent } from './some/some.component';
import { ExampleChildComponent } from './example-child/example-child.component';

@NgModule({
  declarations: [
    AppComponent,
    MyComponentComponent,
    IssueListComponent,
    IssueFormComponent,
    IssueDetailComponent,
    GlinkComponent,
    StatusFilterComponent,
    SomeComponent,
    ExampleChildComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatMenuModule,
    BrowserAnimationsModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
