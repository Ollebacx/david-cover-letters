import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { SectionInfo } from './classes/section-info'
import { map, mapTo, filter, switchMap, tap, startWith, pairwise } from 'rxjs/operators';
import { slideInAnimation } from './animations/animation'
import { UrlService } from "./shared/url.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    slideInAnimation
  ]
})
export class AppComponent implements OnInit {
  title = 'frontend';
  offsetEnter: number = 100
  offsetLeave: number = -100
  previousUrl: string = null;
  currentUrl: string = null;

  constructor(public router: Router, private route: ActivatedRoute, private urlService: UrlService) {}
  ngOnInit(): void {
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.previousUrl = this.currentUrl;
      this.currentUrl = event.url;
      this.urlService.setPreviousUrl(this.previousUrl);
    })
  }

  prepareRoute(outlet) {
    // console.log(outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation);
    // if (outlet.activatedRoute.snapshot.params.id) {
    //   return  outlet.activatedRoute.snapshot.params.id; //apply animation when route params id changes
    // } else {
    console.log(outlet);
      return outlet.activatedRouteData.animation;
    }
  // }

  setAnimationParams(transitionDirection) {
    this.offsetEnter = transitionDirection.offsetEnter;
    this.offsetLeave = transitionDirection.offsetLeave;
  }
}
