import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-tile',
  templateUrl: './card-tile.component.html',
  styleUrls: ['./card-tile.component.scss']
})
export class CardTileComponent implements OnInit {
  @Input() icon!: string;
  @Input() styleClass!: string;
  constructor() { }

  ngOnInit(): void {
  }

}
