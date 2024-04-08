import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DeviceDetailsComponent } from './device-detail.component';

describe('DeviceDetailComponent', () => {
  let component: DeviceDetailsComponent;
  let fixture: ComponentFixture<DeviceDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeviceDetailsComponent]
    });
    fixture = TestBed.createComponent(DeviceDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
