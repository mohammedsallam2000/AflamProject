import { Component } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent {
  imgPrefix : string = 'https://image.tmdb.org/t/p/w500/'
trendingPersons : any[] = []
constructor(private _MoviesService : MoviesService){
  _MoviesService.getTrending('person').subscribe((data)=>{
  this.trendingPersons = data.results
  
  })
}
}
