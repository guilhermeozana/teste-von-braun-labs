import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Device } from '../../models/device';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DeviceService } from 'src/app/shared/services/device.service';
import { MessageService } from 'src/app/shared/services/message.service';

@Component({
  selector: 'app-device-form',
  templateUrl: './device-form.component.html',
  styleUrls: ['./device-form.component.scss']
})
export class DeviceFormComponent implements OnInit {
  deviceForm!: any;

  constructor(@Inject(MAT_DIALOG_DATA) public data: DeviceDialogData,
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<DeviceFormComponent>,
    private deviceService: DeviceService,
    private messageService: MessageService) { }

    ngOnInit(): void {
      this.deviceForm = this.formBuilder.group({
        identifier: [''],
        manufacturer: ['', Validators.required],
        description: ['', Validators.required],
        url: ['', [Validators.pattern('https?://.+')]],
        commands: this.formBuilder.array([])
      });

      if(this.data.isEdicao) {
        this.populateForm();

      }
    }

    populateForm() {
      this.deviceForm.patchValue(this.data.device);

      const commandsArray = this.deviceForm.get('commands') as FormArray;
      this.data.device?.commands.forEach(command => {
        const commandGroup = this.formBuilder.group({
          operation: command.operation,
          description: command.description,
          result: command.result,
          format: command.format,
          command: this.formBuilder.group({
            command: command.command.command,
            parameters: this.formBuilder.array([])
          })
        });

        const parametersArray = commandGroup.get('command.parameters') as FormArray;
        command.command.parameters.forEach(parameter => {
          parametersArray.push(this.formBuilder.group({
            name: parameter.name,
            description: parameter.description
          }));
        });

        commandsArray.push(commandGroup);
      });
    }


    addCommand(): void {
      const commandsFormArray = this.deviceForm.get('commands') as FormArray;
      commandsFormArray.push(this.createCommandGroup());
    }

    createCommandGroup(): FormGroup {
      return this.formBuilder.group({
        operation: [''],
        description: [''],
        result: [''],
        format: [''],
        command: this.formBuilder.group({
          command: [''],
          parameters: this.formBuilder.array([])
        })
      });
    }

    addParameter(commandIndex: number): void {
      const commandsFormArray = this.deviceForm.get('commands') as FormArray;
      const commandFormGroup = commandsFormArray.at(commandIndex).get('command') as FormGroup;
      const parametersFormArray = commandFormGroup.get('parameters') as FormArray;

      parametersFormArray.push(this.createParameterGroup());
    }

    createParameterGroup(): FormGroup {
      return this.formBuilder.group({
        name: [''],
        description: ['']
      });
    }

    removeCommand(index: number): void {
      const commandsFormArray = this.deviceForm.get('commands') as FormArray;
      commandsFormArray.removeAt(index);
    }

    removeParameter(commandIndex: number, parameterIndex: number): void {
      const commandsFormArray = this.deviceForm.get('commands') as FormArray;
      const commandFormGroup = commandsFormArray.at(commandIndex).get('command') as FormGroup;
      const parametersFormArray = commandFormGroup.get('parameters') as FormArray;
      parametersFormArray.removeAt(parameterIndex);
    }

    cancel(): void {
      this.dialogRef.close();
    }

    save(): void {

      if (this.deviceForm.invalid) {
        return;
      }

      const newDevice: Device = this.deviceForm.value;

      console.log('Novo dispositivo:', newDevice);

      if(this.data.isEdicao) {
        this.deviceService.updateDevice(this.deviceForm.value).subscribe(() => {
          this.messageService.showSuccessMessage("Dispositivo atualizado com sucesso!");
        });

      } else {

        this.deviceService.saveDevice(this.deviceForm.value).subscribe(() => {
          this.messageService.showSuccessMessage("Dispositivo salvo com sucesso!");
        });
      }


      this.dialogRef.close();
    }
}

export class DeviceDialogData {
  type!: string;
  device?: Device;
  isEdicao!: Boolean;
}
