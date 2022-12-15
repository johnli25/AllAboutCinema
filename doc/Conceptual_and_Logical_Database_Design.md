# Stage 2: Conceptual and Logical Database Design 
## Assumptions About the UML Diagram
- For Movies, we assume that it will contain generic attributes that most movies have, such as the genre, length, and release year. We also assume data about the actors will be available
- For Shows, we assume that they will contain attributes that most shows have, such as the name of the show, the country where it was released, and its length. Again, we assume that data about the actors will be available
- For Actors, we assume that both their name and their birth countries will be provided in the database. This information can potentially be used as an additional filter in the application.
- For Reviews, we assume that each review can be attributed to exactly one user. Each review will also have a body of text containing the review
- For Users, we assume that each user will sign up using their first and last names and secure their accounts using a password.

## Relationships and their Cardinalities
- A movie can have zero or multiple reviews. A movie can have zero to multiple actors. We made this assumption because there may be some movies that only show footage or animations with no voice-overs or voice acting.
- A show can have zero or more reviews. A show can have 1 or many actors. We made this assumption because most shows have at least one actor.
- An actor can show up in zero or multiple movies. This is because the actor may not have debuted in a published film yet. For the same reason, an actor may appear in zero or multiple shows.
- A review may be written for exactly one movie or one show. A review cannot cover multiple movies or multiple shows at the same time. Also, a review may only be written by one user.
- A user can write zero or more reviews. We assume that the user can create an account without submitting a review.

## UML Diagram
![Image](https://github.com/cs411-alawini/fa22-cs411-A-team063-Team1234/blob/main/doc/UML%20Diagram.png)

### Relational Schema
```
Movies (
	movie_id: VARCHAR(100) [PK], 
	director: VARCHAR(255), 
	release_year: DOUBLE, 
	ratings: DOUBLE, 
	movie_name: VARCHAR(255), 
	country: VARCHAR(100), 
	genre: VARCHAR(100), 
	length: DOUBLE
)

Movies_Cast (
	unique_id: DOUBLE [PK],
	movie_id: VARCHAR(100),
	actor_id: VARCHAR(100),
	FOREIGN KEY (movie_id) references Movies(movie_id) ON DELETE CASCADE,
	FOREIGN KEY (actor_Id) references Actors(actor_id) ON DELETE CASCADE
)

Shows (
	show_id: VARCHAR(100) [PK], 
	director: VARCHAR(100),
	release_year: DOUBLE, 
	ratings: DOUBLE, 
	show_name: VARCHAR(100), 
	country: VARCHAR(100), 
	genre: VARCHAR(100), 
	length: DOUBLE,
)

Shows_Cast (
	unique_id: DOUBLE [PK],
	show_id: VARCHAR(100),
	actor_id: VARCHAR(100),
	FOREIGN KEY (show_id) references Shows(show_id) ON DELETE CASCADE,
	FOREIGN KEY (actor_Id) references Actors(actor_Id) ON DELETE CASCADE
)

Actors (
	actor_Id: VARCHAR(100) [PK],
	actor_name: VARCHAR(100),
	birthYear: DOUBLE
)

Reviews (
	review_id: DOUBLE [PK],
	user_id: DOUBLE [FK to Users.user_id],
	rating: DOUBLE,
	review_text: TEXT,
	content_id: VARCHAR(100),
   	FOREIGN KEY (user_id) references Users(user_id) ON DELETE CASCADE
)

Users (
	user_id: DOUBLE [PK],
	first_name: VARCHAR(100),
	last_name: VARCHAR(100),
	password: VARCHAR(100) 
)
```

