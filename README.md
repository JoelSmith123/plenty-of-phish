# Plenty of Phish

A React-based setlist tracking and audio playing application with taper recordings of the band Phish

View live site [here](https://jarushford.github.io/plenty-of-phish/)

##

### Install/Setup Instructions 
```
git clone https://github.com/jarushford/plenty-of-phish.git

npm install 

npm start

```
### Abstract

For this project we worked in a group to make an application in React. This project was an opportunity to reinforce and solidify our Javascript fundamentals, Object Oriented Programming principles, work with large datasets, and develep sound group workflow practices. It was also an opportunity to solve problems; after all, software, at its core, is about solving problems. Our application solves the problem of the diminishing presence of the tape-trading community. The taping culture within the jam-band scene was at one point incredibly prevalent and played a huge part in why that community is the way it is today. While it has not completely gone away, monetized soundboard recording websites, and others audio providers like Spotify have changed the way the community interacts with music and technology. It's not like websites or apps haven't made taped shows freely accessible on the internet, but many of these sites are either poorly designed or have UX/UI that is lacking. Our goal was to create an application that acts as a concert/information database that includes audio, all in the spirit of how crowd-sourced music exchange once was, though still easy and pleasant to interact with. Eventually this application could be expanded to include other bands, but by starting with Phish shows from 2017, we still had a solid dataset from which to begin.

#### Technologies Used for this project 

  * The fetch API for sending/receiving our data
  * ReactJS for organizing our application into components
  * JSX for writing our component templates
  * Sass for keeping our CSS DRY

#### Project Goals 

 * Synthesize knowledge of OOP, classes, and JS fundamentals to create an application using React
 * Construct complex dataset to be used to implement array mutator and iterator methods to work with data
 * Collaborate and create (and iterate) on user stories
 * Demonstrate good GitHub collaboration and workflow within a large group
 
 
### User Stories
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
  Then I should see all of the shows at which that song was played.
    
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
  Then I should see all shows in chronological order
  
  In order to explore shows,
  When I click on 'Random',
  Then I should see a new selection of random shows

```
### Design and Layout
#### Our Wire Frames

![47395457-0f287f80-d6e4-11e8-8510-24e6c2731f90](https://user-images.githubusercontent.com/40005248/47622529-8f2b5c80-dacb-11e8-80ae-392cc019d335.png)

![47395468-194a7e00-d6e4-11e8-9919-f55865a6d5b5](https://user-images.githubusercontent.com/40005248/47622534-9fdbd280-dacb-11e8-8d6d-f8fdd61f1922.png)


#### Our Finished Design

<img width="1458" alt="screen shot 2018-10-31 at 2 02 23 pm" src="https://user-images.githubusercontent.com/40005248/47815490-1d931e80-dd16-11e8-9550-a7473629dbf5.png">

<img width="1458" alt="screen shot 2018-10-31 at 2 03 51 pm" src="https://user-images.githubusercontent.com/40005248/47815534-37346600-dd16-11e8-96e0-210b939649f6.png">

### Contributors:
  * Jamie Rushford @jarushford 
  * Loryn Mason @lorynmason
  * Joel Smith @JoelSmith123
  * Eric  Fitzsimons @ericfitzsimons451
##### DTR link: 
https://gist.github.com/jarushford/11d72227838f5cdcf2e630d33f8d9e0b
