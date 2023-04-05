## Safouane.GG

Safouane.gg is an application that tries to be like several other pages like op.gg and u.gg, it's still in development
so it's full potiental has yet to be shown but do return to this readme every now and then to catch the latest updates.
a!

![My project-1 (8)](https://user-images.githubusercontent.com/31611670/230155426-51ffcfd6-1c77-4b4a-b569-d1eab8bc1ad3.png)

# Wiki

Outdated but still some relevant code if you're curious on how I started before teh server side
transition: https://roan-anglerfish-3db.notion.site/Wiki-van-Safouane-GG-832532f851a447d39126426f8f297452 (Client side
application)

## Known bugs

- [x] Only features

~ = In development

## Things that I'm working on now that are required

- [x] Reworking the client side application to server side with Node.js & Express
- [x] Adding Empty states
- [x] Adding Loading states
- [x] Adding Fail states
- [x] Responsive design
- [x] More consistent with the UI and make it more User friendly
- [~] Autocomplete when you're looking for a summoner

| Features                                          | Progress |
|---------------------------------------------------|----------|
| Summoner search.                                  | [☑️].    
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

## The assignment

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

```text
This code above exports two functions: getAllChampionsData and getSingleChampionData. These functions are used to fetch data for a list of all champions and a single champion respectively.

The getAllChampionsData function takes in two parameters, pageSize and offset, which are used to slice the list of all champions returned by the fetchChampions() function, which is imported from the ./fetch/fetchChampions.js file. The function then maps over the sliced champions array, and for each champion, it extracts certain properties like the id, name, title, blurb, and splash image URL. The getFilteredName helper function is called to convert the champion's name into a format that can be used in the image URL. All of this data is then returned as an array of objects.

The getSingleChampionData function takes in a single parameter, id, which represents the ID of the champion to be fetched. It calls the getFilteredName helper function to convert the id into the format required by the API endpoint. It then uses fetch to make a GET request to the endpoint, passing in the filtered name as part of the URL. The returned data is then parsed as JSON, and specific properties of the champion data are extracted and returned as an object, including the id, name, title, lore, splash image URL, and spells.

This code relies on several helper functions and modules, including fetchChampions, getFilteredName, node-fetch, and the JSON object. These modules are imported at the top of the file using ES6 module syntax.
```

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
![Screenshot 2023-04-03 at 18.56.01.png](..%2F..%2F..%2FDownloads%2FScreenshot%202023-04-03%20at%2018.56.01.png)
![Screenshot 2023-04-04 at 13.36.15.png](..%2F..%2F..%2FDownloads%2FScreenshot%202023-04-04%20at%2013.36.15.png)

On the other hand the champions page had some more troubles loading, as we were loading in 163 unique champions.
![Screenshot 2023-04-06 at 00.51.02.png](..%2F..%2F..%2F..%2F..%2Fvar%2Ffolders%2Fyg%2F49psmmj57mz9slvc180rpzr00000gn%2FT%2FTemporaryItems%2FNSIRD_screencaptureui_gnJZXi%2FScreenshot%202023-04-06%20at%2000.51.02.png)
So the main focus of our optimalisation was going to be here the /champions route.
![Screenshot 2023-04-06 at 00.52.30.png](..%2F..%2F..%2F..%2F..%2Fvar%2Ffolders%2Fyg%2F49psmmj57mz9slvc180rpzr00000gn%2FT%2FTemporaryItems%2FNSIRD_screencaptureui_McVtCC%2FScreenshot%202023-04-06%20at%2000.52.30.png)
It seems google had some trouble with our application images not having explicit width and heights, but we also had a
very big problem the api only gives us one size of images. And these images are usually quite large, we don't want/need
that for our small cards. As you can see here google didn't like us having big pictures all the time
![Screenshot 2023-04-06 at 00.55.03.png](..%2F..%2F..%2F..%2F..%2Fvar%2Ffolders%2Fyg%2F49psmmj57mz9slvc180rpzr00000gn%2FT%2FTemporaryItems%2FNSIRD_screencaptureui_BEzvxU%2FScreenshot%202023-04-06%20at%2000.55.03.png)

These are the steps I took to resolve this issue.

1. I went to my teacher to ask for some guidance, he told me about the IMGIX api and that I should create an account and
   read what I can do with it.
2. Imgix had a service where you could replace the webfolder url with their endpoint so you can write query parameters
   to scale your images(more about that later) I tried it out and to my suprise it worked really easily and smooth
   ![Screenshot 2023-04-06 at 00.58.59.png](..%2F..%2F..%2F..%2F..%2Fvar%2Ffolders%2Fyg%2F49psmmj57mz9slvc180rpzr00000gn%2FT%2FTemporaryItems%2FNSIRD_screencaptureui_S1Hq0a%2FScreenshot%202023-04-06%20at%2000.58.59.png)
   ![Screenshot 2023-04-06 at 00.59.14.png](..%2F..%2F..%2F..%2F..%2Fvar%2Ffolders%2Fyg%2F49psmmj57mz9slvc180rpzr00000gn%2FT%2FTemporaryItems%2FNSIRD_screencaptureui_7nW12o%2FScreenshot%202023-04-06%20at%2000.59.14.png)
