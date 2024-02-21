# Frontend Mentor - Advice generator app solution

This is a solution to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db).
This project is a simple web application that displays random pieces of advice to the user. It uses the Advice Slip JSON API to fetch and display a new piece of advice each time the user clicks a button.

### Screenshot

![](./design/active-states.jpg)

### Links

- Live Site URL: [https://mariam-mantidze.github.io/Advice-generator-app/];

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Generate a new piece of advice by clicking the dice icon

## Features

- **Random Advice**: Displays a random piece of advice from the Advice Slip API.
- **Refresh Button**: Allows the user to fetch a new piece of advice by clicking a button.

## Technologies Used

- **HTML**: Structures the content of the application.
- **CSS**: Styles the application to make it visually appealing.
- **JavaScript**: Fetches data from the API and updates the DOM with the new advice.

### Built with

- Flexbox
- Mobile-first workflow

## How It Works

The application consists of an HTML page with a display area for the advice and a button to generate new advice. When the user clicks the button, the application makes a request to the Advice Slip API, retrieves a random piece of advice, and displays it on the page.

### Fetching and Displaying Advice

The main functionality is handled by the `getAdvice` function in JavaScript:

```javascript
async function getAdvice() {
  try {
    const data = await fetch("https://api.adviceslip.com/advice");
    if (!data.ok) throw new Error("Failed to fetch data");
    const response = await data.json();

    const id = response.slip.id;
    const advice = response.slip.advice;

    adviceId.textContent = `#${id}`;
    quote.textContent = `"${advice}"`;
  } catch (error) {
    console.log(error.message);
  }
}
```
