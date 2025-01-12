# Zquery Template
This is the `official` zquery template!

## Instalation
using [degit](https://www.npmjs.com/package/degit) *`the only way for now`*
```bash
npm i degit -g # if you dont have degit installed!
degit github.com/ItzCyzmiX/zquery zqApp
# you can ignore the 'zqApp' if you want to create the project on the cwd
```

## Serving
To serve the base template localy use
```bash
cd zqApp # if it's not in the cwd

npm i # to install all dependencies 
npm i nodemon -g # install nodemon globally for hot-reloading
# open two terminal session one for client and one for the server #

# in client terminal run
npm run client
# and in the server terminal run
npm run server 
```
then go to https://localhost:6969 **HOW FUNNY RIGHT??** to see your app running!

# Docs
## Simple element retreiving 
Suppose we have this simple html page:
```html

<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>

        <h1 class='class'></h1>
        <h1 id='id'></h1>
        <h1 name='name'></h1>
        <h1></h1>
        
        <script src='./index.js'></script> <!-- our zquery generated script -->
    </body>
</html>
```
we can use zquery to retreive every element with the speed of light!!!
```js
&('h1.class') // returns the first h1 with the class 'class'
&('h1.class!') // returns a list of all h1s with the class 'class

&('h1#id') // returns the first h1 with the id 'id'

&('h1%name') // returns the first h1 with the name 'name'
&('h1%name!') // returns a list of all h1s with the name 'name'

&('h1') // returns the first h1 of the page
&('h1!') // returns all the h1s of the page 
```
## Routing
zquery uses [express](https://www.npmjs.com/package/express) for all server related stuff
### Creating a route
**NOTE: ONLY SIMPLE *`non dynamic`* ROUTES ARE CURRENTLY SUPPORTED!**

Create a folder in the app/routes directory and name it the name of your route, and add a `index.html` and a `index.zq` file to it 
```
- app
-> routes
 -> about
    - index.html
    - index.zq

```
now if you navigate to `/about` you will see the content of `app/routes/about/index.html`
### Api Endpoints
to make api requests to the server we will use `zFetch` a special fetch function that links the client to the server

in the Server:
```js
/*  app/server/server.zq */
const app = require('./../../src/server')()

app.on('GET /', (req, res) => {
    res.json({
        hello: 'world'
    })
})

``` 
in the Client:
```js
/*  app/routes/index.zq */
&('button').onclick = () => {
    const res = await zFetch('GET /') 
    console.log(res) // { hello: 'world' }
}
``` 
post api endpoint: 
```js
zFetch('POST /', {
    hello: 'hello' // this js object is the body of the post request
})
```
