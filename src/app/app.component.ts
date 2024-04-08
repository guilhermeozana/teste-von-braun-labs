import { AfterViewChecked, ChangeDetectorRef, Component, HostBinding, ViewChild } from '@angular/core';
import { BehaviorSubject, Observable, map, shareReplay } from 'rxjs';
import { AuthService } from './shared/services/auth.service';
import { ThemingService } from './shared/services/theming.service';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { LoadingService } from './shared/services/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewChecked{
  isLoggedIn$: Observable<boolean>;
  isScreenLarge$: Observable<boolean>;
  @ViewChild('sidenav') sidenav!: MatSidenav;

  @HostBinding('class')
  get themeMode(){
    return `${this.themingService.themeMode.value}-theme`
  }

  constructor(private authService: AuthService,
    private themingService: ThemingService,
    public loadingService: LoadingService,
    private breakpointObserver: BreakpointObserver,
    private cdr: ChangeDetectorRef) {
    this.isScreenLarge$ = this.breakpointObserver.observe(Breakpoints.Handset)
      .pipe(
        map(result => !result.matches),
        shareReplay()
      );

    this.isLoggedIn$ = this.authService.isLoggedIn$;
    this.themingService.setOverlayContainerTheme(`${this.themingService.themeMode.value}-theme`);
  }

  ngAfterViewChecked(): void {
    this.cdr.detectChanges();

  }

  onLogout(): void {
    this.authService.logout();
    this.isLoggedIn$ = this.authService.isLoggedIn$;
  }
}
