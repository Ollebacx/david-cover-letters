import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContactService } from 'src/app/shared/contact.service';
import { trigger, state, animate, transition, style } from '@angular/animations'

@Component({
  selector: 'app-contact-form',
  animations: [
    trigger('toggle', [
      state('true', style({
        opacity: 1,
        transform: "translateY(-100px)",
      })),
      state('void', style({
        opacity: 0,
        transform: "translateY(0px)",

      })),
      transition(':enter', animate('500ms ease-in-out')),
      transition(':leave', animate('500ms ease-in-out'))
    ])
  ],
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  fullName: string = '';
  subject: string = '';
  message: string = '';
  FormStatus: boolean = true;

  constructor(public router: Router, private contact: ContactService) { }

  ngOnInit(): void {

  }
}
