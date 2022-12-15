# Project Title
ALL ABOUT CINEMA
## Project Summary
ALL ABOUT CINEMA is an all-in-one web application that helps movie lovers select what film they want to watch next. This may depend on what movies they’ve watched in the past, which will be an input to the application, what genres the viewer likes, what directors they’ve liked in the past, and the actors they enjoy watching. If a direct search does not yield satisfying results, users can browse through what movies a specific director has worked on, and the average rating for each director. In the homepage, there will be recommendations for movies of  genres different from what the user has watched in the past but includes some of the same actors or has a high enough average rating. 

Other features include visualization of the user’s preferences through graphs comparing a number categories from the data of the reviews the user has entered. Mainly, the purpose of this application is to be a recommendation engine that also helps users to browse movies or TV shows and find useful information.

## Description
We are building a movie and TV shows recommendation service that will query top suggested movies and shows based on various (mostly user-inputted) criteria ranging from genre, length, time period/era, actors/actresses, directors, and reviews. Users will also have the ability to submit their own reviews and ratings for movies and shows, which will also factor into the movie/show recommendation querying process. 

We will maintain a database schema with at least the following relations: MOVIES, SHOWS, ACTORS, REVIEWS, and USER. As for attributes, each relation aforementioned will possess their own set of attributes. Some will be entirely unique while others will be similar/or even the same across the relations. 

## Usefulness
Our application will be very useful for movie lovers and show bingers everywhere. In this generation, entertainment is more accessible than ever before, and we want to make it easier for everyone to find the next best show to watch and the perfect movie to end the day. The application will be able to take in requests such as genres, ratings, actors or actresses, companies, movie running time or season and episode length, and even release year to give users a ranking of the best shows or movies to consider. It will be more specific and accurate compared to a Google search and more efficient than a Rotten Tomatoes or IMDB Search. For example, a user may want to see Will Smith Movies with the shortest run time from the year 2000 to the present. The first three that the application would output would be Men In Black II, Shark Tale, and Hancock. More criteria could be added to narrow the search further. We will also give users the ability to leave their own ratings and reviews for movies and shows.

There are other websites that will offer movie suggestions, but many of them do not have the same criteria ours will have in terms of narrowing down a search. One website titled PickAMovieForMe.com allows users to choose movies based on a top genres or top actors list which are both not very extensive. It also has a “Movie Picker” selection which will take you through a series of questions in order to give you a single suggested movie. The user’s options are clearly limited with this website as they may have an actor or actress in mind that is not listed in the “Top Actors” menu or may not like or have already seen the movie that the “Movie Picker” suggests. Our application is unique in that it will give a list of movies based on what the user inputs and how they want them ranked. Users will also be able to filter out movies or shows they have seen. Lastly, users will be able to see a visualization of their reviews to analyze their own preferences. The running time criteria as well as our ability to include streamed shows likewise sets our application apart.

## Realness

Our data will be coming from the IMDB dataset. It contains plenty of information on a very extensive list of movies as well as television series. For movies, it contains the title, genre, film rating (ie. Pg-13), IMDB rating, runtime, the full cast, release year, movie company, director, awards, and an informative synopsis. We plan to use the majority if not all of these statistics and attributes as entities for our application to query through. The IMDB is also widely respected by critics and the general population, so it is a great source to pull information from to create our application. Much of the same information is given for television series as well with an episode guide and approximate length of each episode replacing the runtime that is given for movies. The release year along with the span that the show aired for is another attribute that could be used for more unique functions. The datasets are downloadable, so we will need to write scripts to parse through all of the data to group them into the proper entities required for our application.
[https://datasets.imdbws.com](https://datasets.imdbws.com)

## Description of Functionality 
Our data is from the IMDB database as described above. Our database will be storing information about movies and television series that will allow users to choose what they would like to see based on certain interests such as genre, actors, and rating. As shown above, we plan to have our database store the below collections:

Movies:
- movie_id
- director
- release_year
- ratings
- movie_name
- country
- genre
- actors
- length

Shows:
- movie_id
- director
- release_year
- ratings
- movie_name
- country
- genre
- actors
- length
- reviews
- Actors attributes: 
- actor_id
- actor_name
- birth_country

Reviews 
- user_id
- review_id
- rating (constrain to <= 5 stars)
- review_text

User 
- id
- first_name
- last_name
- password
	


## Basic / Complex Functions 
First, the user will be able either create an account or log in to the application. Regardless of whether the user is logged in, they will be able to search for movies depending on a wide variety of attributes.
Determine what length of shows the user prefers (how many episodes per season, for example. use SQL queries to filter out by episode count)

Users can CREATE reviews of the movies they have watched, then the application will generate recommendations of shows from specific categories that they have not watched. These reviews will be used to generate an analysis of the user’s preferences that the user can use to guide their future selections. The user can always DELETE reviews or UPDATE them to fit their needs. They will always be able to READ the previous reviews they wrote on the application.

We will have a STORED PROCEDURE for movies, where the application will loop through top rated movies and return its rating IF released after a specific year AND includes an actor specified by the user. In general, queries that could expose sensitive data should be used inside STORED PROCEDUREs We also must have a complete and functioning trigger, involving event, condition (IF statement), and action (Update, Insert or Delete), that provides useful functionality to the application. 

Our TRIGGER updates reviews so that if a new review is submitted by the user, the application checks IF the movieId and reviewerId are already existing. If the pair already exists, the TRIGGER will DELETE the existing review and INSERT the new review.


## Creative Component
We will have a visualization tool that can compare two statistics. For example, if the user wants to see how movie genres relate to ratings, they will see a bar table showing the average review for each genre. We will use an existing library to generate these visualizations.

## UI Mockup
![Image](https://github.com/cs411-alawini/fa22-cs411-A-team063-Team1234/blob/main/doc/Mockup%201.png)
![Image](https://github.com/cs411-alawini/fa22-cs411-A-team063-Team1234/blob/main/doc/Mockup%202.png)



## Project work distribution
Greg: Organizing database data into tables (Python script), Queries, Stored Procedure, Main Movie Search (using user preferences)

Isabel: Organizing database data into tables (Python script), Queries, Stored Procedure, Main Movie Search (using filters)

Kim (Jinhyuk): Frontend - React.js, Javascript, Bootstrap, Trigger and Stored Procedure

John: Backend - Java (accept requests in the backent), CRUD operations

In general, all group members will participate equally and help out wherever is needed for each milestone of the project. 



