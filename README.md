# Job Explorer App

A job explorer app built with React, Redux Toolkit, TypeScript, and Material-UI that allows users to filter, sort, and search for jobs using various criteria.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Running the App](#running-the-app)
- [Building for Production](#building-for-production)
- [Using the App](#using-the-app)
- [Contributing](#contributing)
- [License](#license)

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js (version 14.x or higher)
- npm or yarn package manager

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/job-explorer-app.git
   ```

2. **Navigate into the project directory:**

   ```bash
   cd job-explorer-app
   ```

3. **Install the dependencies:**

   If you are using npm:

   ```bash
   npm install
   ```

   If you are using yarn:

   ```bash
   yarn install
   ```

## Environment Variables

The app requires some environment variables to be set. Create a `.env` file in the root directory of your project and add the following:

VITE_API_KEY=your_api_key_here
VITE_API_BASE_URL=https://api.hrflow.ai/v1/

Replace your_api_key_here with your actual API key.

## Running the App

To start the development server, run:

npm run dev

this will start the app on `http://localhost:5371` or another available port if 5371 is in use.

## Building for Production

To create a production build of the app, run:

npm run build

## Using the App

Search Jobs: Use the search bar to enter keywords to search for jobs.

Filter Jobs: Use the filtering options to filter jobs by category, location, and other criteria.

Sort Jobs: Use the sorting dropdown to sort jobs by different parameters such as date posted, relevance, etc.

Drag and Drop: Drag and drop job cards to reorder them as per your preference.

Pagination: Navigate through job listings using the pagination controls.

## Contributing

Contributions are always welcome! If you'd like to contribute, please follow these steps:

Fork the repository.
Create a new branch (git checkout -b feature-branch-name).
Make your changes.
Commit your changes (git commit -m 'Add some feature').
Push to the branch (git push origin feature-branch-name).
Open a Pull Request.
