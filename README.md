## Safouane.GG

Safouane.gg is an application that tries to be like several other pages like op.gg and u.gg, it's still in development
so it's full potiental has yet to be shown but do return to this readme every now and then to catch the latest updates.
!

![My project-1 (8)](https://user-images.githubusercontent.com/31611670/230155426-51ffcfd6-1c77-4b4a-b569-d1eab8bc1ad3.png)

# Wiki

Outdated but still some relevant code if you're curious on how I started before teh server side
transition: https://roan-anglerfish-3db.notion.site/Wiki-van-Safouane-GG-832532f851a447d39126426f8f297452 (Client side
application)

## Known bugs

- [x] Only features

~ = In development

Some chatgpt recommendations that I'll maybe consider eventually ;) put in my application soon, because it's relevant to our next course (
real-time-web)

Live game data: Using the Spectator V4 API, you can retrieve real-time data about the current game a player is
participating in. This data can include information about the players, their champions, their items, and their overall
performance. You can display this data in your application to provide users with a real-time view of the game.

Match data updates: Using the Match V5 API, you can retrieve real-time updates about a player's match as it progresses.
This can include updates about events happening in the game, as well as updates about the player's performance. You can
use this data to provide users with real-time feedback about their performance and how they can improve.

Notification system: You can use real-time functionality to create a notification system that alerts users when certain
events happen, such as when a player they follow begins a new game or achieves a certain milestone in their performance.

## Things that I'm working on now that are required

- [x] Reworking the client side application to server side with Node.js & Express
- [x] Adding Empty states
- [x] Adding Loading states
- [x] Adding Fail states
- [x] Responsive design
- [~] More consistent with the UI and make it more User friendly
- [~] More pleasing to look at design
- [~] Autocomplete when you're looking for a summoner

| Features                                          | Progress |
|---------------------------------------------------|----------|
| Summoner search.                                  | [☑️].    |
| Summoner details.                                 | [☑️].    |
| Summoner extra mastery details with champion data | [☑️].    |
| Champion overview.                                | [☑️].    |
| Singular champion data                            | [☑️].    |
| Champion rotation                                 | [~].     |
| Ranked last games data                            | [~].     |
| Recommended builds                                | [].      |
| Live match view                                   | [].      |
| Spectate match.                                   | [].      |
| Drafting tool/simulator                           | [].      |
| Esports calendar                                  | [].      |


### Installation

```text
git clone git@github.com:SafouaneM/Safouane.GG.git
```

And you should be good to go now, do not forget to implement your own api key in the env.
You can request an api key from this url, it'll take no longer then 1 minute to generate one

### !(Do note you need a riot games account to generate a key.)!

# The assignment (Real time web) 

## PLEASE NOTE

### Testdata accounts as we assume you don't have a leauge of legends account
username: lbpfroste@gmail.com 
password: potlood1

username: daan@gmail.com
password: potlood1

username: nigel@gmail.com
password: potlood1

username: bram@gmail.com
password: potlood1

