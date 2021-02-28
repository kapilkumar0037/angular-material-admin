import { Component, Input, OnInit } from '@angular/core';
import { SideNavItem } from '../../models/side-nav-models';

@Component({
  selector: 'app-side-nav-tem',
  templateUrl: './side-nav-tem.component.html',
  styleUrls: ['./side-nav-tem.component.scss']
})
export class SideNavTemComponent implements OnInit {
 @Input() sideNavItem!: SideNavItem;
  constructor() { }

  ngOnInit(): void {
  }

}
