For my marathon app project I used Node.js, Mongoose, Express and EJS to make a full CRUD app .  I adhered to the MVC file structure: Models Views and Controllers. I created a model with 7 RESTful routes. My app is based on my desire to create the perfect running app. I have run in the annual marathon in my hometown of NYC every year since 2017, and in 2019 I travelled to Berlin with my training team and ran the Berlin Marathon as well, so it is a big passion of mine. I am a big fan of the Strava App, but it has always bothered me that I don’t have any dashboard with everything in one place. I wanted to create this app to work towards creating the perfect marathon app. I used an API from the popular running app Strava to embed media containing specific running routes, race routes, athlete stats and data. Although this part does not have a customizable aspect, I plan to make this part editable with a login so that viewers can personalize it with their own data. I also did not include this as an aspect because I am assuming that for now most people who view my app may not have their own strava account, so providing my own data as a demo is more efficient for my portfolio. The aspect of the app that is currently customizable is a feature for the user to add their completed workouts at the end of each week, with the ability to make notes on how they felt each day and how their workout went, as well as the ability to add the total weekly milage. This gives the user the ability to compare and contrast the tips and advice provided in the plan from coaches with how they felt, and gives the user the ability to compare the training they completed with the exact instructions for each training week, to see which weeks they could have performed better and how they are at with their progress.  The user can also delete any workouts they choose to and in this way create a more customized plan for their training.  I used Materialize “startup” framework to get my layout. I was heavily inspired by the design for the Nike marathon training plan and the New York Road Runners Training Plan. Some features I plan to add in the future is a login starting page where the user inputs their race date so that the app can generate a plan with dates and live data. I used an array of objects to present the data from the seed into calendars on the plan pages, but am considering using an api in the future to make the app more streamlined. I also want to add a feature for the user to input their average pace, so the plan can be catered towards that, or their desired finish time so that the plan can be adjusted accordingly.  I also tried to create another route for a page where the user can input their cross training and strength training, and I tried to create a route to a page where that information would be displayed in a chart. I was able to get this working when I used a bootstrap dashboard theme that had charts, but did not end up having time to fully create the routes and link every thing together so this is another goal of mine that I plan to accomplish. I used all of the labs we did using mongoose and mongo in order to make sure my syntax was correct because this is something I struggled with and hope to become more comfortable with. I then attended TA hours every day last week and with the help of Glenn and Eric, I was able to successfully execute many aspects of my projects that I found difficult.


Sources I used for inspiration and information:
Materialize Tutorial #16 - Setting up a Project - YouTube
Stackoverflow.com https://stackoverflow.com/questions/52457712/using-css-flexbox-grid-for-populating-api-data

Simple login using Mongoose / MongoDB - Node.js Tutorial 17 - YouTube
CRUD REST API using Node | Express | MongoDB - YouTube
Build a Quiz App (7) - Create and Style the End Page - YouTube
Code Explained - YouTube
Node.js With Passport Authentication | Full Project - YouTube
RESTful API From Scratch Using Node, Express and MongoDB - YouTube
Materialize Tutorial #2 - Setting Up - YouTube
Navbar - Materialize
javascript - Show images in specific grid layout: ejs - Stack Overflow
CSS Grid Layout - Basic Grid
Using CSS flexbox grid for populating API data - Stack Overflow
Mozilla.org https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage https://www.youtube.com/watch?v=1mmAF8euvBI https://www.khanacademy.org/computing/computer-programming/html-js-jquery/form-processing-jquery/pc/challenge-jquery-trivia-quiz https://developer.mozilla.org/en-US/docs/Web/HTML/Element/picture https://stackoverflow.com/questions/4464406/creating-a-quiz-with-jquery https://www.w3schools.com/jquery/jquery_quiz.asp https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images https://www.youtube.com/watch?v=no-Ntkc836w https://codeactually.com/interactivequiz.html https://www.youtube.com/watch?v=C7NsIRhoWuE
design inspiration: https://99designs.com/blog/trends/web-design-trends/ https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/11/Screen-Shot-2018-11-15-at-12.39.05-PM.png?auto=format&q=60&fit=max&w=930
bootstrap template used: https://getbootstrap.com/docs/4.0/examples/cover/
videos watched to figure out bootstrap: https://www.youtube.com/watch?v=no-Ntkc836w
csstricks.com animista.com codepen.com
books: eloquent javascript markin haverbeke javascript for kids by max wainwright jquery cheatsheet