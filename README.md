# Plenty of Phish

### Abstract

A React-based setlist tracking and audio playing application with taper recordings of the band Phish

### Install/Setup Instructions 
### About the Project

For this project we worked in a group to make an application in React. This project was an opportunity to reinforce and solidify JS fundamentals, OOP, working with large datasets, and developing workflows. It was also an opportunity to solve problems after all software, at its core, is about solving problems. Our application solves the problem of taping culture slipping away. The taping culture of the jam scene was something that at one point was incredibly prevalent and played a huge part in why that community is the way it is today. It certainly hasn't gone away, but monetized soundboard recording websites, Spotify, and the like have all changed the way that community interacts with music and technology. And it's not like websites or apps haven't been made before to make taped shows freely accessible on the internet, but many of them are kind of a pain (either not very well put together or poor UI/UX). Our goal was to create an application that acts as a database of show information and audio in the spirit of how taping and music exchange once was, but that still is easy and pleasant to interact with. Eventually this application could be expanded to include many bands but start out with are using Phish shows from 2017. Which still gives us a large dataset to work with.

#### Technologies Used for this project 

  * The fetch API for sending/receiving our data
  * ReactJS for organizing our application into components
  * JSX for writing our component templates
  * Sass for keeping our CSS DRY

#### Project Goals 
#### User Stories
##### Page Load

```
As a user,
  In order to have a unique and engaging experience,
  When I navigate to the page,
  Then I should see a selection of randomly selected shows
  
```

##### Searching

```
As a user,
  In order to locate content that I'm interested in,
  
  When I search for a Song,
  Then I should see all of the shows at which that song was played,
    and I should see that song highlighted when I click on the show
    
  When I search for a Venue,
  Then I should see all of the shows that were played at that venue, if there are any
  
  When I search for a Date,
  Then I should see the show that was played on that date, if there is one

```

##### Viewing a Show

```
As a user,
  In order to see more details on a show,
  When I click on the show card,
  Then I should see an expanded view which shows all of the songs for that show
  
  In order to view a different show,
  When I click out of an expanded show,
  Then I should see the previous selection of shows again
  
```

##### Playing a Song

```
As a user,
  In order to listen to recordings of songs,
  When I click play on a song,
  Then I should hear that song play,
    and I should be able to navigate away from that page and still hear that song
  
  In order to see that songs are playing,
  When I click play on a song,
  Then I should see that the song is playing,
    and I should be able to pause/play the song

```

##### Sorting Buttons

```
As a user,
  In order to view shows in a way that makes sense,
  When I click on 'View All',
  Then I should see all shows in order of most recent
  
  In order to explore shows,
  When I click on 'Random',
  Then I should see a new selection of random shows

```
### Design and Layout
#### Our Wire Frames
#### Our Finished Design
### Contributors:
  * Jamie Rushford @jarushford 
  * Loryn Mason @lorynmason
  * Joel Smith @JoelSmith123
  * Eric  Fitzsimons @ericfitzsimons451
##### DTR link: 
https://gist.github.com/jarushford/11d72227838f5cdcf2e630d33f8d9e0b
