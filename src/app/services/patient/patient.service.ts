import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Patient from 'src/types/patient';

@Injectable({
  providedIn: 'root'
})
export class Service {
  username = 'coalition';
  password = 'skills-test';

  constructor(private http: HttpClient) { }

  getPatient(): Observable<Patient[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Basic ${btoa(this.username + ':' + this.password)}`,
      })
    };
    return this.http.get<Patient[]>('https://fedskillstest.coalitiontechnologies.workers.dev', httpOptions);
  }
}
