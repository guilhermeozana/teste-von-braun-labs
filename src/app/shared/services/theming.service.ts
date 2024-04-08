import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';

@Injectable({
  providedIn: 'root'
})
export class ThemingService {

  themeMode = new BehaviorSubject<string | null>('light');
  themeMode$ = this.themeMode.asObservable();

  constructor(private overlayContainer: OverlayContainer) {
    if(localStorage.getItem('themeMode')){
      this.themeMode.next(localStorage.getItem('themeMode'))
    }

  }

  isDarkTheme(){
    return this.themeMode.value === 'dark';
  }

  setThemeMode(mode: any){
    let currentTheme:any = `${this.themeMode.value}-theme`;

    localStorage.setItem('themeMode', mode)
    this.themeMode.next(mode)

    this.setOverlayContainerTheme(currentTheme);
  }

  setOverlayContainerTheme(currentTheme: any){
      this.overlayContainer.getContainerElement().classList.remove(currentTheme);
      this.overlayContainer.getContainerElement().classList.add(`${this.themeMode.value}-theme`);
  }
}
