import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Service {
  username = 'coalition';
  password = 'skills-test';

  constructor(private http: HttpClient) { }

  getPatient() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Basic ${btoa(this.username + ':' + this.password)}`,
      })
    };
    return this.http.get('https://fedskillstest.coalitiontechnologies.workers.dev', httpOptions);
  }
}
