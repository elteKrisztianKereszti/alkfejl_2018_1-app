import { Injectable } from '@angular/core';
import { Issue } from "../entities/issue";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { httpOptions } from "./auth.service";

@Injectable({
  providedIn: 'root'
})
export class IssueService {
  
  private issueUrl = 'http://localhost:8080/issues';

  constructor(
    private http: HttpClient
  ) { }
  
  getIssues(): Promise<Issue[]> {
    return this.http.get<Issue[]>(`${this.issueUrl}`, httpOptions).toPromise();
  }
  
  getIssue(id: number): Promise<Issue> {
    return this.http.get<Issue>(`${this.issueUrl}/${id}`, httpOptions).toPromise();
  }

  createIssue(issue: Issue): Promise<Issue> {
    return this.http.post<Issue>(`${this.issueUrl}`, {
      id: Math.floor(Math.random()*1000000),
      location: issue.location,
      title: issue.title,
      description: issue.description,
      status: 'NEW'
    }, httpOptions).toPromise();
  }

  updateIssue(issue: Issue): Promise<Issue> {
    return this.http.put<Issue>(`${this.issueUrl}/${issue.id}`, {
      id: issue.id,
      location: issue.location,
      title: issue.title,
      description: issue.description,
      status: issue.status
    }, httpOptions).toPromise();
  }

  deleteIssue(id): Promise<Issue> {
    return this.http.delete<Issue>(`${this.issueUrl}/${id}`, httpOptions).toPromise();
  }

}
