import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SectionInfo } from '../../classes/section-info'
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @Input() textList: Array<SectionInfo>;
  @Input() scriptNumber

  pager
  pagerCounter
  routePathParam;

  constructor(public router: Router, private route: ActivatedRoute) {  }

  ngOnInit() {
    if (this.scriptNumber == "home") {
      this.pager = "01"
    } else {
      this.pager = (parseInt(this.scriptNumber) + 1).toString().padStart(2, "0")
    }
  }

  nextPage() {
    this.pagerCounter = parseInt(this.pager)
    if (this.pagerCounter < this.textList.length) {
      this.pagerCounter++;
      this.router.navigateByUrl(`scripts/${(this.pagerCounter - 1).toString().padStart(2, "0")}`)
      this.pager = this.pagerCounter.toString().padStart(2, "0")
    }
  }

  previousPage() {
    this.pagerCounter = parseInt(this.pager)
    if (this.pagerCounter != 1) {
      this.pagerCounter--
      if (this.pagerCounter === 1) {
        this.router.navigate([''])
      } else {
        this.router.navigateByUrl(`scripts/${(this.pagerCounter - 1).toString().padStart(2, "0")}`)
      }
      this.pager = this.pagerCounter.toString().padStart(2, "0")
    }
  }
}
