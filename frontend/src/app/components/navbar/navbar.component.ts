import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Output()
  transitionDirection = new EventEmitter<object>();
  constructor(public router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }
  goHome() {
    let transitionDirectionObject = {
      offsetEnter: -100,
      offsetLeave: 100
    }
    this.transitionDirection.emit(transitionDirectionObject);
    this.router.navigate([''])
  }
}
