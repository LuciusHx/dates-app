import { Component, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { SharedModule } from 'src/app/shared/shared.module';

import { LoginFormGroup } from 'src/app/forms/LoginForm';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class AuthPage implements OnInit {
  
  public form: FormGroup;

  constructor() { this.form = LoginFormGroup(); }

  ngOnInit() {
  }

}
