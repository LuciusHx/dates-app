import { Component, Input } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class HeaderComponent {
  @Input() title: string;
  @Input() backButton: string; //vai receber a rota quando o usuario quiser voltar
  @Input() isModal: boolean; //verificar se esta usando o cabeçalho
  @Input() color: string; //atribuir uma cor ao cabecalho
  @Input() centerTitle: boolean;

  darkMode: boolean;
  constructor() {}

  setTheme(darkMode: boolean) {
    this.darkMode = darkMode;
  }
}
