import { Component, OnInit, OnDestroy } from '@angular/core';
import { ResizeService } from '../../shared/resize.service';

@Component({
  selector: 'app-left-sidebar',
  templateUrl: './left-sidebar.component.html',
  styleUrls: ['./left-sidebar.component.scss']
})
export class LeftSidebarComponent implements OnInit, OnDestroy {

  private resizeSubscription;
  public windowWidth;

  constructor(private resizeService: ResizeService) { }

  ngOnInit(): void {
    this.windowWidth = window.innerWidth;
    this.resizeSubscription = this.resizeService.onResize$
      .subscribe(size => {
        console.log(size.frames.innerWidth);
        this.windowWidth = size.frames.innerWidth;
      });
  }

  ngOnDestroy(): void {
    if (this.resizeSubscription) {
      this.resizeSubscription.unsubscribe();
    }
  }

}
