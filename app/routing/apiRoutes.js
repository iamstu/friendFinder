var path = require("path");
var friends = require("../data/friends.js");


module.exports = function(app){
app.get("/api/friends", function(req, res){
    res.json(friends);
})

app.post("/api/friends", function(req, res){
    // capture user data
    var userData = req.body;
    var initDiff = null;
    var match = null;
    // get each person from friends array
    for (var i = 0; i < friends.length; i++){
        var diff = 0;
        friendData = friends[i];
        // check each choice aggainst user choice for absolute value of the difference and add to total difference
        for (var j = 0; j < friendData.choices.length; j++){
            diff += Math.abs(parseInt(userData.choices[j]) - parseInt(friendData.choices[j]));
        }
        // check if current friend being checked has a smaller difference than the previous and replace previous if it does
        if(initDiff === null || initDiff > diff){
            initDiff = diff;
            match = friendData;
        }
    }
    // send data back to html
    res.json(match);
    friends.push(userData);
})

}