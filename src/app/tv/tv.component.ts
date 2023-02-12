import { Component } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.scss']
})
export class TvComponent {
  imgPrefix : string = 'https://image.tmdb.org/t/p/w500/'
trndingTv : any[] = []
constructor(private _MoviesService : MoviesService){
  _MoviesService.getTrending('tv').subscribe((data)=>{
  this.trndingTv = data.results
  
  })
}
}
