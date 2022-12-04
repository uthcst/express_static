const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const port = process.env.port || 4000;
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
//set a cookie
app.get('/setCookie', (req, res) => {
    res.cookie("myCookie", "myCookieValue");
    res.send(`<div>myCookie have been saved successfully</div>
          <div>Check your browser at Developer Tools - Application -
          Storage - Cookies </div>`);
});
//show the saved cookies
app.get('/getCookie', (req, res) => {
    console.log(req.cookies.myCookie);
    res.send(req.cookies.myCookie);
});
// routing for logout
app.get('/clearCookie', (req, res) => {
    res.clearCookie('myCookie');
    res.send('Cookie cleared');
})
app.use(express.static(__dirname + "/www"));
//Serves requests starting with /pictures 
app.use('/pictures', express.static(__dirname + '/www/images'));
const server = app.listen(4000, function () {
    console.log("Server listening at port " + port);
});