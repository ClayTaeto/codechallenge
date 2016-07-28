# Code Challenge
This project is an interface for the movie db api to display search results in a responsive photogrid. It's built on react & flux with babel and a bootswatch theme. I also make use of several es6 features. All animations are css based and I make use of flexbox in the photogrid for a responsive layout. 

This page is also has good accessibility. Users are able to navigate through by keyboard only and is coherent for users utilizing a screen reader. 
[TODO: post a video using a screen reader]


# Demo

You can test a fully working live demo at http://fivefive-web.appspot.com/

# Usage

The project is built with npm and webpack so getting it up and running is pretty easy. 
Make sure you have npm installed and run this script to download all the dependancies

    npm install 


To quickly serve the files locally you can run the webpack server, which supports live reload

    npm run dev

For production builds you can run this command to get an optimized builds. It really makes a difference.

    npm run prod

# Details 

The project's features are strongly decoupled and reusable. Less files are located next to the components they affect. That way I don't have to have single "master" filed with @import because components import the styles directly.

Files are grouped by concept rather than extension for a few reasons. Development is way easier and quicker because it's in the same place. Sharing features between projects will require less hunting for files and result in less dead code. Testing becomes easier too since you can slide in a folder to handle tests in it's component folder. 

The search bar is a good example. It doesn't have any code regarding which api it hits. It just dispatches that it has recieved a query and the components that display and consume the api will handle it. Another important thing to note is that MovieList component doesn't handle paging or consuming the api. It'll just keep requesting additional data and it's up to movieService to decide to fire off the api or not.

This code challenge should load in less then 1s.

I didn't have time to make search results fade in one by one. Another thing I wanted to do was change the url depending on the query, that way you could use history to go back to previous search results. I wanted to make a wrapper for the api and a config file to store it's key. I also planned to extend bootstrap to handle 4k screens. right now the responsiveness goes up to 1080 because I'm using bootstrap containers. 
