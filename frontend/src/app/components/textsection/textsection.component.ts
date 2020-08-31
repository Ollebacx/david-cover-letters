import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { trigger, state, style, animate, transition } from '@angular/animations';
@Component({
  selector: 'app-textsection',
  templateUrl: './textsection.component.html',
  styleUrls: ['./textsection.component.scss'],
  animations: [
    trigger(
      'inOutAnimation',
      [
        transition(
          ':enter',
          [
            style({ opacity: 0 }),
            animate('0.5s ease-out',
              style({ opacity: 1 }))
          ]
        ),
        transition(
          ':leave',
          [
            style({ opacity: 1 }),
            animate('0.5s ease-in',
              style({ opacity: 0 }))
          ]
        )
      ]
    )
  ]
})

export class TextsectionComponent implements OnInit {

  @Input() title: string;
  @Input() text: string;
  @Input() bgColor: string;
  @Input() textColor: string;
  @Input() date: string;
  winScroll;
  height;
  scrolled = 0;
  hasScroll;
  element
  style

  onScroll(event: any) {
    console.log('scrolled');
    this.winScroll = event.target.scrollTop;
    this.height = event.target.scrollHeight - event.target.offsetHeight;
    this.scrolled = (this.winScroll / this.height) * 100;
    document.getElementById("myBar").style.width = this.scrolled + "%";
    if (event.target.offsetHeight + event.target.scrollTop >= event.target.scrollHeight) {
      console.log("End");
    }
  }
  constructor() {
  }

  ngOnInit(): void {
    console.log(this.hasScroll);

    var elem = document.getElementById('body-text');
    if (elem.scrollHeight > (window.innerHeight || document.documentElement.clientHeight)) {
      // Bottom is out of viewport
      this.hasScroll = true;
      console.log(this.hasScroll);
    }
    else {
      this.hasScroll = false;
    }

  }
}


