import { Component, OnInit, Input } from '@angular/core';
import { ResourceData } from '../../data/resource-data';
// import { SearchComponent } from '../search/search.component';

@Component({
  selector: 'app-carousel-card',
  templateUrl: './carousel-card.component.html',
  styleUrls: ['./carousel-card.component.css']

})
export class CarouselCardComponent implements OnInit {
  @Input() resource:ResourceData;

  constructor() { }

  ngOnInit() {
  }
  
  

}
