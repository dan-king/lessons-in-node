# Lesson 6 - Static Middleware

This lesson builds on [Lesson 5](../lesson-05) where we introduced the [Handlebars](http://handlebarsjs.com) templating engine.

In this lesson we show how to use `middleware` to define a path.

Our project has a new folder `public` which contains a folder `img` where we store a Hello World image, `Hello-World.jpg`.

But instead of accessing our file with the path `.\public\img\Hello-World.jpg` we will define static middleware to the `/public` and access the `Hello-World.jpg` relative to the `\img` path.

Inside `lesson-06.js` we define the middleware as follows:

```javascript
app.use(express.static(__dirname + '/public'));
````

Then we can refer to assets in the `/public/img` folder as follows in our our `\views\home.handlebars` file:

```javascript
<img src="/img/Hello-World.png" alt="Hello World!" align="center" height="50" border="0" />
````

The dependeinces are already included in `package.json`. This means we can download the required packages with `npm`:

````bash
npm install
````

This will create the `node_modules` folder and downloads all the required files.

Launch the application and view in your browser:

````bash
node lesson-06.js
````

Browsing to [http://localhost:3000/](http://localhost:3000/) will display 

	Home Sweet Home!

along with our Hello World image.