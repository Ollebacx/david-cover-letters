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
  }

  nextPage() {
    let transitionDirectionObject = {
      offsetEnter: 100,
      offsetLeave: -100
    }
    this.transitionDirection.emit(transitionDirectionObject);
    console.log(transitionDirectionObject);
    if (this.pageNumber < this.textList.length) {
      this.pageNumber++;
      this.router.navigateByUrl(`scripts/${this.pageNumber - 1}`)
    } else {
      this.pageNumber = 1
        this.router.navigate([''])
    }
  }

  previousPage() {
    let transitionDirectionObject = {
      offsetEnter: -100,
      offsetLeave: 100
    }
    this.transitionDirection.emit(transitionDirectionObject);
    if (this.pageNumber != 1) {
      this.pageNumber--
      if (this.pageNumber === 1) {
        this.router.navigate([''])
      } else {
        this.router.navigateByUrl(`scripts/${this.pageNumber - 1}`)
      }
    } else {
      this.pageNumber = 9
      this.router.navigateByUrl(`scripts/${this.pageNumber - 1}`)
    }
  }
}
