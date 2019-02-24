# Catch Hands

image of the app coming soon

summary coming soon

## User Stories

coming soon

## Wireframe and ERD

Here is a [link](https://www.lucidchart.com/invitations/accept/8a5562a2-b134-4c3d-a030-9854196c49fe) to the wireframe.

Here is a [link](https://www.lucidchart.com/invitations/accept/a9fd1264-b675-40b2-9343-40717bf91601) to the ERD.

## Technology Stack

1. Mongoose/MongoDB, Express, NodeJS

## Challenges

1. The first challenge that I faced was how do I get all the character information for Super Smash Brothers Ultimate. The game was released early in December 2018 so there wasn't an API containing general information for each character. I decided to create my own RESTFUL api for this.

2. Another issue that I ran into concerned modeling my characters model for the API and for my internal characters model. The problem is do I want to have two separate models for the same information. The main difference would be the information available, e.g. my internal characters model won't contain information for when the character debut or what series the character belongs to. The API would contain that information. The downside of having them separate would be exactly that, separate models. This would require a bit more maintenance internally. I ultimately decided to keep these models separate as they serve different purposes.