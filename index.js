//express and request modules
var express = require('express');
var request = require('request');

//API credentials
var clientId = '379528101175.1295778301414';
var clientSecret = '001196b53fca4f3e81919fb8f6f53258';

//express instance
var app = express();

// port to listen to
const PORT=4390;

// Starting server
app.listen(PORT, function () {
    //Callback 
    console.log("Example app listening on port " + PORT);
});


// This route handles GET requests to root ngrok address 
app.get('/', function(req, res) {
    res.send('Ngrok is working! Path Hit: ' + req.url);
});

// This route handles get request to a /oauth endpoint. Handles logic of oAuth Slack process.
app.get('/oauth', function(req, res) {
    // Error if code query parameter is not there
    if (!req.query.code) {
        res.status(500);
        res.send({"Error": "Looks like we're not getting code."});
        console.log("Looks like we're not getting code.");
    } else {
        //GET call to Slack's `oauth.access` endpoint, passing our app's client ID, client secret, and the code received as query parameters.
        request({
            url: 'https://slack.com/api/oauth.access', //URL to hit
            qs: {code: req.query.code, client_id: clientId, client_secret: clientSecret}, //Query string data
            method: 'GET', 

        }, function (error, response, body) {
            if (error) {
                console.log(error);
            } else {
                res.json(body);

            }
        })
    }
});

// Route the endpoint that our slash command will point to and send back a simple response to indicate that ngrok is working
app.post('/requestswebteam', function(req, res) {
    res.send('slash command works');
});