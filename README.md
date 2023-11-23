# Assignment 1 - ReactJS app.

Name: Anthony Power

## Overview.

This repository contains a react app for viewing information on movies and tv shows. This app pull data from the TMDB API to populate the movies lists. This app uses node.js as a back-end JavaScript runtime environment. The app contains lists and individual details on the various shows and movies such as genre, runtime and cast.

### Features.
 
+ Added tv shows sections to view tv shows with a discover and worldwide trending section
  and relevant details relating to each show with the ability to add shows to a seperate show favourites
  list.

+ Added cast list to both movies and shows containing the actor name and character played as well as a link to view movies 	 or shows(for TV shows) they are credited in.

+ Added sections for movies and TV shows actors starred in. This is accessable from the cast list in either Movies or 
  TV Shows from the link in each actors credits section.

+ Added a similar Movies and Shows section respectively which can be accessed from a MUI button in each details page.

+ Added pagination for core pages which requires the fetch request to have an addidtional field for page number which 
  when changed calls the request for the new page. The pagination control is MUI's inbuilt pagination feature and is placed at the top left of all relevant pages.

+ Changed the review view size so it can closed by clicking outside the drawer when oppened. Previously the drawer took
  up the whole of the screen making it impossible to close.

## Setup requirements.

+ It is possible than when cloning the app that before starting the app it will look for firebase to be installed
  using the node package manager. This is due to a failed attempt to add authorization to the app. To install
  this use the following command "npm install firebase". (This step might not be necessary)

## API endpoints.

+ Discover list of shows - discover/tv
+ Trending list of shows - trending/tv (Uses worldwide tending. Can not be assigned to a specific region.)
+ TV Show details - tv/:id
+ TV Shows genres - genre/tv/list
+ TV Shows images - tv/:id/images
+ Movie credits - movie/:id/credits
+ TV Show credits - tv/:id/credits
+ TV Show reviews - tv/:id/reviews
+ Similar movies - movie/:id/similar
+ Similar shows - tv/:id/similar
+ Movies containing specified actor - discover/movie?...........&with_people=:id
+ Shows containing specified actor - person/:id/tv_credits
+ Movie genres = /genre/tv/list

## Unused Enpoints

+ Get episodes for the a show by season - done by appending the season details onto the response for the season
  specified in the query. (Could not get episodes as return method would not accept "return json.episodes.season/:seasonNum" as / is an escape character) 

## Routing.

+ /credits/:id - displays the movies credits by id.
+ /similar/:id(Movies) - displays a list of similar movies.
+ /movies/actor/:id - displays a list of movies with a specified actor.
+ /tv/discover - displays a list of tv shows
+ /tv/:id - displays details of a specified tv show
+ /tv/trending - displays a list of worldwide trending shows
+ /tv/favorite - displays a list of favourite shows selected by the user
+ /tvReviews/:id - displays a list of the reviews of a specified tv show
+ /similar/:id(TV Shows) - displays a list of similar shows.
+ /tv/actor/:id - displays a list of shows with a specified actor.