import { Component, OnInit, Input } from '@angular/core';
import { trigger } from '@angular/animations';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-textsection',
  templateUrl: './textsection.component.html',
  styleUrls: ['./textsection.component.scss'],
  animations: [trigger('inOutAnimation', [])]
})

export class TextsectionComponent implements OnInit {

  @Input() title: string;
  @Input() text: string;
  @Input() bgColor: string;
  @Input() textColor: string;
  @Input() date: string;

  onScroll(event: any) {
    if (event.target.offsetHeight + event.target.scrollTop >= event.target.scrollHeight) {
      console.log("End");
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
