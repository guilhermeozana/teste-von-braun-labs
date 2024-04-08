import { Component, OnInit, ViewChild } from '@angular/core';
import { Device} from '../../models/device';
import { DeviceService } from 'src/app/shared/services/device.service';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { DeviceDetailsComponent } from '../device-detail/device-detail.component';
import { ConfirmDialogComponent } from 'src/app/shared/components/confirm-dialog/confirm-dialog.component';
import { DeviceFormComponent } from '../device-form/device-form.component';
import { MessageService } from 'src/app/shared/services/message.service';

@Component({
  selector: 'app-device-list',
  templateUrl: './device-list.component.html',
  styleUrls: ['./device-list.component.scss']
})
export class DeviceListComponent implements OnInit {

  devices!: Device[];
  dataSource!: any;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  paginatedDevices: Device[] = [];
  pageSizeOptions: number[] = [5, 10, 25, 100];
  pageSize: number = 5;
  pageIndex: number = 0;

  constructor(private deviceService: DeviceService,
      private dialog: MatDialog,
      private messageService: MessageService){

  }

  ngOnInit(){
    this.listDevices();
  }

  listDevices() {
    this.deviceService.getDevices().subscribe(devices => {
      this.devices = devices;
      this.dataSource = new MatTableDataSource<Device>(devices);
      this.dataSource.paginator = this.paginator;
      this.updatePaginatedDevice();
    });
  }

  addDevice() {
    const dialogRef = this.dialog.open(DeviceFormComponent, {
      minWidth: "400px",
      data : {
        type: 'Devices',
        isEdicao: false
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.listDevices();
    })
  }

  editDevice(event: Event, device: Device): void {
    event.stopPropagation();

    const dialogRef = this.dialog.open(DeviceFormComponent, {
      minWidth: "400px",
      data : {
        type: 'Devices',
        device: device,
        isEdicao: true
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.listDevices();
    })

  }

  deleteDevice(event: Event, device: Device): void {
    event.stopPropagation();
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: {
        type: 'Devices'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.deviceService.deleteDevice(device.identifier).subscribe(() => {
          this.devices = this.devices.filter(d => d !== device);

          this.messageService.showSuccessMessage("Dispositivo excluído com sucesso!");
          this.listDevices();
        });
      }
    });
  }

  onPageChange(event: PageEvent) {
    this.pageSize = event.pageSize;
    this.pageIndex = event.pageIndex;
    this.updatePaginatedDevice();
  }

  updatePaginatedDevice() {
    const startIndex = this.pageIndex * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.paginatedDevices = this.devices.slice(startIndex, endIndex);
  }

  openDeviceDetailsDialog(event:Event, device: Device) {
    if ((<HTMLElement>event.target).tagName !== 'MAT-ICON') {
      const dialogRef = this.dialog.open(DeviceDetailsComponent, {
        data: device
      });

      dialogRef.afterClosed().subscribe(result => {
        console.log('O diálogo foi fechado', result);
      });
    }
  }

}