![Screenshot 2023-05-12 at 02 15 17](https://github.com/SafouaneM/Safouane.GG/assets/31611670/d0406d6b-3ead-4bf8-b72a-2b79a6e48515)

![Screenshot 2023-05-12 at 02 15 20](https://github.com/SafouaneM/Safouane.GG/assets/31611670/b51d9f39-73e0-48f6-9ac0-0bca72d89b9c)
![Screenshot 2023-05-12 at 02 15 27](https://github.com/SafouaneM/Safouane.GG/assets/31611670/b2f61191-7e6e-4182-9825-55193a2c4d68)

![Screenshot 2023-05-12 at 02 15 36](https://github.com/SafouaneM/Safouane.GG/assets/31611670/4d5a14c1-0131-41b5-95c6-df47a70401b8)
![Screenshot 2023-05-12 at 02 15 41](https://github.com/SafouaneM/Safouane.GG/assets/31611670/9211573f-d002-41c9-a0b2-516ce10f260d)
![Screenshot 2023-05-12 at 02 15 48](https://github.com/SafouaneM/Safouane.GG/assets/31611670/2eebd038-d28c-48e6-a8e4-40980edbbcad)
![Screenshot 2023-05-12 at 02 15 52](https://github.com/SafouaneM/Safouane.GG/assets/31611670/3e5c9e2d-0ed8-4712-be8d-1906cb172bb5)
![Screenshot 2023-05-12 at 02 16 16](https://github.com/SafouaneM/Safouane.GG/assets/31611670/47c17ef2-9558-46a7-b80a-13d9db0383bb)
![Screenshot 2023-05-12 at 02 16 26](https://github.com/SafouaneM/Safouane.GG/assets/31611670/44cc37f2-2e37-485c-bf1a-8dc12d053cc3)

https://github.com/SafouaneM/Safouane.GG/assets/31611670/568c0710-927f-4127-8003-b112be711fe1



## Idea that started this further development on my old application

We are going to create a way where users can register an account, after registering an account he/she will see data
about their account as the summonerName that they provided will be used for their profile data. So they can see their
top champions and some more I will implement the data display myself.

After they’ve registered I want the users to be able to access a chat feature in realtime using socket.io. As I want to
focus on learning the principles of real time web.

The first thing users can do after creating an account is move to the main menu and post a message on the homepage, this
could be anything the name that will be displayed is the summonerName they chose during registering their account. You
can like or dislike somebody’s post and see how many minutes ago somebody posted a message.

Next would be that users can create a custom chatroom with or without a password, other users can see the chatrooms and
join the chatrooms if they want. And they should be able to chat in those chatrooms with each other, they can also click
on each others profile to add them as a friend or send them a private message this still by using socket.io

After this I’d like users to have the ability to use a new feature the Match Summoner feature, here users can write a
small post with some filters on what they need in a partner be it rank elo gender etc. After they’ve written down this
post, it gets displayed in the “Match Finder” tab and if somebody thinks hey this is the parter for me they can leave a
private message or open a request to start a chatroom so they can duke it out there. It could also be that users might
want to find teams, so requests like those could have a requirement of 5 people and then the chatroom locks off from
other people stuff like that. I want to create the database management with mysql as I’m familiar with their use case.

---

## The start

We got the task to build a realtime web application, and I've decided to continue building on my application that I
started building when we started web app from scratch after that I've continued building this application in our next
project called progressive web app. There I refactored my client side application to a server side application.

I've added a new functionality in my old application that is a real time web functionality, I've decided to create a
chatroom.

This chatroom has some real time functionalities, like

| Real time features                                                | Progress |
|-------------------------------------------------------------------|----------|
| Sending messages and receiving messages in real-time.             | [☑️].    |
| Liking and disliking messages.                                    | [☑️].    |
| Receiving an offline prompt when the socket has been disconnected | [☑️].    |
| Seeing new rooms that are created in real time.                   | [~].     |
| Sending invites and accepting or declining them in real time      | [~].     |


So I've decided to implement *5* different real time web features in my application, 3 of them as we speak are finished
and 2 others are still in progress.

I'd like to explain why we're using real time features in our application and why it makes sense, and what tools we've
used.

### Why introduce real time features in our application??

It's common and recommended to separate client-side and server-side code when building a website. This keeps the code
organized and easier to understand and maintain. The server-side code runs on the server and handles tasks like handling
requests, communicating with the database, and managing connections with the user. The client-side code runs in the
user's browser and handles tasks like updating the interface and sending user input to the server.

The real-time socket.io library is often used for building chatroom applications because it enables real-time
communication between the server and the user's browser. It uses WebSockets to manage connections between the server and
the browser, allowing messages to be sent and received quickly without the need for regular HTTP requests. This results
in a smoother user experience and less lag in the chatroom application.

### Tools

I've introduced 2 new tools in our application

Socket.io library so that we use

- Socket.io
- MYSQL

## Talking about the functionalities that we've added

Sending messages and receiving messages in real-time
Liking and disliking messages.
Receiving an offline prompt when the socket has been disconnected
Viewing rooms and seeing new rooms that are created in real time.
Sending invites and accepting or declining them in real time

# Application Overview
I expanded on the gaming platform application and I've added a real-time chat and that allows users to communicate, send invites and accept or decline them in real time. It provides a dynamic and interactive environment where users can stay connected, enjoy gaming, and have conversations.

The application is built on a robust tech stack that includes Node.js for the server, MySQL for the database, and Socket.IO for real-time communication.

Features that are relevant for this class
- Real-time Messaging
- Users can send and receive messages in real-time. This is accomplished using Socket.IO, a library that facilitates real-time, bidirectional and event-based communication. When a user posts a message, it's sent to the server via a 'postMessage' event. The server then broadcasts this message to all connected clients.

```js
socket.on('postMessage', async (msgData) => {
// Handle the message...
io.emit('newMessage', { /* message data */ });
});
```
## Liking and Disliking Messages
Users can express their appreciation for messages by liking them. This is again handled in real-time using Socket.IO. When a user likes or unlikes a message, an event is sent to the server, which then updates the like count for the message in the database and broadcasts an event to update the like count on all clients.
```js
socket.on('toggleLike', async ({ postId, userId }) => {
// Handle the like...
io.emit('likeToggled', { postId: postId, userId: userId, likeCount: newLikeCount });
});
```
## Offline Prompt
The application intelligently handles network disconnects. If a user's connection drops, an offline prompt is displayed, informing them of the disconnection. This is achieved by listening to the 'disconnect' event from Socket.IO and then displaying an error message.

```js
socket.on('disconnect', () => {
console.log('Socket is disconnected');
error.textContent = 'You are disconnected';
error.style.display = 'block';
});
```

## Riot Games API Integration
Our application is integrated with the Riot Games API. This integration allows us to provide additional features to the users, such as displaying their League of Legends profile information and in-game statistics. When a user registers their summoner name on our platform, we use the Riot Games API to fetch their profile data.

```js
const fetchSummonerData = async (summonerName) => {
const response = await axios.get(`https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName}?api_key=${RIOT_API_KEY}`);
return response.data;
};
```
This function fetches the summoner data from the Riot Games API using the registered summoner name and displays it on the user's profile.

In addition, the Riot Games API also provides us with the ability to fetch and display user avatars in real-time in our chatrooms, enhancing the user experience and immersion.

## User Registration and Login
User registration and login are critical features in our application, allowing users to have personalized profiles and experiences.

During registration, users are required to provide their username, email, password, and their League of Legends summoner name. The password is hashed using a reliable hashing algorithm (bcrypt) before it's stored in the database, ensuring the security of user data.

### DO NOTE summonerName can't be verified yet as I'm applying for a product key, and then I have to apply for a RSO OAUTH key from riot games 
https://gist.github.com/Henrik-3/d6b631fb7c61821bc16b17cd347a3811 <-- Documentation

```js
const hashedPassword = await bcrypt.hash(password, 10);
```
For login, users provide their username and password. The application then verifies the provided information by comparing the hashed password in the database with the hashed version of the provided password. If they match, the user is authenticated and granted access to their account.

The application also uses session-based authentication, where a session is established once a user logs in, and the session remains active until the user logs out. This allows the server to remember the state of authentication and provide a seamless experience for the user.

Overall, these features provide a secure and personalized user experience, contributing to the overall appeal and functionality of the application.

## Room Creation and User Interaction
One of the core features of our application is the ability for users to create rooms for communication. When a user creates a room, they become the owner and can invite other users to join the room. This functionality fosters interaction and engagement among users.

When a room is created, a unique identifier is associated with it. This identifier is used to track the room and the interactions within it.

```js
app.post('/createRoom', auth, async (req, res) => {
const roomName = req.body.roomName;
const roomOwner = req.user.id;

    const result = await createRoom(roomName, roomOwner);
    res.json(result.insertId);
});
```
In the above function, we create a new room with a unique identifier (result.insertId), a name provided by the user (roomName), and the user's id (roomOwner).

The user who creates the room is automatically added to the room's member list in the database, and they can then invite other users to join the room.

The invitations are handled in real-time. When a user sends an invitation, the recipient immediately receives a notification, and they can choose to accept or decline the invite.

```js
socket.on('sendInvite', (inviteData) => {
const recipientSocket = userSockets[inviteData.recipientId];
if (recipientSocket) {
recipientSocket.emit('receiveInvite', inviteData);
}
});
```
In the above function, the sendInvite event triggers a real-time notification to the recipient user, which is handled using the socket.io library.

This real-time interaction and notification system makes the user experience smooth and engaging.

## Room Viewing
Users can view different rooms and see new rooms as they're created, all in real time. This provides a dynamic, engaging experience for users.

## Invites
Users can send, accept, and decline game invites in real time. This allows users to quickly and seamlessly set up games with others.

## Folder Structure
The project follows a clear and intuitive folder structure. Here's a brief overview:

routes/ - Contains all the route handlers for the application.
models/ - Contains the functions to interact with the api.
middlewares/ - Contains middleware functions for tasks like authentication.
database/ - Contains files related to database setup and connections.

## Database
MySQL was chosen as the database for this application due to its wide adoption, robust features, and the familiarity of the developer with it. MySQL provides a stable, reliable, and efficient solution for storing and retrieving data.

In this application, MySQL is used to store user data, message data, room data, and more, providing a solid backbone for the application's operations. The database is interacted with using SQL queries, allowing for precise, powerful data manipulation.

## Conclusion
This application showcases the power of real-time communication in creating dynamic, interactive user experiences. It demonstrates how technologies like Node.js, Socket.IO, and MySQL can be used together to build a robust, real-time chat and gaming platform.


## Data lifecycle model 
![Screenshot 2023-05-12 at 23 31 40](https://github.com/SafouaneM/Safouane.GG/assets/31611670/79ce93d2-9cfd-42a4-a0d1-e8f33b15d308)

---

# The assignment (Progressive web apps)

We got the task to rebuild our old client side application to better server side applications, using express and nodejs.
I'd like to explain the differences between client side and server side applications, and what their benefits and
limitations are.

### Client side

Client-side JavaScript applications are programs that run within a user's web browser, designed to enhance web page
functionality. They're capable of providing dynamic content updates and interactive user interfaces without requiring a
page refresh. The client-side JavaScript code runs directly in the browser, enabling real-time response to user
interactions and dynamic user interface updates.

### Server side

Server-side JavaScript applications run on a web server and handle backend operations, such as interfacing with
databases or external services. Before sending the response to the user's web browser, the server-side JavaScript code
executes on the server. As a result, server-side JavaScript applications are capable of handling tasks like
authentication, data validation, and processing large amounts of data without overloading the user's browser.

## Server side logic in Safouane.GG

The code you provided sets up a Node.js server using the Express.js library. Express.js is a popular framework for
building web applications and APIs in Node.js. The server listens on port 3000 (or the port specified in the environment
variable process.env.PORT) for incoming requests from clients.

The server side logic section of your readme appears to contain two code blocks. The first block contains the
server-side code that defines the behavior of the server when clients request certain resources. The second block
contains code that fetches data from an external API and processes it to display information about a summoner's account.

Here is an explanation of the first block of code:

```text
First, the code imports several modules that are used later in the code:
```

```javascript
import express from "express";
import {fileURLToPath} from 'url';
import path from 'path';
import {getSummonerData} from "./models/getSummonerData.js";
import {getChampionData} from './models/getChampionData.js';
import {getAllChampionsData, getSingleChampionData} from './models/getAllChampionsData.js';
```

```text
The first few lines of code set up the directory path so that the server can find and serve static files from the "public" directory:

```

```javascript
const __dirname = path.dirname(fileURLToPath(import.meta.url));
app.use(express.static('public'));
```

```text
The code then sets up a view engine, "ejs", which is used to render HTML pages:
```

```javascript
app.set("view engine", "ejs");
```

```text
The code defines several routes for the web server. For example, this route responds to requests for "/offline" by sending the "offline.html" file from the "public" directory:
```

```javascript
app.get('/offline', (req, res) => {
    res.sendFile('offline.html', {root: path.join(__dirname, 'public')});
});
```

This route responds to requests for "/summoner" by rendering the "summoner-search" page using the EJS view engine:

```javascript
app.get("/summoner", (req, res) => {
    res.render("summoner-search");
});
```

This route beneath us responds to requests for "/champions" by rendering the "champions" page using the EJS view engine.
It
retrieves data about champions using the "getAllChampionsData" function and passes it to the view:
But for this one I'd actually want to go a bit deeper as we've included pagination.

In this code, we have an endpoint that returns a paginated list of champions. The endpoint is /champions, and it accepts
a query parameter called page. If page is not provided, it defaults to 1.

We start by parsing the page query parameter as an integer, or defaulting to 1 if it's not provided. We also define the
page size to be 8 champions per page.

We calculate the offset based on the page number and page size. The offset represents the number of champions to skip
before starting to return the champions for the current page.

We then call the getAllChampionsData function with the pageSize and offset parameters to get the data for the current
page. This function returns a promise that resolves to an array of champion data objects.

We calculate the totalPages based on the total number of champions divided by the page size, rounded up to the nearest
integer.
Finally, we render the champions template and pass it the championsData, page, and totalPages variables. The champions
template is responsible for rendering the list of champions and the pagination buttons.

The pagination buttons are created using two if statements that check if the current page is greater than 1 or less than
the total number of pages. If the current page is not the first page, we show a "Previous" button that links to the
previous page. If the current page is not the last page, we show a "Next" button that links to the next page. If the
current page is the first or last page, we disable the corresponding button.

```ejs
  <% if (page > 1) { %>
      <a href="/champions?page=<%= page - 1 %>" class="btn btn-primary">Previous</a>
  <% } else { %>
      <a class="btn btn-primary disabled" href="#">Previous</a>
  <% } %>

  <!-- Next Button -->
  <% if (page < totalPages) { %>
      <a href="/champions?page=<%= page + 1 %>" class="btn btn-primary">Next</a>
  <% } else { %>
      <a class="btn btn-primary disabled" href="#">Next</a>
  <% } %>
```

```javascript
app.get("/champions", async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const pageSize = 8;
        const offset = (page - 1) * pageSize;
        const championsData = await getAllChampionsData(pageSize, offset);
        const totalPages = Math.ceil(163 / pageSize)
        res.render("champions", {
            championsData,
            page,
            totalPages
        });
    } catch (error) {
        console.error(error);
        res.status(500).send("Error retrieving champions data");
    }
});
```

This route responds to requests for "/champions/:id" by rendering the "champion-details" page using the EJS view engine.
It retrieves data about a single champion using the "getSingleChampionData" function and passes it to the view:

```javascript
app.get('/champions/:id', async (req, res) => {
    try {
        const championData = await getSingleChampionData(req.params.id);
        res.render('champion-details', {championData});
    } catch (error) {
        console.error(error);
        res.status(500).send('Error retrieving champion data');
    }
});
```

This route responds to POST requests to "/summoner" by redirecting to a URL that includes the summoner name as a
parameter:

```javascript
app.post("/summoner", (req, res) => {
    const summonerName = req.body.summonerName;
    res.redirect(`/summoner/${summonerName}?loadingState=true`);
});
```

This route responds to GET requests to "/summoner/:summonerName" by retrieving data about a summoner using the "
getSummonerData" function and rendering the "summoner-details" page using the EJS summoner-details page

```javascript
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
```

The server is started by calling the "listen" method on the "app" object, passing in the port number to listen on.

```javascript
import fetchChampions from "./fetch/fetchChampions.js";
import getFilteredName from "./helpers/getFilteredName.js";
import fetch from 'node-fetch'

export const getAllChampionsData = async (pageSize, offset) => {
    try {
        const championData = await fetchChampions();

        const champions = Object.values(championData.data).slice(offset, offset + pageSize).map(async (champion) => {
            const filteredName = getFilteredName(champion.id);

            return {
                id: champion.id,
                name: champion.name,
                title: champion.title,
                blurb: champion.blurb,
                splash: `https://champion-images.imgix.net/${filteredName}_0.jpg?w=580&auto=compress&fm=webp`,
            };
        });

        const championsData = await Promise.all(champions);

        return championsData;
    } catch (error) {
        throw new Error("Error retrieving champions data");
    }
};

export const getSingleChampionData = async (id) => {
    try {
        const filteredName = getFilteredName(id);
        const response = await fetch(`http://ddragon.leagueoflegends.com/cdn/11.20.1/data/en_US/champion/${filteredName}.json`);
        const championData = await response.json();
        return {
            id: championData.data[filteredName].id,
            name: championData.data[filteredName].name,
            title: championData.data[filteredName].title,
            lore: championData.data[filteredName].lore,
            splash: `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${filteredName}_0.jpg`,
            spells: championData.data[filteredName].spells,
        };
    } catch (error) {
        throw new Error("Error retrieving champion");
    }
}
```

This code above exports two functions: getAllChampionsData and getSingleChampionData. These functions are used to fetch
data for a list of all champions and a single champion respectively.

The getAllChampionsData function takes in two parameters, pageSize and offset, which are used to slice the list of all
champions returned by the fetchChampions() function, which is imported from the ./fetch/fetchChampions.js file. The
function then maps over the sliced champions array, and for each champion, it extracts certain properties like the id,
name, title, blurb, and splash image URL. The getFilteredName helper function is called to convert the champion's name
into a format that can be used in the image URL. All of this data is then returned as an array of objects.

The getSingleChampionData function takes in a single parameter, id, which represents the ID of the champion to be
fetched. It calls the getFilteredName helper function to convert the id into the format required by the API endpoint. It
then uses fetch to make a GET request to the endpoint, passing in the filtered name as part of the URL. The returned
data is then parsed as JSON, and specific properties of the champion data are extracted and returned as an object,
including the id, name, title, lore, splash image URL, and spells.

This code relies on several helper functions and modules, including fetchChampions, getFilteredName, node-fetch, and the
JSON object. These modules are imported at the top of the file using ES6 module syntax.

# The service worker logic in Safouane.GG and the Activity diagram

## Activity Diagram

![Screenshot 2023-04-05 at 23 37 28](https://user-images.githubusercontent.com/31611670/230217586-673ed756-38a1-44c5-98a2-0262b831b536.png)
![Screenshot 2023-04-05 at 23 37 52](https://user-images.githubusercontent.com/31611670/230217649-b3525e26-05b6-4a9c-baae-2a071092c694.png)
![Screenshot 2023-04-05 at 23 38 09](https://user-images.githubusercontent.com/31611670/230217716-45ced8d1-1f91-476c-90ef-458e12ea0c5c.png)
![Screenshot 2023-04-05 at 22 17 44](https://user-images.githubusercontent.com/31611670/230200099-d96967e5-3ad4-42b8-adfc-8be7e7b0418d.png)

## Control flow of the service worker

1. Set the value of CACHE_NAME constant to 'safouane.gg-cachingv2'.
2. Output hi to the console.
3. Add an event listener for the install event:

- Output Service worker installing... to the console.
- Open the cache specified by CACHE_NAME.
- Add the files '/main.css', '/summoner', '/champions', and '/offline' to the cache.

4. Add an event listener for the activate event:

- Output Service worker activating... to the console.

5. Add an event listener for the fetch event:

- Output [Service Worker] Fetching... to the console.
- Try to find a match for the requested resource in the cache.
- If a match is found, return the cached response.
- If a match is not found, fetch the resource from the network:
- If the request method is not GET or the request URL does not start with http, return the response from the network.
- Otherwise, put the response in the cache and return the response from the network.
- If the fetch fails, return the cached /offline page.

## Critical render path

I've enhanced the critical render path of my application for a better run time and better performance down here I'll
explain what I did to achieve a perfect score on the google lighthouse test (on desktop)

### Results and thinking process

The home page didn't really have any content on it so the result of the first scan didn't really surprise me as there
wasn't really something that could go wrong here

![Screenshot 2023-04-06 at 01 36 20](https://user-images.githubusercontent.com/31611670/230236317-1194f12e-9d97-4a5e-96ae-d2a7a9dc9c6e.png)
![Screenshot 2023-04-06 at 01 36 36](https://user-images.githubusercontent.com/31611670/230236338-bb311f83-9e3b-46fb-9502-ae23fcf84798.png)

<img width="1436" alt="Screenshot 2023-04-04 at 13 37 34" src="https://user-images.githubusercontent.com/31611670/230236398-fd829f30-ff66-4aa5-b896-3fa064ba7953.png">



On the other hand the champions page had some more troubles loading, as we were loading in 163 unique champions.

<img width="526" alt="Screenshot 2023-04-03 at 19 09 07" src="https://user-images.githubusercontent.com/31611670/230236428-909d0d12-102f-4812-89d3-34e8f8b274c5.png">


So the main focus of our optimalisation was going to be here the /champions route.

<img width="715" alt="Screenshot 2023-04-04 at 14 45 41" src="https://user-images.githubusercontent.com/31611670/230236416-bef9623d-18cc-44a4-ac70-fe396950e6c6.png">
<img width="809" alt="Screenshot 2023-04-04 at 14 46 06" src="https://user-images.githubusercontent.com/31611670/230236405-073318e6-ac99-4b1f-85ee-6fc1d144bde7.png">

It seems google had some trouble with our application images not having explicit width and heights, but we also had a
very big problem the api only gives us one size of images. And these images are usually quite large, we don't want/need
that for our small cards. As you can see here google didn't like us having big pictures all the time
<img width="692" alt="Screenshot 2023-04-04 at 15 07 14" src="https://user-images.githubusercontent.com/31611670/230236819-ebc0af9c-dd32-4ca4-8559-a28eec24b6fc.png">

These are the steps I took to resolve this issue.

1. I went to my teacher to ask for some guidance, he told me about the IMGIX api and that I should create an account and
   read what I can do with it.
2. Imgix had a service where you could replace the webfolder url with their endpoint so you can write query parameters
   to scale your images(more about that later) I tried it out and to my suprise it worked really easily and smooth
   ![Screenshot 2023-04-06 at 01 39 44](https://user-images.githubusercontent.com/31611670/230236879-a23c3211-87b7-4db2-9bb1-d158051ba52d.png)

![Screenshot 2023-04-06 at 01 40 01](https://user-images.githubusercontent.com/31611670/230236916-d70841c8-7550-4920-bba3-0c288ef3dddc.png)

3. See the difference in the url? This discovery made me really enthuastic, so I went to see what else I could do with
   this api. But before that I changed the path of how I grabbed my splash arts from the api and now we were returning

```javascript 
splash: `https://champion-images.imgix.net/${filteredName}_0.jpg?w=580```
```

After running the test we were now on the lighthouse tool we were on a

<img width="1440" alt="Screenshot 2023-04-04 at 13 38 00" src="https://user-images.githubusercontent.com/31611670/230236994-3bdf882f-b061-4d65-acf3-dc27b92be444.png">

96 score for the performance, so that was crazy good already. But how would we go to the 100

5. I went to show my teacher my progress, and after getting flamed to oblivion about the fact that I was using
   TailwindCSS it was time to look for the problem. It seems we needed to convert the images to a modern image type, so
   webp or avif. But fortuntatly this crazy api has the solution for that already look at these 2 query parameters
   &auto=compress&fm=webp or avif
6. I found out that with the &fm=webp I could change EVERY picture to a webp image, but my teacher told me it was
   smarter to use fm=auto so that the browser decided what's best for the user. And compressing simply makes the image
   smaller without losing resolution
7. After doing all that, and changing some meta data for example that zooming would be allowed in the application and
   that every page has a title google came to the conclusion to give me some beautiful fireworks:

<img width="743" alt="Screenshot 2023-04-04 at 15 15 48" src="https://user-images.githubusercontent.com/31611670/230237073-bef29a1d-b38a-42b9-9d64-569e928506da.png">
<img width="755" alt="Screenshot 2023-04-04 at 14 18 19" src="https://user-images.githubusercontent.com/31611670/230237081-7c22501d-bc64-4d39-b402-014b65fa96f0.png">


If you want to know more about this really cool api here's something cool to know.

To format an image to webp, you can add "&fm=webp" to the end of the URL, like this:

*

*[https://champion-images.imgix.net/Akshan_0.jpg?w=500&auto=compress&fm=webp](https://champion-images.imgix.net/Akshan_0.jpg?w=500&auto=compress&fm=webp)
**

This will tell Imgix to convert the image to the webp format. Additionally, you might want to consider adding other
parameters to further optimize the image for web delivery, such as:

- q: This parameter sets the quality of the image. For webp images, a quality value of 75 is a good balance between file
  size and image quality.
- dpr: This parameter sets the device pixel ratio, which can improve the image quality on high-density displays. A value
  of 2 or 3 is common for modern devices.

Here's an example URL with these additional parameters:

*

*[https://champion-images.imgix.net/Akshan_0.jpg?w=500&auto=compress&fm=webp&q=75&dpr=2](https://champion-images.imgix.net/Akshan_0.jpg?w=500&auto=compress&fm=webp&q=75&dpr=2)
**

Note that the specific parameters you use may depend on the requirements of your application and the characteristics of
the images you are working with.

---

Where can I find this?

You can find more information about the Imgix API and its parameters on the Imgix documentation website.

Here are some relevant links:

1. Imgix API reference: **[https://docs.imgix.com/apis/url](https://docs.imgix.com/apis/url)**
2. WebP format parameter: **[https://docs.imgix.com/apis/url/format/fm](https://docs.imgix.com/apis/url/format/fm)**
3. Quality parameter: **[https://docs.imgix.com/apis/url/format/q](https://docs.imgix.com/apis/url/format/q)**
4. Device pixel ratio parameter: **[https://docs.imgix.com/apis/url/dpr](https://docs.imgix.com/apis/url/dpr)**

The documentation website provides detailed explanations of all of the parameters that you can use with the Imgix API,
along with code samples and best practices for optimizing image delivery. It's a great resource for learning how to make
the most of the Imgix platform.

## Assets:

1. https://developer.riotgames.com/apis
2. https://developer.riotgames.com/docs/lol
3. https://raw.communitydragon.org/

## Example retrieving a champion:

1. Alle champs: http://ddragon.leagueoflegends.com/cdn/9.19.1/data/en_US/champion.json
2. 1 Champion: http://ddragon.leagueoflegends.com/cdn/9.19.1/data/en_US/champion/Aatrox.json

### - Weblink 🔗 - If you feel the need to look what I've been doing,

#### - https://goldfish-app-fkkfi.ondigitalocean.app/summoner





