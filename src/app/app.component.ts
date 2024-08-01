import { Component, OnInit } from '@angular/core';
import { Service } from './services/patient/patient.service';
import Patient from 'src/types/patient';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  patientDetails!: Patient[];

  constructor(private patientService: Service) { }

  ngOnInit() {
    this.patientService.getPatient().subscribe((data: Patient[]) => {
      this.patientDetails = data;
    })
  }

}
