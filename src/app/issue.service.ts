import { Injectable } from '@angular/core';
import { Issue } from "./issue";
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

  issues: Issue[] = [
    {
      id: 1,
      location: 'PC5',
      description: 'Bad',
      status: 'NEW',
    },
    {
      id: 2,
      location: 'PC5',
      description: 'Very Bad',
      status: 'INPROGRESS',
    },
    {
      id: 3,
      location: 'PC7',
      description: 'Average',
      status: 'INPROGRESS',
    },
    {
      id: 4,
      location: 'PC3',
      description: 'Broken Heart',
      status: 'RESOLVED'
    },
  ];
  
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
