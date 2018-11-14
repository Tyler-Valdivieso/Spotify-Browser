import { Component, OnInit, Input } from '@angular/core';
import { TrackFeatures } from '../../data/track-features';

@Component({
  selector: 'app-thermometer',
  templateUrl: './thermometer.component.html',
  styleUrls: ['./thermometer.component.css']
})
export class ThermometerComponent implements OnInit {
  //TODO: define Input fields and bind them to the template.
  @Input() featureTypes:TrackFeatures;

  constructor() { }

  ngOnInit() {
  }

}
