# Frontend Application

## Overview

This Frontend Application is designed to showcase a modern, interactive user interface built with React and managed state using Redux Toolkit. It demonstrates a scalable architecture for building single-page applications (SPAs) that require real-time data management and a responsive user experience.

## Features

- **React Framework**: Utilizes React for building a dynamic and efficient user interface with a component-based architecture.
- **Redux Toolkit**: Implements Redux Toolkit for state management, offering a more efficient way to write Redux logic with less boilerplate.
- **Modular Design**: The application is structured in a modular way, making it easy to maintain and scale.
- **Responsive Layout**: Ensures a seamless user experience across various devices and screen sizes.

## Getting Started

### Prerequisites

Before you begin, ensure you have installed the latest version of:

- [Node.js and npm](https://nodejs.org/en/download/)

### Installation

Follow these steps to get your development environment set up:

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd frontend
2. **Install Dependencies**
   Navigate to the project directory and install the required dependencies:
   ```
   npm install

### Running the Application
- Start the development server
  ```
  npm run start
This command runs the app in development mode. Open http://localhost:3000 to view it in your browser. The page will reload when you make changes.

## Usage

Once the application is running, you can explore its features:

- **Interact with UI Components**: The application's responsive design adapts to your device, providing an optimal browsing experience.
- **State Management**: Redux Toolkit manages the application state, ensuring that the UI is consistent with the underlying data.
- **Persistent Storage**: The use of redux-persist library to store the data on local storage.
- #### CRUD Operations:
  *Creating a Todo*:
  You can create a Todo by entering the details.
  *Updating the Todo*:
  By clicking on the update option, the user can update the Todo which was previously created.
  *Deleting the Todo*:
  The Todo which was created can be deleted once and for all.
  *Display*:
  All the Todos which were created are displayed.
- The Todo once created stays on the user's pc even after the page is refreshed.

## Contributing

Contributions to improve the application are welcome. Please follow these steps to contribute:

1. **Fork the repository**.
2. **Create a new branch** (`git checkout -b feature/AmazingFeature`).
3. **Commit your changes** (`git commit -m 'Add some AmazingFeature'`).
4. **Push to the branch** (`git push origin feature/AmazingFeature`).
5. **Open a pull request**.
   
