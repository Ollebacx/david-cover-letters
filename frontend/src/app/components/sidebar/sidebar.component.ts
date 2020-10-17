import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SectionInfo } from '../../classes/section-info'
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @Input() textList: Array<SectionInfo>;
  @Input() pageNumber
  @Output()
  transitionDirection = new EventEmitter<object>();

  constructor(public router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    let showElements = {
      change: true
    }
    this.transitionDirection.emit(showElements);
  }

  nextPage() {
    let showElements = {
      change: false
    }
    this.transitionDirection.emit(showElements);
    if (this.pageNumber < this.textList.length) {
      this.pageNumber++;
      setTimeout(() => {
        this.router.navigateByUrl(`scripts/${this.pageNumber}`)
      }, 500);
    } else {
      this.pageNumber = 1
      setTimeout(() => {
        this.router.navigateByUrl(`scripts/${this.pageNumber}`)
      }, 500);
    }
  }

  previousPage() {
    let showElements = {
      change: false
    }
    this.transitionDirection.emit(showElements);
    if (this.pageNumber == 1) {
      this.pageNumber = this.textList.length
      setTimeout(() => {
        this.router.navigateByUrl(`scripts/${this.pageNumber}`)
      }, 500);
    } else {
      this.pageNumber--
      setTimeout(() => {
        this.router.navigateByUrl(`scripts/${this.pageNumber}`)
      }, 500);
    }
  }
}
