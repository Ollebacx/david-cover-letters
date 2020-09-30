  import { Component } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { SectionInfo } from './classes/section-info'
import { map, mapTo, filter, switchMap, tap, startWith, pairwise } from 'rxjs/operators';
import { slideInAnimation } from './animations/animation'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    slideInAnimation
  ]
})
export class AppComponent {
  title = 'frontend';
  offsetEnter: number = 100
  offsetLeave: number = -100
  constructor(public router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
  }
  
  prepareRoute(outlet) {
    // console.log(outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation);
    if (outlet.activatedRoute.snapshot.params.id) {
      return outlet.activatedRoute.snapshot.params.id; //apply animation when route params id changes
    } else {
      return outlet.activatedRouteData.animation;
    }
  }

  setAnimationParams(transitionDirection) {
    this.offsetEnter = transitionDirection.offsetEnter;
    this.offsetLeave = transitionDirection.offsetLeave;
  }
}
