import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieinfoReviewsPageComponent } from './movieinfo-reviews-page/movieinfo-reviews-page.component';
import { HomepagePageComponent } from './homepage-page/homepage-page.component';
import { SearchpagePageComponent } from './searchpage-page/searchpage-page.component';
import { ViewmovieslistPageComponent } from './viewmovieslist-page/viewmovieslist-page.component';
import { AdvancedqueriesPageComponent } from './advancedqueries-page/advancedqueries-page.component';
import { EditreviewPageComponent } from './editreview-page/editreview-page.component';
import { ViewmoviesbytitlePageComponent } from './viewmoviesbytitle-page/viewmoviesbytitle-page.component';
import { MovieActorStatsComponent } from './movie-actor-stats/movie-actor-stats.component';

const routes: Routes = [
  {
    path: 'movies/:releasedAfter/:minRating/:genre/:minLen',
    component: ViewmovieslistPageComponent
  },
  // {
  //   path: 'movies/:movieTitle',
  //   component: ViewmoviesbytitlePageComponent
  // },
  {
    path: 'movies/title/:movieTitle',
    component: ViewmoviesbytitlePageComponent
  },
  {
    path: 'movies/:contentId',
    component: MovieinfoReviewsPageComponent
  },
  {
    path: 'search',
    component: SearchpagePageComponent
  },
  {
    path: '',
    component: HomepagePageComponent
  },
  {
    path: 'edit/:reviewId',
    component: EditreviewPageComponent
  },
  {
    path: 'advanced',
    component: AdvancedqueriesPageComponent
  },
  {
    path: 'stats',
    component: MovieActorStatsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
