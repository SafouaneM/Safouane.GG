## Safouane.GG

Safouane.gg is an application that tries to be like several other pages like op.gg and u.gg, it's still in development so it's full potiental has yet to be shown but do return to this readme every now and then to catch the latest updates. a!

![My project-1 (8)](https://user-images.githubusercontent.com/31611670/230155426-51ffcfd6-1c77-4b4a-b569-d1eab8bc1ad3.png)



# Wiki
Outdated but still some relevant code if you're curious on how I started before teh server side transition: https://roan-anglerfish-3db.notion.site/Wiki-van-Safouane-GG-832532f851a447d39126426f8f297452 (Client side application)

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


| Features                 | Progress    |
| -----------              | ----------- |
| Summoner search.         | [☑️].         
| Summoner details.        | [☑️].         |
| Summoner extra mastery details with champion data       | [☑️].         |
| Champion overview.       | [☑️].         |
| Singular champion data   | [☑️].         |
| Champion rotation        | [~].         |
| Ranked last games data   | [~].         |
| Recommended builds       | [].          |
| Live match view          | [].          |
| Spectate match.          | [].          |
| Drafting tool/simulator  | [].          |
| Esports calendar         | [].          |


## Activity Diagram
![Screenshot 2023-04-05 at 23 37 28](https://user-images.githubusercontent.com/31611670/230217586-673ed756-38a1-44c5-98a2-0262b831b536.png)
![Screenshot 2023-04-05 at 23 37 52](https://user-images.githubusercontent.com/31611670/230217649-b3525e26-05b6-4a9c-baae-2a071092c694.png)
![Screenshot 2023-04-05 at 23 38 09](https://user-images.githubusercontent.com/31611670/230217716-45ced8d1-1f91-476c-90ef-458e12ea0c5c.png)
![Screenshot 2023-04-05 at 22 17 44](https://user-images.githubusercontent.com/31611670/230200099-d96967e5-3ad4-42b8-adfc-8be7e7b0418d.png)

## Control flow of the service worker
1. Set the value of CACHE_NAME constant to 'safouane.gg-cachingv2'.
2. Output hi to the console.
3. Add an event listener for the install event:
-  Output Service worker installing... to the console.
-  Open the cache specified by CACHE_NAME.
-  Add the files '/main.css', '/summoner', '/champions', and '/offline' to the cache.
4. Add an event listener for the activate event:
- Output Service worker activating... to the console.
5. Add an event listener for the fetch event:
- Output [Service Worker] Fetching... to the console.
-  Try to find a match for the requested resource in the cache.
-  If a match is found, return the cached response.
-  If a match is not found, fetch the resource from the network:
-  If the request method is not GET or the request URL does not start with http, return the response from the network.
-  Otherwise, put the response in the cache and return the response from the network.
-  If the fetch fails, return the cached /offline page.



## Assets:
1. https://developer.riotgames.com/apis
2. https://developer.riotgames.com/docs/lol
3. https://raw.communitydragon.org/

## Example retrieving a champion:
1. Alle champs: http://ddragon.leagueoflegends.com/cdn/9.19.1/data/en_US/champion.json
2. 1 Champion: http://ddragon.leagueoflegends.com/cdn/9.19.1/data/en_US/champion/Aatrox.json

<!-- Add a link to your live demo in Github Pages 🌐-->
### - Weblink 🔗 - If you feel the need to look what I've been doing,
#### - https://goldfish-app-fkkfi.ondigitalocean.app/summoner


### Installation
```text
git clone git@github.com:SafouaneM/web-app-from-scratch-2223.git
```
And you should be good to go now, do not forget to implement your own api key in the api.js.
You can request an api key from this url, it'll take no longer then 1 minute to generate one
### !(Do note you need a riot games account to generate a key.)!


