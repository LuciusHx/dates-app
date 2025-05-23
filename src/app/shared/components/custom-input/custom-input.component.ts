import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, ReactiveFormsModule],
})
export class CustomInputComponent implements OnInit {
  @Input() control: FormControl;
  @Input() icon: string;
  @Input() type: string;
  @Input() autocomplete: string;
  @Input() title: string;

  isPassword: boolean;

  constructor() {}

  ngOnInit() {
    if (this.type == 'password') {
      this.isPassword = true;
    }
  }
}
