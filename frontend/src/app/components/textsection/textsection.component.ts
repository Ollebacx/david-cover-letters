import { Component, OnInit, Input } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';
@Component({
  selector: 'app-textsection',
  templateUrl: './textsection.component.html',
  styleUrls: ['./textsection.component.scss'],
  animations: [
    trigger('flyInOut', [
      state('in', style({
        transform: 'translateX(0)'
      })),
      transition(':enter', [
        style({ transform: 'translateX(-100%' }),
        animate(1000)
      ]),
      transition(':leave', [
        animate(1000, style({ transform: 'translateX(100%' }))
      ])
    ])
  ]
})
export class TextsectionComponent implements OnInit {
  @Input() title: string;
  @Input() text: string;
  @Input() bgColor: string;
  @Input() textColor: string;
  @Input() id: number;
  @Input() date: string;

  constructor() { }

  ngOnInit(): void {
  }

}
