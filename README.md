## Project Description

> I want to create a Sneaker Finder react app that uses this sneaker API and has a couple of components that displays different styles of sneakers. I also want to create a details page so you can click on each shoe and see all the details surrounding that specific shoe.

## Link to the API you plan to use

> API: https://thesneakerdatabase.com/api/
> Docs: https://app.swaggerhub.com/apis-docs/tg4solutions/the-sneaker-database/1.0.0#/

## Example data response you plan to use

```json
{
"id": "1b6530bd-5a4f-43a9-8f5e-fddedec36bb3",
"brand": "adidas",
"colorway": "Stone/Stone/Stone",
"gender": "men",
"name": "Stone",
"releaseDate": "2019-11-23",
"retailPrice": 200,
"shoe": "adidas Yeezy 500",
"styleId": "FW4839",
"title": "adidas Yeezy 500 Stone",
"year": 2019,
"media": {
"imageUrl": "https://images.stockx.com/images/adidas-Yeezy-500-Stone-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1606323056",
"smallImageUrl": "https://images.stockx.com/images/adidas-Yeezy-500-Stone-Product.jpg?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1606323056",
"thumbUrl": "https://images.stockx.com/images/adidas-Yeezy-500-Stone-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1606323056"
}
},
{
```

## Visual of your component hierarchy

>

- > Home.js ---------> has a welcome screen with info on the app
- > Sneakers.js ---------> has sneaker gallery of all sneakers
- > Jordans.js -------> has a list of all the jordans available with their detail info
- > Yeezys.js --------> has a list of all the yeezy available with their detail info
- > NMDs.js ---------> has a list of all the NMDs available with their detail info
- > NikeDunks.js -----> has a list of all the Nike Dunks available with their detail info
- > SneakerDetails.js -----> has a the detials of any sneaker clicked

## Wire Frames

> <img width="849" alt="Screen Shot 2021-03-09 at 5 28 12 PM" src="https://media.git.generalassemb.ly/user/33964/files/f5453700-80fc-11eb-9f93-03c4fa986ac1">

## Screenshots

> <img width="1059" alt="Screen Shot 2021-03-16 at 8 38 31 AM" src="https://media.git.generalassemb.ly/user/33964/files/193fd580-8633-11eb-8e8d-3e33378a5b9e">
> <img width="1058" alt="Screen Shot 2021-03-16 at 8 38 43 AM" src="https://media.git.generalassemb.ly/user/33964/files/193fd580-8633-11eb-9255-8d15c4b7ed22">

## User Stories

> As a user I want to be able to click through the links in the nav bar at the top and see all the shoes listed in a grid. Each link will show a different style of shoe. I want to be able to see the details of each shoe as well including retail price and potential resale value.

### MVP Goals

- > Create functioning links for each style of shoe.
- > Display a grid of shoes from the api data for each style of shoe.
- > Display name, brand, color, and image of each shoe.
- > Display the retail price and potential resale value price

### Stretch Goals

- > Create a link and route that will allow the user to click on any shoe and it will take you to a new page and display all the detail from the api about the shoe.
- > Add a go back button that links to the previous page from the extended shoe details.
- > Create filter options to allow the user to filter out shoes based on a variety of options

---

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
