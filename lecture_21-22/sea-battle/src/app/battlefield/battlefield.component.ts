import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-battlefield',
  templateUrl: './battlefield.component.html',
  styleUrls: ['./battlefield.component.scss']
})
export class BattlefieldComponent implements OnInit {
  public massive: Array<number>;

  constructor() {
    this.massive = this.newMassive(10);
  }

  ngOnInit() {

  }
  test(x: number, y: number) {
    console.log(x, y);
  }
  newMassive(n: number) {
    return Array.from({ length: n }, (v, k) => k + 1);
  }
}
