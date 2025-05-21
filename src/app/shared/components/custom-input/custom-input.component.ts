import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule
  ]
})
export class CustomInputComponent implements OnInit {

  @Input() label: string;
  @Input() icon: string;
  @Input() type: string;
  @Input() autocomplete: string;
  @Input() errorText: string;

  constructor() {}

  ngOnInit() {}
}
