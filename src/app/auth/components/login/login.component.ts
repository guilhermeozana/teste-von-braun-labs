import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { MessageService } from 'src/app/shared/services/message.service';
import { ThemingService } from 'src/app/shared/services/theming.service';
import { RoleEnum } from '../enums/role.enum';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [
    trigger('slideInOut', [
      state('void', style({
        transform: 'translateX(-100%)'
      })),
      transition(':enter', [
        animate('0.5s ease-in-out', style({
          transform: 'translateX(0)'
        }))
      ]),
      transition(':leave', [
        animate('0.5s ease-in-out', style({
          transform: 'translateX(-100%)'
        }))
      ])
    ]),

    trigger('slideInOutRight', [
      state('void', style({
        transform: 'translateX(100%)'
      })),
      transition(':enter', [
        animate('0.5s ease-in-out', style({
          transform: 'translateX(0)'
        }))
      ]),
      transition(':leave', [
        animate('0.5s ease-in-out', style({
          transform: 'translateX(100%)'
        }))
      ])
    ])
  ]
})
export class LoginComponent implements OnInit{
  isDark!: boolean;
  hide = true;
  randomNumber!: number;

  form: any;

  constructor(private authService: AuthService,
    private fb: FormBuilder,
    private router: Router,
    private messageService: MessageService,
    private themingService: ThemingService) {
      this.authService.logout();
      this.isDark = this.themingService.isDarkTheme();
    }


  ngOnInit(): void {
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      role: [RoleEnum.OWNER, Validators.required]
    });

    this.randomNumber = this.generateRandomNumber();
  }

  onSubmit(){
    if(this.form.valid){

      this.authService.login(this.form.value).subscribe(() => {
        this.router.navigate(['/home']);
        this.messageService.showSuccessMessage(`Usuário ${this.form.controls['username'].value} autenticado com sucesso!`, 5000)
      });

    }
  }

  onSwitchThemeMode() {
    if (this.themingService.isDarkTheme()) {
      this.themingService.setThemeMode('light');
    } else {
      this.themingService.setThemeMode('dark');
    }
  }

  //Make cash busting
  generateRandomNumber(): number {

    return Math.floor(Math.random() * 1000000);
  }
}
