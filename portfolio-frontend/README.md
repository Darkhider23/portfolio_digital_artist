# 1. Clone the repository:
git clone https://github.com/your-username/portfolio-frontend.git
cd portfolio-frontend

# 2. Install dependencies:
npm install
# or
yarn install

# 3.Create a .env file at the root of your project and add the following environment variables:

REACT_APP_API_BASE_URL=http://localhost:3000

# 4. Start the development server:
npm start
# or
yarn start


# Project Structure
# The project is structured as follows:
portfolio-frontend/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── pages/
│   ├── styles/
│   ├── utils/
│   ├── App.tsx
│   ├── index.tsx
│   ├── routes.tsx
│   └── ...
├── .env
├── package.json
├── README.md
└── 
# src/assets/: Static assets like images and fonts.
# src/components/: Reusable components like buttons, forms, and cards.
# src/pages/: Page components representing different views (e.g., Home, WorkDetail).
# src/styles/: Global and component-specific styles.
# src/utils/: Utility functions and helpers.

# Environment Variables
# REACT_APP_API_BASE_URL: Base URL for the backend API. This should point to the NestJS backend server.

# Available Scripts
# In the project directory, you can run:

# npm start: Runs the app in the development mode. Open http://localhost:3000 to view it in your browser.
# npm run build: Builds the app for production to the build folder. It correctly bundles React in production mode and optimizes the build for the best performance.
# Components
# The application uses modular, reusable components. Here are some key components:

# Navbar: The navigation bar, which includes links to different sections of the portfolio.
# WorkItem: Represents an individual work item in the portfolio, with options to edit, delete, and toggle visibility.
# WorkForm: Form for adding or editing work items, including image upload functionality.
# Routing
# The application uses React Router for client-side routing. The routes are defined in src/routes.tsx. Key routes include:

# /: Home page displaying the portfolio.
# /works/add: Page for adding a new work.
# /works/edit/:id: Page for editing an existing work.
# API Integration
# API requests are handled using Axios. The base URL for the API is defined in the .env file. The axios instance is configured in the component where it's needed, and API calls are # # made to interact with the backend for operations like fetching, creating, and updating works.

# Styling
# The application uses CSS modules and global CSS for styling. The styles are organized in the src/styles/ directory, with component-specific styles located in the same directory as # their respective components.

# Troubleshooting
# Blank Screen or "Page Not Found" Errors: Ensure that the backend server is running and the REACT_APP_API_BASE_URL is correctly set.
# CORS Issues: If you're encountering CORS (Cross-Origin Resource Sharing) errors, make sure the backend has the proper CORS configuration.
# Environment Variables Not Working: Ensure your .env file is properly configured and located in the root of the project.