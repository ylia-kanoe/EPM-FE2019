import { Component, OnInit } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HelpersService } from './helpers.service';
import { timer } from 'rxjs';


@Component({
  selector: 'app-helpers',
  templateUrl: './helpers.component.html',
  styleUrls: ['./helpers.component.scss']
})
export class HelpersComponent implements OnInit {
  public helpers;
  private number;
 
  constructor(private helpersService: HelpersService) {

  }
  ngOnInit() {
    timer(0, 3000).subscribe(() => {
      this.helpersService.getHelpers().subscribe(helpers => {
        this.number = Math.floor(Math.random() * Math.floor(helpers.length));
        return this.helpers = helpers[this.number].text;
      });
    });

  }

  /*Helpers() {
    this.number = Math.floor(Math.random() * Math.floor(12));;
    this.helpersService.getHelpers().subscribe(helpers => {
      return this.helpers = String(helpers[this.number].text);
    });
    */
}
