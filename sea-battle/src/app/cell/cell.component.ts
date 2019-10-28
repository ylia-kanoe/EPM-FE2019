import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.scss']
})

export class CellComponent implements OnInit {
  public size;
  ship(size) {
    this.size = size;
  }
    constructor() { }
    ngOnInit() {
      this.ship(4);
      this.ship(3);
      this.ship(2);
      this.ship(1);
    }

  }
