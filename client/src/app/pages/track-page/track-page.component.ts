import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArtistData } from '../../data/artist-data';
import { TrackData } from '../../data/track-data';
import { AlbumData } from '../../data/album-data';
import { TrackFeatures } from '../../data/track-features';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-track-page',
  templateUrl: './track-page.component.html',
  styleUrls: ['./track-page.component.css']
})
export class TrackPageComponent implements OnInit {
	trackId:string;
	track:TrackData;
  audioFeatures:TrackFeatures;
  featureTypes = TrackFeatures.FeatureTypes;

  constructor(private route: ActivatedRoute, private spotifyService:SpotifyService) { }

  ngOnInit() {
    var self = this;
    this.trackId = this.route.snapshot.paramMap.get('id');
    this.spotifyService.getTrack(this.trackId).then(function(data){self.track=data});
    this.spotifyService.getAudioFeaturesForTrack(this.trackId).then(function(data){self.audioFeatures=data});
  	//TODO: Inject the spotifyService and use it to get the track data and it's audio features
  }

}
