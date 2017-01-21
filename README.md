## Create Simple Application Using Meteor - React

1. Create empty project
```bash
   meteor create images
   cd images
```

  Delete folder _client_ and _server_. Run _meteor_

```bash
   meteor
```

  Open _http://localhost:3000_ on browser to make sure empty web application is running.

2. Add simple React application  
  Create folder _client_ and add main.html file:

  ```html
  <head>
    <title>Images Bucket</title>
  </head>

  <body>
    <div>React App #1</div>
  </body>
  ```

 Open _http://localhost:3000_ on browser to view _React App #1_ displayed.  
 Add react and react-dom module.

 ```bash
 npm install --save react react-dom
 meteor
 ``` 

 Create main.jsx on _client_ folder.

 ```js
 // Import React library
import React from 'react';
import ReactDOM from 'react-dom';

 // Create a Component
 const App = () => {
     return (
         <div>
            React App #2
         </div>
     );
 };

 // Render a Component to the screen
 Meteor.startup(() => {
     ReactDOM.render(<App />, document.querySelector('.container'));
 });
 ```

 Add _<div>_ tag for display React Components to **main.html**.

 ```html
 <div class="container"></div>
 ``` 

   Open _http://localhost:3000_ on browser to view _React App #2_ displayed.