import Patient from 'src/types/patient';
import { Service } from './../../services/patient/patient.service';
import { Component, Input, OnInit } from '@angular/core';



@Component({
  selector: 'app-patients-info',
  templateUrl: './patients-info.component.html',
  styleUrls: ['./patients-info.component.css']
})
export class PatientsInfoComponent {
  @Input() patient?: Patient;
}
