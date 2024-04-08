import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeviceRoutingModule } from './device-routing.module';
import { MaterialModule } from 'src/app/material/material.module';
import { DeviceFormComponent } from './components/device-form/device-form.component';
import { DeviceDetailsComponent } from './components/device-detail/device-detail.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DeviceListComponent } from './components/device-list/device-list.component';



@NgModule({
  declarations: [
    DeviceListComponent,
    DeviceDetailsComponent,
    DeviceFormComponent
  ],
  imports: [
    CommonModule,
    DeviceRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class DeviceModule { }
