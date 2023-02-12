import { Component, Input } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
// import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-homeheader',
  templateUrl: './homeheader.component.html',
  styleUrls: ['./homeheader.component.scss']
})
export class HomeheaderComponent {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    margin : 8,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 8
      }
    },
    nav: true
  }
  imgPrefix : string = 'https://image.tmdb.org/t/p/w500/'

 @Input() parentData : any[] = []

  // constructor(private _MoviesService : MoviesService){
  //   _MoviesService.getTrending('movie').subscribe((data)=>{
  //     this.trndingMovies = data.results.slice(0,10)
      
  //     });
  // }
}
