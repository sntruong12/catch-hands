# Catch Hands ![donkey kong](https://media.giphy.com/media/sJCiyM5KpSl5m/giphy.gif "catch these hands")

Super Smash Brothers Ultimate, a fighting game on the Nintendo Switch, has sold over 12 millions copies over in less than 2 months from the release date on December 6th, 2018. With a huge following, there are many gamers hungry to get better at the game. As with many fighting games, it's incredibly important to know your fighter's bread and butter moves aka COMBOS. Catch Hands is an app that provides users the ability to track fighters and add combos for the fighter. From a technical standpoint, Catch Hands is a CRUD application that follows the MVC architectural pattern. In addition, Catch Hands also provides a RESTful API for general information on all Super Smash Brothers Ultimate Fighters.

![Home Page](https://i.imgur.com/Yf5L5XN.png "Catch Hands Home Page")

![Fighters](https://i.imgur.com/EAxxF64.png "Catch Hands Fighters")

## User Stories

As a user, I want to see and index of all the Fighters from the game.

As a user, I want to add fighters to my fighters page.

As a user, I want to add combos to each fighter that I main.

As a user, I want to remove fighters that I no longer main.

## Wireframe and ERD

Here is a [link](https://www.lucidchart.com/invitations/accept/8a5562a2-b134-4c3d-a030-9854196c49fe) to the wireframe.

Here is a [link](https://www.lucidchart.com/invitations/accept/a9fd1264-b675-40b2-9343-40717bf91601) to the ERD.

![ERD](https://i.imgur.com/l6xYLbI.png "Catch Hands ERD")

## Technology Stack

1. Mongoose/MongoDB, Express, NodeJS
2. OAuth Google Authentication using PassportJS
3. UIKit for components and responsive design

## Challenges/Lessons

1. The first challenge that I faced was how do I get all the character information for Super Smash Brothers Ultimate. The game was released early in December 2018 so there wasn't an API containing general information for each character. I decided to create my own RESTFUL api for this. 

2. A problem I faced constantly throughout development was with modeling data. I finally reached the point of posting combos to each of the user's mains, I was not able to figure out how to push data into this nested array in my User model. The end goal was to get user input from a form and push it into the main combos array. After tons of googling, I decided to redo my user model As far as my research goes, I found many other people facing this issue of updating properties that were nested in 2 levels. This seemed to be an issue with Mongoose and MongoDB. In general this relational database does not seem to do well with querying nested data beyond 1 level. This ended up being a lack of knowledge issue. I overthought my approach. I just needed to map over the the mains array, push the form data, and save. 

3. Array methods are a blessing. This project provided tons of opportunities to use Array methods like .map or .filter. Specifically for any nested data, these methods really helped with finding a specifical element and manipulating it.

4. I under estimated how long some features would take. Deleting and posting information as simple as Catch Hands was took a tremendously amount of time to implement. As I reflect back on these time consuming features, I definitely should have reached out to teammates sooner than later. Both of the main road blocks were simply solved by a teammate pushing me to take a step back at and offering a different perspective. As a developer, I'll be more mindful of sharing my challenges with my teammates and putting my ego aside in order to make progress.

## Catch Hands API

The Catch Hands API provides the user with general data about Super Smash Brothers Ultimate Fighters. Response to every request is sent in JSON format. The API does not require an API key nor does it require any headers in the request.

All API access is over HTTPS or HTTP. The entry point is **__https://catch-hands.herokuapp.com__**

#### API Reference

__GET__ All Fighters

/api/fighters

Returns all the fighters.
Sample response:

[
  {
    "id": 1,
    "name": "Mario",
    "debut": 1981,
    "series": "Super Mario",
    "image_url": "https://i.imgur.com/OZfVm7l.png"
  },
  {
    "id": 2,
    "name": "Donkey Kong",
    "debut": 1981,
    "series": "Donkey Kong",
    "image_url": "https://i.imgur.com/1Iz5XD2.png"
  },
  {
    "id": 3,
    "name": "Link",
    "debut": 1986,
    "series": "The Legend of Zelda",
    "image_url": "https://i.imgur.com/F6jUcuh.png"
  }
  ...
]

__GET__ Single Fighter

/api/fighters/{id}

Returns the single fighter based on the id.
Sample response:

{
  "id": 2,
  "name": "Donkey Kong",
  "debut": 1981,
  "series": "Donkey Kong",
  "image_url": "https://i.imgur.com/1Iz5XD2.png"
}

## Unsolved Problems

+ Prevent the user from adding the same main to their fighters.

+ Hide specific links on the show fighter page for users not logged in.

## Ice Box

Below are features that will be implemented in the future:

+ Model the data for combos to categorize combos by the initial combo starter move.

+ Implement a search feature on the fighters page so the user can easily find a fighter.

+ Implement additional authentication options for the user.

+ Implement a 3 types of fighters a user can have, Main, Secondary, Pocket.

+ Create a model for Admin users. Admin users will be able to approve combos for specific fighters which would be made public to other users.

+ Build the API to contain stock image for each character and expose approved combos