import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Device } from 'src/app/features/device/models/device';
import { environment } from 'src/environments/environment-prod';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  private apiUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getDevices(): Observable<Device[]>{
    return this.http.get<Device[]>(`${environment.baseUrl}/Device`);
  }

  getDeviceById(id:string): Observable<Device>{
    return this.http.get<Device>(`${environment.baseUrl}/Device/${id}`);
  }

  saveDevice(device: Device){
    return this.http.post<Device>(`${environment.baseUrl}/Device/`, device);
  }

  updateDevice(device: Device){
    return this.http.put<Device>(`${environment.baseUrl}/Device/${device.identifier}`, device);
  }

  deleteDevice(id:string):Observable<void>{
    return this.http.delete<void>(`${environment.baseUrl}/Device/${id}`);
  }
}
