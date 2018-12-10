import { Injectable } from '@angular/core';
import { Issue } from "../entities/issue";
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 
    'Content-Type': 'application/json',
    'Authorization': 'Basic YWRtaW46cGFzc3dvcmQ=', // admin/password
  })
};

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
    return this.http.post<Issue>(`${this.issueUrl}`, issue, httpOptions).toPromise();
  }

  updateIssue(issue: Issue): Promise<Issue> {
    return this.http.put<Issue>(`${this.issueUrl}/${issue.id}`, issue, httpOptions).toPromise();
  }

  deleteIssue(id): Promise<Issue> {
    return this.http.delete<Issue>(`${this.issueUrl}/${id}`, httpOptions).toPromise();
  }

}