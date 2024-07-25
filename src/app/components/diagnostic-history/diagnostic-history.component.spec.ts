import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagnosticHistoryComponent } from './diagnostic-history.component';

describe('DiagnosticHistoryComponent', () => {
  let component: DiagnosticHistoryComponent;
  let fixture: ComponentFixture<DiagnosticHistoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DiagnosticHistoryComponent]
    });
    fixture = TestBed.createComponent(DiagnosticHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
