import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

export const componentsList = [
    'aaaaaa', 'bsssss', 'cdddd', 'aaaaad', 'ssssse', 'ssssf', 'sssssd'
];

@Component({
  selector: 'app-ngbd-side-nav',
  templateUrl: './ngbd-side-nav.component.html',
  styleUrls: ['./ngbd-side-nav.component.css']
})
export class NgbdSideNavComponent implements OnInit {
    @Input() activeTab: String;
    components = componentsList;
  constructor(private router: Router) { }

  ngOnInit() {
  }

    isActive(currentRoute: any[], exact = true): boolean {
        return this.router.isActive(this.router.createUrlTree(currentRoute), exact);
    }
}
