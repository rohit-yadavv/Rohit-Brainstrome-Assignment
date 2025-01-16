# Food Menu App - Frontend Developer Assignment

Live Video Link: https://drive.google.com/file/d/1RgteuHMEMkRsbvEPt4MGJjiGhOzPap9T/view 

Live App Link: https://assignment-brainstrome.netlify.app/

## Overview

This is a Food Menu Webpage built using **React**, following a technical assignment for the role of Frontend Developer. The application allows users to filter and view food items from various areas. The app is fully responsive and mimics the design and theme of Swiggy with a clean and modern user interface.

## Features

- **Filters Section**: Allows users to filter food items by area using a dropdown with radio buttons.
- **Sorting Functionality**: Sort food items alphabetically.
- **Food Items Section**: Displays food items with images, names, and ratings. Users can click on a food item to view more details in a modal.
- **Pagination**: Allows users to navigate through food items with pagination controls.
- **Footer Section**: A footer that balances the webpage.

## Tech Stack

- **React**: Core framework used to build the app.
- **Tailwind CSS**: Used for styling the app with a responsive layout.
- **React Context API**: For state management across the app.
- **React Hooks**: Used for component states and effects.
- **MealDB API**: Used to fetch food items data. [API Documentation](https://www.themealdb.com/api.php)

## Setup Instructions

To run this project locally, follow the steps below:

### 1. Clone the repository

```bash
git clone https://github.com/your-username/FoodMenuApp-FrontendDeveloper.git
cd FoodMenuApp-FrontendDeveloper
```

### 2. Install dependencies

Run the following command to install the required dependencies:

```bash
npm install
```

### 3. Run the app locally

Start the development server:

```bash
npm start
```

This will launch the app at `http://localhost:3000`.

### 4. Build the app for production

To create a production-ready build:

```bash
npm run build
```

## Functionality Overview

- **Filter by Area**: Clicking the "Filter" tag displays a dropdown with areas that users can select. Once an area is selected and "Apply" is clicked, the food items section updates dynamically to show food items from that area.
- **Food Items Section**: Displays food items fetched from the API with the option to click on a card for more details in a modal.
- **Sorting**: Users can sort food items alphabetically by name.
- **Pagination**: Allows users to view more food items via pagination controls.

## Demo

Check out the live version of the app: [Live Demo Link](https://assignment-brainstrome.netlify.app/)

Check out the video of the live app: [Video Link](https://drive.google.com/file/d/1RgteuHMEMkRsbvEPt4MGJjiGhOzPap9T/view)

## Code Quality & Commit Messages

All commits follow clear and descriptive commit messages. The code is organized with proper component hierarchy and adheres to best practices in React development.

## Tests

Tests are written using Jest to ensure functionality works as expected.
