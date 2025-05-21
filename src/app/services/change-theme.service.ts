import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ChangeThemeService {
  darkMode: boolean;

  //inicialização (ngOnInit do service)
  constructor() {
    this.checkDarkMode();
  }

  public setTheme(darkMode: boolean) {
    this.darkMode = darkMode;
    this.applyTheme();
    this.saveThemePreference();
  }

  //função para verificar o tema do sistema
  private checkDarkMode() {
    //ele verifica o tema salvo do localStorage
    const savedTheme = localStorage.getItem('darkMode');
    if (savedTheme !== null) {
      this.darkMode = savedTheme === 'true';
    }
    // se nao tiver nada no localStorage, ele pega a preferencia do sistema
    else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
      this.darkMode = prefersDark.matches;
    }

    this.applyTheme();
  }

  private applyTheme() {
    // aplica a classe de tema no documento
    document.body.classList.toggle('dark', this.darkMode);

    // alterna entre os temas
    if (this.darkMode) {
      document.body.setAttribute('color-theme', 'dark');
    } else {
      document.body.removeAttribute('color-theme');
    }
  }

  //salva a preferencia do tema
  private saveThemePreference() {
    localStorage.setItem('darkMode', this.darkMode.toString());
  }
}
