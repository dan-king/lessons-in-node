# Lesson 5

This lesson introduces the [Handlebars](http://handlebarsjs.com) templating engine for Node.

The Express package for Handlebars can be found at [https://www.npmjs.com/package/express-handlebars](https://www.npmjs.com/package/express-handlebars).

Start with the package.json from [Lesson 4](../lesson-04)

Install the Express Handlebars view engine and add add it to your package.json from the command line:

````bash
npm install --save express-handlebars
````

A shortcut to the syntax above is:

````bash
npm i -S express-handlebars
````

In addition to the text specfic to each page, the links below will also include a navigation header and copyright footer.

Browsing to [http://localhost:3000/](http://localhost:3000/) will display 

	Home Sweet Home!

Broswing to [http://localhost:3000/about](http://localhost:3000/about) will display 

	This is the about page.

Browsing to any other page, such as [http://localhost:3000/bogus](http://localhost:3000/bogus), will display 

	404 - Not Found
