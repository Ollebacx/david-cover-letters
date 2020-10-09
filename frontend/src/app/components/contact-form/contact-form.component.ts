import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContactService } from 'src/app/shared/contact.service';
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
      transition(':enter', animate('700ms 500ms ease-in-out')),
      transition(':leave', animate('700ms ease-in-out'))
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
      transition(':enter', animate('700ms 1500ms ease-in-out')),
      transition(':leave', animate('700ms ease-in-out'))
    ]),
    trigger('comment-1', [
      state('true', style({
        transform: "translateY(0px)",
      })),
      state('void', style({
        transform: "translateY(200px)",
      })),
      transition(':enter', animate('1000ms ease-in-out')),
      transition(':leave', animate('1000ms ease-in-out'))
    ]),
    trigger('comment-2', [
      state('true', style({
        transform: "translateY(0px)",
      })),
      state('void', style({
        transform: "translateY(300px)",
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
  constructor(public router: Router, private contact: ContactService) { }

  ngOnInit(): void {
  }
}
