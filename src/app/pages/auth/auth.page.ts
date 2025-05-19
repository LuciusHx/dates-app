import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    SharedModule
  ]
})
export class AuthPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
