import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent {
  id : string = ''
  movieDetails:any = {};
  imgPrefix : string = 'https://image.tmdb.org/t/p/w500/'

constructor(private _ActivatedRoute:ActivatedRoute,private _MoviesService:MoviesService){
 this.id =  _ActivatedRoute.snapshot.params.id
 _MoviesService.getMvieDetails(this.id).subscribe((Data)=>{
this.movieDetails = Data

 })
}
}
