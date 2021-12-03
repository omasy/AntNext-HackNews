# AntNext-HackNews
AntNext-HackNews is a nextjs typescript project that calls hacker news API to retrieve stories data, manipulate data and return an end point
This project is an assessment Autocheck Senior Backend Engineer postion

### Problems intended to solve
there's three problems this project is meant to tackle after retrieving data from the hackernews API

* Top 10 most occuring words in the titles of the last 25 stories.
* Top 10 most occurring words in the titles of the post of exactly the last week.
* Top 10 most occurring words in titles of the last 600 stories of users with at least 10.000 karma.

### Solution to problems
Using Typescript with NextJS framework under Node.js and React.js thers posts and helper classes under ./lib folder with functions to read data
from Hacker News Api with parallel calls using Axios API for react and NextJS frame.

##### Function of Classes
Posts and Helper typescript classes performs works of talking with the hackers news api to retrieve data and manipulate it to get end points

* Posts Class
  Post class contains 3 methods that manipulate hacker news api data to solves the underlying problems
  it contains 4 majors function/methods which solves individual problems imposed 
* Helper Class
  Helper class contains 11 methods that provide minor data manipulation functionalities used across the main class Posts
  
##### Posts Class Method Lists
Following is tabulated lists of posts methods

Post Method  | Method Description
------------- | -------------
public q1(obj)  | This method solves the first problem by retrieving the top 10 most occurring words in the titles of the last 25 stories
public q2(obj)  | This method solves the second problem by retrieving the top 10 most occurring words in the titles of the posts exactly the last week
public q3(obj)  | This method solves the second problem by retrieving the top 10 most occurring words in the titles of the last 600 stories of users with at least 10.000 karma
private procurr(obj)  | This a helper method set to private modifier, its works as a general call and data retrieval end point for the other 3 methods in the Posts class

