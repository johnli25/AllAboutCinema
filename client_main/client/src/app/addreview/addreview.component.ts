import { Component, OnInit } from '@angular/core';
import { ReviewsService } from '../reviews.service';
import { Review } from '../review';
import { ActivatedRoute } from '@angular/router';
import {v4 as uuid} from "uuid";
import * as numberGenerator from "number-generator";

@Component({
  selector: 'app-addreview',
  template: `
    <form>
      <h1 class="is-size-4 mt-5 pt-5">Add Your Review</h1>
      <div class="field">
        <label class="label">Review Text</label>
        <div class="control">
          <textarea class="textarea" name="reviewText" [(ngModel)]="reviewText" placeholder="Textarea"></textarea>
        </div>
      </div>

      <div class="field">
        <label class="label">Select rating</label>
        <div class="control">
          <div class="select">
            <select [(ngModel)]="rating" name="rating" name="rating">
              <option [value]="0">0</option>
              <option [value]="0">1</option>
              <option [value]="0">2</option>
              <option [value]="0">3</option>
              <option [value]="0">4</option>
              <option [value]="0">5</option>
            </select>
          </div>
        </div>
      </div>

      <div class="field">
        <label class="label">What is your userId? (You will be identified by the combination of your userId and password. Make sure to remember this; you will use this name to receive recommendations later!)</label>
        <div class="control">
          <textarea class="input" name="userId" [(ngModel)]="userId" placeholder="Enter your userId (number)"></textarea>
        </div>
      </div>
      <div class="field">
        <label class="label">Enter first name</label>
        <div class="control">
          <textarea class="input" name="firstName" [(ngModel)]="firstName" placeholder="Kevin"></textarea>
        </div>
      </div>
      <div class="field">
        <label class="label">Enter last name</label>
        <div class="control">
          <textarea class="input" name="lastName" [(ngModel)]="lastName" placeholder="Smith"></textarea>
        </div>
      </div>
      <div class="field">
        <label class="label">Enter Password (If this is your first time making a review, your account will be created. Make sure to remember this password.)</label>
        <div class="control">
          <textarea class="input" name="password" [(ngModel)]="password" placeholder="*****"></textarea>
        </div>
      </div>



      <div class="field is-grouped">
        <div class="control">
          <input type="submit" (click)="addReview()" class="button is-link" value="Submit Review"/>
        </div>
      </div>

    </form>
  `,
  styles: [
  ]
})
export class AddreviewComponent implements OnInit {

 
  rating:number = 4;
  reviewText:string = '';
  contentId:string = '';
  idGenerator:any = null
  
  // credential
  userId:number = 0
  firstName:string = ''
  lastName:string = ''
  password:string = ''


  constructor(private reviewsService:ReviewsService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.contentId = <string>this.route.snapshot.paramMap.get('contentId');
    var gen = numberGenerator.aleaRNGFactory()
    this.idGenerator = gen
    console.log('random test: ', gen.uInt32())
    console.log('random test: ', gen.uInt32())
  }

  addReview() {
    console.log('uuid test: ' + uuid())
    const newReview = {
      content_id: `${this.contentId}`,
      // user_id: '1',
      review_id: `${Math.ceil(Math.random() * 100000 )}`,
      review_text: `${this.reviewText}`,
      rating: this.rating,
      user_id: `${this.userId}`,
      first_name: this.firstName,
      last_name: this.lastName,
      password: this.password
    }
    this.reviewsService.addReview(newReview)
      .subscribe(review => {
        // console.log('added review')
        console.log(review)
      })
  }
}
