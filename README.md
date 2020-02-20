# Tut Link
- Tutorial that I followed
- https://www.positronx.io/react-mern-stack-crud-app-tutorial/

# Step 1 - Run 'create-react-app'

# Step 2 - Install 'react-bootstrap' and 'bootstrap'
    npm install -s react-bootstrap bootstrap

- Then, import the Bootstrap CSS in 'src/App.js'
    
        // Place above the 'App.css' import
        import 'bootstrap/dist/css/bootstrap.css';
        import './App.css';

# Step 3 - Creating simple React components
- Make a folder in 'src' called 'components'
- Add the following components:
    - create-student.component.js
    - edit-student.component.js
    - student-list.component.js
- Add code to the components

# Step 4 - Implement the React Router
    npm install -s react-router-dom

- Then tie the 'App' component in 'src/index.js' with the help of the '<BrowserRouter>' object

        import { BrowserRouter } from "react-router-dom";

        ReactDOM.render(
            <BrowserRouter>
                <App />
            </BrowserRouter>,
            document.getElementById("root")
        );
- BrowserRouter is used for client side routing with URL segments

# Step 5 - Include the Menu
- Use the following imports to write the JSX to be displayed...
- Add the following imports to 'src/app.js':
    
        // Importing individual react-bootstrap components
        import Nav from "react-bootstrap/Nav"
        import Navbar from "react-bootstrap/Navbar";
        import Container from "react-bootstrap/Container";
        import Row from "react-bootstrap/Row";
        import Col from "react-bootstrap/Col";

        import { BrowserRouter as Router Router, Switch, Route, Link} from "react-router-dom";

        import CreateStudent from "./components/create-student.component";
        import EditStudent from "./components/edit-student.component";
        import StudentList from "./components/student-list.component";

# Step 6 - Create React Form with React Bootstrap
- Create the form for submitting student data in the 'create-student.component.js' component

# Step 7 - Submit Forms Data in React
- Define the submit event in 'create-student.component.js'
- Create a constructor inside CreateStudent component class, set the initial state by setting the 'this.state' object
- Declare the various functions with every React form field value. When a user inserts data within the form input field, a state will be set

# Step 8 - Build a Node JS Backend
- Create a directory called 'backend' inside the React App folder.
- This will manage 'backend' services like databases, models, schemas, routes, and APIs.
- CORS (Cross-Origin Resource Sharing), gives web applications running at one origin, access to selected resources from a different origin.
- An origin is given definition via the scheme(protocol), host(domain), and port of the URL used to access it. Objects can only match when the scheme, host, and port all match.

        mkdir backend && cd backend
        // Create a sep. 'package.json' for managing the backend
        npm init
        // Install required dependencies
        npm install -s mongoose express cors

# Step 9 - Set up the MongoDB Database
- Requires MongoDB to have been installed
- Create a 'database' folder inside the backend directory
- Create a file inside database such that it resembles 'database/db.js/'

        // Declare a mongo database
        module.exports = {
            db: 'mongodb://localhost:27017/first-mern-app-db'
        };
- Locally, no username or password is required. In production, an admin must be created and the database assigned to specific user

# Step 10 - Define Mongoose Schema
- Create a schema to interact with the mongo database.
- First, create a folder called 'Models' in the 'backend' directory to store schema related files
- Create a 'Model' file called 'Student.js'

        mkdir Models && cd Models
        touch Student.js
- Then, create the Schema inside the Model file 'Student.js'

# Step 11 - CRUD the hell out of it
- Build routes (REST APIs) for CREATE, READ, UPDATE, DELETE (CRUD) using Express and Node.js.
- Make a folder called 'routes'
- Create the 'student.routes.js' file inside 'routes', this is where to define the REST APIs

        mkdir routes
        touch routes/student.route.js
- Define the routes in 'student.route.js'

# Step 12 - Configure Server.js in Node/Express.js
- Create file 'server.js' in the root of the 'backend' directory

        touch server.js
- Then configure the backend file 'backend/server.js'

## API Routes Created with Express, Mongo, and Node
- GET - http://localhost:4000/students
- POST - /students/create-student
- GET - /students/edit-student/id
- PUT - /students/update-student/id
- DELETE - /students/delete-student/id

# Use Axios with React to make HTTP requests
- Axios is a promise-based HTTP client, use for AJAX
- Axios will communicate betweent the front and backend for us
- Install axios in the main React CRUD app directory with:

        npm install -s axios
- Send the students data to the MongoDB server as an object using Axios post HTTP method
- Show the student list, 'student-list.component.js'
- Create Edit, Update, and Delete inside 'student-edit.component.js'
- Create Delete functionality inside 'StudentTableRow.js'

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
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

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
