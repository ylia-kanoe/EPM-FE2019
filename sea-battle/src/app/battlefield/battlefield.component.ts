import { Component, OnInit } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { InfoService } from './info.service';

@Component({
  selector: 'app-battlefield',
  templateUrl: './battlefield.component.html',
  styleUrls: ['./battlefield.component.scss']
})
export class BattlefieldComponent implements OnInit {
  public infoBattle;
  public massive: Array<number>;

  constructor(private infoService: InfoService) {
    this.infoService.getInfo().subscribe(infoBattle => {
      return  this.massive = this.newMassive(infoBattle[0].playingField[0].normalField)}); // min field 5, normalField 10, maxfield 100 
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
