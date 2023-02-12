import { Component } from '@angular/core';
import { MoviesService } from '../movies.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.scss']
})
export class PersonDetailsComponent {
  id: string = ''
  personDetails: any = {};
  imgPrefix: string = 'https://image.tmdb.org/t/p/w500/'

  gender : string = ''
  constructor(private _MoviesService: MoviesService, private _ActivatedRoute: ActivatedRoute) {
    this.id = _ActivatedRoute.snapshot.params.id;

    _MoviesService.getPersonDetails(this.id).subscribe((data) => {
      this.personDetails = data
      if(data.gender == 1)
      {
        this.gender = 'Female'
      }
      else{
        this.gender = 'Male'

      }
    })
  }
}