3. See the difference in the url? This discovery made me really enthuastic, so I went to see what else I could do with
   this api. But before that I changed the path of how I grabbed my splash arts from the api and now we were returning

```javascript 
splash: `https://champion-images.imgix.net/${filteredName}_0.jpg?w=580```
```

After running the test we were now on the lighthouse tool we were on a
![Screenshot 2023-04-06 at 01.03.04.png](..%2F..%2F..%2F..%2F..%2Fvar%2Ffolders%2Fyg%2F49psmmj57mz9slvc180rpzr00000gn%2FT%2FTemporaryItems%2FNSIRD_screencaptureui_AarHGK%2FScreenshot%202023-04-06%20at%2001.03.04.png)
96 score for the performance, so that was crazy good already. But how would we go to the 100

5. I went to show my teacher my progress, and after getting flamed to oblivion about the fact that I was using
   TailwindCSS it was time to look for the problem. It seems we needed to convert the images to a modern image type, so
   webp or avif. But fortuntatly this crazy api has the solution for that already look at these 2 query parameters &auto=compress&fm=webp or avif
6. I found out that with the &fm=webp I could change EVERY picture to a webp image, but my teacher told me it was smarter to use fm=auto so that the browser decided what's best for the user. And compressing simply makes the image smaller without losing resolution
7. After doing all that, and changing some meta data for example that zooming would be allowed in the application and that every page has a title google came to the conclusion to give me some beautiful fireworks:
![Screenshot 2023-04-06 at 01.06.47.png](..%2F..%2F..%2F..%2F..%2Fvar%2Ffolders%2Fyg%2F49psmmj57mz9slvc180rpzr00000gn%2FT%2FTemporaryItems%2FNSIRD_screencaptureui_vfDg5n%2FScreenshot%202023-04-06%20at%2001.06.47.png)

If you want to know more about this really cool api here's something cool to know.

To format an image to webp, you can add "&fm=webp" to the end of the URL, like this:

**[https://champion-images.imgix.net/Akshan_0.jpg?w=500&auto=compress&fm=webp](https://champion-images.imgix.net/Akshan_0.jpg?w=500&auto=compress&fm=webp)**

This will tell Imgix to convert the image to the webp format. Additionally, you might want to consider adding other parameters to further optimize the image for web delivery, such as:

- q: This parameter sets the quality of the image. For webp images, a quality value of 75 is a good balance between file size and image quality.
- dpr: This parameter sets the device pixel ratio, which can improve the image quality on high-density displays. A value of 2 or 3 is common for modern devices.

Here's an example URL with these additional parameters:

**[https://champion-images.imgix.net/Akshan_0.jpg?w=500&auto=compress&fm=webp&q=75&dpr=2](https://champion-images.imgix.net/Akshan_0.jpg?w=500&auto=compress&fm=webp&q=75&dpr=2)**

Note that the specific parameters you use may depend on the requirements of your application and the characteristics of the images you are working with.

---

[data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2730%27%20height=%2730%27/%3e](data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2730%27%20height=%2730%27/%3e)

Where can I find this?

You can find more information about the Imgix API and its parameters on the Imgix documentation website.

Here are some relevant links:

1. Imgix API reference: **[https://docs.imgix.com/apis/url](https://docs.imgix.com/apis/url)**
2. WebP format parameter: **[https://docs.imgix.com/apis/url/format/fm](https://docs.imgix.com/apis/url/format/fm)**
3. Quality parameter: **[https://docs.imgix.com/apis/url/format/q](https://docs.imgix.com/apis/url/format/q)**
4. Device pixel ratio parameter: **[https://docs.imgix.com/apis/url/dpr](https://docs.imgix.com/apis/url/dpr)**

The documentation website provides detailed explanations of all of the parameters that you can use with the Imgix API, along with code samples and best practices for optimizing image delivery. It's a great resource for learning how to make the most of the Imgix platform.

## Assets:

1. https://developer.riotgames.com/apis
2. https://developer.riotgames.com/docs/lol
3. https://raw.communitydragon.org/

## Example retrieving a champion:

1. Alle champs: http://ddragon.leagueoflegends.com/cdn/9.19.1/data/en_US/champion.json
2. 1 Champion: http://ddragon.leagueoflegends.com/cdn/9.19.1/data/en_US/champion/Aatrox.json

### - Weblink 🔗 - If you feel the need to look what I've been doing,

#### - https://goldfish-app-fkkfi.ondigitalocean.app/summoner





