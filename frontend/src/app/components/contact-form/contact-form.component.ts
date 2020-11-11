import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { trigger, state, animate, transition, style } from '@angular/animations'

@Component({
  selector: 'app-contact-form',
  animations: [
    trigger('subject-1', [
      state('true', style({
        // opacity: 1,
        transform: "translateY(0px)",
      })),
      state('void', style({
        // opacity: 0,
        transform: "translateY(200px)",

      })),
      transition(':enter', animate('1500ms 500ms ease-in-out')),
      transition(':leave', animate('1500ms ease-in-out'))
    ]),
    trigger('subject-2', [
      state('true', style({
        // opacity: 1,
        transform: "translateY(0px)",
      })),
      state('void', style({
        // opacity: 0,
        transform: "translateY(200px)",

      })),
      transition(':enter', animate('1500ms 1500ms ease-in-out')),
      transition(':leave', animate('1500ms ease-in-out'))
    ]),
    trigger('comment-1', [
      state('true', style({
        transform: "translateY(0px)",
      })),
      state('void', style({
        transform: "translateY(200px)",
      })),
      transition(':enter', animate('1000ms ease-in-out')),
      transition(':leave', animate('1000ms 500ms ease-in-out'))
    ]),
    trigger('comment-2', [
      state('true', style({
        transform: "translateY(0px)",
        width: '100%'
      })),
      state('void', style({
        transform: "translateY(200px)",
      })),
      transition(':enter', animate('1000ms 500ms ease-in-out')),
      transition(':leave', animate('1000ms ease-in-out'))
    ])
  ],
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  fullName: string = '';
  subject: string = '';
  message: string = `Hola David, ¿cómo va? \n\nTe escribo para contarte que...`;
  isSent: boolean = false;

  constructor(public router: Router) { }

  ngOnInit(): void {
  }
  mail() {
    if (this.subject.length > 8 && this.fullName.length > 2 && this.message.length > 50) {
      setTimeout(() => {
        window.location.href = `mailto:dav.ollebac@gmail.com?subject=${this.subject}&body=${this.message}%0D%0AUn saludo, %0D%0${this.fullName}.`
        setTimeout(() => {
          this.fullName = '';
          this.subject = '';
          this.message = `Hola David, ¿cómo va? \n\nTe escribo para contarte que...`;
          this.isSent = true;
        }, 300);
      }, 800)
    }
  }
  openLinkedIn() {
    setTimeout(() => {
      window.open("https://www.linkedin.com/in/david-cabello-oquendo/", '_blank');
    }, 300);
  }
}
