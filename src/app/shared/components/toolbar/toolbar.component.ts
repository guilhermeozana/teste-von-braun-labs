import { MatSidenav } from '@angular/material/sidenav';
import {
  AfterViewChecked,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  Output,
  SimpleChanges,
  ElementRef,
} from '@angular/core';
import { ThemingService } from '../../services/theming.service';
import { AuthService } from '../../services/auth.service';
import { User } from '../../../auth/models/user';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements AfterViewChecked {
  @Input() sidenav!: MatSidenav;
  @Input() isProfileSelected: boolean | null = false;
  @Input() title = '';
  @Output() private logout = new EventEmitter();
  @Output() private switchTheme = new EventEmitter();

  currentUser!: User;
  tema: string = '';
  isDark!: boolean;
  isLoggedIn$!: Observable<boolean>;

  constructor(
    private authService: AuthService,
    private cdr: ChangeDetectorRef,
    private themingService: ThemingService,
    public elementRef: ElementRef
  ) {
    this.isDark = this.themingService.isDarkTheme();
    this.isLoggedIn$ = this.authService.isLoggedIn$;
  }

  ngAfterViewChecked() {
    this.cdr.detectChanges();
  }

  ngOnChanges(changes: SimpleChanges): void {}

  onLogout(): void {
    this.logout.emit();
  }

  onSwitchThemeMode() {
    if (this.themingService.isDarkTheme()) {
      this.themingService.setThemeMode('light');
    } else {
      this.themingService.setThemeMode('dark');
    }
  }
}
