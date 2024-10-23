# Color of Day

**Color of Day** is a web-based application that allows users to select a date and fetch a unique color associated with that date via an API. The application also stores the history of previously selected dates and their corresponding colors using the browser's `localStorage` feature.

## Features

- **Date Selection**: Users can input a date using the HTML date picker.
- **Fetch Color**: Upon submission, the app fetches the color associated with the selected date from an external API and displays it.
- **Local Storage**: The app saves the fetched date and color combinations in `localStorage` so that the history is preserved across browser sessions.
- **Clear History**: Users can clear the stored data and refresh the display using a "Clear History" button.

## How It Works

### API Integration
When a user selects a date and submits it, the app makes an asynchronous request to an API endpoint to fetch the color associated with that date. The fetched data includes:
- `date`: The selected date.
- `hex`: A hex code representing the color.

This information is then displayed on the page, with the background color set to the fetched color value.

### LocalStorage
The app leverages the browser's `localStorage` to persist the user's previously fetched date-color combinations. Here’s how `localStorage` is used:
- When a color is fetched, the date and color information are stored in `localStorage` in JSON format.
- Upon loading or refreshing the page, the stored data is retrieved from `localStorage` and displayed.
- The user can clear the history of fetched dates and colors by clicking the "Clear History" button, which clears the `localStorage` and updates the display.

## Project Structure

- **HTML**: Basic structure of the page with a date input form and containers for displaying results.
- **CSS**: Styling for the layout, color boxes, and form elements.
- **JavaScript**: Handles the API requests, dynamic creation of HTML elements, and `localStorage` interactions.

## How to Run

1. Clone the repository:
   ```bash
   git clone https://github.com/Idenshah/colorOfDay.git
2. Open the index.html file in a web browser.
3. Select a date and click the "Select Date" button to see the color associated with that date.
4. You can clear your history by clicking the "Clear History" button.Open the index.html file in a web browser.

### Note: This project uses the Zoodinkers Color API to retrieve the color based on the selected date.

##Future Improvements
- Add validation messages for invalid date inputs.
- Improve error handling for network issues or failed API requests.
- Enhance the UI/UX design for better user experience.
  
##Technologies Used
- HTML5
- CSS3
- JavaScript (ES6)
- Fetch API
- LocalStorage
