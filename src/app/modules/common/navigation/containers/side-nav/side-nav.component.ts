import { Component, OnInit } from '@angular/core';
import { SIDE_NAV_DATA } from '../../data/side-nav-data';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
  sideNavItems= SIDE_NAV_DATA;
  constructor() { }

  ngOnInit(): void {
  }

}
