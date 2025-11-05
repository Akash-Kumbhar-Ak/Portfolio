# Personal Portfolio - MERN Stack

A modern, responsive personal portfolio built with the MERN stack.

## Features

- Responsive design
- Contact form with MongoDB storage
- Project showcase
- Skills section
- Modern UI/UX

## Tech Stack

- **Frontend**: React.js
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Styling**: CSS3

## Setup Instructions

1. Install dependencies:
```bash
npm install
cd client && npm install
```

2. Set up MongoDB:
- Install MongoDB locally or use MongoDB Atlas
- Update MONGODB_URI in .env file

3. Run the application:
```bash
npm run dev
```

This will start both the backend server (port 5000) and React frontend (port 3000).

## Customization

- Update personal information in `client/src/components/Header.js`
- Add your projects in `client/src/components/Projects.js`
- Modify skills in `client/src/components/About.js`
- Customize colors and styling in CSS files

## Deployment

For production deployment:
```bash
npm run build
npm start
```