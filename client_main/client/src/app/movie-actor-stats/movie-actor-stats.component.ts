import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { Observable } from 'rxjs';
import { MoviesService } from '../movies.service';
import { GraphComponent } from '../graph/graph.component';

import Chart from 'chart.js/auto';

@Component({
  selector: 'app-movie-actor-stats',
  template: `
    <h2 style="color: blue" class="is-size-3 mt-5">
      Movie and Actors review ratings! 
    </h2>
    <table class="table">
      <thead>
        <tr>
          <th><abbr title="Played">Actor Name</abbr></th>
          <th><abbr title="Won">Average User Review Rating</abbr></th>
          <!-- <th><abbr title="Drawn">Movie Name</abbr></th> -->
          <th><abbr title="Lost">Average Movie Rating</abbr></th>
        </tr>
      </thead>

      <tbody >
      <tr *ngFor="let result of movieActorRatingTable">

        <th>{{result.actor_name}}</th>
        <td><a href="https://en.wikipedia.org/wiki/Leicester_City_F.C." title="Leicester City F.C.">{{result.avg_movie_rating}}</a>
        </td>
        <td>{{result.avg_review_rating}}</td>
      </tr>
      </tbody>
    </table>
    <div class="chart-container">
      Stats Page
          <canvas  id="MyChart" >{{ chart }}</canvas>
    </div>
  `,
  styles: [
  ]
})
export class MovieActorStatsComponent implements OnInit {
  chart:any = null
  movieActorRatingTable: any =[]

  actors:Array<string> = []
  movieRatings:Array<string> = []
  reviewRatings:Array<string> = []

  constructor(private moviesService:MoviesService) { }

  ngOnInit(): void {
    this.onTestProcedure()
    this.createChart()
  }

  // this.reviewsService.addReview(newReview)
  //     .subscribe(review => {
  //       // console.log('added review')
  //       console.log(review)
  //     })
  // }

  onTestProcedure() {
    this.moviesService.getTestProcedure()
      .subscribe(result => {
        console.log(Object (result)[0])
        this.movieActorRatingTable = (Object)(result)[0]
        for (let i = 0; i < (Object)(result)[0].length; i++) {
          this.actors.push((Object)(result)[0][i].actor_name);
          console.log((Object)(result)[0][i].movie_rating)
          this.movieRatings.push((Object)(result)[0][i].movie_rating);
          this.reviewRatings.push((Object)(result)[0][i].review_rating);
        } 
        console.log('actors: ' + this.actors)
        console.log('movie ratings' + this.movieRatings)
      })
  }

  createChart(){
    this.chart = new Chart("MyChart", {
      type: 'bar', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: this.actors, 
	       datasets: [
        //  {
        //   label: 'Tom Hanks',
        //   review_rating: 4,
        //   movie_rating: 9
        //  }
          {
            label: "Average Movie Rating",
            data: ['7.074999999999999','7.042857142857143', '7.028571428571429'], //, this.movieRatings, 
            backgroundColor: 'blue'
          },
          {
            label: "Average Review Rating",
            data: ['4.359999999999999', '4.3500000000000005', '4.3500000000000005'], //this.reviewRatings, 
            backgroundColor: 'limegreen'
          }  
//           4.359999999999999
// Gerald Ames	7.042857142857143	4.3500000000000005
// Harry Carr	7.028571428571429	4.3500000000000005
        ]
      },
      options: {
        aspectRatio:2.5
      }
      
    });
  }

 

}
