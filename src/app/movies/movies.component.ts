import { Component } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent {
  imgPrefix : string = 'https://image.tmdb.org/t/p/w500/'
trndingMovies : any[] = []
constructor(private _MoviesService : MoviesService){
  _MoviesService.getTrending('movie').subscribe((data)=>{
  this.trndingMovies = data.results
  
  })
}
}
