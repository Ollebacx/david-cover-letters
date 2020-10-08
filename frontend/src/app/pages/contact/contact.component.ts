import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UrlService } from '../../shared/url.service';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  urlBack
  previousUrl: Observable<string> = this.urlService.previousUrl$;

  constructor(public router: Router, private urlService: UrlService) { }

  ngOnInit(): void {
    this.urlService.previousUrl$
      .subscribe((previousUrl: string) => {
        this.urlBack = previousUrl;
      });
  }
  close() {
    if (this.urlBack) {
      this.router.navigateByUrl(`${this.urlBack}`)
    } else {
      this.router.navigateByUrl('/')
    }
  }
}
