# DandG Academy

DandG Academy is an educational platform designed to provide online learning resources, including educational materials, courses, and interactive tools. The website offers a variety of features such as course catalogs, faculty details, testimonials, and more.

## Features

- **Responsive Design**: Optimized for desktop and mobile views.
- **Login & Registration**: User authentication with support for different user types (e.g., Student, Teacher).
- **Course Catalog**: A dynamic list of courses offered by the academy.
- **Faculty Details**: Information on faculty members.
- **Student Resources**: Access to educational resources and past year papers.
- **Contact Form**: Contact the academy directly for inquiries.
- **Privacy Policy and Terms**: Legal documents explaining data usage and user rights.

## Technologies Used

- **Frontend**: 
  - React.js
  - React Router (for navigation)
  - Tailwind CSS (for styling)
- **Backend**:
  - Node.js
  - Express.js
  - MongoDB (for database)
- **Authentication**:
  - JWT (JSON Web Token) for user authentication
- **Deployment**:
  - Deployed using services like Heroku, Vercel, or any similar platform (depending on your preference)
  
## Prerequisites

Before you begin, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (version >= 14)
- [npm](https://www.npmjs.com/) (or [yarn](https://yarnpkg.com/))
- [MongoDB](https://www.mongodb.com/) (or a cloud service like [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) for database)

## Getting Started

To get started with the project locally, follow the steps below:

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/dandg-academy.git
cd dandg-academy

Create a .env file at the root of the project and add the following:
REACT_APP_API_URL=http://localhost:5000 # Your backend API URL

Install the required dependencies for the frontend and backend:
cd client
npm install
cd server
npm install
cd client
npm start



