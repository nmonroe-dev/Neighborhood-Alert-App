# Neighborhood Alert App

A web application that allows users to report, view, and manage neighborhood safety incidents. Users can log in, search for incidents by zip code, add new incidents, and comment on existing ones. The app also provides a user settings page for updating usernames and passwords.

## Features

- **User Authentication**: Sign up, log in, and secure sessions with JSON Web Tokens (JWT).
- **Incident Management**:
  - Report new incidents with details like title, description, category, date, and zip code.
  - Search for incidents by zip code.
  - View active and resolved incidents.
  - Update the status of incidents.
  - Add and delete comments on incidents.
- **User Settings**:
  - Update username.
  - Update password.
- **Responsive Design**: Optimized for desktop and mobile devices.

## Tech Stack

### Frontend
- React
- Axios
- React Router
- CSS for styling

### Backend
- Node.js
- Express
- MongoDB (Mongoose for object modeling)
- bcrypt.js for password hashing
- JSON Web Tokens (JWT) for authentication

## Installation

1. Clone the repository:
   ```bash
   git clone <repository_url>
   cd Neighborhood-Alert-App
   ```

2. Install dependencies for both the frontend and backend:
   ```bash
   cd backend
   npm install
   cd ../frontend
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the `backend` directory with the following variables:
   ```env
   PORT=4006
   MONGO_URI=<your_mongo_connection_string>
   JWT_SECRET=<your_jwt_secret>
   ```

4. Start the development servers:
   - Backend:
     ```bash
     cd backend
     npm start
     ```
   - Frontend:
     ```bash
     cd frontend
     npm start
     ```

5. Open the app in your browser at `http://localhost:3000`.

## API Endpoints

### Authentication
- `POST /auth/signup` - Sign up a new user
- `POST /auth/login` - Log in a user

### Incidents
- `GET /incident/getIncident/:zip` - Get incidents by zip code
- `GET /incident/getIncidentById/:id` - Get a specific incident by ID
- `POST /incident/addIncident` - Add a new incident
- `PUT /incident/updateStatus/:id` - Update the status of an incident
- `POST /incident/addComment/:id` - Add a comment to an incident
- `DELETE /incident/deleteComment/:id` - Delete a comment from an incident

### User Settings
- `PUT /incident/updateUsername` - Update the username
- `PUT /incident/updatePassword` - Update the password

## Usage

1. **Sign Up**: Create an account using the signup page.
2. **Log In**: Access your account and receive a secure token.
3. **Search Incidents**: Use the search bar to find incidents by zip code.
4. **Add Incident**: Submit new incidents via the "Add Incident" page.
5. **View Details**: Click on an incident to view its details and comments.
6. **Update Profile**: Use the settings page to update your username or password.

## Folder Structure

### Frontend
```
frontend/
├── src/
│   ├── components/
│   │   ├── Sidebar.js
│   │   ├── IncidentCard.js
│   │   ├── Searchbar.js
│   ├── pages/
│   │   ├── Home.js
│   │   ├── IncidentDetails.js
│   │   ├── AddIncidentPage.js
│   │   ├── Settings.js
│   ├── styles/
│   │   ├── Sidebar.css
│   │   ├── IncidentCard.css
│   │   ├── Searchbar.css
│   │   ├── Settings.css
│   ├── App.js
```

### Backend
```
backend/
├── controllers/
│   ├── authControllers.js
│   ├── incidentControllers.js
├── models/
│   ├── Incident.js
│   ├── AuthLogin.js
├── routes/
│   ├── authRoutes.js
│   ├── incidentRoutes.js
├── config/
│   ├── db.js
├── server.js
```

## Future Improvements

- Add user profile images.
- Implement email notifications for important incidents.
- Add support for real-time updates using WebSockets.

## License

This project is licensed under the MIT License.

