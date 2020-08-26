import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-textsection',
  templateUrl: './textsection.component.html',
  styleUrls: ['./textsection.component.scss']
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
