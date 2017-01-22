## Create Simple Application Using Meteor - React

### Create empty project  
```bash
meteor create images
cd images
```  
Delete folder _client_ and _server_. Run _meteor_
```bash
meteor
```
Open _http://localhost:3000_ on browser to make sure empty web application is running.

### Add simple React application  
Create folder _client_ and add **main.html** file:
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
 Create **main.jsx** on _client_ folder.
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
 Add _div_ tag for display React Components to **main.html**.
 ```html
 <div class="container"></div>
 ``` 
 Open _http://localhost:3000_ on browser to view _React App #2_ displayed.
 
### Export React Component  
Create _components_ folder inside _client_ folder and create **image_list.jsx**.

Change **main.jsx** :
```javascript
return (
    <div>
       <ImageList />
    </div>
);
```
Change **main.html** by removing :
```html
  <div>React App #1</div>
```

### Create Image Detail and add to Components  
Create **image_list.jsx** inside _components_ folder.

Change **image_list.jsx** :
```js
import ImageDetail from './image_detail';
...
...
    return (
        <ul>
            <ImageDetail />
        </ul>
    );
``` 

### Create Dummy data
Change **image_list.jsx** :
```js
import ImageDetail from './image_detail';

const IMAGES = [
    { title: 'Pen', link: 'http://dummyimage.com/600x400' },
    { title: 'Pine Tree', link: 'http://dummyimage.com/600x400' },
    { title: 'Mug', link: 'http://dummyimage.com/600x400' }
];
...
...
const ImageList = () => {
    const RenderedImages = IMAGES.map(function() {
        return (
            <ImageDetail />
        );
    });

    return (
        <ul>
            {RenderedImages}
        </ul>
    );
};
```

### Communication with props
Change **image_list.jsx** :
```js
    const RenderedImages = IMAGES.map(function(image) {
        return (
            <ImageDetail image={image} />
        );
    });
```
Change **image_detail.jsx** :
```js
    return (
        <li>
            <img src={props.image.link} />
            {props.image.title}
        </li>
    );
```
