## **Car Maintenance Tracker (REST API GraphQL/React App)**

This is a full-stack project consisting of two applications
- Back-end application; Built using Node.js/Express.js/Typescript/MongoDB/GraphQL acting as a REST API [[ Go to folder for more details ]](https://github.com/SheriffKoder/Car-Maintenance-Tracker-RESTful-Graphql/tree/main/car-maint-rest-api-graphQL) built upon my [older repo](https://github.com/SheriffKoder/phase-3/tree/main/projects/car-maint-rest-api-graphQL).
- Front-end application; Built ReactJS w/ Typescript & TailwindCSS to display UI to the users and access the REST API [[ Go to folder for more details ]](https://github.com/SheriffKoder/Car-Maintenance-Tracker-RESTful-Graphql/tree/main/car-maint--react-rest-graphql) built upon my [older repo](https://github.com/SheriffKoder/phase-3/tree/main/projects/car-maint--react-rest-graphql).
##
>**Description - [[ Live Demo ]](https://carmaint-graphql-react.vercel.app/)**

This app will help you stay on track on keeping your car well maintained.
Where you can access it on any device that has a browser.
The app allows you to add details for your car
and add multiple checkups, each with a different name, color and due date.
but not just track with a due date, also a check history and know where this check was completed and how many times.

![desktop screenshot](wallpaper1.png)
>## **How to use**
- **[ Setup your account ]**
- Sign-up or login to you your account
- Add a car to be promoted to access your profile.
- Where you can edit the car's info or delete the car (deleting will remove all checkups).
- *alternatively you can use this account [ test@email.com / pass: 1111 ]*
######
- **[ Add a checkup ]**
- Add a new checkup
- Choose the checkup title, the title's color and see how it looks before applying.
- Select the next due date and add some notes.
- Select an initial date if this checkup has been done before adding on the application for reference (optional).
- Once added, you can see how many days remaining till the next check with a color indicator (Green=far ahead, Yellow=should do it soon, Red=overdue).
######
- **[ Edit your checkups ]**
- Edit/remove added checkups.
- Once done with a checkup, mark it as completed.
######
- **[ When the checkup is completed you can ]**
- Update the checkup to add a new due date.
- Check the checkup history to view/edit/remove from previous completions.
######
- Use the navigation links, back to home to navigate through the app and the navigation bar to sign-out.

>## **How it works**
- **[ Front-end ]**
- Routing
--- if there is a no user in context, the users will will be redirected to the welcome page to login or sign-up.
--- if there is a user in context but has no car added yet, the users will will be redirected to add a car.
--- if the there is a user in context (logged in) and has a car, the users can access their profile page to edit, add, delete their car or checkups.
######
- Make the UI more mobile-like and feel more dynamic.
- Make the app UI responsive and work with large screen sizes.
- Allow checkups to have history instances and be able to manipulate these instances.
- Users can see the title's color of checkups while editing/adding.
- Display color and icon indicators to the user (car image status, checkup status, checkup completion status).
- Use the same form components when adding/editing a car or a checkup.
- Add navigation links to top and bottom of the pages.
- Compare dates to display the difference in numbers to the user.
- Save images locally.
- Save user information in react's context instead of having to use a GET request on every page.
- Authenticate requests sent to the backend with tokens.
######
- **[ Back-end ]**
- Input validation.
- Password encryption (bcrypt).
- User authentication (jwt tokens).
- local Image storage (multer).
- Be able to access and manipulate (edit/delete/complete) from the multiple checkups present in the car's *all-checks array* separately.
- Be able to manipulate a specific instance of the check history by editing or deleting from start/middle/end of the check history.

>## **How to use on your computer**
- **[ Part 1 ]**
- Clone or download the back-end app folder.
- Open the back-end folder in a new window in your IDE.
- Create a ".env" file in your root directory and add the MONGODB_URI variable.
"MONGODB_URI=mongodb+srv://username:password@cluster0.jgxkgch.mongodb.net/"
- Replace username/password/cluster values with the values you obtained from your account on MongoDB Atlas.
-  run "npm install" then "node app.js" in the terminal to start the server.
######
- **[ Part 2 ]**
- Clone or download the front-end app folder.
- Open the front-end folder in your IDE and run "npm install" then "npm run start" in the terminal.
- Add a ".env" file to the root directory with this variable, or point the value to the API's url REACT_APP_CURRENT_URL=http://localhost:8000
- Open http://localhost:3000/ in your browser then you can sign-up / sign-in and use the app functionalities.