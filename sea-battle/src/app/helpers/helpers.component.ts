import { Component, OnInit } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HelpersService } from './helpers.service';

@Component({
  selector: 'app-helpers',
  templateUrl: './helpers.component.html',
  styleUrls: ['./helpers.component.scss']
})
export class HelpersComponent implements OnInit {
  public helpers;
  public number;
 
  constructor(private helpersService: HelpersService) {
    
}
  ngOnInit() {
    
  }

  Helpers(){
    this.number = Math.floor(Math.random() * Math.floor(12));;
    this.helpersService.getHelpers().subscribe(helpers => {
      return this.helpers = String(helpers[this.number].text);
    });
  }
}
