import { Component } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  imgPrefix : string = 'https://image.tmdb.org/t/p/w500/'
trndingMovies : any[] = []
trndingTv : any[] = []
trndingPeople : any[] = []

constructor(private _MoviesService : MoviesService){
_MoviesService.getTrending('movie').subscribe((data)=>{
this.trndingMovies = data.results.slice(0,10)

});
_MoviesService.getTrending('tv').subscribe((data)=>{
  this.trndingTv = data.results.slice(0,10)
  
  });
  _MoviesService.getTrending('person').subscribe((data)=>{
    this.trndingPeople = data.results.slice(0,10)
    
    })
}

}
