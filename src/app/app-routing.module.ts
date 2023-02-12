import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MoviesComponent } from './movies/movies.component';
import { NetworkComponent } from './network/network.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { PeopleComponent } from './people/people.component';
import { RegisterComponent } from './register/register.component';
import { TvComponent } from './tv/tv.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { PersonDetailsComponent } from './person-details/person-details.component';

const routes: Routes = [

  {path : '' ,redirectTo:'home',pathMatch:'full'},
  {path : 'home' ,component : HomeComponent},
  {path : 'about' ,component : AboutComponent},
  {path : 'movies' ,component : MoviesComponent},
  {path : 'tv' ,component : TvComponent},
  {path : 'network' ,component : NetworkComponent},
  {path : 'people' ,component : PeopleComponent},
  {path : 'login' ,component : LoginComponent},
  {path : 'register' ,component : RegisterComponent},
  {path : 'movieDetails/:id' ,component : MovieDetailsComponent},
  {path : 'personDetails/:id' ,component : PersonDetailsComponent},

  {path : '**' ,component : NotfoundComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
