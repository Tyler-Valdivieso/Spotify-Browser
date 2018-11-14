import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArtistData } from '../../data/artist-data';
import { TrackData } from '../../data/track-data';
import { AlbumData } from '../../data/album-data';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artist-page',
  templateUrl: './artist-page.component.html',
  styleUrls: ['./artist-page.component.css']
})
export class ArtistPageComponent implements OnInit {
	artistId:string;
	artist:ArtistData;
	relatedArtists:ArtistData[];
	topTracks:TrackData[];
	albums:AlbumData[];

  constructor(private route: ActivatedRoute, private spotifyService:SpotifyService) { }

  ngOnInit() {
    var self = this;
    this.artistId = this.route.snapshot.paramMap.get('id');
    this.spotifyService.getArtist(this.artistId).then(function(data){self.artist=data});
    this.spotifyService.getRelatedArtists(this.artistId).then(function(data){self.relatedArtists=data});
    this.spotifyService.getTopTracksForArtist(this.artistId).then(function(data){self.topTracks=data});
    this.spotifyService.getAlbumsForArtist(this.artistId).then(function(data){self.albums=data});
    //TODO: Inject the spotifyService and use it to get the artist data, related artists, top tracks for the artist, and the artist's albums
  }

}