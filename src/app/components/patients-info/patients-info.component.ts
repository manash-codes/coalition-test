import { Service } from './../../services/patient/patient.service';
import { Component, OnInit } from '@angular/core';

interface Patient {
  name: string;
  age: number;
  gender: string;
  profile_picture: string;
  phone_number: string;
  date_of_birth: string;
  emergency_contact: string;
  insurance_type: string;
}

@Component({
  selector: 'app-patients-info',
  templateUrl: './patients-info.component.html',
  styleUrls: ['./patients-info.component.css']
})
export class PatientsInfoComponent implements OnInit {
  patientDetails: any;
  patient?: Patient;

  ngOnInit() {
    this.patientService.getPatient().subscribe((data) => {
      this.patientDetails = data;
      this.patient = this.patientDetails[3];
      console.log(this.patientDetails);
      console.log(this.patient);
    })
  }

  constructor(private patientService: Service) { }
}
