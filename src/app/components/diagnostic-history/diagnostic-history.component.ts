import { Component } from '@angular/core';

@Component({
  selector: 'app-diagnostic-history',
  templateUrl: './diagnostic-history.component.html',
  styleUrls: ['./diagnostic-history.component.css']
})
export class DiagnosticHistoryComponent {
  healthCards = [
    {
      title: "Respiratory Rate",
      value: "20",
      heartRate: "75",
      image: "../../assets/icons/patients-info/Layer 8.png"
    },
    {
      title: "Respiratory Rate",
      value: "20",
      heartRate: "75",
      image: "../../assets/icons/patients-info/Layer 8.png"
    },
    {
      title: "Respiratory Rate",
      value: "20",
      heartRate: "75",
      image: "../../assets/icons/patients-info/Layer 8.png"
    },
  ]
}
